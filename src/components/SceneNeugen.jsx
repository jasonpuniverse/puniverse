import React from 'react'

export default function SceneNeugen() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 bg-[#09090b]">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full neugen-glow opacity-30 animate-pulse transition-transform duration-[10s] ease-in-out" 
           style={{ animation: 'blob-move-1 25s infinite alternate' }} />
      
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full neugen-glow-red opacity-20 animate-pulse transition-transform duration-[15s] ease-in-out"
           style={{ animation: 'blob-move-2 30s infinite alternate' }} />

      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full neugen-glow opacity-10 animate-pulse transition-transform duration-[12s] ease-in-out"
           style={{ animation: 'blob-move-3 20s infinite alternate' }} />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-transparent to-[#09090b] opacity-60" />

      <style jsx>{`
        @keyframes blob-move-1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10%, 15%) scale(1.1); }
          100% { transform: translate(-5%, 5%) scale(0.9); }
        }
        @keyframes blob-move-2 {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-15%, -10%) scale(0.9); }
          100% { transform: translate(5%, 15%) scale(1); }
        }
        @keyframes blob-move-3 {
          0% { transform: translate(0, 0) scale(0.9); }
          50% { transform: translate(20%, -20%) scale(1.2); }
          100% { transform: translate(-10%, 10%) scale(1); }
        }
      `}</style>
    </div>
  )
}
