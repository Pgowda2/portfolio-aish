import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

/**
 * Strips HTML tags, script blocks, and dangerous javascript: URIs from plain text input
 */
export function sanitizePlainText(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/javascript:/gi, '')
    .trim();
}

/**
 * Sanitizes rich HTML content for blog posts, stripping malicious executable tags and attributes
 */
export function sanitizeHtmlContent(html: string): string {
  if (typeof html !== 'string') return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/on\w+\s*=\s*[^>\s]+/gi, '')
    .replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"')
    .replace(/src\s*=\s*["']javascript:[^"']*["']/gi, 'src="#"');
}

export const loginSchema = z.object({
  email: z.string().trim().email('Valid email address is required').max(100),
  password: z.string().min(6, 'Password must be at least 6 characters').max(128),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string()
    .min(8, 'New password must be at least 8 characters')
    .max(128, 'Password cannot exceed 128 characters'),
});

export const postSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters').max(200, 'Title too long').transform(sanitizePlainText),
  slug: z.string().min(2).max(200).optional(),
  content: z.string().min(5, 'Post content must be at least 5 characters').transform(sanitizeHtmlContent),
  excerpt: z.string().max(500, 'Excerpt must be under 500 characters').optional().default('').transform(sanitizePlainText),
  coverImage: z.string().max(1000).optional().default(''),
  tags: z.array(z.string().transform(sanitizePlainText)).optional().default([]),
  category: z.string().min(1, 'Category is required').max(100).default('General').transform(sanitizePlainText),
  status: z.enum(['draft', 'published']).default('published'),
});

export const bookingSchema = z.object({
  parentName: z.string().min(2, 'Parent name must be at least 2 characters').max(100).transform(sanitizePlainText),
  studentName: z.string().min(2, 'Student name must be at least 2 characters').max(100).transform(sanitizePlainText),
  studentGrade: z.string().max(50).default('Grades 5–8').transform(sanitizePlainText),
  subjectInterest: z.string().max(100).default('Python & Algorithmic Logic').transform(sanitizePlainText),
  email: z.string().trim().email('Valid email address is required').max(100),
  phone: z.string().min(6, 'Valid phone number is required').max(30).transform(sanitizePlainText),
  preferredDate: z.string().max(30).default('').transform(sanitizePlainText),
  preferredTime: z.string().max(50).default('04:00 PM - 05:00 PM').transform(sanitizePlainText),
  timezone: z.string().max(50).default('IST (UTC+5:30)').transform(sanitizePlainText),
  notes: z.string().max(1000).optional().default('').transform(sanitizePlainText),
});

export function validateBody(schema: z.ZodSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const issues = (err as ZodError).issues.map(e => e.message);
        return res.status(400).json({ error: issues.join(', ') });
      }
      return res.status(400).json({ error: 'Invalid request payload' });
    }
  };
}

