import React, { useState } from 'react';
import { Language, SkillCategory } from '../types';
import { skillCategories } from '../data/portfolioData';
import { 
  Code, 
  Bot, 
  Server, 
  Layout, 
  Database, 
  CreditCard, 
  Wrench, 
  Search, 
  Sparkles, 
  CheckCircle2,
  Filter
} from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-4 h-4 text-[#FF4D00]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#FF4D00]" />;
      case 'Layout': return <Layout className="w-4 h-4 text-[#FF4D00]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#FF4D00]" />;
      case 'CreditCard': return <CreditCard className="w-4 h-4 text-[#FF4D00]" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-[#FF4D00]" />;
      default: return <Code className="w-4 h-4 text-[#FF4D00]" />;
    }
  };

  // Filter categories and skills
  const filteredCategories = skillCategories.map(category => {
    const matchingSkills = category.skills.filter(skill => 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    if (searchQuery.trim() !== '' && category.skills.length === 0) return false;
    return true;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-b border-[#222] bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00]">
            {lang === 'fr' ? '// 02 / STACK TECHNIQUE & SPÉCIALISATIONS' : '// 02 / TECH STACK & ENGINEERING'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0F0] font-heading tracking-tight uppercase">
            {lang === 'fr' 
              ? "Architectures, IA & Passerelles de Paiement" 
              : "Architectures, Applied AI & Payment Stacks"}
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed">
            {lang === 'fr'
              ? "De l'ingénierie backend robuste (Laravel, Symfony, FastAPI) à l'intégration d'agents LLM résilients et des passerelles Mobile Money camerounaises."
              : "From high-scale backend engineering to cutting-edge LLM agent protocols and African fintech API integrations."}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 font-mono">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FF4D00] text-[#0F0F0F]'
                  : 'bg-[#141414] text-[#888] hover:text-[#F0F0F0] border border-[#222]'
              }`}
            >
              {lang === 'fr' ? 'TOUTES LES CATÉGORIES' : 'ALL CATEGORIES'}
            </button>
            
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF4D00] text-[#0F0F0F]'
                    : 'bg-[#141414] text-[#888] hover:text-[#F0F0F0] border border-[#222]'
                }`}
              >
                {cat.title[lang]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-[#666] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fr' ? 'Filtrer (ex: Laravel, MCP)...' : 'Filter (e.g. Laravel, MCP)...'}
              className="w-full pl-9 pr-8 py-1.5 bg-[#141414] border border-[#262626] text-xs text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#FF4D00] transition-colors uppercase tracking-wider"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#666] hover:text-[#FF4D00]"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Skill Category Cards Grid in Artistic Flair styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, cIdx) => (
            <div
              key={category.id}
              className="bg-[#141414] border border-[#222] hover:border-[#FF4D00] transition-all p-6 text-left flex flex-col justify-between group relative hover:bg-[#181818]"
            >
              {/* Corner mark */}
              <div className="w-4 h-4 border-b border-r border-[#333] absolute bottom-3 right-3 group-hover:border-[#FF4D00] transition-colors"></div>

              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#0E0E0E] border border-[#262626]">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <div className="text-[10px] text-[#666] font-mono uppercase font-bold tracking-widest">
                        02.{cIdx + 1} // DOMAIN
                      </div>
                      <h3 className="text-base font-bold text-[#F0F0F0] font-heading">
                        {category.title[lang]}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#888] leading-relaxed min-h-[32px]">
                  {category.description[lang]}
                </p>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.skills.map((skill, sIndex) => (
                    <div
                      key={sIndex}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-[#1F140E] border border-[#FF4D00]/50 text-[#FF4D00]'
                          : 'bg-[#0E0E0E] border border-[#262626] text-[#A0A0A0] hover:border-[#444]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full shrink-0" />
                      )}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className={`text-[9px] px-1 py-0.2 uppercase font-bold ${
                          skill.level === 'Expert' 
                            ? 'bg-[#FF4D00] text-[#0F0F0F]' 
                            : skill.level === 'Advanced'
                            ? 'bg-[#2A2A2A] text-[#E0E0E0]'
                            : 'bg-[#1C1C1C] text-[#666]'
                        }`}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-[#666] text-sm font-mono uppercase tracking-widest">
            {lang === 'fr' 
              ? "Aucune compétence ne correspond à votre recherche." 
              : "No skills matched your search query."}
          </div>
        )}

      </div>
    </section>
  );
};
