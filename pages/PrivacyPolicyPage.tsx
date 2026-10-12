import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Mail, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

export const PrivacyPolicyPage: React.FC = () => {
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
            <Shield size={14} />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            This Privacy Policy explains how Aishwarya Gowda S R collects, uses, and safeguards personal information provided by parents, guardians, and students who utilize our educational services, trial booking system, and website.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">1.</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              When a parent or student books a trial class or contacts us through the website, we collect only the necessary details required to coordinate instruction:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li><strong>Parent and Guardian Information:</strong> Full name, email address, contact phone number, and preferred communication channels (e.g., WhatsApp).</li>
              <li><strong>Student Academic Information:</strong> First name or nickname, grade level (Grades 1 through 12), coding interests, and learning goals.</li>
              <li><strong>Scheduling Details:</strong> Requested class dates, times, and timezone preferences.</li>
              <li><strong>Voluntary Session Notes:</strong> Any specific curricular requests or prior programming experience shared during trial booking.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">2.</span>
              <span>Protection of Minor Students (COPPA & Student Privacy)</span>
            </h2>
            <p>
              Because our educational offerings cater to K-12 students (ages 6 to 18), student safety and digital privacy are our highest priorities:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>We require verifiable parental or guardian consent before conducting any 1-on-1 trial class or ongoing coding tutoring.</li>
              <li>We never collect sensitive personal information from minor students directly without parent authorization.</li>
              <li>We do not sell, rent, commercialize, or share student contact information with any third-party marketing services.</li>
              <li>Live virtual classroom video sessions are held on secure platforms (such as Google Meet or Zoom) with strict access controls.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">3.</span>
              <span>Google Calendar and Gmail Integration Permissions</span>
            </h2>
            <p>
              Our website provides an optional feature allowing users to synchronize their confirmed trial lesson directly with Google Calendar and send an email confirmation via Gmail:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/80 space-y-2 text-xs leading-relaxed">
              <p>
                <strong>In-Memory Access Tokens:</strong> When you authorize Google Workspace, OAuth access tokens are handled strictly within your browser's in-memory session. Tokens are never stored on external databases or third-party servers.
              </p>
              <p>
                <strong>Limited Scope:</strong> Permissions are restricted strictly to scheduling the trial class event on Google Calendar (<code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">calendar.events</code>) and sending the confirmation receipt via Gmail (<code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">gmail.send</code>).
              </p>
              <p>
                <strong>No Data Harvesting:</strong> We do not read, index, analyze, or archive any existing emails, inbox threads, or calendar events outside of the specific trial class session you schedule.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">4.</span>
              <span>How Information Is Used</span>
            </h2>
            <p>The collected information is used solely to:</p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>Confirm and schedule trial classes and ongoing tutoring sessions.</li>
              <li>Send meeting links, calendar invites, and curriculum resources.</li>
              <li>Communicate student progress and conduct regular Parent-Teacher Meetings (PTMs).</li>
              <li>Respond to direct parental inquiries and curriculum consultation requests.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">5.</span>
              <span>Data Retention and Deletion Rights</span>
            </h2>
            <p>
              Parents and guardians retain complete ownership of their data. At any time, you may request:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>Review of any student records or contact details on file.</li>
              <li>Immediate deletion of all contact information and class logs.</li>
              <li>Revocation of any previously provided calendar or email communication permissions.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-brand-600 dark:text-brand-400 font-mono">6.</span>
              <span>Contact Us</span>
            </h2>
            <p>
              For any questions regarding this Privacy Policy or student data practices, please reach out directly:
            </p>
            <div className="p-4 rounded-xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40 text-xs sm:text-sm space-y-1">
              <div><strong>Educator:</strong> Aishwarya Gowda S R</div>
              <div><strong>Email:</strong> <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div><strong>WhatsApp:</strong> <a href="https://wa.me/918310589119?text=Hi%20Aishwarya%20ma%27am%2C%20I%20have%20a%20question%20regarding%20your%20privacy%20policy." target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Direct WhatsApp Support</a></div>
              <div><strong>Location:</strong> Mysuru, Karnataka, India 570023</div>
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs">
          <Link
            to="/terms-and-conditions"
            className="font-bold text-brand-600 dark:text-brand-400 hover:underline"
          >
            View Terms and Conditions →
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
