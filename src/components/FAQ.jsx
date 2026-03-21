import React, { useState } from 'react'
import { Reveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'How is Puniverse connected to Aetheo?',
    a: 'Puniverse is the intelligent core that powers Aetheo.co.uk. The same multi-agent systems we build for clients are deployed in real-time across the Aetheo brand ecosystem.',
  },
  {
    q: 'What makes your automation different?',
    a: 'Unlike standard scripting, our agentic workflows are research-driven and context-aware. They don\'t just follow rules—they optimize for brand growth and creative fidelity.',
  },
  {
    q: 'Is this system suitable for smaller brands?',
    a: 'Our systems are designed to scale. Whether you\'re processing 10 orders or 10,000, the architecture remains the same: efficient, autonomous, and brand-first.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <Reveal>
            <div className="label-text text-[#4edea3] mb-6">FAQ Nodes</div>
            <h2 className="headline text-5xl md:text-7xl text-[#e4e1e6] mb-8">SYSTEM <span className="text-[#4edea3]">INQUIRY.</span></h2>
          </Reveal>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                className="card-elevated p-1 cursor-pointer group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#e4e1e6] group-hover:text-[#4edea3] transition-colors">{faq.q}</h3>
                    <div className={`transition-transform duration-500 text-[#ec0101] ${open === i ? 'rotate-180' : ''}`}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>

                  {open === i && (
                    <div className="mt-8 text-[#c7c4d7] leading-relaxed animate-fade-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
