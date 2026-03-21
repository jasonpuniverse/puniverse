import React from 'react'

export default function Logo({ className = "h-6" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Red P Logo */}
      <img
        src="/logo.png"
        alt="Puniverse Logo"
        className="h-full w-auto"
      />

      {/* PUNIVERSE Text */}
      <span className="font-black text-[#e4e1e6] tracking-tight">
        PUNIVERSE
      </span>
    </div>
  )
}
