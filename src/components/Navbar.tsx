import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Globe, 
  Terminal, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onSetLang?: (lang: Language) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onSetLang, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: lang === 'fr' ? 'À propos' : 'About' },
    { href: "#skills", label: lang === 'fr' ? 'Compétences' : 'Skills' },
    { href: "#projects", label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: "#experience", label: lang === 'fr' ? 'Expérience' : 'Experience' },
    { href: "#education", label: lang === 'fr' ? 'Formation' : 'Education' },
    { href: "#contact", label: lang === 'fr' ? 'Contact' : 'Contact' },
  ];

  const handleSelectLang = (selectedLang: Language) => {
    if (onSetLang) {
      onSetLang(selectedLang);
    } else if (lang !== selectedLang) {
      onToggleLang();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#222] py-3 shadow-lg shadow-black/80' 
          : 'bg-[#0F0F0F]/60 backdrop-blur-sm border-b border-[#1A1A1A] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Artistic Flair Monogram */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#FF4D00] p-1"
          >
            <div className="w-9 h-9 border border-[#333] group-hover:border-[#FF4D00] bg-[#161616] flex items-center justify-center text-[#F0F0F0] font-bold text-xs font-mono transition-colors">
              II
            </div>
            <div>
              <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#F0F0F0] flex items-center gap-2 font-heading">
                <span>IBI IBRAHIM</span>
                <span className="text-[#555] font-normal hidden sm:inline">/</span>
                <span className="text-[10px] text-[#888] font-normal uppercase tracking-widest hidden sm:inline">
                  {lang === 'fr' ? 'Full-Stack & IA' : 'Full-Stack & AI'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" title={lang === 'fr' ? 'Disponible pour missions' : 'Available for contracts'} />
              </div>
              <div className="text-[10px] text-[#666] tracking-[0.15em] uppercase font-mono block sm:hidden">
                Full-Stack · Laravel / React · IA
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 border border-[#222] bg-[#141414] px-4 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#999] hover:text-[#FF4D00] hover:bg-[#1C1C1C] transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Segmented Language Selector [ FR | EN ] */}
            <div className="flex items-center bg-[#141414] border border-[#262626] p-0.5 font-mono text-[10px] font-bold">
              <button
                onClick={() => handleSelectLang('fr')}
                className={`px-2.5 py-1 uppercase tracking-wider transition-all cursor-pointer ${
                  lang === 'fr'
                    ? 'bg-[#FF4D00] text-[#0F0F0F] font-black'
                    : 'text-[#888] hover:text-[#F0F0F0]'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <div className="w-[1px] h-3.5 bg-[#2A2A2A]" />
              <button
                onClick={() => handleSelectLang('en')}
                className={`px-2.5 py-1 uppercase tracking-wider transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#FF4D00] text-[#0F0F0F] font-black'
                    : 'text-[#888] hover:text-[#F0F0F0]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Social Monogram / Links */}
            <a
              href="https://github.com/Phenix3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-[11px] font-mono font-bold text-[#A0A0A0] hover:text-[#FF4D00] bg-[#141414] border border-[#262626] hover:border-[#FF4D00] transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/in/ibi-ibrahim"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-[11px] font-mono font-bold text-[#A0A0A0] hover:text-[#FF4D00] bg-[#141414] border border-[#262626] hover:border-[#FF4D00] transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              LI
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase text-[#0F0F0F] bg-[#FF4D00] hover:bg-[#FF6524] transition-all font-mono cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'CV' : 'Resume'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Segmented Language Selector */}
            <div className="flex items-center bg-[#161616] border border-[#262626] p-0.5 font-mono text-[10px] font-bold">
              <button
                onClick={() => handleSelectLang('fr')}
                className={`px-2 py-0.5 uppercase transition-all ${
                  lang === 'fr'
                    ? 'bg-[#FF4D00] text-[#0F0F0F]'
                    : 'text-[#888]'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => handleSelectLang('en')}
                className={`px-2 py-0.5 uppercase transition-all ${
                  lang === 'en'
                    ? 'bg-[#FF4D00] text-[#0F0F0F]'
                    : 'text-[#888]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A0A0A0] hover:text-[#F0F0F0] bg-[#161616] border border-[#262626] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-b border-[#222] px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl mt-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#A0A0A0] hover:text-[#FF4D00] hover:bg-[#161616] transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#222] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0F0F0F] bg-[#FF4D00] font-mono"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Consulter le CV (PDF)' : 'View Resume (PDF)'}</span>
            </button>

            <div className="flex items-center justify-center gap-3 pt-2 font-mono">
              <a
                href="https://github.com/Phenix3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#A0A0A0] bg-[#161616] border border-[#262626]"
              >
                <Github className="w-3.5 h-3.5 text-[#FF4D00]" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ibi-ibrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#A0A0A0] bg-[#161616] border border-[#262626]"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FF4D00]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
