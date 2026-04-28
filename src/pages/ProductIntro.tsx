import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Check, Zap, Lock, Download, Layers, ShieldCheck, Settings } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';
import { digitalProducts } from '../data/products';

export const ProductIntro: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? digitalProducts[slug] : null;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const checkoutUrl = product.stripePaymentLink; 

  return (
    <div className="animate-in fade-in duration-700 min-h-[80vh] flex flex-col justify-center py-16">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Aesthetics & Image Sticky Pane */}
          <div className="relative group lg:sticky top-32">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden border border-[var(--color-border)] aspect-[4/5] bg-[var(--color-surface)]">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#050505] bg-teal-400 rounded-full inline-block backdrop-blur-md mb-3">
                  Puniverse Digital Automations
                </span>
                <h3 className="text-2xl font-medium text-[var(--color-text-primary)]">{product.title}</h3>
              </div>
            </div>
            
            {/* Mobile Checkout (Hidden on Desktop) */}
            <div className="lg:hidden mt-8">
               <div className="flex items-end gap-4 mb-4">
                  <span className="text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">£{product.price}</span>
                  <span className="text-[var(--color-text-tertiary)] text-xs pb-1 uppercase tracking-wider">One-time payment</span>
                </div>
                <a href={checkoutUrl} className="block w-full">
                  <GlowButton className="w-full justify-center group leading-none">
                    <Lock size={18} className="mr-2 text-teal-200" />
                    Unlock Access Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </GlowButton>
                </a>
            </div>
          </div>

          {/* Right Column: Copy & Checkout */}
          <div className="space-y-12">
            {/* Header Content */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-teal-400 font-mono tracking-tight flex items-center gap-2">
                <Zap size={18}/> {product.subtitle}
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed pt-2">
                {product.description}
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

            {/* N8N STRUCTURE: Who is it for? */}
            <Reveal delay={0.1}>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                  <Layers size={18} className="text-teal-400"/> Who's it for?
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {product.whosItFor}
                </p>
              </div>
            </Reveal>

            {/* N8N STRUCTURE: How it works */}
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                  <Settings size={18} className="text-purple-400"/> How it works
                </h2>
                <div className="space-y-4 pl-1">
                  {product.howItWorks.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-[var(--color-text-secondary)]">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-surface)] flex flex-col items-center justify-center shrink-0 border border-[var(--color-border)] mt-0.5 shadow-lg shadow-black/20">
                        <span className="text-xs font-mono text-purple-300">{idx + 1}</span>
                      </div>
                      <p className="leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* N8N STRUCTURE: Setup Steps */}
            <Reveal delay={0.3}>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                  <ArrowRight size={18} className="text-teal-400"/> How to set up
                </h2>
                <ul className="list-none space-y-2 pl-2">
                   {product.setupSteps.map((step, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[var(--color-text-secondary)] before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500/50">
                        {step}
                      </li>
                   ))}
                </ul>
              </div>
            </Reveal>

            {/* N8N STRUCTURE: Requirements Glass Box */}
            <Reveal delay={0.4}>
              <GlassCard className="bg-purple-900/10 border-purple-500/20">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-purple-400"/> Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Check size={14} className="text-purple-400" />
                      {req}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            {/* Checkout Block (Desktop) */}
            <div className="pt-6 hidden lg:block">
              <div className="flex items-end gap-4 mb-6">
                <span className="text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">£{product.price}</span>
                <span className="text-[var(--color-text-tertiary)] text-sm pb-2 uppercase tracking-wider">One-time payment</span>
              </div>
              
              <a href={checkoutUrl} className="block w-full">
                <GlowButton className="w-full justify-center group">
                  <Lock size={18} className="mr-2 text-teal-200" />
                  Unlock Immediate Access
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </GlowButton>
              </a>
              <p className="text-center text-xs text-[var(--color-text-tertiary)] mt-4 flex items-center justify-center gap-2 border border-[var(--color-border)] bg-black/20 p-2 rounded-lg">
                <Lock size={12} className="text-teal-400"/> Secure checkout via Stripe. Instant JSON download following payment.
              </p>
            </div>

          </div>
        </div>
      </Reveal>
    </div>
  );
};
