import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, Eye, EyeOff, KeyRound, AlertCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { useToast } from '../context/ToastContext.js';

export const PublisherLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { user, login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/publisher/dashboard';

  useEffect(() => {
    if (user && user.role === 'publisher') {
      navigate('/publisher/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError('Please provide both email address and password.');
      return;
    }

    setLoading(true);

    try {
      const res = await login(email.trim(), password);
      if (res.success) {
        showToast('Publisher authenticated successfully!');
        navigate(from, { replace: true });
      } else {
        setError(res.error || 'Invalid credentials. Access restricted to verified publishers.');
      }
    } catch (err) {
      setError((err as Error).message || 'Authentication failed. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-surfaceLight dark:bg-[#090d12] transition-colors">
      
      {/* Return link */}
      <div className="w-full max-w-md mb-6">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to publication
        </button>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200/90 dark:border-gray-800 relative">
        
        {/* Header Icon */}
        <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
          <ShieldCheck size={26} />
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight font-sans">
          Publisher Studio
        </h1>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed font-sans">
          Restricted access. Sign in to write, upload, and manage published articles and bookings.
        </p>

        {/* Error Alert */}
        {error && (
          <div className="mt-5 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-xs flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
              Publisher Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs text-gray-900 dark:text-white focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-xl bg-gray-900 dark:bg-brand-600 hover:bg-brand-600 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            id="publisher-submit-btn"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <KeyRound size={15} />
            )}
            <span>{loading ? 'Authenticating...' : 'Sign In as Publisher'}</span>
          </button>
        </form>

      </div>
    </div>
  );
};

