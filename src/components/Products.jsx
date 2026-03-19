import React from 'react'
import { Reveal } from '../hooks/useReveal'

const products = [
  {
    title: 'Free Workflows',
    desc: 'Start with ready-to-use automations and learn how they work.',
    price: 'Free',
    features: ['Pinterest Auto-Pinning', 'Order Tagging', 'Basic Content Gen'],
    cta: 'View Workflows',
    primary: false,
  },
  {
    title: 'Advanced Systems',
    desc: 'Unlock full workflows, agent setups, and scalable automation.',
    price: '$99/mo',
    features: ['All Advanced Workflows', 'Private Community Access', 'Weekly Live Builds', 'Agent Templates'],
    cta: 'Unlock Pro',
    primary: true,
  },
  {
    title: 'AI Tools',
    desc: 'Simple interfaces powered by real backend systems.',
    price: 'Custom',
    features: ['Dedicated AI Engineer', 'Custom Data Pipelines', 'Proprietary Agents'],
    cta: 'Try Tools',
    primary: false,
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 relative overflow-hidden" style={{ borderTop: '1px solid rgba(168,85,247,0.08)' }}>
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What You <span className="gradient-text">Get</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Everything inside Puniverse is built to be used — not just explained.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className="rounded-2xl p-8 h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(17,17,19,0.9) 0%, rgba(24,24,27,0.9) 100%)',
                  border: p.primary ? '1px solid rgba(168,85,247,0.5)' : '1px solid rgba(168,85,247,0.15)',
                  boxShadow: p.primary ? '0 0 30px rgba(168,85,247,0.1)' : 'none',
                }}
              >
                {p.primary && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
                )}

                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                </div>
                <div className="mb-6">
                  <span className="text-xl font-bold gradient-text">{p.price}</span>
                </div>
                
                <p className="text-zinc-400 text-sm mb-8 leading-relaxed flex-grow">
                  {p.desc}
                </p>

                <ul className="mb-8 space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.primary ? '#community' : '#contact'}
                  className={`w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 no-underline ${
                    p.primary 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                      : 'bg-transparent text-white border border-purple-500/40 hover:bg-purple-500/10 hover:border-purple-500'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
