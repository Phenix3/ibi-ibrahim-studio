import React, { useEffect } from 'react';
import { Language, Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Calendar, 
  Award, 
  Layers, 
  Code2, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { problem, solution, highlights } = project.details[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0A0A0A]/90 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-[#141414] border border-[#2A2A2A] shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222] bg-[#0E0E0E]">
          <div className="flex items-center gap-2 font-mono">
            <span className="px-2.5 py-1 bg-[#FF4D00] text-[#0F0F0F] text-xs font-bold uppercase tracking-wider">
              {project.category.toUpperCase()}
            </span>
            {project.badge && (
              <span className="px-2.5 py-1 bg-[#1A1A1A] border border-[#333] text-[#F0F0F0] text-xs flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#FF4D00]" />
                {project.badge}
              </span>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="p-1 text-[#888] hover:text-[#FF4D00] transition-colors cursor-pointer"
            aria-label="Fermer la modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Metadata */}
          <div className="space-y-2">
            <div className="text-xs text-[#777] font-mono flex items-center gap-2 uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>{project.year}</span>
              {project.competition && (
                <>
                  <span className="text-[#444]">//</span>
                  <span className="text-[#FF4D00] font-bold">{project.competition}</span>
                </>
              )}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F0F0F0] font-heading uppercase">
              {project.title}
            </h3>
            
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed pt-1">
              {project.summary[lang]}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
            
            {/* Problem Card */}
            <div className="p-4 bg-[#0F0F0F] border border-[#222] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E0E0E0] uppercase tracking-wide">
                <AlertCircle className="w-4 h-4 text-[#FF4D00]" />
                <span>{lang === 'fr' ? 'Problématique' : 'The Problem'}</span>
              </div>
              <p className="text-xs text-[#888] leading-relaxed font-sans">
                {problem}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-4 bg-[#0F0F0F] border border-[#222] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E0E0E0] uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00]" />
                <span>{lang === 'fr' ? 'Solution Apportée' : 'Engineered Solution'}</span>
              </div>
              <p className="text-xs text-[#888] leading-relaxed font-sans">
                {solution}
              </p>
            </div>

          </div>

          {/* Technical Highlights */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#F0F0F0] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF4D00]" />
              <span>{lang === 'fr' ? 'Architecture & Livrables' : 'Architecture & Deliverables'}</span>
            </h4>
            
            <div className="space-y-2 bg-[#0E0E0E] p-4 border border-[#222]">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-[#A0A0A0]">
                  <span className="text-[#FF4D00] font-bold mt-0.5">&gt;</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-2.5 font-mono">
            <h4 className="text-[10px] font-bold text-[#666] uppercase tracking-widest">
              {lang === 'fr' ? 'Technologies Utilisées' : 'Technologies & Stack'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs bg-[#0E0E0E] border border-[#262626] text-[#C0C0C0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#222] bg-[#0E0E0E] font-mono">
          <div className="text-xs text-[#777]">
            {lang === 'fr' ? 'Code & Dépôt sur GitHub' : 'Source on GitHub'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] hover:bg-[#222] border border-[#333] text-[#F0F0F0] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4 text-[#FF4D00]" />
                <span>GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#FF4D00] hover:bg-[#FF6524] text-[#0F0F0F] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {lang === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
