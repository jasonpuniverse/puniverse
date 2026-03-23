import React, { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.error || 'Failed to submit form');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-20 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 text-3xl mx-auto mb-8">
          ✓
        </div>
        <h3 className="text-3xl font-black text-white mb-4 italic">TRANSMISSION RECEIVED.</h3>
        <p className="text-gray-400 mb-10 italic">Your internal node will respond within 12 standard hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
        >
          New Transmission
        </button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="text-center py-20 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 text-3xl mx-auto mb-8">
          ⚠
        </div>
        <h3 className="text-3xl font-black text-white mb-4 italic">TRANSMISSION FAILED.</h3>
        <p className="text-gray-400 mb-10">{errorMessage || 'An unknown error occurred.'}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Identifier</label>
        <input 
          name="name" 
          required 
          type="text" 
          placeholder="Identity / Brand" 
          className="w-full bg-white/5 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:bg-white/10 outline-none transition-all"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Postal Node</label>
        <input 
          name="email" 
          required 
          type="email" 
          placeholder="example@brand.io" 
          className="w-full bg-white/5 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:bg-white/10 outline-none transition-all"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Requirement Log</label>
        <textarea 
          name="message" 
          required 
          rows={4} 
          placeholder="How can we scale your operations?" 
          className="w-full bg-white/5 rounded-xl px-6 py-4 text-white placeholder:text-gray-600 focus:bg-white/10 outline-none transition-all resize-none"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full py-4 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold tracking-widest uppercase hover:bg-emerald-500/30 transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'TRANSMITTING...' : 'INITIATE CONNECTION'}
      </button>
    </form>
  );
};
