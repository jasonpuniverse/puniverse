import React from 'react';

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center gap-2 mb-12">
    <div className="h-[1px] w-8 bg-white/10"></div>
    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 border border-white/10 rounded-full px-4 py-1 bg-white/5 backdrop-blur-sm text-center">
      {children}
    </span>
    <div className="h-[1px] w-8 bg-white/10"></div>
  </div>
);
