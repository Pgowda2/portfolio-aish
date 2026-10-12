import React from 'react';
import { Navbar } from '../components/Navbar.js';
import { HeroSection } from '../components/HeroSection.js';
import { AboutSection } from '../components/AboutSection.js';
import { ExperienceSection } from '../components/ExperienceSection.js';
import { SkillsSection } from '../components/SkillsSection.js';
import { CurriculumSection } from '../components/CurriculumSection.js';
import { InteractiveCodePlayground } from '../components/InteractiveCodePlayground.js';
import { EducationSection } from '../components/EducationSection.js';
import { TeachingPhilosophySection } from '../components/TeachingPhilosophySection.js';
import { TestimonialsSection } from '../components/TestimonialsSection.js';
import { ResumeSection } from '../components/ResumeSection.js';
import { ContactSection } from '../components/ContactSection.js';
import { Footer } from '../components/Footer.js';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafcff] dark:bg-[#0a0e17] text-gray-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-200 relative overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* Clean Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Micro-dot grid layer */}
        <div className="absolute inset-0 bg-dot-pattern dark:bg-dot-pattern-dark opacity-35 dark:opacity-20" />

        {/* Ambient subtle light accents */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/10 via-sky-500/8 to-transparent rounded-3xl blur-[140px]" />
        <div className="absolute top-[8%] -right-40 w-[620px] h-[620px] bg-gradient-to-bl from-teal-400/8 via-emerald-400/6 to-transparent rounded-3xl blur-[140px]" />
        <div className="absolute top-[38%] -left-36 w-[650px] h-[650px] bg-gradient-to-tr from-brand-500/8 via-blue-500/6 to-transparent rounded-3xl blur-[150px]" />
        <div className="absolute bottom-10 left-[20%] w-[700px] h-[700px] bg-gradient-to-t from-sky-400/8 via-blue-600/6 to-transparent rounded-3xl blur-[160px]" />
      </div>

      {/* Global Navigation */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CurriculumSection />
        <InteractiveCodePlayground />
        <EducationSection />
        <TeachingPhilosophySection />
        <TestimonialsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};
