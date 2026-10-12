import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { requirePublisherAuth, AuthRequest } from '../middleware/auth.js';
import { validateBody, bookingSchema } from '../middleware/validation.js';

const router = Router();
const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

function getStoredBookings(): any[] {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading bookings file:', err);
  }
  return [];
}

function saveBookings(bookings: any[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
    }
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), { encoding: 'utf-8', mode: 0o600 });
  } catch (err) {
    console.error('Error saving bookings file:', err);
  }
}

// POST /api/bookings - Book a 1-on-1 trial class (Public with strict sanitization & rate limiting)
router.post('/bookings', validateBody(bookingSchema), async (req: Request, res: Response) => {
  try {
    const {
      parentName,
      studentName,
      studentGrade,
      subjectInterest,
      email,
      phone,
      preferredDate,
      preferredTime,
      timezone,
      notes,
    } = req.body;

    const newBooking = {
      id: `booking-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      parentName,
      studentName,
      studentGrade,
      subjectInterest,
      email: email.toLowerCase().trim(),
      phone,
      preferredDate,
      preferredTime,
      timezone,
      notes,
      status: 'confirmed',
      notificationSentTo: ['aishwaryagowda227@gmail.com', email.toLowerCase().trim()],
    };

    const bookings = getStoredBookings();
    bookings.unshift(newBooking);
    saveBookings(bookings);

    res.status(201).json({
      success: true,
      message: 'Trial class booking recorded successfully.',
      booking: {
        id: newBooking.id,
        createdAt: newBooking.createdAt,
        studentName: newBooking.studentName,
        preferredDate: newBooking.preferredDate,
        preferredTime: newBooking.preferredTime,
      },
    });
  } catch (err: any) {
    console.error('Booking processing error:', err);
    res.status(500).json({ error: 'Failed to process trial class booking.' });
  }
});

// GET /api/bookings - Retrieve bookings list (Strictly protected: Publisher only!)
router.get('/bookings', requirePublisherAuth, (req: AuthRequest, res: Response) => {
  try {
    const bookings = getStoredBookings();
    res.json({ bookings, count: bookings.length });
  } catch (err: any) {
    console.error('Failed to load bookings:', err);
    res.status(500).json({ error: 'Failed to load bookings.' });
  }
});

// DELETE /api/bookings/:id - Delete / Archive a booking (Strictly protected: Publisher only!)
router.delete('/bookings/:id', requirePublisherAuth, (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const bookings = getStoredBookings();
    const initialLen = bookings.length;
    const filtered = bookings.filter((b) => b.id !== id);

    if (filtered.length === initialLen) {
      return res.status(404).json({ error: 'Booking not found.' });
    }

    saveBookings(filtered);
    res.json({ success: true, message: 'Booking removed successfully.', id });
  } catch (err: any) {
    console.error('Delete booking error:', err);
    res.status(500).json({ error: 'Failed to delete booking.' });
  }
});

export default router;

