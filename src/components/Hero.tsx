import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';
import { Link } from 'react-router-dom';
import { GlowButton } from './ui/GlowButton';

const ROLES = ['Build', 'Run', 'Scale', 'Automate'];
const VIDEO_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      );

      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen flex flex-col overflow-hidden">
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
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <span className="blur-in text-xs text-gray-500 uppercase tracking-[0.3em] mb-8">
          Puniverse OS
        </span>

        <h1 className="name-reveal text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.9] tracking-tight text-white mb-6">
          The AI Operating System
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-teal-300 to-green-300 bg-clip-text text-transparent">
            for Ecommerce.
          </span>
        </h1>

        <p className="blur-in text-lg md:text-xl lg:text-2xl text-gray-400 mb-10">
          Not a tool. Not a dashboard. A system to{' '}
          <span
            key={roleIndex}
            className="font-display italic text-white animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          your brand.
        </p>

        <p className="blur-in text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mb-12">
          An autonomous system that helps you build, run, and scale ecommerce
          brands — from idea to multi-channel revenue.
        </p>

        <div className="blur-in flex items-center gap-4">
          <UnlockButton />
          <ExploreButton />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="blur-in absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-600 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/10 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

const UnlockButton: React.FC = () => (
  <Link to="/ai-automations">
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
        className={`relative z-10 block px-7 py-3.5 rounded-full border border-white/20 text-white transition-colors duration-300 ${
          hovered ? 'bg-[#050505]' : 'bg-transparent'
        }`}
      >
        Explore the System
      </span>
    </Link>
  );
};
