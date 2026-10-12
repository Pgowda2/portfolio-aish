import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { createServer as createViteServer } from 'vite';

import { connectDB } from './server/db.js';
import { seedDatabase } from './server/seed.js';
import authRoutes from './server/routes/auth.js';
import postRoutes from './server/routes/posts.js';
import bookingsRoutes from './server/routes/bookings.js';

const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();

  // Trust reverse proxy (Cloud Run, load balancers, dev proxies)
  app.set('trust proxy', 1);

  // Connect to database and seed publisher & posts
  await connectDB();
  await seedDatabase();

  // Turn off server identification header
  app.disable('x-powered-by');

  // Security Headers (Helmet)
  app.use(
    helmet({
      contentSecurityPolicy: false, // Required for Vite SPA runtime, React refresh preamble, Tailwind CDN, and web workers
      crossOriginEmbedderPolicy: false,
      crossOriginOpenerPolicy: false,
      crossOriginResourcePolicy: false,
      xFrameOptions: false, // Required to allow embedding inside Google AI Studio preview iframe
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
    })
  );

  // Additional security headers (Permissions-Policy & X-Content-Type-Options)
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), payment=()');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });

  // Strict Protection against Exposed Files
  // Immediately block any request targeting internal backend or sensitive files
  app.use((req: Request, res: Response, next: NextFunction) => {
    const cleanUrl = (req.path || '').toLowerCase();

    // Block backend server code, database stores, environment files, and credentials
    const isSensitive =
      (cleanUrl.startsWith('/data/') && (cleanUrl.endsWith('.json') || !cleanUrl.includes('.'))) ||
      cleanUrl === '/data' ||
      cleanUrl === '/data/' ||
      cleanUrl.startsWith('/server/') ||
      cleanUrl === '/server.ts' ||
      cleanUrl.startsWith('/.env') ||
      cleanUrl.startsWith('/.git') ||
      cleanUrl === '/package.json' ||
      cleanUrl === '/package-lock.json' ||
      cleanUrl === '/bun.lock' ||
      cleanUrl === '/tsconfig.json' ||
      cleanUrl.endsWith('.env') ||
      cleanUrl.endsWith('.log') ||
      cleanUrl.endsWith('.lock') ||
      cleanUrl.endsWith('.key') ||
      cleanUrl.endsWith('.pem');

    // Block sensitive internal files with 403 Forbidden
    if (isSensitive) {
      return res.status(403).json({ error: 'Access forbidden: Protected system resource' });
    }

    next();
  });

  // CORS Configuration - Supports AI Studio preview iframe, Cloud Run hosts, and client tools
  app.use(
    cors({
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  app.use(cookieParser());
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));

  // Rate Limiting Definitions
  // 1. General API limiter
  const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 150,
    message: { error: 'Too many requests. Please slow down.' },
    standardHeaders: true,
    legacyHeaders: false,
    validate: false,
  });
  app.use('/api', generalLimiter);

  // 2. Strict limiter on auth login endpoint (prevent brute force)
  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 8,
    message: { error: 'Too many login attempts. Please try again in 15 minutes.' },
    standardHeaders: true,
    legacyHeaders: false,
    validate: false,
  });
  app.use('/api/auth/login', loginLimiter);

  // 3. Strict limiter on trial bookings (prevent spam)
  const bookingLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 15,
    message: { error: 'Too many booking requests from this network. Please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
    validate: false,
  });
  app.use('/api/bookings', bookingLimiter);

  // API Routes
  app.use('/api/auth', authRoutes);
  app.use('/api', postRoutes);
  app.use('/api', bookingsRoutes);

  // Health check (minimal, non-revealing)
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      time: new Date().toISOString(),
    });
  });

  // Central Error Handler to Turn Off Debug Leaks
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // Log privately on server without dumping to response
    console.error('Handled application error:', err?.message || err);
    if (res.headersSent) {
      return next(err);
    }
    return res.status(err.status || 500).json({
      error: isProd ? 'Internal Server Error' : err.message || 'Internal Server Error',
    });
  });

  // Vite Middleware for SPA Frontend
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Express v5 wildcard route
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[OK] Secure Application Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup error:', err);
  process.exit(1);
});

