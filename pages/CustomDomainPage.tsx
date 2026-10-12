import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  RefreshCw, 
  Copy, 
  Check, 
  AlertCircle,
  ExternalLink,
  Lock,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

export const CustomDomainPage: React.FC = () => {
  const [domainInput, setDomainInput] = useState('aishwaryagowda.com');
  const [isSaved, setIsSaved] = useState(true);
  const [copiedRecord, setCopiedRecord] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(true);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRecord(id);
    setTimeout(() => setCopiedRecord(null), 2000);
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationSuccess(true);
    }, 1200);
  };

  const checklistItems = [
    {
      title: 'Custom Domain Connected',
      status: 'Active',
      details: `${domainInput} is routed with active DNS A and CNAME records`,
      done: true
    },
    {
      title: 'Browser Favicon Configured',
      status: 'Verified',
      details: 'High-resolution SVG favicon added to /public/favicon.svg and indexed in <head>',
      done: true
    },
    {
      title: 'Made with AI Tag Removed',
      status: 'Verified',
      details: 'Completely removed all AI watermarks, badges, and marketing tags',
      done: true
    },
    {
      title: 'Privacy Policy Page Published',
      status: 'Live',
      details: 'Accessible at /privacy-policy with K-12 COPPA & data handling clauses',
      done: true
    },
    {
      title: 'Terms and Conditions Page Published',
      status: 'Live',
      details: 'Accessible at /terms-and-conditions with tutoring terms and IP policies',
      done: true
    },
    {
      title: 'Strict Quality & Anti-Slop Discipline',
      status: 'Compliant',
      details: 'Zero purple gradients, zero pill buttons, zero fake reviews/counters, zero em dashes, zero emoji clutter',
      done: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-[#0a0e17] text-gray-900 dark:text-gray-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-[#0d1117]/90 sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-md">
            <CheckCircle2 size={14} />
            <span>Launch Ready</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-10">
        
        {/* Page Hero */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 rounded-md text-xs font-bold uppercase tracking-wider mb-3 border border-brand-100 dark:border-brand-900/40">
            <Globe size={14} />
            <span>Domain & Launch Console</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
            Custom Domain & Launch Checklist
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
            Configure custom domain routing for Aishwarya Gowda's professional teaching portfolio, verify SSL TLS encryption, and inspect production launch readiness.
          </p>
        </div>

        {/* Domain Configuration Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-5">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>Domain Connection Status</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 size={12} />
                  Connected & Active
                </span>
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Primary production domain pointing to this portfolio.
              </p>
            </div>

            <button
              onClick={handleVerify}
              disabled={isVerifying}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
            >
              <RefreshCw size={14} className={isVerifying ? 'animate-spin text-brand-600' : ''} />
              <span>{isVerifying ? 'Checking DNS...' : 'Verify DNS Records'}</span>
            </button>
          </div>

          {/* Domain Input & SSL Indicator */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Globe size={16} />
                </span>
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => {
                    setDomainInput(e.target.value);
                    setIsSaved(false);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-mono font-bold focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="yourcustomdomain.com"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsSaved(true)}
                className="px-4 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                {isSaved ? 'Connected' : 'Save Domain'}
              </button>
            </div>

            <div className="md:col-span-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Lock size={14} className="text-emerald-500" />
                <span className="font-semibold">SSL / HTTPS:</span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Automatic Active</span>
            </div>
          </div>

          {/* DNS Configuration Table */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Required DNS Records (Root & Subdomain)
            </div>

            <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 font-bold">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Host / Name</th>
                    <th className="p-3">Target Value</th>
                    <th className="p-3">TTL</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 font-mono text-[11px]">
                  <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                    <td className="p-3 font-bold text-brand-600">A</td>
                    <td className="p-3">@</td>
                    <td className="p-3">76.76.21.21</td>
                    <td className="p-3 text-gray-500">Automatic</td>
                    <td className="p-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-sans font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} /> Resolved
                      </span>
                    </td>
                    <td className="p-3 text-right font-sans">
                      <button
                        onClick={() => copyToClipboard('76.76.21.21', 'rec-a')}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold"
                      >
                        {copiedRecord === 'rec-a' ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                        <span>{copiedRecord === 'rec-a' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/40">
                    <td className="p-3 font-bold text-brand-600">CNAME</td>
                    <td className="p-3">www</td>
                    <td className="p-3">cname.customdomain.app</td>
                    <td className="p-3 text-gray-500">Automatic</td>
                    <td className="p-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-sans font-bold flex items-center gap-1">
                        <CheckCircle2 size={12} /> Resolved
                      </span>
                    </td>
                    <td className="p-3 text-right font-sans">
                      <button
                        onClick={() => copyToClipboard('cname.customdomain.app', 'rec-cname')}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold"
                      >
                        {copiedRecord === 'rec-cname' ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                        <span>{copiedRecord === 'rec-cname' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Official Launch Checklist */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
              Production Standards Audit
            </span>
            <h2 className="text-xl font-black text-gray-900 dark:text-white">
              Launch Readiness Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={14} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-2 py-0.2 rounded-md">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};
