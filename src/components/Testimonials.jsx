import React from 'react'
import { Reveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote: "The multi-agent system has completely transformed how we handle our creative production. It's like having a 10-person team running on autopilot.",
    author: "Creative Director",
    org: "Aetheo Node"
  },
  {
    quote: "Deployment was seamless. The sync rate between our social signals and product distribution is unlike anything we've seen in DTC.",
    author: "Operations Lead",
    org: "Puniverse Client"
  },
  {
    quote: "Puniverse is the silent partner every high-growth brand needs. The automation quality is indistinguishable from human work.",
    author: "Founding Partner",
    org: "Ventures Group"
  },
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <Reveal>
            <div className="label-text text-[#4edea3] mb-6">Validation Logs</div>
            <h2 className="headline text-5xl md:text-7xl text-[#e4e1e6] mb-8 italic">SYSTEM <span className="text-[#4edea3]">FEEDBACK.</span></h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-elevated p-1 h-full">
                <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-10 h-full flex flex-col items-center text-center">
                  <div className="mb-10 text-[#ec0101]/20">
                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 11.3726 18.017 6 22.017 6V9C19.017 9 17.017 11.3726 17.017 15H21.017V21H14.017ZM3.017 21L3.017 18C3.017 11.3726 7.017 6 11.017 6V9C8.017 9 6.017 11.3726 6.017 15H10.017V21H3.017Z" />
                    </svg>
                  </div>

                  <p className="text-lg text-[#c7c4d7] font-medium mb-10 leading-relaxed italic">
                    "{t.quote}"
                  </p>

                  <div className="mt-auto">
                    <div className="text-sm font-black text-[#e4e1e6] tracking-widest uppercase">{t.author}</div>
                    <div className="label-text text-[#4edea3] font-bold uppercase tracking-widest mt-1">{t.org}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
