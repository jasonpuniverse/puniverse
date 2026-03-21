import React from 'react'
import { Reveal } from '../hooks/useReveal'

const products = [
  {
    title: "System v4.0",
    label: "Core OS",
    desc: "The multi-agent framework powering autonomous brand operations.",
    cta: "Request Blueprint"
  },
  {
    title: "Aura Flow",
    label: "Commerce",
    desc: "Proprietary Shopify integration for automated store management.",
    cta: "Explore Tech"
  },
  {
    title: "Nebula Admin",
    label: "Interface",
    desc: "Unified command center for orchestrating agentic workflows.",
    cta: "Access Node"
  }
]

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <Reveal>
            <div className="label-text text-[#4edea3] mb-6">Product Ecosystem</div>
            <h2 className="headline text-5xl md:text-7xl text-[#e4e1e6] mb-8">
              BUILT FOR <span className="text-[#ec0101]">SCALE.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-elevated p-8 h-full flex flex-col border border-[#464554]/10 rounded-xl">
                <div className="mb-8">
                  <span className="label-text text-[#ec0101] block mb-2">{p.label}</span>
                  <h3 className="text-2xl font-black text-[#e4e1e6]">{p.title}</h3>
                </div>

                <p className="body-text text-sm text-[#c7c4d7] mb-12 flex-grow leading-relaxed">
                  {p.desc}
                </p>

                <button className="text-xs font-bold uppercase tracking-widest text-[#4edea3] hover:text-[#e4e1e6] transition-colors flex items-center gap-2 group">
                  {p.cta} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card-elevated p-1">
            <img
              src="/generated-images/products-showcase.jpg"
              alt="Premium products showcase"
              className="w-full rounded-xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
