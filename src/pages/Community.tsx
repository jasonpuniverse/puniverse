import React from 'react';
import { Users, ArrowRight, CheckCircle2, MessageSquare, Zap } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';

export const Community: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="text-center mb-24 flex flex-col items-center mt-8">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-6 flex items-center gap-2">
          <Users size={14} /> Conversion Layer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] max-w-4xl">
          Join the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Community.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Get access to the systems, workflows, and updates that power the Puniverse OS.
        </p>
      </header>

      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="text-3xl font-bold text-white mb-6">Everything you need to build your own AI OS.</h2>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <span><strong>Access to Workflows:</strong> Download and deploy n8n and Zapier templates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <span><strong>Agent Systems:</strong> Pre-configured prompts and setups for Claude and OpenRouter.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <span><strong>AETHEO Breakdowns:</strong> Behind-the-scenes look at how the real brand operates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={20} />
                <span><strong>Continuous Updates:</strong> Get the latest tools and strategies as the system evolves.</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Puniverse Inner Circle</h3>
              <p className="text-purple-200 mb-8">Hosted on Skool</p>
              <div className="text-5xl font-bold text-white mb-2">$99<span className="text-xl text-gray-400 font-normal">/mo</span></div>
              <p className="text-sm text-gray-400 mb-8">Cancel anytime. Lock in early pricing.</p>
              <GlowButton className="w-full justify-center mb-4">
                Join Now <ArrowRight size={16} />
              </GlowButton>
              <p className="text-xs text-gray-500">Includes all workflows, agents, and community access.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <SectionLabel>Who It's For</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="text-center">
            <Zap className="text-yellow-400 mx-auto mb-4" size={24} />
            <h3 className="text-lg font-medium text-white mb-2">Founders</h3>
            <p className="text-sm text-gray-400">Looking to scale their ecommerce brand without hiring a massive team.</p>
          </GlassCard>
          <GlassCard className="text-center">
            <MessageSquare className="text-blue-400 mx-auto mb-4" size={24} />
            <h3 className="text-lg font-medium text-white mb-2">Builders</h3>
            <p className="text-sm text-gray-400">Wanting to learn how to connect AI agents and automation pipelines.</p>
          </GlassCard>
          <GlassCard className="text-center">
            <Users className="text-purple-400 mx-auto mb-4" size={24} />
            <h3 className="text-lg font-medium text-white mb-2">Operators</h3>
            <p className="text-sm text-gray-400">Seeking to replace manual, repetitive tasks with autonomous systems.</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};
