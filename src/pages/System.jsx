import React from 'react'
import { Reveal } from '../hooks/useReveal'

export default function SystemPage() {
  const components = [
    {
      title: "1️⃣ Agentic Workflows",
      items: [
        "Full-stack Claude Code setup",
        "Google Antigravity IDE for development",
        "Openrouter API connections",
        "GitHub + Vercel for CI/CD and deployment",
        "Multi-step agent flows: Content generation, Video research and YouTube automation (NotebookLM), Shopify store management and dropshipping orchestration",
      ],
      cta: "Explore Agentic Workflows"
    },
    {
      title: "2️⃣ Workflow Engine",
      items: [
        "n8n automations and JSON-based pipelines",
        "Nano Banana 2 / Pro workflows for advanced prompting",
        "Auto-research agents to improve skills: Claude SEO, Claude BLOG, FFMPEG, REMOTION, marketing skills",
      ],
      cta: "View Workflows"
    },
    {
      title: "3️⃣ Integrations",
      items: [
        "Shopify: Manage products like Bulk product_export CSV processing, automate store updates, handle dropshipping product sync from AliExpress, CJ Dropshipping, AutoDS, Dsers, Zendrop, plus custom Liquid scripts, custom landing pages, and more.",
        "Amazon: Market research and product sourcing automation",
        "YouTube: Manage multi-channel publishing & SEO (Aetheo Ambience, wellness content)",
        "OpenClaw + API integration: orchestrate all backend processes",
      ],
      cta: "See Integrations"
    },
    {
      title: "4️⃣ Digital Product Pipelines",
      intro: "Show the workflows that power your monetisable tools:",
      items: [
        "UGC Video Ads automation",
        "Meta Paid Ads automation",
        "SEO automation for AETHEO",
        "Nano Banana 2/Pro JSON prompting",
        "Nano Banana 2/Pro applications with image and lifestyle references (Amazon main product image workflows)",
      ],
      cta: "Explore Products in Action"
    },
    {
      title: "5️⃣ Sourcing & Ecommerce Intelligence",
      items: [
        "Automate sourcing electronics from 1688.com (instead of Alibaba) for high-margin Amazon products",
        "Full UK-based inventory for AETHEO (remove dropshipping products)",
        "Premium wellness brand positioning",
      ],
      cta: "Learn Our Sourcing Automations"
    },
    {
      title: "6️⃣ Research & Content",
      items: [
        "Google NotebookLM powered video research for YouTube channels:",
        "1. 4–8 hour ambient / noise / scenery videos",
        "2. Wellness-focused channels: red light therapy, grounding/earthing, fasting, herbs, Chinese folk remedies",
        "Pipeline for automated content generation using Claude skills",
      ]
    }
  ]

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', color: '#c084fc' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse-glow" />
              The Engine Room
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              The AI-Powered System <br className="hidden md:block" />
              <span className="gradient-text">Behind Puniverse</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-3xl mx-auto">
              A fully agentic workflow combining Claude Code, automation tools, and scalable systems to run ecommerce and content operations.
            </p>
            
            <a href="/#products" className="btn-primary text-base inline-flex items-center gap-2 no-underline">
              Explore Free Workflows
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Core Components */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {components.map((comp, idx) => (
            <Reveal key={idx} delay={50 * (idx % 3)}>
              <div className="card-border rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                <div 
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none blur-[60px]"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #37b9ff)' }}
                />
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {comp.title.split(' ')[0]}
                  </span>
                  {comp.title.split(' ').slice(1).join(' ')}
                </h3>
                
                {comp.intro && (
                  <p className="text-zinc-300 font-medium mb-4 text-sm">{comp.intro}</p>
                )}
                
                <ul className="space-y-4 mb-8">
                  {comp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                      <svg className="flex-shrink-0 w-5 h-5 text-purple-500/60 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {comp.cta && (
                  <a href="/#products" className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 no-underline">
                    {comp.cta}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto decoration-clone">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              See the system in action and start building your workflows today.
            </h2>
            <a href="/#products" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 no-underline">
              Unlock Free Workflows
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
