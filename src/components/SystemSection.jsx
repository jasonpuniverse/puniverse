import React from 'react'
import { Reveal } from '../hooks/useReveal'

const cards = [
  {
    icon: '⚡',
    title: 'AI Workflows',
    benefit: 'Automate repetitive tasks like content, posting, and data handling.',
    color: '#a855f7',
  },
  {
    icon: '🤖',
    title: 'Agent Systems',
    benefit: 'Run multi-step processes using AI agents and structured logic.',
    color: '#37b9ff',
  },
  {
    icon: '🔌',
    title: 'Integrations',
    benefit: 'Connect Shopify, APIs, and internal tools into one system.',
    color: '#f59e0b',
  },
  {
    icon: '🧠',
    title: 'Prompt Systems',
    benefit: 'Reusable AI prompts that produce consistent, high-quality outputs.',
    color: '#10b981',
  },
]

export default function SystemSection() {
  return (
    <section id="system" className="py-24 relative">
      <div
        className="absolute left-1/2 top-0 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(168,85,247,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(55,185,255,0.1)', border: '1px solid rgba(55,185,255,0.2)', color: '#38bdf8' }}>
              The PUNIVERSE System
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The System Behind{' '}
              <span className="gradient-text">AI-Driven Ecommerce</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Puniverse is not a tool — it's a working system.<br/>
              Every workflow, automation, and integration is designed to replace manual ecommerce operations.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className="card-border rounded-2xl p-6 h-full transition-all duration-300 group cursor-default"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Background accent */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${card.color}15 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                >
                  {card.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.benefit}</p>

                <div
                  className="mt-5 h-px w-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${card.color}50, transparent)` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
