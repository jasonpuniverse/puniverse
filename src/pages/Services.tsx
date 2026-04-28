import React from 'react';
import { Bot, Workflow, Code, LayoutDashboard, ArrowRight, Video, Target, Briefcase } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';

export const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <Reveal>
        <header className="text-center mb-24 flex flex-col items-center mt-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 mb-6 flex items-center gap-2">
            <Briefcase size={14} /> Agency & Consulting
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Bespoke <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Engineering.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            High-ticket, Done-For-You (DFY) system builds. We design, deploy, and scale custom AI infrastructure, automated CRM pipelines, and revenue-driving digital presences.
          </p>
        </header>
      </Reveal>

      {/* Category 1: AI Infrastructure */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>AI Infrastructure & Agents</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StaggerItem>
            <GlassCard className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6">
                <Code className="text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-3">Claude Code Custom Setups</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow">
                Turnkey integration of Anthropic's Claude Code CLI. We configure environment variables, setup seamless workflow loops, and train the agent strictly on your core codebase principles saving hours of initial spin-up friction.
              </p>
              <GlowButton className="w-full justify-center group">
                Inquire for Custom Quote <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
            </GlassCard>
          </StaggerItem>
          
          <StaggerItem>
            <GlassCard className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mb-6">
                <Bot className="text-teal-400" size={24} />
              </div>
              <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-3">Dedicated Niche Agents</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 flex-grow">
                Out-of-the-box OpenClaw/Hermes Agents tailored exclusively for a dedicated industry or special use-case. Deploy highly specific multi-agent systems internally without hiring developers.
              </p>
              <GlowButton className="w-full justify-center group">
                Inquire for Custom Quote <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
            </GlassCard>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* Category 2: Automated Growth Pipelines */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Automated Growth & CRM</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggerItem>
            <GlassCard className="h-full">
              <Workflow className="text-purple-400 mb-4" size={20} />
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">Social Media Management</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Complete, hands-free Zapier/n8n arrays that scrape trends, generate assets via Gemini/GPT-4V, and natively post to TikTok, IG Reels, and Twitter daily.
              </p>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full">
              <Video className="text-teal-400 mb-4" size={20} />
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">Video Production Powerhouse</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                End-to-end automation pipelines utilizing Veo 3.1 and Runway Gen-3. Submit a script and receive a fully narrated, stylized, and edited short-form video in minutes.
              </p>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full">
              <Target className="text-purple-400 mb-4" size={20} />
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">Lead Magnet / CRM Funnels</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Automated progression loops: Prospecting ➔ Cold Outreach ➔ Warm Nurturing ➔ Auto-Follow Up. We integrate HubSpot/Salesforce directly into AI responders.
              </p>
            </GlassCard>
          </StaggerItem>
        </StaggerReveal>
        
        <Reveal delay={0.2} className="mt-8 flex justify-center">
            <GlowButton className="group mx-auto">
               Book a Strategy Call <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
        </Reveal>
      </section>

      {/* Category 3: Niche Core Web Upgrades */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Digital Presence Revamps</SectionLabel>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full"></div>
             
             <div className="w-full md:w-1/3">
                 <LayoutDashboard className="text-teal-400 w-16 h-16 mb-6" />
                 <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Localized Niche Domination.</h3>
                 <p className="text-[var(--color-text-secondary)] leading-relaxed">
                   We explicitly target traditional local services and elevate them into high-conversion digital machines through elite web design and AI-SEO domination.
                 </p>
             </div>

             <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { title: "HVAC Contractors", desc: "Instantly capture leads and automate SMS appointment booking." },
                   { title: "Restaurants", desc: "Visually stunning menus synced with automated review-reply systems." },
                   { title: "High-Street Boutiques", desc: "Omnichannel Shopify integrations with AI personalized email flows." },
                   { title: "Digital Marketing SaaS", desc: "Enterprise redesigns matching Silicon-Valley tier framer animations." }
                 ].map((niche, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[var(--color-surface-hover)] border border-[var(--color-border)]">
                        <h4 className="text-[var(--color-text-primary)] font-medium mb-1">{niche.title}</h4>
                        <p className="text-xs text-[var(--color-text-tertiary)]">{niche.desc}</p>
                    </div>
                 ))}
             </div>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 flex justify-center">
            <GlowButton className="group mx-auto">
               Inquire for Turnkey Launch <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
        </Reveal>
      </section>
    </div>
  );
};
