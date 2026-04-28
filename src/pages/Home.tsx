'use client';

import React from 'react';
import { Check, X, Zap, BarChart3, Box, Layers, Cpu, TrendingUp, Users } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ContactForm } from '../components/ui/ContactForm';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';


export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />

      {/* All sections below hero — constrained container */}
      <div className="max-w-6xl mx-auto px-6 pb-16">

      {/* Problem Section */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Ecommerce is fragmented by default</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-surface)] rounded-2xl overflow-hidden">
            <div className="bg-[var(--color-shell)] p-10">
              <ul className="space-y-6 text-[var(--color-text-secondary)] text-sm">
                <li className="flex items-start gap-3">
                  <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <span>8+ tools with no central intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <span>Data lives in silos across Shopify, ads, and suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <span>Decisions are manual, slow, and reactive</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                  <span>No feedback loop from customer &rarr; product &rarr; content</span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-shell)] p-10 relative overflow-hidden flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 bg-teal-500/5 pointer-events-none"></div>
              <p className="text-xl font-medium text-[var(--color-text-primary)] relative z-10 mb-2">You don't need more tools.</p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 relative z-10">You need a system.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What is Puniverse */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>A System, Not Another Tool</SectionLabel>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              Puniverse is an AI Operating System for ecommerce.<br/><br/>
              It connects workflows, agents, data, and execution into a single layer — so your business doesn't just show data, it acts on it.
            </p>
          </div>
        </Reveal>
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Identify opportunities', icon: Zap },
            { label: 'Launch products', icon: Box },
            { label: 'Generate content', icon: Layers },
            { label: 'Optimise performance', icon: TrendingUp },
            { label: 'Manage operations', icon: Cpu }
          ].map((item, i) => (
            <StaggerItem key={i}>
              <GlassCard className="flex flex-col items-center text-center p-6 h-full">
                <item.icon className="text-teal-400 mb-4" size={24} />
                <span className="text-sm text-[var(--color-text-secondary)]">{item.label}</span>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <Reveal delay={0.3}>
          <p className="text-center text-[var(--color-text-tertiary)] mt-8 font-medium tracking-wide uppercase text-sm">All as part of one system.</p>
        </Reveal>
      </section>

      {/* How It Works */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>From Data to Decisions to Actions</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <GlassCard className="h-full">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-purple-400 bg-purple-400/10 px-2 py-1 rounded mb-4">Data Layer</span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">Products, orders, customers, content, and performance signals.</p>
            </GlassCard>
          </StaggerItem>
          <StaggerItem>
            <GlassCard highlight className="h-full">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-teal-400 bg-teal-400/10 px-2 py-1 rounded mb-4">AI Layer</span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">Decision-making, predictions, and agent workflows.</p>
            </GlassCard>
          </StaggerItem>
          <StaggerItem>
            <GlassCard className="h-full">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-400 bg-blue-400/10 px-2 py-1 rounded mb-4">Execution Layer</span>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">Shopify, ads, content, sourcing, and automation pipelines.</p>
            </GlassCard>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* AETHEO Proof */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Built on a Real Brand</SectionLabel>
          <div className="rounded-2xl bg-teal-500/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">AETHEO is not a demo.</h3>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">It is the live system running on Puniverse.</p>
              <ul className="space-y-4 text-[var(--color-text-secondary)] mb-8">
                <li className="flex items-center gap-3"><Check className="text-teal-400" size={18} /> Product development powered by AI</li>
                <li className="flex items-center gap-3"><Check className="text-teal-400" size={18} /> Content and SEO generated at scale</li>
                <li className="flex items-center gap-3"><Check className="text-teal-400" size={18} /> Automation replacing manual workflows</li>
                <li className="flex items-center gap-3"><Check className="text-teal-400" size={18} /> Transitioning into a premium UK-based wellness brand</li>
              </ul>
              <div className="pt-6 border-t border-[var(--color-border)]">
                <p className="text-lg font-medium text-[var(--color-text-primary)]">Puniverse is the engine. <span className="text-teal-400">AETHEO is the proof.</span></p>
                <Link to="/aetheo" className="inline-block mt-4 text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 text-sm font-medium transition-colors">
                  Read the Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What You Can Do */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>From Idea to Scale — In One System</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Validate products using AI-driven research",
            "Build brands with structured systems",
            "Automate content, SEO, and marketing",
            "Sync Shopify, Amazon, and suppliers",
            "Run operations with minimal manual work"
          ].map((text, i) => (
            <StaggerItem key={i}>
              <GlassCard className="flex items-start gap-4 h-full">
                <div className="w-8 h-8 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center shrink-0 text-[var(--color-text-secondary)]">
                  {i + 1}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] pt-1 leading-relaxed">{text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Community Section */}
      <section className="mb-32">
        <Reveal>
          <div className="rounded-2xl bg-purple-500/10 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Join the Puniverse System</h3>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">Learn how to build and run ecommerce using AI.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {['Real workflows', 'Agent systems', 'AETHEO breakdowns', 'Early access to tools'].map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                ))}
              </div>
              
              <Link to="/community">
                <GlowButton className="mx-auto">
                  Join Community <Users size={16} />
                </GlowButton>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Outcome Section */}
      <section className="mb-32">
        <StaggerReveal className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { text: "Launch faster", icon: Zap },
            { text: "Operate leaner", icon: BarChart3 },
            { text: "Scale smarter", icon: TrendingUp },
            { text: "Replace manual work with systems", icon: Cpu }
          ].map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center text-teal-400">
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-medium text-[var(--color-text-secondary)]">{item.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* FAQ */}
      <section className="mb-32 max-w-3xl mx-auto">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
        </Reveal>
        <StaggerReveal className="space-y-4">
          {[
            { q: "Is this a tool or a platform?", a: "Neither. It's a system made of workflows, agents, and integrations." },
            { q: "Do I need technical skills?", a: "No. You can start with ready-to-use workflows and build up." },
            { q: "What do I get for free?", a: "Access to core workflows and system logic." },
            { q: "What is inside the community?", a: "Advanced systems, tutorials, and real-world implementations." }
          ].map((faq, i) => (
            <StaggerItem key={i}>
              <GlassCard>
                <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">{faq.q}</h4>
                <p className="text-[var(--color-text-secondary)]">{faq.a}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">Deployment Query</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-8 leading-tight">
                INITIATE <br/>
                <span className="text-emerald-400 font-black italic">CONTACT.</span>
              </h2>
              <p className="text-xl text-[var(--color-text-secondary)] mb-12 leading-relaxed max-w-lg">
                Ready to deploy autonomous systems? Request custom blueprints for your brand or enterprise access to our multi-agent core.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-surface-hover)] flex items-center justify-center text-[var(--color-text-primary)] transition-colors group-hover:bg-red-500/20">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] mb-1">Digital Node</div>
                    <span className="text-xl text-[var(--color-text-primary)] font-bold group-hover:text-emerald-400 transition-colors">hello@puniverse.net</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--color-surface)] rounded-2xl p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer CTA */}
      <footer className="text-center pb-12">
        <Reveal>
          <p className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] max-w-2xl mx-auto leading-relaxed mb-8">
            Build, run, and scale ecommerce — <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">with AI doing most of the work.</span>
          </p>
          <Link to="/products">
            <button className="px-8 py-3 rounded-full bg-[var(--color-surface-hover)] text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-surface-hover)] transition-colors">
              View Products
            </button>
          </Link>
        </Reveal>
      </footer>
      </div> {/* end constrained container */}
    </div>
  );
};
