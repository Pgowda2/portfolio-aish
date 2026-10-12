import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d1117] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          <div className="text-xs font-semibold text-gray-500">
            Last Updated: October 2026
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 rounded-md text-xs font-bold uppercase tracking-wider mb-4 border border-brand-100 dark:border-brand-900/40">
            <FileText size={14} />
            <span>Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Please review these Terms and Conditions carefully. They govern all trial classes, 1-on-1 personalized tutoring sessions, curriculum consulting, and online services provided by Aishwarya Gowda S R.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">1.</span>
              <span>Educational Services and Scope</span>
            </h2>
            <p>
              Aishwarya Gowda S R provides live, virtual coding and STEM instruction for students in Grades 1 through 12. Topics include visual block-based programming (Scratch, Code.org, EduBlocks), mobile development (MIT App Inventor, Thunkable), AI/ML foundations, and text programming (Python, Java, HTML/CSS, JavaScript).
            </p>
            <p>
              Classes are delivered live online via high-definition video conferencing (Google Meet, Zoom, or Microsoft Teams) in 1-on-1 or small cohort formats.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">2.</span>
              <span>Trial Classes and Bookings</span>
            </h2>
            <p>
              Complimentary or introductory trial classes are offered to assess student readiness, current skill levels, and curriculum alignment:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>Submitting a booking form registers a scheduling request. Final confirmation and meeting link details will be shared via email or WhatsApp.</li>
              <li>A parent or adult guardian must confirm attendance prior to the session start time.</li>
              <li>For students under 13 years of age, a parent or guardian is requested to be present at the start of the initial trial class to discuss learning goals.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">3.</span>
              <span>Scheduling, Punctuality, and Rescheduling</span>
            </h2>
            <p>
              To maintain academic consistency and respect schedules across timezones:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li><strong>Punctuality:</strong> Both instructor and student agree to join sessions on time. Classes begin promptly at the scheduled minute.</li>
              <li><strong>Advance Rescheduling:</strong> If a student cannot attend a scheduled class, a minimum of 12 hours advance notice is requested via WhatsApp or email to reschedule without penalty.</li>
              <li><strong>Emergency Cancellations:</strong> Genuine health or family emergencies will always be accommodated with reasonable rescheduling options.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">4.</span>
              <span>Classroom Code of Conduct</span>
            </h2>
            <p>
              Our virtual classroom is built on mutual respect, encouragement, and curiosity:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>Disruptive behavior, offensive language, or disrespect towards the instructor or fellow cohort students is strictly prohibited.</li>
              <li>Students are encouraged to ask questions freely, embrace mistakes as debugging opportunities, and take creative pride in their projects.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">5.</span>
              <span>Intellectual Property and Student Code Ownership</span>
            </h2>
            <p>
              <strong>Student Ownership:</strong> All code, games, web pages, and mobile applications created by the student during sessions remain 100% the intellectual property of the student and their family.
            </p>
            <p>
              <strong>Curriculum Materials:</strong> Lesson slides, custom code challenge templates, and instructional worksheets provided by Aishwarya Gowda are protected educational property intended strictly for the enrolled student's personal learning use.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">6.</span>
              <span>Parent Partnership & Progress Reviews (PTMs)</span>
            </h2>
            <p>
              Regular Parent-Teacher Meetings are conducted after each milestone to review curriculum progress, project demos, and recommendations for upcoming academic goals. Parents may request a review anytime.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">7.</span>
              <span>Questions & Agreement</span>
            </h2>
            <p>
              By booking a session or continuing instruction, you acknowledge and agree to these Terms and Conditions. For any clarifications, please contact:
            </p>
            <div className="p-4 rounded-xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40 text-xs sm:text-sm space-y-1">
              <div><strong>Educator:</strong> Aishwarya Gowda S R</div>
              <div><strong>Email:</strong> <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div><strong>WhatsApp:</strong> <a href="https://wa.me/918310589119?text=Hi%20Aishwarya%20ma%27am%2C%20I%20have%20a%20question%20regarding%20your%20terms%20and%20conditions." target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Direct WhatsApp Support</a></div>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs">
          <Link
            to="/privacy-policy"
            className="font-bold text-brand-600 dark:text-brand-400 hover:underline"
          >
            ← View Privacy Policy
          </Link>
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
};
