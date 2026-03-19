import React from 'react'
import { Reveal } from '../hooks/useReveal'

export default function Community() {
  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden card-border group"
          >
            {/* Animated bg gradient */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(55,185,255,0.4) 100%)',
                filter: 'blur(80px)',
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Join the <span className="gradient-text">Puniverse Community</span>
              </h2>

              <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Learn how to run ecommerce using AI, automation, and lightweight systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="btn-primary flex items-center gap-2 text-lg px-8 py-4 no-underline w-full sm:w-auto"
                >
                  Join Community
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href="#products"
                  className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4 w-full sm:w-auto text-zinc-300 hover:text-white"
                >
                  Start with Free Workflows
                </a>
              </div>

              {/* Mini features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-purple-500/10">
                {[
                  ['⚡', 'Step-by-step workflows'],
                  ['🛒', 'Real system breakdowns'],
                  ['👀', 'AETHEO behind the scenes'],
                  ['🛠️', 'Early access to tools'],
                ].map(([icon, label], i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
