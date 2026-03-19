import React from 'react'
import { Reveal } from '../hooks/useReveal'

// Animated system diagram placeholder
function SystemDiagram() {
  const nodes = [
    { label: 'Shopify', x: 20, y: 15, color: '#96bf48' },
    { label: 'AI Agent', x: 50, y: 45, color: '#a855f7', large: true },
    { label: 'n8n', x: 80, y: 15, color: '#ea5455' },
    { label: 'Pinterest', x: 15, y: 75, color: '#e60023' },
    { label: 'Email', x: 85, y: 75, color: '#37b9ff' },
    { label: 'Analytics', x: 50, y: 88, color: '#f59e0b' },
  ]

  const connections = [
    [0, 1], [2, 1], [3, 1], [4, 1], [5, 1]
  ]

  return (
    <div
      className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden animate-float"
      style={{
        background: 'linear-gradient(135deg, rgba(17,17,19,0.95) 0%, rgba(24,24,27,0.95) 100%)',
        border: '1px solid rgba(168,85,247,0.25)',
        boxShadow: '0 0 60px rgba(168,85,247,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
        aspectRatio: '1 / 0.85',
        padding: '1.5rem',
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {connections.map(([from, to], i) => {
          const f = nodes[from]
          const t = nodes[to]
          return (
            <line
              key={i}
              x1={`${f.x}%`} y1={`${f.y}%`}
              x2={`${t.x}%`} y2={`${t.y}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeDasharray="4,4"
            />
          )
        })}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#37b9ff" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center gap-1"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <div
            className="rounded-xl flex items-center justify-center font-bold text-white text-xs"
            style={{
              width: node.large ? '64px' : '44px',
              height: node.large ? '64px' : '44px',
              background: node.large
                ? 'linear-gradient(135deg, #a855f7, #37b9ff)'
                : `${node.color}22`,
              border: `1px solid ${node.color}66`,
              boxShadow: node.large ? `0 0 20px ${node.color}66` : `0 0 8px ${node.color}33`,
              fontSize: node.large ? '10px' : '8px',
            }}
          >
            {node.large ? '🤖 AI' : node.label[0]}
          </div>
          <span className="text-zinc-500 text-center" style={{ fontSize: '9px', lineHeight: 1 }}>
            {node.label}
          </span>
        </div>
      ))}

      {/* Status bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg px-3 py-1.5" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.15)' }}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
          <span className="text-zinc-400" style={{ fontSize: '10px' }}>System Active</span>
        </div>
        <span className="text-zinc-500" style={{ fontSize: '10px' }}>14 automations running</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg noise overflow-hidden"
      style={{ paddingTop: '96px' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(55,185,255,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', color: '#c084fc' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse-glow" />
              AI Ecommerce Systems — Live & Running
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6" style={{ color: '#f4f4f5' }}>
              Run Ecommerce with{' '}
              <span className="gradient-text">AI, Not a Team</span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg">
              AI-powered workflows, automation systems, and tools used to build and operate real DTC brands.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="btn-primary text-base inline-flex items-center gap-2 no-underline"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Unlock Free AI Workflows
              </a>
              <a href="#system" className="btn-secondary text-base inline-flex items-center gap-2 no-underline">
                Explore the System
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-zinc-500 text-xs mt-0.5">Workflows Built</div>
              </div>
              <div className="w-px h-10 bg-zinc-800" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">3x</div>
                <div className="text-zinc-500 text-xs mt-0.5">Avg. Efficiency Gain</div>
              </div>
              <div className="w-px h-10 bg-zinc-800" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-zinc-500 text-xs mt-0.5">Real Systems</div>
              </div>
            </div>
          </div>

          {/* Right: Diagram */}
          <div className="flex justify-center">
            <SystemDiagram />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
