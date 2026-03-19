import React from 'react'

export default function Logo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/logo.png" alt="Puniverse Logo" className="h-full object-contain" />
      <span className="text-white font-bold tracking-wide select-none" style={{ fontSize: '1.15em', letterSpacing: '0.05em' }}>
        PUNIVERSE
      </span>
    </div>
  )
}
