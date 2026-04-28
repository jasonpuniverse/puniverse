import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hls from 'hls.js';
import { Link } from 'react-router-dom';
import { GlowButton } from './ui/GlowButton';

const ROLES = ['Build', 'Run', 'Scale', 'Automate'];
const VIDEO_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_SRC;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Background video — absolute within the h-screen section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] md:text-xs text-teal-400/80 font-bold uppercase tracking-[0.4em] mb-10"
        >
          Puniverse OS
        </motion.span>

        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-[100px] font-display italic leading-[1.2] tracking-tight text-white mb-8">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="block mb-2 whitespace-nowrap"
          >
            The AI Operating System
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="block bg-gradient-to-r from-purple-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent pb-2"
          >
            for Ecommerce.
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed"
        >
          Not a tool. Not a dashboard.
          <br />
          A system to{' '}
          <span
            key={roleIndex}
            className="font-display italic text-white animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          your brand.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm md:text-base text-white/60 leading-relaxed max-w-lg mb-12"
        >
          An autonomous system that helps you build, run, and scale ecommerce
          brands — from idea to multi-channel revenue.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <UnlockButton />
          <ExploreButton />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 inset-x-0 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/50 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-12 bg-[var(--color-surface-hover)] relative overflow-hidden">
          <div className="w-full h-1/2 bg-[var(--color-surface-hover)] animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
};

const UnlockButton: React.FC = () => (
  <Link to="/services">
    <GlowButton>Run on Autopilot</GlowButton>
  </Link>
);

const ExploreButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/system"
      className="relative rounded-full text-sm transition-transform duration-200 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={`absolute rounded-full accent-gradient transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ inset: '-2px' }}
      />
      <span
        className={`relative z-10 block px-7 py-3.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] transition-colors duration-300 ${
          hovered ? 'bg-[var(--color-shell)]' : 'bg-transparent'
        }`}
      >
        Explore the System
      </span>
    </Link>
  );
};
