import React from 'react'
import { Reveal } from '../hooks/useReveal'

const statements = [
  {
    quote: "Automate Pinterest content with n8n in minutes",
  },
  {
    quote: "Generate product descriptions at scale with AI",
  },
  {
    quote: "Run ecommerce workflows without hiring a team",
  },
  {
    quote: "Connect APIs and tools into one system",
  },
  {
    quote: "Build once, reuse infinitely",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d0e]">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] grid-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Real Brand <span className="gradient-text">Outcomes</span>
            </h2>
          </div>
        </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statements.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-border rounded-2xl p-8 h-full flex items-center">
                <div>
                  <svg className="w-8 h-8 text-purple-500/80 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-zinc-200 text-lg leading-relaxed font-semibold">
                    {t.quote}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
