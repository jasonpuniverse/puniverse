import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Workflow, 
  ShoppingCart, 
  ShoppingBag, 
  Play, 
  Repeat, 
  AlertTriangle,
  Lightbulb,
  Search,
  MessageSquare,
  Network
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';

export const Aetheo: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <Reveal>
        <header className="text-center mb-24 flex flex-col items-center mt-8">
           <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 mb-6 flex items-center gap-2">
            <Workflow size={14} /> Brand Ecosystem
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Build a Self-Compounding <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">E-Commerce Engine.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-10">
            AETHEO is a brand system that turns traffic into trust, and trust into scalable revenue—across Amazon, Shopify, and TikTok.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#flywheel" className="w-full sm:w-auto">
                <GlowButton className="w-full justify-center group">
                  View The System <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </GlowButton>
            </a>
            <Link to="/services" className="w-full sm:w-auto mt-2 sm:mt-0">
                <button className="w-full px-8 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-surface)] transition-all text-sm">
                  Start Building Your Engine
                </button>
            </Link>
          </div>
        </header>
      </Reveal>

      {/* 2. THE PROBLEM & THE SHIFT */}
      <section className="mb-32">
        <Reveal>
            <SectionLabel>The Paradigm</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-surface)] rounded-3xl overflow-hidden shadow-2xl">
            {/* The Problem */}
            <div className="bg-[var(--color-shell)] p-10 md:p-14 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 transition-all group-hover:bg-red-500/10"></div>
               <AlertTriangle className="text-red-400 mb-6 w-10 h-10" />
               <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Most e-commerce brands are fragile.</h3>
               <ul className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  <li className="flex gap-3">
                     <span className="text-red-400 mt-1">&rarr;</span>
                     Dependent on one platform
                  </li>
                  <li className="flex gap-3">
                     <span className="text-red-400 mt-1">&rarr;</span>
                     Burn cash on ads without retention
                  </li>
                  <li className="flex gap-3">
                     <span className="text-red-400 mt-1">&rarr;</span>
                     No real brand equity
                  </li>
               </ul>
               <div className="pt-6 border-t border-red-500/10">
                   <p className="text-[var(--color-text-primary)] font-medium">Traffic comes in… and disappears.</p>
                   <p className="text-red-400">There is no system. Only short-term wins.</p>
               </div>
            </div>

            {/* The Shift */}
            <div className="bg-[var(--color-shell)] p-10 md:p-14 relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3 transition-all group-hover:bg-teal-500/10"></div>
               <Lightbulb className="text-teal-400 mb-6 w-10 h-10" />
               <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">AETHEO changes the model.</h3>
               
               <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
                   <div>
                       <span className="text-xs font-bold uppercase tracking-widest text-white bg-gray-500 rounded px-2 py-1 inline-block mb-3">From</span>
                       <ul className="space-y-2">
                           <li className="flex gap-3"><span className="text-[var(--color-text-tertiary)]">&bull;</span> Single-channel selling</li>
                           <li className="flex gap-3"><span className="text-[var(--color-text-tertiary)]">&bull;</span> Linear funnels</li>
                       </ul>
                   </div>
                   <div>
                       <span className="text-xs font-bold uppercase tracking-widest text-white bg-teal-400 rounded px-2 py-1 inline-block mb-3">To</span>
                       <ul className="space-y-2 text-[var(--color-text-secondary)]">
                           <li className="flex gap-3"><span className="text-teal-400">&bull;</span> Multi-channel ecosystems</li>
                           <li className="flex gap-3"><span className="text-teal-400">&bull;</span> Compounding flywheels</li>
                       </ul>
                   </div>
               </div>

               <div className="pt-8 mt-8 border-t border-teal-500/20">
                   <p className="text-[var(--color-text-primary)] text-lg font-medium">This is not marketing.</p>
                   <p className="text-teal-400 text-lg font-medium">This is infrastructure.</p>
               </div>
            </div>
        </div>
      </section>

      {/* 3. THE FLYWHEEL DIAGRAM */}
      <section id="flywheel" className="mb-32">
        <Reveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 overflow-hidden mb-16 shadow-2xl relative">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-teal-500/10 blur-3xl pointer-events-none"></div>
             {/* Flywheel Image Implementation */}
             <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[var(--color-shell)] flex items-center justify-center">
                 <img 
                    src="/images/aetheo/flywheel.png" 
                    alt="The AETHEO Brand Ecosystem Flywheel" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        // Fallback logic if image is not yet uploaded
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        e.currentTarget.nextElementSibling?.classList.add('flex');
                    }}
                 />
                 {/* Visual Fallback Container */}
                 <div className="hidden flex-col items-center justify-center w-full h-full text-center p-8 absolute inset-0 z-10 border border-teal-500/20 rounded-2xl bg-[var(--color-shell)]">
                     <Repeat size={48} className="text-teal-400/50 mb-4 animate-pulse" />
                     <p className="text-[var(--color-text-secondary)] font-mono text-sm">[ Flywheel Diagram Schema Render ]</p>
                     <p className="text-[var(--color-text-tertiary)] text-xs mt-2">Place `flywheel.png` in `/public/images/aetheo/`</p>
                 </div>
             </div>
          </div>
        </Reveal>

        {/* 4. HOW THE FLYWHEEL WORKS (Flow Logic) */}
        <Reveal>
            <SectionLabel>Flow Logic</SectionLabel>
            <div className="max-w-3xl mx-auto space-y-4 mb-20">
                {[
                    "TikTok drives massive attention",
                    "Traffic flows into Amazon & Shopify",
                    "Amazon converts and generates reviews",
                    "Reviews become social proof content",
                    "Content amplifies across social channels",
                    "Shopify captures and nurtures customers",
                    "SEO drives consistent inbound demand",
                    "The system feeds itself"
                ].map((step, idx) => (
                    <div key={idx} className="flex gap-6 items-center p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-teal-500/30 hover:bg-teal-500/5 transition-all">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-shell)] border border-[var(--color-border)] flex items-center justify-center shrink-0 font-mono text-teal-400">
                            {idx + 1}
                        </div>
                        <p className="text-[var(--color-text-secondary)] md:text-lg">{step}</p>
                    </div>
                ))}
                
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-teal-500/10 to-purple-500/10 border border-t-teal-500/30 text-center">
                    <p className="text-[var(--color-text-secondary)] uppercase tracking-widest text-xs font-bold mb-3">Result</p>
                    <p className="text-xl md:text-2xl text-[var(--color-text-primary)] font-medium leading-relaxed">
                        More traffic &rarr; More trust &rarr; More conversions &rarr; <span className="text-teal-400">Stronger brand</span>
                    </p>
                </div>
            </div>
        </Reveal>
      </section>

      {/* 5. THE 3 ENGINES */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>The Core Engines</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <StaggerItem>
            <GlassCard className="h-full border-t-orange-500/30 bg-gradient-to-b from-orange-500/5 to-transparent">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6">
                <ShoppingCart className="text-orange-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Amazon</h3>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-400 mb-6">Revenue Engine</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Captures demand at peak intent and converts at scale.
              </p>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full border-t-green-500/30 bg-gradient-to-b from-green-500/5 to-transparent">
               <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-6">
                <ShoppingBag className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Shopify</h3>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-green-400 mb-6">Brand Brain</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Owns the customer, data, and long-term value.
              </p>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full border-t-pink-500/30 bg-gradient-to-b from-pink-500/5 to-transparent">
               <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-6">
                <Play className="text-pink-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">TikTok</h3>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-pink-400 mb-6">Viral Engine</p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Generates attention, culture, and explosive reach.
              </p>
            </GlassCard>
          </StaggerItem>
        </StaggerReveal>

        <Reveal delay={0.4}>
            <p className="text-center text-[var(--color-text-tertiary)] mt-10 font-medium tracking-wide text-lg">
                Together, they don’t just operate. <span className="text-[var(--color-text-primary)]">They reinforce each other.</span>
            </p>
        </Reveal>
      </section>

      {/* 6. TRAFFIC ECOSYSTEM */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Traffic Ecosystem</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
                <GlassCard className="flex items-start gap-6 h-full">
                    <Search className="text-teal-400 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">SEO &rarr; Shopify</h4>
                        <p className="text-[var(--color-text-secondary)]">Own your traffic. Build long-term exponential domain authority.</p>
                    </div>
                </GlassCard>
            </StaggerItem>
            <StaggerItem>
                <GlassCard className="flex items-start gap-6 h-full">
                    <ShoppingCart className="text-purple-400 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Amazon Reviews</h4>
                        <p className="text-[var(--color-text-secondary)]">Turn raw purchasing customers into compounding conversion assets.</p>
                    </div>
                </GlassCard>
            </StaggerItem>
            <StaggerItem>
                <GlassCard className="flex items-start gap-6 h-full">
                    <MessageSquare className="text-pink-400 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Social Media</h4>
                        <p className="text-[var(--color-text-secondary)]">Create consistent brand presence and continuous top-of-mind recall.</p>
                    </div>
                </GlassCard>
            </StaggerItem>
            <StaggerItem>
                <GlassCard className="flex items-start gap-6 h-full">
                    <Network className="text-teal-400 shrink-0 mt-1" size={24} />
                    <div>
                        <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">TikTok Affiliates</h4>
                        <p className="text-[var(--color-text-secondary)]">Scale reach and conversion velocity without scaling ad spend.</p>
                    </div>
                </GlassCard>
            </StaggerItem>
        </StaggerReveal>
      </section>

      {/* 7. WHY IT WINS & OUTCOME */}
      <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Reveal>
            <div className="space-y-6">
                <SectionLabel>Why It Wins</SectionLabel>
                <ul className="space-y-6">
                    {[
                        "Platform diversification radically reduces risk",
                        "Each channel mathematically increases the effectiveness of others",
                        "Organic + Paid + Marketplace = Full Web Coverage",
                        "Data ownership natively enables long-term lifecycle growth"
                    ].map((bullet, idx) => (
                        <li key={idx} className="flex gap-4 text-[var(--color-text-secondary)] md:text-lg">
                            <ArrowRight className="text-teal-400 shrink-0 mt-1" size={20} />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
                <div className="pt-8 border-t border-[var(--color-border)]">
                    <p className="text-xl text-[var(--color-text-secondary)]">You are not renting attention. <br/><span className="text-[var(--color-text-primary)] font-medium">You are building an asset.</span></p>
                </div>
            </div>
        </Reveal>

        <Reveal delay={0.2}>
            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">The Ultimate Outcome</h3>
                <p className="text-purple-600 dark:text-purple-200 mb-6 font-mono text-sm uppercase tracking-widest">AETHEO Creates:</p>
                <ul className="space-y-4 text-[var(--color-text-primary)] text-lg font-medium mb-10">
                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-purple-400" /> A defensible brand</li>
                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-purple-400" /> A scalable acquisition engine</li>
                    <li className="flex gap-3 items-center"><span className="w-2 h-2 rounded-full bg-purple-400" /> A compounding revenue system</li>
                </ul>
                
                <div className="p-6 rounded-2xl bg-[var(--color-shell)] border border-[var(--color-border)] backdrop-blur-md">
                    <p className="text-[var(--color-text-secondary)] mb-2">Not a store.</p>
                    <p className="text-[var(--color-text-secondary)] mb-2">Not a campaign.</p>
                    <p className="text-2xl text-purple-400 font-bold">A System.</p>
                </div>
            </div>
        </Reveal>
      </section>

      {/* 8. FINAL CTA */}
      <section className="mb-32">
        <Reveal>
          <div className="rounded-3xl bg-teal-500/10 p-12 md:p-20 text-center relative overflow-hidden border border-teal-500/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">Build Your Brand Like a System</h3>
              <p className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
                Stop chasing traffic. Start engineering growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="#flywheel" className="w-full sm:w-auto">
                    <button className="w-full px-8 py-4 rounded-full border border-teal-500/30 text-[var(--color-text-primary)] font-medium hover:bg-teal-500/10 transition-colors text-sm">
                        Explore AETHEO
                    </button>
                </a>
                <Link to="/services" className="w-full sm:w-auto">
                    <GlowButton className="w-full justify-center group text-sm">
                        Partner With Puniverse <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </GlowButton>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};
