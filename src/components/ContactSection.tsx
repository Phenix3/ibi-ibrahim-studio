import React, { useState, useEffect, useRef } from 'react';
import { Language, ProfileData } from '../types';
import { gsap } from '../utils/gsapSetup';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'saas',
    message: ''
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Left column reveal
      gsap.from('.contact-info-col', {
        scrollTrigger: {
          trigger: '.contact-info-col',
          start: 'top 85%',
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Right form reveal
      gsap.from('.contact-form-col', {
        scrollTrigger: {
          trigger: '.contact-form-col',
          start: 'top 85%',
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate swift submission and prepare mailto fallback
    setIsSubmitted(true);
    
    const subjectPrefix = formData.subject === 'ai' ? '[IA / LLM]' : formData.subject === 'saas' ? '[SaaS / Full-Stack]' : '[Contact Portfolio]';
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`${subjectPrefix} Message de ${formData.name}`)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Attempt opening mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section ref={containerRef} id="contact" className="py-20 lg:py-28 relative border-b border-[#222] bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="contact-header text-left max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#FF4D00]">
            {lang === 'fr' ? '// 06 / CONTACT & COLLABORATION' : '// 06 / GET IN TOUCH'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F0F0] font-heading tracking-tight uppercase">
            {lang === 'fr' 
              ? "Donnons Vie à Vos Systèmes Web & IA" 
              : "Let's Build Impactful Web & AI Systems"}
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed">
            {lang === 'fr'
              ? "Disponible pour des missions d'ingénierie, du conseil technique, l'intégration d'agents IA/LLM ou des opportunités clés en entreprise."
              : "Available for engineering contracts, technical consulting, AI agent implementations, and high-impact engineering roles."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left info & social connections (5 cols) */}
          <div className="contact-info-col lg:col-span-5 space-y-6 text-left">
            
            {/* Quick Contact Box */}
            <div className="p-6 sm:p-8 bg-[#141414] border border-[#222] space-y-6 relative">
              <div className="text-xs font-bold text-[#F0F0F0] uppercase font-mono tracking-widest flex items-center justify-between border-b border-[#222] pb-3">
                <span>06.1 // CANAUX DIRECTS</span>
                <span className="text-[#FF4D00] text-[10px]">ACTIVE</span>
              </div>

              <div className="space-y-3">
                
                {/* Email Item */}
                <div className="p-4 bg-[#0E0E0E] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3 truncate mr-2">
                    <div className="w-9 h-9 bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 text-[#FF4D00]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-[#666] font-mono uppercase">Email</div>
                      <a 
                        href={`mailto:${profile.email}`} 
                        className="text-xs sm:text-sm font-semibold text-[#F0F0F0] hover:text-[#FF4D00] transition-colors truncate block font-mono"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.email, 'email')}
                    className="p-2 text-[#777] hover:text-[#FF4D00] transition-colors cursor-pointer shrink-0"
                    title="Copier l'email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-[#FF4D00]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WhatsApp Item */}
                <div className="p-4 bg-[#0E0E0E] border border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 text-[#FF4D00]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#666] font-mono uppercase">WhatsApp / Tel</div>
                      <a 
                        href={profile.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs sm:text-sm font-semibold text-[#F0F0F0] hover:text-[#FF4D00] transition-colors block font-mono"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    className="p-2 text-[#777] hover:text-[#FF4D00] transition-colors cursor-pointer shrink-0"
                    title="Copier le numéro"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#FF4D00]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 bg-[#0E0E0E] border border-[#262626] flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 text-[#888]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#666] font-mono uppercase">{lang === 'fr' ? 'Localisation' : 'Base Location'}</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#F0F0F0] font-mono">
                      {profile.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] hover:bg-[#FF4D00] text-[#F0F0F0] hover:text-[#0F0F0F] border border-[#333] hover:border-[#FF4D00] text-xs font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Discuter sur WhatsApp' : 'Direct WhatsApp Link'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>

            {/* Professional Profiles Card */}
            <div className="p-6 bg-[#141414] border border-[#222] space-y-3">
              <h4 className="text-xs font-bold text-[#F0F0F0] uppercase font-mono tracking-widest">
                {lang === 'fr' ? '06.2 // PROFILS RÉSEAUX' : '06.2 // NETWORK PROFILES'}
              </h4>

              <div className="grid grid-cols-2 gap-3 font-mono">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0E0E0E] border border-[#262626] hover:border-[#FF4D00] flex items-center gap-2 text-[#888] hover:text-[#F0F0F0] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#FF4D00]" />
                  <div className="text-xs font-bold truncate">GitHub</div>
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0E0E0E] border border-[#262626] hover:border-[#FF4D00] flex items-center gap-2 text-[#888] hover:text-[#F0F0F0] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#FF4D00]" />
                  <div className="text-xs font-bold truncate">LinkedIn</div>
                </a>
              </div>
            </div>

          </div>

          {/* Right contact form (7 cols) */}
          <div className="contact-form-col lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#141414] border border-[#222] text-left space-y-6">
              
              <div className="space-y-1 border-b border-[#222] pb-4">
                <div className="text-xs font-bold text-[#F0F0F0] uppercase font-mono tracking-widest">
                  06.3 // FORMULAIRE DE TRANSMISSION
                </div>
                <p className="text-xs text-[#888]">
                  {lang === 'fr'
                    ? 'Remplissez ce formulaire pour initier un contact direct par email.'
                    : 'Fill out this form to connect directly via email.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-[#0E0E0E] border border-[#FF4D00]/60 text-center space-y-3 font-mono">
                  <CheckCircle2 className="w-10 h-10 text-[#FF4D00] mx-auto" />
                  <div className="text-base font-bold text-[#F0F0F0] uppercase">
                    {lang === 'fr' ? 'Transmission Préparée' : 'Message Prepared'}
                  </div>
                  <p className="text-xs text-[#888] max-w-md mx-auto font-sans">
                    {lang === 'fr'
                      ? 'Votre client de messagerie a été ouvert avec les informations pré-remplies. Je vous répondrai dans les plus brefs délais.'
                      : 'Your email client has been prepared with your details. I will respond promptly.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#222] border border-[#333] text-xs text-[#F0F0F0] font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {lang === 'fr' ? 'Nouveau message' : 'Send another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 font-mono">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                        {lang === 'fr' ? 'Nom complet *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Alexandre Dupont"
                        className="w-full px-3.5 py-2.5 bg-[#0E0E0E] border border-[#2A2A2A] text-xs text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#FF4D00] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5 font-mono">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                        {lang === 'fr' ? 'Email *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandre@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#0E0E0E] border border-[#2A2A2A] text-xs text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#FF4D00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1.5 font-mono">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                      {lang === 'fr' ? 'Nature de la Demande' : 'Project Focus'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0E0E0E] border border-[#2A2A2A] text-xs text-[#F0F0F0] focus:outline-none focus:border-[#FF4D00] transition-colors"
                    >
                      <option value="saas">{lang === 'fr' ? 'Plateforme SaaS / Développement Web (Laravel/React)' : 'SaaS & Web Platform Development'}</option>
                      <option value="ai">{lang === 'fr' ? 'Intégration IA / Agents LLM & Serveurs MCP' : 'AI & LLM / MCP Agent Integration'}</option>
                      <option value="fintech">{lang === 'fr' ? 'Paiements Mobile Money (MTN MoMo / Orange Money)' : 'African Mobile Money Payments'}</option>
                      <option value="recruitment">{lang === 'fr' ? 'Opportunité de Recrutement / Ingénierie' : 'Career / Engineering Opportunity'}</option>
                      <option value="other">{lang === 'fr' ? 'Autre demande' : 'Other Inquiries'}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 font-mono">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                      {lang === 'fr' ? 'Message & Détails *' : 'Message *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'fr' ? 'Décrivez votre projet, vos besoins techniques ou vos objectifs...' : 'Outline your project requirements, tech stack, or objectives...'}
                      className="w-full px-3.5 py-2.5 bg-[#0E0E0E] border border-[#2A2A2A] text-xs text-[#F0F0F0] placeholder-[#555] focus:outline-none focus:border-[#FF4D00] transition-colors resize-none font-sans"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#FF4D00] hover:bg-[#FF6524] text-[#0F0F0F] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer font-mono"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'Transmettre ma demande' : 'Submit Inquire Message'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
