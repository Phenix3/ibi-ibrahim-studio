import React, { useEffect } from 'react';
import { Language, ProfileData } from '../types';
import { 
  X, 
  Printer, 
  Download, 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Code, 
  Layers, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { experiencesData, projectsData, skillCategories, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-white text-slate-900 shadow-2xl overflow-hidden my-6 border border-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Action Header (Excluded from Print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-[#0E0E0E] text-white border-b border-[#222] font-mono">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F0F0F0]">
            <Briefcase className="w-4 h-4 text-[#FF4D00]" />
            <span>Curriculum Vitae — {profile.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FF4D00] hover:bg-[#FF6524] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Imprimer / Sauvegarder (PDF)' : 'Print / Save as PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#888] hover:text-[#FF4D00] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[85vh] overflow-y-auto print:max-h-none print:overflow-visible text-left text-slate-900 bg-white font-sans text-xs sm:text-sm">
          
          {/* Header Block */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-block bg-slate-900 text-white px-3 py-1 font-black text-2xl tracking-wider font-heading">
                IBI IBRAHIM
              </div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                {profile.title[lang]}
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-700 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-900" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-900" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-900" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-slate-900" />
                <span>github.com/{profile.githubUsername}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-slate-900" />
                <span>linkedin.com/in/{profile.linkedinUsername}</span>
              </div>
            </div>
          </div>

          {/* Profil */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 inline-block font-mono">
              {lang === 'fr' ? 'PROFIL' : 'PROFILE'}
            </h3>
            <p className="text-slate-800 leading-relaxed text-justify">
              {profile.bio[lang]} {profile.fullBio[lang][0]} {profile.fullBio[lang][3]}
            </p>
          </div>

          {/* Compétences Techniques */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 inline-block font-mono">
              {lang === 'fr' ? 'COMPÉTENCES TECHNIQUES' : 'TECHNICAL SKILLS'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-900">Back-end : </span>
                <span className="text-slate-700">PHP / Symfony / Laravel / API REST / NestJS / NodeJS / FastAPI / Python</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Front-end : </span>
                <span className="text-slate-700">JavaScript / TypeScript / React / NextJS / HTML5 / CSS3 / Tailwind CSS</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">IA & LLM : </span>
                <span className="text-slate-700">Claude API / OpenAI API / Prompt Engineering / MCP / RAG / LangChain</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Bases de données : </span>
                <span className="text-slate-700">MySQL / PostgreSQL / MongoDB</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Outils & systèmes : </span>
                <span className="text-slate-700">Git / GitHub / Docker / Postman / Linux / CI/CD</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Méthodes : </span>
                <span className="text-slate-700">MVC / Multi-tenant / SEO / Responsive (W3C) / JWT / OAuth2</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Paiements Afrique : </span>
                <span className="text-slate-700">MTN MoMo API / Orange Money API</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">CMS : </span>
                <span className="text-slate-700">WordPress / Sulu CMS</span>
              </div>
            </div>
          </div>

          {/* Expérience */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 inline-block font-mono">
              {lang === 'fr' ? 'EXPÉRIENCE' : 'EXPERIENCE'}
            </h3>

            <div className="space-y-5">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{exp.role[lang]}</span>
                      <span className="text-slate-700 font-semibold"> — {exp.company}</span>
                    </div>
                    <span className="font-mono text-slate-600 font-medium">{exp.period[lang]}</span>
                  </div>

                  <p className="text-slate-800 leading-relaxed">
                    {exp.description[lang]}
                  </p>

                  <div className="font-mono text-[11px] text-slate-600">
                    {exp.technologies.join(' / ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projets IA & Sélectionnés */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 inline-block font-mono">
              {lang === 'fr' ? 'PROJETS IA & SÉLECTIONNÉS' : 'AI & SELECTED PROJECTS'}
            </h3>

            <div className="space-y-4 text-xs">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-slate-900 text-sm">{proj.title}</span>
                    {proj.competition && (
                      <span className="text-[11px] font-semibold text-slate-700">{proj.competition}</span>
                    )}
                  </div>
                  <p className="text-slate-800 leading-relaxed">
                    {proj.summary[lang]}
                  </p>
                  <div className="font-mono text-[11px] text-slate-600">
                    {proj.technologies.join(' / ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formation & Footer CV info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-300 text-xs">
            <div className="space-y-2">
              <h4 className="font-black text-slate-900 uppercase font-mono">{lang === 'fr' ? 'FORMATION' : 'EDUCATION'}</h4>
              {educationData.map((edu, i) => (
                <div key={i}>
                  <div className="font-bold">{edu.year} — {edu.degree[lang]}</div>
                  <div className="text-slate-600">{edu.institution}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="font-black text-slate-900 uppercase font-mono">{lang === 'fr' ? 'LANGUES' : 'LANGUAGES'}</h4>
              <div><span className="font-bold">Français :</span> courant</div>
              <div><span className="font-bold">Anglais :</span> professionnel</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-black text-slate-900 uppercase font-mono">{lang === 'fr' ? 'ATOUTS' : 'STRENGTHS'}</h4>
              <div className="text-slate-700 leading-tight">
                Autonomie & initiative, Leadership (fondateur), Rigueur & délais, Résolution de problèmes complexes.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
