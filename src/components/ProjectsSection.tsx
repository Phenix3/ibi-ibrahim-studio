import React, { useState, useEffect, useRef } from 'react';
import { Language, Project } from '../types';
import { projectsData } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { gsap } from '../utils/gsapSetup';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Award, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Code
} from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Filter tabs reveal
      gsap.from('.projects-filter-tabs', {
        scrollTrigger: {
          trigger: '.projects-filter-tabs',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });

      // Projects grid stagger
      gsap.from('.project-card-item', {
        scrollTrigger: {
          trigger: '.projects-grid-container',
          start: 'top 85%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power3.out'
      });

      // GitHub callout reveal
      gsap.from('.projects-github-callout', {
        scrollTrigger: {
          trigger: '.projects-github-callout',
          start: 'top 90%',
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { id: 'all', label: { fr: 'TOUS LES PROJETS', en: 'ALL PROJECTS' } },
    { id: 'ai', label: { fr: 'IA & LLM', en: 'AI & LLMS' } },
    { id: 'saas', label: { fr: 'SAAS & WEB', en: 'SAAS & WEB' } },
    { id: 'plugin', label: { fr: 'FINTECH & PLUGINS', en: 'FINTECH & PLUGINS' } },
    { id: 'ecommerce', label: { fr: 'E-COMMERCE', en: 'E-COMMERCE' } },
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  return (
    <section ref={containerRef} id="projects" className="py-20 lg:py-28 relative border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="projects-header text-left max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00]">
            {lang === 'fr' ? '// 03 / PORTFOLIO & SYSTÈMES IA' : '// 03 / SELECTED PORTFOLIO & AI SYSTEMS'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0F0] font-heading tracking-tight uppercase">
            {lang === 'fr' 
              ? "Réalisations, IA Appliquée & Plateformes SaaS" 
              : "Selected Engineering & Applied AI Systems"}
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed">
            {lang === 'fr'
              ? "Découvrez mes projets d'ingénierie : solutions de santé IA offline-first primées à l'international, plateformes de tutorat adaptatif, serveurs MCP et SaaS multi-tenant."
              : "Explore featured engineering: offline-first medical AI triage systems, adaptive LLM tutoring platforms, MCP server architectures, and multi-tenant SaaS."}
          </p>
        </div>

        {/* Filter Category Tabs in Artistic Flair style */}
        <div className="projects-filter-tabs flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 font-mono scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FF4D00] text-[#0F0F0F]'
                  : 'bg-[#141414] text-[#888] hover:text-[#F0F0F0] border border-[#222]'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card-item bg-[#141414] border border-[#222] hover:border-[#FF4D00] transition-all p-6 flex flex-col justify-between group text-left relative overflow-hidden hover:bg-[#181818]"
            >
              {/* Featured Corner Badge */}
              {project.featured && (
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                  <div className="absolute transform rotate-45 bg-[#FF4D00] text-[#0F0F0F] text-[9px] font-mono font-bold py-0.5 right-[-35px] top-[15px] w-[110px] text-center uppercase tracking-wider">
                    FEATURED
                  </div>
                </div>
              )}

              <div className="space-y-4">
                
                {/* Project Header Info */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 font-mono">
                    <span className="text-[10px] px-2 py-0.5 bg-[#0E0E0E] text-[#777] border border-[#262626] uppercase font-bold">
                      {project.year}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-[#1F140E] border border-[#FF4D00]/40 text-[#FF4D00] uppercase font-bold">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[10px] px-2 py-0.5 bg-[#0E0E0E] border border-[#333] text-[#A0A0A0] flex items-center gap-1">
                        <Award className="w-3 h-3 text-[#FF4D00] shrink-0" />
                        <span className="truncate max-w-[150px]">{project.badge}</span>
                      </span>
                    )}
                  </div>

                  <div className="text-[10px] text-[#555] font-mono uppercase font-bold tracking-widest pt-1">
                    03.{idx + 1} // PROJECT
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#F0F0F0] font-heading group-hover:text-[#FF4D00] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-xs text-[#A0A0A0] leading-relaxed line-clamp-3">
                  {project.summary[lang]}
                </p>

                {/* Tech Chips with Monospace styling */}
                <div className="flex flex-wrap gap-1.5 pt-2 font-mono">
                  {project.technologies.slice(0, 5).map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 text-[10px] bg-[#0E0E0E] border border-[#262626] text-[#888]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] bg-[#0E0E0E] text-[#555]">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-[#222] flex items-center justify-between font-mono">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF4D00] hover:text-[#FF6524] transition-colors cursor-pointer uppercase tracking-wider"
                >
                  <span>{lang === 'fr' ? 'Architecture' : 'Architecture'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-[#777] hover:text-[#FF4D00] transition-colors"
                    title="Voir sur GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Global GitHub Callout */}
        <div className="projects-github-callout mt-12 p-6 bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-left font-mono">
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#F0F0F0] flex items-center gap-2 uppercase tracking-wide">
              <Github className="w-4 h-4 text-[#FF4D00]" />
              <span>{lang === 'fr' ? "Dépôts & Projets Open-Source" : 'Repositories & Open-Source Code'}</span>
            </div>
            <p className="text-xs text-[#888] font-sans">
              {lang === 'fr'
                ? "Retrouvez mes modules open-source, scripts d'automatisation et projets complets sur mon profil GitHub."
                : "Browse open-source modules, automation scripts, and experimental systems on my GitHub profile."}
            </p>
          </div>
          <a
            href="https://github.com/Phenix3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0E0E0E] hover:bg-[#FF4D00] text-[#F0F0F0] hover:text-[#0F0F0F] border border-[#2E2E2E] text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>github.com/Phenix3</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Modal Detail */}
      <ProjectDetailModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
