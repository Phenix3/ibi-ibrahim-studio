import React, { useEffect, useRef } from 'react';
import { Language } from '../types';
import { educationData } from '../data/portfolioData';
import { gsap } from '../utils/gsapSetup';
import { 
  BookOpen, 
  Trophy, 
  MapPin
} from 'lucide-react';

interface EducationSectionProps {
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.education-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Degree cards stagger
      gsap.from('.education-degree-card', {
        scrollTrigger: {
          trigger: '.education-degree-list',
          start: 'top 85%',
        },
        x: -25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out'
      });

      // Honors cards stagger
      gsap.from('.education-honor-card', {
        scrollTrigger: {
          trigger: '.education-honor-list',
          start: 'top 85%',
        },
        x: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const honors = [
    {
      title: {
        fr: "Sélection Compétition Mondiale K2-Think-V2",
        en: "Global Selection — K2-Think-V2 AI Competition"
      },
      organization: "MBZUAI (Mohamed bin Zayed University of AI)",
      prize: "Jusqu'à $30 000",
      project: "MediRoute (Triage médical offline-first)",
      year: "2025"
    },
    {
      title: {
        fr: "Projet Primé Hackathon IA & Éducation",
        en: "Awarded Project — AI & EdTech Hackathon"
      },
      organization: "École Nationale Supérieure Polytechnique de Maroua",
      prize: "Lauréat",
      project: "EduPath AI (Tutorat adaptatif LLM)",
      year: "2025"
    },
    {
      title: {
        fr: "Validation Technique Protocole MCP & Agents",
        en: "Technical MCP & Agentic Protocol Assessment"
      },
      organization: "Liwaza (AI-for-Education)",
      prize: "Succès d'évaluation",
      project: "Client React + Serveur FastAPI World Bank",
      year: "2025"
    }
  ];

  return (
    <section ref={containerRef} id="education" className="py-20 lg:py-28 relative border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="education-header text-left max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00]">
            {lang === 'fr' ? '// 05 / FORMATION & DISTINCTIONS' : '// 05 / EDUCATION & HONORS'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0F0] font-heading tracking-tight uppercase">
            {lang === 'fr' 
              ? "Diplômes Universitaires & Prix d'Excellence" 
              : "Academic Foundations & Competitive Honors"}
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed">
            {lang === 'fr'
              ? "Une formation universitaire solide en informatique couplée à des distinctions internationales lors de hackathons et compétitions d'intelligence artificielle."
              : "Rigorous academic computer science training coupled with global hackathon recognitions in applied AI."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formal Degrees (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-xs font-bold text-[#F0F0F0] uppercase font-mono tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF4D00]" />
              <span>{lang === 'fr' ? '05.1 // DIPLÔMES UNIVERSITAIRES' : '05.1 // UNIVERSITY DEGREES'}</span>
            </h3>

            <div className="education-degree-list space-y-4">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className="education-degree-card p-6 bg-[#141414] border border-[#222] hover:border-[#FF4D00] transition-all space-y-3 relative group hover:bg-[#181818]"
                >
                  <div className="flex items-center justify-between font-mono">
                    <span className="px-2.5 py-0.5 text-xs bg-[#0E0E0E] text-[#FF4D00] border border-[#262626] font-bold">
                      {edu.year}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#777]">
                      <MapPin className="w-3 h-3 text-[#555]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#F0F0F0] font-heading">
                      {edu.degree[lang]}
                    </h4>
                    <p className="text-xs font-mono font-bold text-[#FF4D00] uppercase tracking-wider mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {edu.details && (
                    <p className="text-xs text-[#A0A0A0] leading-relaxed pt-1 font-sans">
                      {edu.details[lang]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Distinctions (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-xs font-bold text-[#F0F0F0] uppercase font-mono tracking-widest flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#FF4D00]" />
              <span>{lang === 'fr' ? '05.2 // DISTINCTIONS IA & HACKATHONS' : '05.2 // AI HONORS & HACKATHONS'}</span>
            </h3>

            <div className="education-honor-list space-y-4">
              {honors.map((honor, index) => (
                <div 
                  key={index}
                  className="education-honor-card p-6 bg-[#141414] border border-[#222] hover:border-[#FF4D00] transition-all space-y-2 relative overflow-hidden group hover:bg-[#181818]"
                >
                  <div className="w-3 h-3 border-b border-r border-[#333] absolute bottom-2 right-2 group-hover:border-[#FF4D00] transition-colors"></div>

                  <div className="flex items-center justify-between font-mono">
                    <span className="px-2 py-0.5 text-[10px] bg-[#0E0E0E] text-[#888] border border-[#262626] uppercase font-bold">
                      {honor.year}
                    </span>
                    <span className="text-xs font-bold text-[#FF4D00] uppercase tracking-wider">
                      {honor.prize}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#F0F0F0] font-heading pt-1">
                    {honor.title[lang]}
                  </h4>

                  <div className="text-xs text-[#888] font-mono">
                    <span>{honor.organization}</span>
                  </div>

                  <div className="pt-2 text-xs font-mono text-[#A0A0A0] flex items-center gap-1.5 border-t border-[#1F1F1F]">
                    <span className="text-[#FF4D00] font-bold">&gt;</span>
                    <span>{lang === 'fr' ? 'Projet : ' : 'Project: '}<strong className="text-[#F0F0F0]">{honor.project}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
