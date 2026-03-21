import React from 'react'
import { Reveal } from '../hooks/useReveal'

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-hidden pt-0">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="card-elevated overflow-hidden border border-[#464554]/10 rounded-xl">
            <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-12 md:p-24 relative overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-10">
                    <span className="label-text text-[#ec0101]">Live Node Report</span>
                  </div>

                  <h2 className="headline text-5xl md:text-8xl text-[#e4e1e6] mb-8 italic leading-tight">
                    AETHEO <br />
                    <span className="text-[#ec0101] font-black not-italic text-6xl md:text-7xl">POWERED.</span>
                  </h2>

                  <p className="body-text text-xl text-[#c7c4d7] mb-12 leading-relaxed max-w-lg">
                    Witness the system in action. Every product, every creative asset, and every distribution signal on Aetheo is orchestrated by the Puniverse core.
                  </p>

                  <div className="flex flex-wrap gap-12 mb-12">
                    <div>
                      <div className="text-4xl font-black text-[#e4e1e6] mb-1">98%</div>
                      <div className="label-text text-[#c7c4d7]">Sync Efficiency</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-[#e4e1e6] mb-1">4.5h</div>
                      <div className="label-text text-[#c7c4d7]">Daily Saved</div>
                    </div>
                  </div>

                  <a href="https://aetheo.co.uk" target="_blank" className="btn-secondary no-underline inline-block group-hover:border-[#464554]/60 transition-all">
                    Visit the System Node
                  </a>
                </div>

                <div className="relative aspect-square">
                  <div className="absolute inset-0 sphere-gradient-secondary opacity-10 rounded-full blur-3xl animate-pulse" />
                  <div className="relative h-full w-full rounded-xl border border-[#464554]/20 bg-[#131316] backdrop-blur-xl flex items-center justify-center p-12 overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ec0101] animate-ping" />
                      <span className="text-[10px] font-mono text-[#c7c4d7]">LIVE_DATA_STREAM</span>
                    </div>
                    {/* Decorative grid */}
                    <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #c7c4d7 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
