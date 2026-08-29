import React, { useEffect, useRef } from 'react';
import { Language, ProfileData } from '../types';
import { gsap } from '../utils/gsapSetup';
import { 
  ArrowRight, 
  MapPin, 
  Terminal, 
  Layers, 
  Bot, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Cpu, 
  Award, 
  Zap,
  FileText
} from 'lucide-react';

interface HeroProps {
  profile: ProfileData;
  lang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, lang, onOpenResume }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const metaBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(metaBarRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
      .from(leftColRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.9,
      }, '-=0.5')
      .from(rightColRef.current, {
        x: 30,
        opacity: 0,
        duration: 0.9,
      }, '-=0.7')
      .from('.hero-metric', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      }, '-=0.4');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-[#222]">
      {/* Editorial Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheader Meta Bar */}
        <div ref={metaBarRef} className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#1F1F1F]">
          <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F0F0F0] flex items-center gap-3 font-mono">
            <span>PORTFOLIO / VOL. 2.5</span>
            <span className="text-[#444]">//</span>
            <span className="text-[#888]">{profile.name}</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-[#777]">
            <div className="flex items-center gap-2 text-[#A0A0A0]">
              <span className="w-2 h-2 bg-[#FF4D00] rounded-full inline-block animate-pulse"></span>
              <span>{lang === 'fr' ? 'Disponible pour missions' : 'Available for Contracts'}</span>
            </div>
            <span className="hidden sm:inline text-[#333]">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-[#888]">
              <MapPin className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>Maroua, Cameroun</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Main Hero Content */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-8 text-left">
            
            {/* Main Headline with Corner Bracket Flair */}
            <div className="relative pt-2">
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#FF4D00]"></div>
              
              <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00] mb-3">
                {lang === 'fr' ? '// INGÉNIERIE FULL-STACK & SYSTÈMES IA' : '// FULL-STACK & APPLIED AI SYSTEMS'}
              </div>

              <h1 ref={headlineRef} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#F0F0F0] font-heading uppercase leading-[0.92]">
                ARCHITECTING <br />
                THE NEXT <span className="text-[#FF4D00]">AI STACK</span>
              </h1>
            </div>

            {/* Profile Role & Subtitle */}
            <div className="space-y-3">
              <div className="text-lg sm:text-xl font-bold tracking-tight text-[#F0F0F0] flex items-center gap-2">
                <span>{profile.title[lang]}</span>
              </div>
              <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-2xl font-sans">
                {profile.bio[lang]}
              </p>
            </div>

            {/* Core Expertise Monospace Tags with // Separators */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#666] font-mono">
                {lang === 'fr' ? 'Pôles d\'Expertise' : 'Core Architecture'}
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2.5 font-mono text-xs">
                <span className="text-[#F0F0F0] font-semibold bg-[#161616] border border-[#2A2A2A] px-2.5 py-1">LARAVEL & SYMFONY</span>
                <span className="text-[#444] self-center">//</span>
                <span className="text-[#F0F0F0] font-semibold bg-[#161616] border border-[#2A2A2A] px-2.5 py-1">CLAUDE API & MCP</span>
                <span className="text-[#444] self-center">//</span>
                <span className="text-[#F0F0F0] font-semibold bg-[#161616] border border-[#2A2A2A] px-2.5 py-1">REACT & FASTAPI</span>
                <span className="text-[#444] self-center">//</span>
                <span className="text-[#F0F0F0] font-semibold bg-[#161616] border border-[#2A2A2A] px-2.5 py-1">MOMO & FINTECH</span>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF4D00] hover:bg-[#FF6524] text-[#0F0F0F] font-bold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer font-mono active:scale-95 shadow-md"
              >
                <span>{lang === 'fr' ? 'Découvrir les Projets' : 'Explore Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#161616] hover:bg-[#202020] text-[#F0F0F0] border border-[#2E2E2E] hover:border-[#FF4D00] font-bold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer font-mono"
              >
                <FileText className="w-4 h-4 text-[#FF4D00]" />
                <span>{lang === 'fr' ? 'Consulter le CV' : 'View Resume'}</span>
              </button>

              <a
                href="#contact"
                className="group flex items-center gap-3 px-3 py-3 text-xs uppercase font-mono tracking-[0.2em] font-bold text-[#888] hover:text-[#FF4D00] transition-colors"
              >
                <div className="w-8 h-[1px] bg-[#444] group-hover:w-14 group-hover:bg-[#FF4D00] transition-all"></div>
                <span>{lang === 'fr' ? 'Me Contacter' : 'Get In Touch'}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-xs font-mono text-[#666] pt-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FF4D00] transition-colors"
              >
                <Github className="w-4 h-4 text-[#888]" />
                <span>github.com/{profile.githubUsername}</span>
              </a>
              <span className="text-[#333]">//</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FF4D00] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#888]" />
                <span>linkedin.com/in/{profile.linkedinUsername}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Artistic Flair Technical Showcase & Quick Metrics */}
          <div ref={rightColRef} className="lg:col-span-5 space-y-4">
            
            {/* Terminal Window Card in Deep Slate & Sharp Grid */}
            <div className="relative border border-[#262626] bg-[#141414] text-left font-mono overflow-hidden">
              
              {/* Corner mark */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FF4D00] pointer-events-none"></div>

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#222] bg-[#111]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#444]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]"></div>
                </div>
                <div className="text-[11px] text-[#888] flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-[#FF4D00]" />
                  <span>ibi-architecture.ts</span>
                </div>
                <span className="text-[9px] text-[#555] uppercase tracking-wider">
                  SYS.V2
                </span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="p-5 text-xs leading-relaxed space-y-1.5 text-[#C0C0C0] bg-[#141414]">
                <div className="text-[#555]">// Lead Engineer · Nexus Digital Hub</div>
                <div>
                  <span className="text-[#FF4D00]">const</span> <span className="text-[#F0F0F0]">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#777]">name:</span> <span className="text-[#F0F0F0]">"{profile.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#777]">role:</span> <span className="text-[#F0F0F0]">"Full-Stack & IA Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#777]">location:</span> <span className="text-[#A0A0A0]">"{profile.location}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#777]">experience:</span> <span className="text-[#FF4D00]">"5+ years"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#777]">agency:</span> <span className="text-[#F0F0F0]">"Nexus Digital Hub"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#777]">coreStack:</span> [
                </div>
                <div className="pl-8 text-[#FF4D00]">
                  "Laravel", "Symfony", "React", "FastAPI"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-[#777]">aiSpecialties:</span> [
                </div>
                <div className="pl-8 text-[#E0E0E0]">
                  "Claude API", "MCP Protocol", "Offline RAG"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-[#777]">availability:</span> <span className="text-[#FF4D00]">"Active"</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Live Project Spotlight */}
              <div className="p-4 border-t border-[#222] bg-[#0E0E0E] flex flex-col gap-2">
                <div className="text-[10px] text-[#666] uppercase font-mono tracking-widest flex items-center justify-between">
                  <span className="text-[#FF4D00] font-bold">// SPOTLIGHT PROJECT</span>
                  <span className="text-[#888]">MBZUAI GLOBAL '25</span>
                </div>
                <div className="text-xs text-[#E0E0E0] font-mono flex items-center justify-between">
                  <span className="font-bold text-[#F0F0F0]">MediRoute AI (Triage)</span>
                  <span className="text-[#FF4D00] text-[11px] tracking-wider uppercase font-bold">&rarr; $30K AI Finalist</span>
                </div>
              </div>

            </div>

            {/* Quick Metrics Grid in Artistic Flair style */}
            <div className="grid grid-cols-3 gap-2 pt-1 font-mono">
              <div className="hero-metric border border-[#222] p-4 bg-[#141414] text-left hover:bg-[#1A1A1A] transition-colors relative">
                <div className="text-[9px] text-[#666] uppercase tracking-widest font-bold">01 / EXP</div>
                <div className="text-2xl font-extrabold text-[#F0F0F0] mt-1 font-heading">5+</div>
                <div className="text-[10px] text-[#888] uppercase mt-0.5">{lang === 'fr' ? 'Années' : 'Years'}</div>
                <div className="w-3 h-3 border-b border-r border-[#444] absolute bottom-2 right-2"></div>
              </div>

              <div className="hero-metric border border-[#222] p-4 bg-[#141414] text-left hover:bg-[#1A1A1A] transition-colors relative">
                <div className="text-[9px] text-[#666] uppercase tracking-widest font-bold">02 / PROJ</div>
                <div className="text-2xl font-extrabold text-[#FF4D00] mt-1 font-heading">12+</div>
                <div className="text-[10px] text-[#888] uppercase mt-0.5">{lang === 'fr' ? 'Systèmes' : 'Systems'}</div>
                <div className="w-3 h-3 border-b border-r border-[#444] absolute bottom-2 right-2"></div>
              </div>

              <div className="hero-metric border border-[#222] p-4 bg-[#141414] text-left hover:bg-[#1A1A1A] transition-colors relative">
                <div className="text-[9px] text-[#666] uppercase tracking-widest font-bold">03 / AWARDS</div>
                <div className="text-2xl font-extrabold text-[#F0F0F0] mt-1 font-heading">02</div>
                <div className="text-[10px] text-[#888] uppercase mt-0.5">{lang === 'fr' ? 'Prix IA' : 'AI Wins'}</div>
                <div className="w-3 h-3 border-b border-r border-[#444] absolute bottom-2 right-2"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
