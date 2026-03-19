import React from 'react'
import { Reveal } from '../hooks/useReveal'

const badges = [
  { name: 'n8n Workflows', icon: '⚡' },
  { name: 'Shopify Systems', icon: '🛍️' },
  { name: 'AI Agents', icon: '🤖' },
  { name: 'API Integrations', icon: '🔌' },
  { name: 'Automation Pipelines', icon: '🔄' },
]

export default function TrustBadges() {
  return (
    <section className="py-16 relative" style={{ borderTop: '1px solid rgba(168,85,247,0.08)', borderBottom: '1px solid rgba(168,85,247,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-center text-zinc-500 text-sm font-medium tracking-wider uppercase mb-8">
            Built with real tools, not theory
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)'
                  e.currentTarget.style.background = 'rgba(168,85,247,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <span className="text-xl">{b.icon}</span>
                <div>
                  <div className="text-zinc-200 text-sm font-semibold">{b.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
