import React from 'react'
import { Reveal } from '../hooks/useReveal'

const categories = [
  {
    title: 'Apps & Tools',
    desc: 'Self-hosted AI interfaces and orchestration nodes.',
    items: ['Nebula Admin v1', 'ImageGen Hub', 'Video Orchestrator'],
  },
  {
    title: 'Workflows',
    desc: 'Production-ready n8n blueprints for rapid scaling.',
    items: ['Shopify Sync', 'Pinterest Auto-Pilot', 'SEO Engine'],
  },
  {
    title: 'Templates',
    desc: 'Pre-configured agent identities and system prompts.',
    items: ['Claude SEO Specialist', 'Marketing Strategist', 'Support Node'],
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-[#131316] min-h-screen pt-40 pb-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
             <h1 className="headline text-6xl md:text-9xl text-[#e4e1e6] mb-6 italic"><span className="text-[#4edea3] font-black not-italic">THE</span> CATALOG.</h1>
             <p className="text-[#c7c4d7] text-xl max-w-2xl mx-auto">Everything you need to build your autonomous commerce stack.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-elevated p-1 h-full">
                 <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-10 h-full flex flex-col">
                    <h3 className="text-3xl font-black text-[#e4e1e6] mb-4 italic tracking-tight">{cat.title}</h3>
                    <p className="text-[#c7c4d7] text-sm mb-10">{cat.desc}</p>
                    <ul className="space-y-4 mb-12 flex-grow">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-[#e4e1e6] font-bold text-xs uppercase tracking-widest border-b border-[#464554]/10 pb-3 italic font-serif opacity-80 decoration-[#4edea3] underline underline-offset-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="btn-primary no-underline text-center text-xs">Explore Catalog</a>
                 </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
