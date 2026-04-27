import React from 'react';

export const GlowButton: React.FC<{ children: React.ReactNode, className?: string, onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <button 
    onClick={onClick}
    className={`glow-btn ${className}`}
  >
    <span className="gb-blur"></span>
    <span className="gb-solid"></span>
    <span className="gb-inner">{children}</span>
  </button>
);
