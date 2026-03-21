import React from 'react'
import { Reveal } from '../hooks/useReveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Floating Spheres */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 sphere-gradient-primary rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-20 w-80 h-80 sphere-gradient-secondary rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-32 left-1/3 w-72 h-72 sphere-gradient-tertiary rounded-full opacity-25 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Content (8 cols) */}
          <div className="md:col-span-8">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#464554]/20 bg-[#1f1f22]">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
                <span className="label-text">Puniverse Engine v4.0</span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="headline text-6xl md:text-7xl text-[#e4e1e6] mb-8 leading-tight">
                SCALE. <span className="text-[#ec0101]">AUTOMATE.</span> <br />
                RUN WITH AI.
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="body-text text-lg md:text-xl text-[#c7c4d7] mb-12 max-w-2xl">
                The intelligent system powering <span className="text-[#e4e1e6]">Aetheo.co.uk</span>.
                Deploying multi-agent architectures for autonomous commerce and production.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <a href="#contact" className="btn-primary no-underline text-center min-w-[240px]">
                  Request System Access
                </a>
                <a href="#case-study" className="btn-secondary no-underline text-center min-w-[240px]">
                  Explore Case Study
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Visual (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <Reveal delay={400}>
              <img
                src="/generated-images/hero-landscape.jpg"
                alt="AI-powered system visualization"
                className="w-full rounded-xl shadow-2xl"
              />
            </Reveal>

            <Reveal delay={600}>
              <div className="card-elevated p-8 space-y-8">
                {[
                  { label: 'Sync Rate', val: '99.8%' },
                  { label: 'Active Agents', val: '24/7' },
                  { label: 'Uptime', val: '100%' },
                  { label: 'Deployments', val: '500+' }
                ].map((stat, i) => (
                  <div key={i} className="border-b border-[#464554]/10 pb-6 last:border-0 last:pb-0">
                    <div className="text-4xl font-black text-[#e4e1e6] mb-2">{stat.val}</div>
                    <div className="label-text">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
