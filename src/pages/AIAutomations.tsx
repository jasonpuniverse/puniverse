import React from 'react';
import { Cpu, Code, Layers, GitBranch, Terminal, ArrowRight, Server } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionLabel } from '../components/ui/SectionLabel';

export const AIAutomations: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="text-center mb-24 flex flex-col items-center mt-8">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-6 flex items-center gap-2">
          <Cpu size={14} /> Build Layer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] max-w-4xl">
          How It's <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Built.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Deep dive into the workflows, agents, and infrastructure that power the Puniverse OS.
        </p>
      </header>

      <div className="space-y-32">
        <section>
          <SectionLabel>1. Workflows</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-xl font-medium text-white mb-4">Free Workflows</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>&bull; Basic product research automation</li>
                <li>&bull; Simple content generation scripts</li>
                <li>&bull; Shopify inventory sync basics</li>
              </ul>
            </GlassCard>
            <GlassCard highlight>
              <h3 className="text-xl font-medium text-white mb-4">Advanced Workflows</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>&bull; Multi-agent product validation</li>
                <li>&bull; Automated supplier negotiation drafts</li>
                <li>&bull; Full-funnel ad creative generation</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        <section>
          <SectionLabel>2. Agents</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-teal-400" size={20} />
                <h3 className="text-xl font-medium text-white">Claude Code Setups</h3>
              </div>
              <p className="text-sm text-gray-400">Custom instructions and environment setups for autonomous coding and system management.</p>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Layers className="text-purple-400" size={20} />
                <h3 className="text-xl font-medium text-white">Autoresearch Systems</h3>
              </div>
              <p className="text-sm text-gray-400">Agents that scrape, analyze, and synthesize market trends and competitor data.</p>
            </GlassCard>
          </div>
        </section>

        <section>
          <SectionLabel>3. Tools & Skills</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Nano Banana', 'SEO Agents', 'Blog Agents', 'Video Pipelines'].map((tool, i) => (
              <GlassCard key={i} className="text-center p-6">
                <Code className="text-gray-500 mx-auto mb-4" size={24} />
                <h4 className="text-white font-medium">{tool}</h4>
              </GlassCard>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>4. Integrations & 5. Infrastructure</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                <GitBranch size={18} className="text-blue-400"/> Integrations
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Shopify', 'APIs', 'n8n', 'OpenRouter'].map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">{item}</span>
                ))}
              </div>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                <Server size={18} className="text-green-400"/> Infrastructure
              </h3>
              <div className="flex flex-wrap gap-2">
                {['GitHub', 'Vercel', 'Deployment Systems'].map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">{item}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
};
