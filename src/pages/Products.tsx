import React from 'react';
import { ShoppingCart, Package, Zap, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';
import { digitalProducts } from '../data/products';

export const Products: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Reveal>
        <header className="text-center mb-24 flex flex-col items-center mt-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 mb-6 flex items-center gap-2">
            <ShoppingCart size={14} /> Products & Access
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Use the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">System.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Ready-to-use workflows, agent systems, and applications to power your ecommerce brand.
          </p>
        </header>
      </Reveal>

      <section className="mb-32">
        <Reveal>
          <SectionLabel>Featured Digital Workflows</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(digitalProducts).map((product, idx) => (
            <Reveal key={product.id} delay={idx * 0.1}>
              <GlassCard className="h-full flex flex-col group p-2 pb-6 border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 relative">
                   <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                   <div className="absolute top-4 right-4 bg-teal-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      £{product.price}
                   </div>
                </div>
                <div className="px-5 flex flex-col flex-grow">
                   <p className="text-xs font-mono text-teal-400 mb-2">{product.subtitle}</p>
                   <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-3">{product.title}</h3>
                   <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow">{product.whosItFor}</p>
                   <Link to={`/product/${product.slug}`} className="mt-auto block">
                      <GlowButton className="w-full justify-center">
                        View Technical Specs & Checkout <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </GlowButton>
                   </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

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
                <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center border border-[var(--color-border)] mb-6">
                  <item.icon className="text-teal-400" size={20} />
                </div>
                <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">{item.desc}</p>
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
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Pro Access</h3>
                <p className="text-[var(--color-text-secondary)]">Get full access to all advanced systems, agents, and the private community.</p>
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
