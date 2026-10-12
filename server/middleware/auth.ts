import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// In production, require at least 32 characters or use strong runtime secret
const runtimeFallbackSecret = crypto.randomBytes(32).toString('hex');
export const JWT_SECRET = process.env.JWT_SECRET && process.env.JWT_SECRET.length >= 16
  ? process.env.JWT_SECRET
  : runtimeFallbackSecret;

export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  role: 'publisher';
}

export interface AuthRequest extends Request {
  user?: AuthenticatedUser;
}

export function extractToken(req: Request): string | null {
  // 1. Check httpOnly cookie
  if (req.cookies?.token) {
    return req.cookies.token;
  }
  // 2. Check Authorization: Bearer <token> header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7).trim();
  }
  return null;
}

export function requirePublisherAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ error: 'Authentication required. No session or token found.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthenticatedUser;
    if (!decoded || decoded.role !== 'publisher') {
      return res.status(403).json({ error: 'Forbidden. Verified publisher access required.' });
    }
    req.user = decoded;
    next();
  } catch {
    // Clear invalid session cookie if present
    if (req.cookies?.token) {
      res.clearCookie('token', { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
    }
    return res.status(401).json({ error: 'Session expired or invalid. Please sign in again.' });
  }
}

