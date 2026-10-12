import React, { useEffect, useState } from 'react';
import {
  Trash2,
  Search,
  Loader2,
  Calendar,
  Mail,
  Phone,
  GraduationCap,
  X,
  KeyRound,
  ShieldCheck,
  AlertCircle,
  Clock,
  Layers,
  UserCheck,
  RefreshCw
} from 'lucide-react';
import api from '../api/axios.js';
import { PublisherNavbar } from '../components/PublisherNavbar.js';
import { useToast } from '../context/ToastContext.js';

interface BookingItem {
  id: string;
  createdAt: string;
  parentName: string;
  studentName: string;
  studentGrade: string;
  subjectInterest: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  timezone?: string;
  notes?: string;
  status?: string;
}

export const PublisherDashboardPage: React.FC = () => {
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  // Password Modal
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [updatingPassword, setUpdatingPassword] = useState(false);

  const { showToast } = useToast();

  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const res = await api.get<{ bookings: BookingItem[] }>('/bookings');
      setBookings(res.data.bookings || []);
    } catch (err) {
      showToast((err as Error).message || 'Failed to load bookings', 'error');
    } finally {
      setLoadingBookings(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDeleteBooking = async (id: string, studentName: string) => {
    if (!window.confirm(`Delete booking record for student "${studentName}"?`)) return;
    try {
      await api.delete(`/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      showToast(`Booking for "${studentName}" removed!`, 'success');
    } catch (err) {
      showToast((err as Error).message || 'Failed to delete booking', 'error');
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    if (newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters long.');
      return;
    }

    setUpdatingPassword(true);
    try {
      await api.put('/auth/password', { currentPassword, newPassword });
      showToast('Publisher password successfully updated!', 'success');
      setShowPasswordModal(false);
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      setPasswordError((err as Error).message || 'Failed to update password');
    } finally {
      setUpdatingPassword(false);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      b.studentName.toLowerCase().includes(q) ||
      b.parentName.toLowerCase().includes(q) ||
      b.studentGrade.toLowerCase().includes(q) ||
      b.subjectInterest.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q) ||
      b.phone.toLowerCase().includes(q) ||
      (b.notes && b.notes.toLowerCase().includes(q))
    );
  });

  const confirmedCount = bookings.filter((b) => b.status === 'Confirmed' || !b.status).length;

  return (
    <div className="min-h-screen flex flex-col bg-surfaceLight dark:bg-[#090d12] transition-colors">
      <PublisherNavbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full">
        {/* Top Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight font-sans flex items-center gap-3">
              <span>Trial Class Bookings Dashboard</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Review and manage 1-on-1 coding trial class bookings, parent inquiries, and security.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={fetchBookings}
              className="px-3.5 py-2.5 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
              title="Refresh bookings list"
            >
              <RefreshCw size={14} className={loadingBookings ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>

            <button
              onClick={() => setShowPasswordModal(true)}
              className="px-4 py-2.5 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <KeyRound size={15} />
              <span>Security &amp; Password</span>
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Bookings</span>
              <Calendar size={18} className="text-brand-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 font-sans">
              {bookings.length}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Confirmed</span>
              <UserCheck size={18} className="text-emerald-500" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2 font-sans">
              {confirmedCount}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Grade Range</span>
              <GraduationCap size={18} className="text-brand-500" />
            </div>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mt-2 font-sans">
              Grades 1 – 12
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 p-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800">
          <div className="flex items-center gap-2 px-2">
            <Calendar size={16} className="text-brand-600" />
            <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">
              Trial Class Bookings ({filteredBookings.length})
            </span>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              placeholder="Search student, parent, grade, phone..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Bookings List */}
        {loadingBookings ? (
          <div className="py-24 text-center">
            <Loader2 className="w-8 h-8 text-brand-600 animate-spin mx-auto mb-3" />
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Loading Bookings...</p>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="py-20 text-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
            <Calendar size={40} className="mx-auto text-gray-300 dark:text-gray-700 mb-3" />
            <h3 className="text-base font-bold text-gray-900 dark:text-white">
              {searchFilter ? 'No matching bookings found' : 'No trial class bookings yet'}
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              {searchFilter
                ? 'Try adjusting your search keywords to find the desired trial class inquiry.'
                : 'When parents book a 1-on-1 trial class through the website booking form, their request will appear here with full student and contact details.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((b) => (
              <div
                key={b.id}
                className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                      {b.status || 'Confirmed'}
                    </span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1">
                      <GraduationCap size={14} className="text-brand-600" />
                      Student: {b.studentName} ({b.studentGrade})
                    </span>
                    <span className="text-xs text-gray-400">· Parent: {b.parentName}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300 pt-1">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-gray-400 shrink-0" />
                      <span>Slot: {b.preferredDate} at {b.preferredTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers size={13} className="text-gray-400 shrink-0" />
                      <span>Subject: {b.subjectInterest}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={13} className="text-gray-400 shrink-0" />
                      <a href={`mailto:${b.email}`} className="hover:underline text-brand-600 dark:text-brand-400">{b.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-gray-400 shrink-0" />
                      <a href={`tel:${b.phone}`} className="hover:underline">{b.phone}</a>
                    </div>
                  </div>

                  {b.notes && (
                    <p className="text-xs text-gray-500 italic bg-gray-50 dark:bg-gray-800/60 p-2 rounded-lg">
                      &ldquo;{b.notes}&rdquo;
                    </p>
                  )}
                </div>

                <div className="shrink-0 self-end md:self-center">
                  <button
                    onClick={() => handleDeleteBooking(b.id, b.studentName)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                    title="Delete booking record"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-800 relative">
            <button
              onClick={() => setShowPasswordModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
              Update Publisher Password
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-5">
              Securely change your account password. It will be encrypted with bcrypt (12 salt rounds).
            </p>

            {passwordError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs flex items-center gap-2">
                <AlertCircle size={15} className="shrink-0 text-red-500" />
                <span>{passwordError}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white outline-none focus:border-brand-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1">
                  New Password (min 8 characters)
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new strong password"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white outline-none focus:border-brand-600"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updatingPassword}
                  className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {updatingPassword ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Updating...</span>
                    </>
                  ) : (
                    <span>Save Password</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
