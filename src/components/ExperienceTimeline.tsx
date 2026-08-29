import React from 'react';
import { Language } from '../types';
import { experiencesData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Building
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-b border-[#222] bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00]">
            {lang === 'fr' ? '// 04 / EXPÉRIENCES & TRACK RECORD' : '// 04 / CAREER & TRACK RECORD'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0F0] font-heading tracking-tight uppercase">
            {lang === 'fr' 
              ? "Expériences & Réalisations en Entreprise" 
              : "Professional Leadership & Systems Built"}
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed">
            {lang === 'fr'
              ? "Plus de 5 années d'expertise dans la conception logicielle, le leadership technique et la livraison de systèmes critiques."
              : "Over 5 years of engineering leadership, system design, and production delivery across institutional and SaaS ecosystems."}
          </p>
        </div>

        {/* Timeline Layout in Artistic Flair style */}
        <div className="space-y-6">
          {experiencesData.map((exp, index) => (
            <div
              key={exp.id}
              className={`border p-6 sm:p-8 text-left transition-all relative ${
                exp.isCurrent
                  ? 'bg-[#141414] border-[#FF4D00]/60 shadow-lg shadow-black/50'
                  : 'bg-[#141414] border-[#222] hover:border-[#333]'
              }`}
            >
              {/* Corner mark for current role */}
              {exp.isCurrent && (
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FF4D00]"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left col: Role, Company, Period (4 cols) */}
                <div className="lg:col-span-4 space-y-3 font-mono">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0E0E0E] border border-[#2A2A2A] text-[11px] text-[#A0A0A0]">
                      <Calendar className="w-3 h-3 text-[#FF4D00]" />
                      <span>{exp.period[lang]}</span>
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 bg-[#FF4D00] text-[#0F0F0F] text-[10px] font-bold uppercase tracking-wider">
                        {lang === 'fr' ? 'Actuel' : 'Current'}
                      </span>
                    )}
                  </div>

                  <div className="text-[10px] text-[#555] uppercase font-bold tracking-widest pt-1">
                    04.{index + 1} // POSITION
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F0F0F0] font-heading font-sans">
                    {exp.role[lang]}
                  </h3>

                  <div className="space-y-1 pt-1">
                    <div className="text-sm font-bold text-[#FF4D00] flex items-center gap-1.5 uppercase">
                      <Building className="w-4 h-4 text-[#FF4D00] shrink-0" />
                      <span>{exp.company}</span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#777] hover:text-[#FF4D00] transition-colors"
                          title="Visiter le site"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#777]">
                      <MapPin className="w-3 h-3 text-[#555]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right col: Description, Key Deliverables & Tech stack (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                    {exp.description[lang]}
                  </p>

                  {/* Highlights Checklist with Editorial marks */}
                  <div className="space-y-2 pt-1 font-mono">
                    {exp.highlights[lang].map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2.5 text-xs text-[#C0C0C0]">
                        <span className="text-[#FF4D00] font-bold mt-0.5">&gt;</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills in Monospace */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#222] font-mono">
                    {exp.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-0.5 text-[11px] bg-[#0E0E0E] border border-[#262626] text-[#888]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
