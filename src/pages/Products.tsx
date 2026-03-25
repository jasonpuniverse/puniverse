import React from 'react';
import { ShoppingCart, Package, Zap, ArrowRight, Lock } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';

export const Products: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Reveal>
        <header className="text-center mb-24 flex flex-col items-center mt-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 mb-6 flex items-center gap-2">
            <ShoppingCart size={14} /> Products & Access
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Use the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">System.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Ready-to-use workflows, agent systems, and applications to power your ecommerce brand.
          </p>
        </header>
      </Reveal>

      <section className="mb-32">
        <Reveal>
          <SectionLabel>Categories</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Workflows", desc: "n8n and Zapier automations for sourcing, marketing, and operations.", icon: Zap },
            { title: "Agent Systems", desc: "Pre-configured Claude Code and OpenRouter setups.", icon: Package },
            { title: "Prompt Systems", desc: "Advanced JSON prompting for Nano Banana and other models.", icon: Lock },
            { title: "Applications", desc: "Custom internal tools for Shopify management.", icon: ShoppingCart },
            { title: "Content Automation", desc: "Pipelines for YouTube and TikTok video generation.", icon: Zap },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <GlassCard className="h-full">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                  <item.icon className="text-teal-400" size={20} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{item.desc}</p>
                <button className="text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                  Explore <ArrowRight size={14} />
                </button>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      <section className="mb-32 max-w-4xl mx-auto">
        <Reveal>
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Pro Access</h3>
                <p className="text-gray-300">Get full access to all advanced systems, agents, and the private community.</p>
              </div>
              <GlowButton className="shrink-0">
                Unlock Pro Access <Lock size={16} />
              </GlowButton>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
