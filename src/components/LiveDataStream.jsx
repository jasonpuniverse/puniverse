import React from 'react'
import { Reveal } from '../hooks/useReveal'

export default function LiveDataStream() {
  return (
    <section className="bg-[#131316] py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="headline text-5xl md:text-6xl text-[#e4e1e6] mb-4">
              LIVE <span className="text-[#4edea3]">DATA STREAM</span>
            </h2>
            <p className="body-text text-lg text-[#c7c4d7] max-w-2xl mx-auto">
              Real-time workflow visualization. Watch your AI agents execute, adapt, and scale across distributed systems.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="card-elevated p-1">
            <img
              src="/generated-images/live-data-stream.jpg"
              alt="Live data stream visualization"
              className="w-full rounded-xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
