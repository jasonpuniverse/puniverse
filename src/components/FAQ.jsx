import React, { useState } from 'react'
import { Reveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'What is Puniverse?',
    a: 'A system for running ecommerce using AI, automation, and integrated tools.',
  },
  {
    q: 'Do I need coding skills?',
    a: 'No. Most workflows are designed to be used with minimal technical knowledge.',
  },
  {
    q: 'Are the workflows free?',
    a: 'Some are free. Advanced systems and tools are available inside the community.',
  },
  {
    q: 'What do I get in the community?',
    a: 'Access to workflows, tutorials, system breakdowns, and early tools.',
  },
  {
    q: 'How is this different from other AI tools?',
    a: 'Puniverse focuses on real systems used in ecommerce — not isolated tools.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 relative bg-[#09090a]">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? 'rgba(255,255,255,0.04)' : 'transparent',
                    border: '1px solid',
                    borderColor: isOpen ? 'rgba(168,85,247,0.3)' : 'rgba(255,255,255,0.05)',
                  }}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className={`font-semibold ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                      {faq.q}
                    </span>
                    <span className="text-purple-400 font-bold ml-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '200px' : '0',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
