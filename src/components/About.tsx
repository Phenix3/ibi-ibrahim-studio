import React, { useState } from 'react';
import { Language, ProfileData } from '../types';
import { 
  User, 
  Sparkles, 
  Award, 
  Compass, 
  Heart, 
  Languages as LangIcon, 
  CheckCircle, 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Copy, 
  Check,
  ShieldCheck,
  Zap,
  Target,
  Users
} from 'lucide-react';

interface AboutProps {
  profile: ProfileData;
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ profile, lang }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const strengthIcons = [Target, Users, ShieldCheck, Zap];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00]">
            {lang === 'fr' ? '// 01 / BIOGRAPHIE & VISION' : '// 01 / BIOGRAPHY & VISION'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0F0] font-heading tracking-tight uppercase">
            {lang === 'fr' 
              ? "Ingénierie Logicielle & Vision Africaine" 
              : "Software Engineering & Continental Vision"}
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed">
            {lang === 'fr'
              ? "De la conception d'architectures SaaS multi-tenant à l'intégration d'agents LLM résilients pour l'Afrique et l'international."
              : "From multi-tenant SaaS engineering to building resilient LLM agent systems tailored for Africa and global scale."}
          </p>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Agency Background (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] space-y-5 text-[#C0C0C0] leading-relaxed text-left relative">
              <div className="text-[10px] uppercase font-mono tracking-[0.25em] font-bold text-[#FF4D00] flex items-center gap-2">
                <span>01.1 // STORY & BACKGROUND</span>
              </div>

              <h3 className="text-xl font-bold text-[#F0F0F0] font-heading flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#FF4D00]" />
                <span>{lang === 'fr' ? 'Mon Parcours & Direction' : 'My Trajectory & Direction'}</span>
              </h3>

              {profile.fullBio[lang].map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Nexus Digital Hub Callout Card */}
              <div className="p-5 bg-[#0E0E0E] border border-[#2A2A2A] mt-6 flex items-start gap-4 text-left">
                <div className="w-10 h-10 bg-[#FF4D00] text-[#0F0F0F] font-black font-mono flex items-center justify-center shrink-0 text-sm">
                  NDH
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold text-[#F0F0F0] uppercase tracking-wide font-mono">
                    Nexus Digital Hub — Maroua
                  </div>
                  <div className="text-xs text-[#888] leading-relaxed">
                    {lang === 'fr'
                      ? "Agence digitale & pôle de formation fondé pour accélérer l'innovation technologique, l'ingénierie web moderne et l'adoption de l'intelligence artificielle au Cameroun."
                      : "Digital engineering agency & training hub founded to accelerate tech modernization, scalable web systems, and applied AI adoption in Cameroon."}
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths Bento Cards */}
            <div className="space-y-3 pt-2">
              <div className="text-[10px] uppercase font-mono tracking-[0.25em] font-bold text-[#666]">
                01.2 // CORE METHODOLOGY & STRENGTHS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.strengths[lang].map((strength, index) => {
                  const Icon = strengthIcons[index % strengthIcons.length];
                  return (
                    <div 
                      key={index}
                      className="p-5 bg-[#141414] border border-[#222] hover:border-[#FF4D00] transition-colors text-left space-y-2 group"
                    >
                      <div className="flex items-center gap-2 text-[#F0F0F0] font-bold text-xs uppercase font-mono tracking-wider">
                        <Icon className="w-4 h-4 text-[#FF4D00]" />
                        <span>{strength.title}</span>
                      </div>
                      <p className="text-xs text-[#888] leading-relaxed">
                        {strength.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sidebar Info: Languages, Interests & Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 font-mono">
            
            {/* Quick Contact & Info Card */}
            <div className="p-6 bg-[#141414] border border-[#262626] space-y-4 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF4D00]">
                01.3 // DIRECT CHANNELS
              </div>

              <div className="space-y-2.5 text-xs">
                
                {/* Location */}
                <div className="flex items-center justify-between p-3 bg-[#0F0F0F] border border-[#222]">
                  <div className="flex items-center gap-2.5 text-[#C0C0C0]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                    <span>{profile.location}</span>
                  </div>
                  <span className="text-[9px] text-[#555] uppercase">LOC</span>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 bg-[#0F0F0F] border border-[#222]">
                  <div className="flex items-center gap-2.5 text-[#C0C0C0] truncate mr-2">
                    <Mail className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.email, 'email')}
                    className="p-1 text-[#666] hover:text-[#FF4D00] transition-colors cursor-pointer shrink-0"
                    title="Copier l'adresse email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-[#FF4D00]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 bg-[#0F0F0F] border border-[#222]">
                  <div className="flex items-center gap-2.5 text-[#C0C0C0]">
                    <Phone className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                    <span>{profile.phone}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    className="p-1 text-[#666] hover:text-[#FF4D00] transition-colors cursor-pointer shrink-0"
                    title="Copier le numéro"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-[#FF4D00]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Languages Spoken */}
            <div className="p-6 bg-[#141414] border border-[#262626] space-y-4 text-left">
              <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#FF4D00] flex items-center gap-2">
                <LangIcon className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? '01.4 // LANGUES' : '01.4 // LANGUAGES'}</span>
              </div>

              <div className="space-y-2">
                {profile.languagesSpoken[lang].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[#0F0F0F] border border-[#222]">
                    <span className="text-xs font-bold text-[#F0F0F0] uppercase tracking-wider">{item.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#1A1A1A] text-[#A0A0A0] border border-[#333]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Passions */}
            <div className="p-6 bg-[#141414] border border-[#262626] space-y-4 text-left font-sans">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold text-[#FF4D00] flex items-center gap-2">
                <Heart className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? "01.5 // CENTRES D'INTÉRÊT" : '01.5 // INTERESTS & FOCUS'}</span>
              </div>

              <ul className="space-y-2 text-xs text-[#A0A0A0]">
                {profile.interests[lang].map((interest, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-[#FF4D00] mt-1.5 shrink-0"></span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
