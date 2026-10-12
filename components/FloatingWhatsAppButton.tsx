import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useWhatsApp } from '../context/WhatsAppContext.js';

export const FloatingWhatsAppButton: React.FC = () => {
  const { openWhatsAppModal } = useWhatsApp();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Informative Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-[#0f141c] text-gray-800 dark:text-gray-100 px-3.5 py-2 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Message on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => openWhatsAppModal({ intent: 'trial' })}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900"
        aria-label="Send customized WhatsApp message to Aishwarya"
        title="Send customized WhatsApp message"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-gray-900 rounded-full"></span>
        
        {/* Official WhatsApp-styled SVG icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white drop-shadow-xs"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </div>
  );
};
