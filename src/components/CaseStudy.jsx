import React from 'react'
import { Reveal } from '../hooks/useReveal'

const metrics = [
  { value: '80%', label: 'Reduction in manual tasks' },
  { value: '3x', label: 'Content output increase' },
  { value: '24/7', label: 'Automated operations' },
]

const steps = [
  { step: '01', title: 'AI reads the store', body: 'Agent pulls Shopify data — orders, inventory, SKUs — and builds a real-time picture of what\'s happening.' },
  { step: '02', title: 'Workflows trigger automatically', body: 'n8n orchestrates tasks: generate product descriptions, pin to Pinterest, tag orders, send email sequences.' },
  { step: '03', title: 'Founder reviews, not manages', body: 'Aetheo\'s founder checks a weekly report. The system runs; the team focuses on growth.' },
]

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.04) 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', color: '#c084fc' }}>
                📦 Live Case Study: Aetheo
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Built and Tested on a{' '}
                <span className="gradient-text">Real Brand</span>
              </h2>

              <div className="text-zinc-400 text-lg leading-relaxed mb-8">
                <p className="mb-4">
                  AETHEO is a UK-based DTC brand powered by the Puniverse system.
                  From product research to content generation and marketing automation — AI handles the heavy lifting.
                </p>
                <p className="font-medium text-zinc-300">
                  This is not theory.<br/>
                  It's a working ecommerce system.
                </p>
              </div>

              {/* Metrics */}
              <div className="flex gap-8 mb-10">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black gradient-text">{m.value}</div>
                    <div className="text-zinc-500 text-xs mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <a href="#community" className="btn-primary inline-flex items-center gap-2 no-underline text-sm">
                See How It Works
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Right: Steps */}
          <Reveal delay={150}>
            <div className="flex flex-col gap-5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(168,85,247,0.12)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)'
                    e.currentTarget.style.background = 'rgba(168,85,247,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.12)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #37b9ff)', color: 'white' }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{s.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
