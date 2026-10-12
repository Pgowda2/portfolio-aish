import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Check, 
  Copy,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { useWhatsApp } from '../context/WhatsAppContext.js';
import { 
  buildCustomWhatsAppMessage, 
  getDirectWhatsAppUrl, 
  WhatsAppMessageOptions 
} from '../utils/whatsapp.js';
import { PERSONAL_INFO } from '../data/portfolioData.js';

export const WhatsAppModal: React.FC = () => {
  const { isOpen, closeWhatsAppModal, initialOptions } = useWhatsApp();

  const [intent, setIntent] = useState<'trial' | 'curriculum' | 'fees' | 'custom'>('trial');
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentGrade, setStudentGrade] = useState('Grades 5–8');
  const [subjectInterest, setSubjectInterest] = useState('Python & Algorithmic Logic');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('04:00 PM - 05:00 PM IST');
  const [customText, setCustomText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialOptions.intent === 'curriculum') setIntent('curriculum');
      else if (initialOptions.intent === 'fees') setIntent('fees');
      else if (initialOptions.intent === 'custom') setIntent('custom');
      else setIntent('trial');

      if (initialOptions.parentName) setParentName(initialOptions.parentName);
      if (initialOptions.studentName) setStudentName(initialOptions.studentName);
      if (initialOptions.studentGrade) setStudentGrade(initialOptions.studentGrade);
      if (initialOptions.subjectInterest) setSubjectInterest(initialOptions.subjectInterest);
      if (initialOptions.preferredDate) setPreferredDate(initialOptions.preferredDate);
      if (initialOptions.preferredTime) setPreferredTime(initialOptions.preferredTime);
      if (initialOptions.customMessage) setCustomText(initialOptions.customMessage);

      // Handle Escape key to close modal
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeWhatsAppModal();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, initialOptions, closeWhatsAppModal]);

  if (!isOpen) return null;

  // Build the live message
  const generatedMessage = buildCustomWhatsAppMessage({
    intent,
    parentName,
    studentName,
    studentGrade,
    subjectInterest,
    preferredDate,
    preferredTime,
    customMessage: customText
  });

  const directUrl = getDirectWhatsAppUrl(generatedMessage);

  const handleSend = () => {
    window.open(directUrl, '_blank', 'noopener,noreferrer');
    closeWhatsAppModal();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeWhatsAppModal}
      role="presentation"
    >
      <div 
        className="bg-white dark:bg-[#0f141c] w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WhatsApp Brand Header */}
        <div className="bg-[#128C7E] dark:bg-[#075E54] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white/80 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-400 border-2 border-[#128C7E] rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 id="whatsapp-modal-title" className="font-bold text-sm sm:text-base leading-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <ShieldCheck size={14} className="text-emerald-300" />
              </div>
              <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                <span>Online • Senior Coding Educator</span>
              </p>
            </div>
          </div>

          {/* Prominent Header Cancel/Close Button */}
          <button
            type="button"
            onClick={closeWhatsAppModal}
            className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20 shadow-2xs shrink-0"
            aria-label="Cancel and close dialog"
          >
            <X size={16} />
            <span>Cancel</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs">
          
          {/* Quick Intent Tabs */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Select Inquiry Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'trial', label: 'Trial Class', icon: GraduationCap },
                { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
                { id: 'fees', label: 'Fees & Slots', icon: Clock },
                { id: 'custom', label: 'Custom Note', icon: Sparkles },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = intent === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setIntent(tab.id as any)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl font-bold transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={13} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form customization fields */}
          <div className="space-y-3 bg-gray-50/70 dark:bg-gray-900/60 p-4 rounded-2xl border border-gray-200/80 dark:border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Parent Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Student Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aarav"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Grade Level
                </label>
                <select
                  value={studentGrade}
                  onChange={(e) => setStudentGrade(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs"
                >
                  <option value="Grades 1–4 (Ages 6–9)">Grades 1–4 (Ages 6–9)</option>
                  <option value="Grades 5–8 (Ages 10–13)">Grades 5–8 (Ages 10–13)</option>
                  <option value="Grades 9–12 (Ages 14–18)">Grades 9–12 (Ages 14–18)</option>
                  <option value="Complete Beginner">Complete Beginner</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Coding Focus / Subject
                </label>
                <select
                  value={subjectInterest}
                  onChange={(e) => setSubjectInterest(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs"
                >
                  <option value="Python & Algorithmic Logic">Python & Algorithmic Logic</option>
                  <option value="Scratch & Game Design">Scratch & Game Design</option>
                  <option value="Web Development (HTML/CSS/JS)">Web Development (HTML/CSS/JS)</option>
                  <option value="MIT App Inventor & Mobile Apps">MIT App Inventor & Mobile Apps</option>
                  <option value="AI & Machine Learning for Kids">AI & Machine Learning for Kids</option>
                  <option value="Java & High School CS">Java & High School CS</option>
                </select>
              </div>
            </div>

            {intent === 'trial' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs"
                  >
                    <option value="10:00 AM - 11:00 AM IST">10:00 AM - 11:00 AM IST (Morning)</option>
                    <option value="02:00 PM - 03:00 PM IST">02:00 PM - 03:00 PM IST (Afternoon)</option>
                    <option value="04:00 PM - 05:00 PM IST">04:00 PM - 05:00 PM IST (Evening)</option>
                    <option value="06:00 PM - 07:00 PM IST">06:00 PM - 07:00 PM IST (Late Evening)</option>
                    <option value="Weekend Flexible">Weekend Flexible</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block font-bold text-gray-700 dark:text-gray-300 mb-1">
                {intent === 'custom' ? 'Custom Message' : 'Additional Note or Question (Optional)'}
              </label>
              <textarea
                rows={2}
                placeholder={
                  intent === 'custom'
                    ? "Type your customized message here..."
                    : "e.g. My child wants to learn how to create games in Scratch, available on Saturdays..."
                }
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white outline-none focus:border-emerald-600 text-xs resize-none"
              />
            </div>
          </div>

          {/* Live Message Bubble Preview */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Live WhatsApp Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer"
              >
                {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>

            {/* WhatsApp Chat Bubble Mockup */}
            <div className="p-3.5 rounded-2xl bg-[#ECE5DD] dark:bg-[#18222d] border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-100 font-sans text-xs relative shadow-inner">
              <div className="bg-[#DCF8C6] dark:bg-[#056162] text-gray-900 dark:text-white p-3 rounded-xl rounded-tr-xs shadow-xs ml-auto max-w-[95%] whitespace-pre-line leading-relaxed">
                {generatedMessage}
                <div className="text-[9px] text-gray-500 dark:text-gray-300 text-right mt-1 font-mono">
                  Direct message to educator ✓✓
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer / Direct Send Button & Cancel */}
        <div className="p-4 sm:p-5 bg-gray-50 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1.5 text-center sm:text-left">
            <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
            <span>Opens directly in WhatsApp with your message pre-filled.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={closeWhatsAppModal}
              className="w-1/2 sm:w-auto px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <X size={15} />
              <span>Cancel</span>
            </button>

            <button
              type="button"
              onClick={handleSend}
              className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Send size={15} />
              <span>Send Directly</span>
              <ExternalLink size={12} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
