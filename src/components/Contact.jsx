import React, { useState } from 'react'
import { Reveal } from '../hooks/useReveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // In production, configure Google Apps Script Web App URL pointing to the Sheet
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    
    try {
      // Create FormData to send to Google Sheets
      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('message', formData.message)
      data.append('timestamp', new Date().toISOString())

      // Simulate network request for now
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      /* Uncomment for real deployment:
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Google Sheets requires no-cors
      })
      */
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission failed', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative border-t border-purple-900/10">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Get in <span className="text-purple-400">Touch</span>
            </h2>
            <p className="text-zinc-400">
              Have a question, idea, or collaboration in mind? Reach out.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background noise/glow */}
            <div className="absolute inset-0 noise opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#111113] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    placeholder="John Doe"
                    disabled={status === 'submitting' || status === 'success'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111113] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    placeholder="john@brand.com"
                    disabled={status === 'submitting' || status === 'success'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111113] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Tell us about your current stack and what you want to automate..."
                  disabled={status === 'submitting' || status === 'success'}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full btn-primary py-4 text-base tracking-wide flex justify-center items-center gap-2 disabled:opacity-70"
                >
                  {status === 'submitting' && (
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {status === 'idle' && 'Send Message -> Google Sheets'}
                  {status === 'submitting' && 'Sending...'}
                  {status === 'success' && 'Message Received ✓'}
                  {status === 'error' && 'Failed to send'}
                </button>
                {status === 'success' && (
                  <p className="text-center text-green-400 text-sm mt-4 animate-fade-up">
                    We'll be in touch shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
