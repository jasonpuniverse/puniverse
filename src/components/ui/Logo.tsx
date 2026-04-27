import React from 'react';

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  const fg = '#ffffff';
  const cx = 140, cy = 92, r = 22;
  
  return (
    <svg viewBox="0 0 240 240" width={size} height={size} aria-hidden className={className}>
      <defs>
        <radialGradient id="b-d" cx=".42" cy=".38" r=".75">
          <stop offset="0%" stopColor="#1e3a5f"/>
          <stop offset="55%" stopColor="#0c1a35"/>
          <stop offset="100%" stopColor="#050a18"/>
        </radialGradient>
        <linearGradient id="rim-d" x1="1" y1=".3" x2="0" y2=".7">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
          <stop offset="35%" stopColor="#ffffff" stopOpacity=".95"/>
          <stop offset="65%" stopColor="#bfdbfe" stopOpacity=".75"/>
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="aur-d" x1="0" y1=".15" x2="1" y2=".85">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0"/>
          <stop offset="40%" stopColor="#5eead4" stopOpacity=".9"/>
          <stop offset="80%" stopColor="#5eead4" stopOpacity=".4"/>
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect x="64" y="40" width="22" height="160" rx="4" fill={fg}/>
      <circle cx={cx} cy={cy} r="48" fill="none" stroke={fg} strokeWidth="22"/>
      <circle cx={cx} cy={cy} r={r} fill="url(#b-d)"/>
      <path
        d={`M ${cx + r*0.95} ${cy - r*0.32} A ${r} ${r} 0 0 1 ${cx + r*0.45} ${cy + r*0.89}`}
        fill="none" stroke="url(#rim-d)" strokeWidth="1.6" strokeLinecap="round"/>
      <path
        d={`M ${cx + r*0.95} ${cy - r*0.32} A ${r} ${r} 0 0 1 ${cx + r*0.45} ${cy + r*0.89}`}
        fill="none" stroke="#ffffff" strokeWidth=".7" strokeLinecap="round" opacity=".95"/>
      <path
        d={`M ${cx - r*0.6} ${cy - r*0.8} A ${r} ${r} 0 0 0 ${cx - r*0.95} ${cy + r*0.32}`}
        fill="none" stroke="url(#aur-d)" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
};
