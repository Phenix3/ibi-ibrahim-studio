import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { profileData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ibi_portfolio_lang');
      if (saved === 'en' || saved === 'fr') return saved;
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith('fr') ? 'fr' : 'en';
    } catch {
      return 'fr';
    }
  });

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'fr' ? 'en' : 'fr';
      try {
        localStorage.setItem('ibi_portfolio_lang', next);
      } catch {}
      return next;
    });
  };

  const setLanguageDirect = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('ibi_portfolio_lang', newLang);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F0F0F0] font-sans selection:bg-[#FF4D00] selection:text-[#0F0F0F]">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onSetLang={setLanguageDirect}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner with Executive Profile & Code Showcase */}
        <Hero
          profile={profileData}
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Biography, Story, Strengths & Key Numbers */}
        <About
          profile={profileData}
          lang={lang}
        />

        {/* Technical Skills & Interactive Filter */}
        <SkillsSection
          lang={lang}
        />

        {/* Selected Engineering Projects, Hackathons & AI Architectures */}
        <ProjectsSection
          lang={lang}
        />

        {/* Professional Career & Timeline */}
        <ExperienceTimeline
          lang={lang}
        />

        {/* Academic Degrees & Competitive Distinctions */}
        <EducationSection
          lang={lang}
        />

        {/* Direct Contact, WhatsApp & Interactive Form */}
        <ContactSection
          profile={profileData}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profileData}
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Full Resume & Printable PDF Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profileData}
        lang={lang}
      />
    </div>
  );
}
