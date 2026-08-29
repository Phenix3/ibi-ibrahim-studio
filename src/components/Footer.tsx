import React from 'react';
import { Language, ProfileData } from '../types';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail
} from 'lucide-react';

interface FooterProps {
  profile: ProfileData;
  lang: Language;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, lang, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222] bg-[#0A0A0A] text-[#888] text-xs py-12 relative font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E1E1E]">
          
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="text-base font-bold text-[#F0F0F0] font-heading uppercase tracking-wide">
                {profile.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-[#141414] text-[#FF4D00] border border-[#2A2A2A] font-bold">
                NEXUS DIGITAL HUB
              </span>
            </div>
            <p className="text-[11px] text-[#666] font-sans">
              {profile.title[lang]} · {profile.location}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#141414] border border-[#262626] hover:border-[#FF4D00] text-[#888] hover:text-[#FF4D00] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#141414] border border-[#262626] hover:border-[#FF4D00] text-[#888] hover:text-[#FF4D00] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 bg-[#141414] border border-[#262626] hover:border-[#FF4D00] text-[#888] hover:text-[#FF4D00] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-[#141414] border border-[#262626] hover:bg-[#FF4D00] text-[#888] hover:text-[#0F0F0F] transition-colors cursor-pointer"
              title={lang === 'fr' ? 'Haut de page' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {profile.name}. {lang === 'fr' ? 'TOUS DROITS RÉSERVÉS.' : 'ALL RIGHTS RESERVED.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="hover:text-[#FF4D00] transition-colors cursor-pointer uppercase font-bold"
            >
              {lang === 'fr' ? 'Curriculum Vitae (PDF)' : 'Resume (PDF)'}
            </button>
            <span className="text-[#333]">//</span>
            <a href="#contact" className="hover:text-[#FF4D00] transition-colors uppercase">
              {lang === 'fr' ? 'Contact Direct' : 'Direct Contact'}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
