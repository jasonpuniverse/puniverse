import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../hooks/useReveal'

const sections = [
  {
    title: 'Agentic Workflows',
    items: [
      'Full-stack Claude Code setup',
      'Google Antigravity IDE for development',
      'Openrouter API connections',
      'GitHub + Vercel for CI/CD and deployment',
    ],
  },
  {
    title: 'Workflow Engine',
    items: [
      'n8n automations and JSON-based pipelines',
      'Nano Banana 2 / Pro workflows',
      'Auto-research agents to improve skills: SEO, BLOG, FFMPEG',
    ],
  },
  {
    title: 'Product Pipeline',
    items: [
      'Shopify store generation (Aura Flow)',
      'Video generation (NotebookLM + Remotion)',
      'Social media distribution agents',
    ],
  },
]

export default function System() {
  return (
    <div className="bg-[#131316] min-h-screen pt-40 pb-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <h1 className="headline text-6xl md:text-9xl text-[#e4e1e6] mb-6">THE <span className="text-[#4edea3]">SYSTEM.</span></h1>
            <p className="text-[#c7c4d7] text-xl max-w-2xl mx-auto italic font-serif">
              A fully agentic workflow combining <span className="text-[#e4e1e6] opacity-100 italic">intelligence</span> with <span className="text-luxury text-[#e4e1e6]">luxury branding</span>.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {sections.map((section, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-elevated p-1 h-full">
                <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-10 h-full">
                  <h3 className="text-2xl font-black text-[#e4e1e6] mb-8 italic tracking-tight">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-[#c7c4d7] text-sm flex gap-3 border-b border-[#464554]/10 pb-3">
                        <span className="text-[#4edea3]">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card-elevated p-1">
            <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-12 md:p-24 text-center">
              <h2 className="headline text-4xl md:text-7xl text-[#e4e1e6] mb-10">SCALE YOUR <span className="text-luxury text-[#4edea3]">INTELLIGENCE.</span></h2>
              <a href="#contact" className="btn-primary no-underline inline-block">Request System Access</a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
