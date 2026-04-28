import React from 'react';
import { Server, Database, Cpu, Play, Globe, Workflow, ShoppingCart, Zap, Box, Layers, ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Link } from 'react-router-dom';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';

export const System: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <Reveal>
        <header className="text-center mb-32 flex flex-col items-center mt-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-6 flex items-center gap-2">
            <Server size={14} /> System Architecture
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Inside the AI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-green-300">Operating System.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-10">
            A modular system that connects data, intelligence, and execution into a single ecommerce engine.
          </p>
        </header>
      </Reveal>

      {/* Core Concept */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Core Concept</SectionLabel>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Puniverse is structured like an operating system:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
              <div className="flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] px-6 py-3 rounded-full">
                <Database className="text-purple-400" size={18} />
                <span className="text-[var(--color-text-primary)] font-medium">Inputs &rarr; Data</span>
              </div>
              <div className="flex items-center gap-3 bg-teal-500/10 border border-teal-500/30 px-6 py-3 rounded-full">
                <Cpu className="text-teal-400" size={18} />
                <span className="text-[var(--color-text-primary)] font-medium">Processing &rarr; AI + Agents</span>
              </div>
              <div className="flex items-center gap-3 bg-[var(--color-surface)] border border-[var(--color-border)] px-6 py-3 rounded-full">
                <Play className="text-green-400" size={18} />
                <span className="text-[var(--color-text-primary)] font-medium">Outputs &rarr; Actions</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-[var(--color-text-primary)]">
              It doesn't just analyse. <span className="text-teal-400">It decides and executes.</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* System Layers */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>System Layers</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StaggerItem>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Database className="text-purple-400" size={20} />
                </div>
                <h3 className="text-xl font-medium text-[var(--color-text-primary)]">Data Layer</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Products, SKUs</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Orders and inventory</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Customers and reviews</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Content and ad performance</li>
              </ul>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard highlight className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                  <Cpu className="text-teal-400" size={20} />
                </div>
                <h3 className="text-xl font-medium text-[var(--color-text-primary)]">AI Brain</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)] mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Decision-making logic</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Opportunity detection</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Predictive insights</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Agent workflows</li>
              </ul>
              <div className="pt-4 border-t border-teal-500/20">
                <p className="text-xs font-semibold text-teal-500 uppercase tracking-wider mb-2">Powered By</p>
                <p className="text-xs text-teal-200/70">Claude Code &bull; OpenRouter models &bull; Autoresearch systems</p>
              </div>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Globe className="text-blue-400" size={20} />
                </div>
                <h3 className="text-xl font-medium text-[var(--color-text-primary)]">Execution Layer</h3>
              </div>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Shopify</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Amazon</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> TikTok Shop</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Ads platforms</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> APIs and automation tools</li>
              </ul>
            </GlassCard>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* Real Implementation */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Real Implementation (Your Stack)</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StaggerItem>
            <GlassCard className="h-full">
              <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center gap-2"><Workflow size={18} className="text-purple-400"/> Agentic Workflow Stack</h4>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>&bull; Claude Code with Google Antigravity</li>
                <li>&bull; GitHub &rarr; Vercel deployment</li>
                <li>&bull; n8n automation pipelines</li>
                <li>&bull; NotebookLM for research and content intelligence</li>
              </ul>
            </GlassCard>
          </StaggerItem>
          
          <StaggerItem>
            <GlassCard className="h-full">
              <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center gap-2"><ShoppingCart size={18} className="text-teal-400"/> Shopify System</h4>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Manage products like bulk product_export CSV processing, automate store updates, handle dropshipping product sync from AliExpress, CJ Dropshipping, AutoDS, Dsers, Zendrop, plus custom Liquid scripts, custom landing pages, and more.
              </p>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full">
              <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center gap-2"><Zap size={18} className="text-yellow-400"/> Automation Engine</h4>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>&bull; UGC video ads generation</li>
                <li>&bull; Meta ads automation</li>
                <li>&bull; SEO automation for AETHEO</li>
                <li>&bull; Nano Banana JSON prompting systems</li>
              </ul>
            </GlassCard>
          </StaggerItem>

          <StaggerItem>
            <GlassCard className="h-full">
              <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center gap-2"><Box size={18} className="text-blue-400"/> Sourcing Intelligence</h4>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>&bull; 1688-based sourcing workflows</li>
                <li>&bull; Margin-first product selection</li>
                <li>&bull; Supplier and logistics automation</li>
              </ul>
            </GlassCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-2">
            <GlassCard>
              <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center gap-2"><Layers size={18} className="text-pink-400"/> Content & Media System</h4>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] flex flex-col sm:flex-row gap-4 sm:gap-8">
                <li>&bull; YouTube automation (ambient + wellness channels)</li>
                <li>&bull; Long-form video generation pipelines</li>
                <li>&bull; AI-assisted research and scripting</li>
              </ul>
            </GlassCard>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* System Loop */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>System Loop</SectionLabel>
        </Reveal>
        <div className="max-w-4xl mx-auto">
          <StaggerReveal className="flex flex-wrap justify-center gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-[var(--color-surface-hover)] -translate-y-1/2 z-0"></div>
            
            {[
              "Detect opportunity",
              "Validate demand",
              "Build product + brand",
              "Generate content",
              "Launch across channels",
              "Optimise automatically"
            ].map((step, i) => (
              <StaggerItem key={i} className="relative z-10">
                <div className="bg-[var(--color-shell)] border border-[var(--color-border)] rounded-full px-6 py-3 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">{step}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <Reveal delay={0.8}>
            <p className="text-center text-teal-400 mt-12 font-medium text-lg">
              Then repeat — continuously improving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center pb-12">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
            Start with the system.<br/>
            <span className="text-[var(--color-text-tertiary)]">Then build your own.</span>
          </h2>
          <Link to="/services">
            <GlowButton className="group">
              Explore Services <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </GlowButton>
          </Link>
        </Reveal>
      </footer>
    </div>
  );
};
