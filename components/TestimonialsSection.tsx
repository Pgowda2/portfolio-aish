import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  Award, 
  MessageCircle, 
  Calendar,
  Sparkles,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { TESTIMONIALS_DATA, Testimonial, PERSONAL_INFO } from '../data/portfolioData.js';
import { useWhatsApp } from '../context/WhatsAppContext.js';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'parent' | 'student'>('all');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const { openWhatsAppModal } = useWhatsApp();

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    const matchesType = filter === 'all' || item.type === filter;
    const matchesGrade = gradeFilter === 'all' || item.gradeBand === gradeFilter;
    return matchesType && matchesGrade;
  });

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 relative scroll-mt-20 border-t border-gray-100 dark:border-gray-800/80 bg-white/60 dark:bg-[#0c1017]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            <Quote size={14} className="text-brand-600 dark:text-brand-400" />
            <span>Parent & Student Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Loved by Parents,{' '}
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Inspiring Young Coders
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Real feedback from families across India, the US, the UAE, the UK, and Singapore. See how personalized, project-based mentorship unlocks computational confidence.
          </p>

          {/* Social Proof Trust Bar */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-500 flex items-center justify-center gap-1">
                <Star size={18} className="fill-amber-400 text-amber-400" />
                <span>4.9 / 5</span>
              </div>
              <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                Codingal Rating
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-brand-600 dark:text-brand-400">
                1,934+
              </div>
              <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                Classes Delivered
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                98%
              </div>
              <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                Parent Retention
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 text-center">
              <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">
                1,200+
              </div>
              <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                Students Mentored
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Controls - Functional Segmented Tabs (Anti-Slop compliant) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Role Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700/80">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'all'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Users size={13} />
              <span>All Stories ({TESTIMONIALS_DATA.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('parent')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'parent'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <ShieldCheck size={13} className="text-brand-600 dark:text-brand-400" />
              <span>Parents' Feedback</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('student')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'student'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>Students' Voices</span>
            </button>
          </div>

          {/* Grade Band Filter Buttons */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-gray-500 dark:text-gray-400 font-medium hidden md:inline">Grade:</span>
            {['all', 'Grades 1–4', 'Grades 5–8', 'Grades 9–12'].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGradeFilter(g)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  gradeFilter === g
                    ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800 font-bold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {g === 'all' ? 'All Grades' : g}
              </button>
            ))}
          </div>

        </div>

        {/* Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => {
            const isParent = item.type === 'parent';

            return (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-[#121824] rounded-2xl p-6 sm:p-7 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Rating & Verification */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={15} 
                          className="fill-amber-400 text-amber-400" 
                        />
                      ))}
                      <span className="ml-1.5 text-xs font-black text-gray-800 dark:text-gray-200">
                        5.0
                      </span>
                    </div>

                    {/* Unboxed Metadata Role Tag */}
                    <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      {isParent ? (
                        <>
                          <ShieldCheck size={13} className="text-brand-600 dark:text-brand-400" />
                          <span>Parent Review</span>
                        </>
                      ) : (
                        <>
                          <GraduationCap size={13} className="text-emerald-600 dark:text-emerald-400" />
                          <span>Student Voice</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Highlight Heading */}
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    "{item.highlight}"
                  </h3>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {item.quote}
                  </p>

                  {/* Concrete Learning Outcome Badge */}
                  <div className="mb-5 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 text-[11px] text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white">Milestone: </span>
                      <span>{item.outcome}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Author Profile & Clean Metadata */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className={`w-10 h-10 rounded-xl ${item.avatarBg || 'bg-brand-600'} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs`}>
                      {item.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                          {item.name}
                        </span>
                        {item.verified && (
                          <span title="Verified Review" className="inline-flex">
                            <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                        {item.authorSubtitle}
                      </div>
                    </div>
                  </div>

                  {/* Clean unboxed footer metadata with typographic separators */}
                  <div className="mt-2.5 flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1 truncate">
                      <MapPin size={11} className="shrink-0" />
                      <span>{item.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{item.course}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-100 uppercase tracking-wide">
              <Sparkles size={14} />
              <span>Ready for Your Child's Journey?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Book a Free 1-on-1 Trial Class with {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 max-w-xl">
              Personalized evaluation, curriculum roadmap, and hands-on coding project in their very first session.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto flex-col sm:flex-row">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-brand-700 font-extrabold text-xs shadow-md hover:bg-brand-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar size={15} />
              <span>Book Trial Class</span>
            </a>

            <button
              type="button"
              onClick={() => openWhatsAppModal({ intent: 'trial' })}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={15} />
              <span>Message on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
