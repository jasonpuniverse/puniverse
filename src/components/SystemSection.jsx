import React from 'react'
import { Reveal } from '../hooks/useReveal'

export default function SystemSection() {
  return (
    <section id="system" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="label-text text-[#4edea3]">Core Infrastructure</span>
              </div>

              <h2 className="headline text-5xl md:text-7xl text-[#e4e1e6] mb-8 leading-tight">
                THE INTELLIGENT <br />
                <span className="text-[#4edea3]">OPERATING SYSTEM.</span>
              </h2>

              <p className="body-text text-xl text-[#c7c4d7] mb-12 leading-relaxed">
                Puniverse isn't just a site—it's the multi-agent backbone of Aetheo. Our systems automate sourcing, visual production, and distribution across the digital ecosystem.
              </p>

              <div className="grid gap-6">
                {[
                  { title: "Agentic Workflows", desc: "Autonomous pipelines for content and commerce." },
                  { title: "Neural Distribution", desc: "Automated scaling across social and retail nodes." },
                  { title: "Sovereign Intelligence", desc: "Private deployments of state-of-the-art models." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-xl bg-[#1f1f22] border border-[#464554]/10 hover:border-[#464554]/30 hover:bg-[#2a2a2d] transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4edea3]/20 to-[#ec0101]/20 border border-[#464554]/20 flex items-center justify-center text-[#e4e1e6] font-bold group-hover:scale-110 transition-transform">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-[#e4e1e6] font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-[#c7c4d7] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-elevated p-1">
              <img
                src="/generated-images/system-architecture.jpg"
                alt="System architecture visualization"
                className="w-full rounded-xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
