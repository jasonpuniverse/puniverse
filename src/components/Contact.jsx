import React, { useState } from 'react'
import { Reveal } from '../hooks/useReveal'

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('loading')
    
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    }

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwPz2t6vA6Pq6_vQ-O_n8W6G_f9_G9z9q_z/exec' 
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      setFormState('success')
    } catch (err) {
      console.error(err)
      setFormState('idle')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 mb-10">
                <span className="label-text text-[#ec0101]">Deployment Query</span>
              </div>

              <h2 className="headline text-5xl md:text-8xl text-[#e4e1e6] mb-8">INITIATE <br /><span className="text-[#4edea3] font-black italic">CONTACT.</span></h2>

              <p className="body-text text-xl text-[#c7c4d7] mb-12 leading-relaxed max-w-lg">
                Ready to deploy autonomous systems? Request custom blueprints for your brand or enterprise access to our multi-agent core.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#464554]/10 border border-[#464554]/20 flex items-center justify-center text-[#e4e1e6] transition-colors group-hover:border-[#ec0101]/50">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="label-text text-[#c7c4d7] mb-1">Digital Node</div>
                    <span className="text-xl text-[#e4e1e6] font-bold group-hover:text-[#4edea3] transition-colors">hello@puniverse.net</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-elevated p-1">
              <div className="bg-[#1f1f22]/80 backdrop-blur-xl rounded-xl p-10 md:p-14">
                {formState === 'success' ? (
                  <div className="text-center py-20 animate-fade-up">
                    <div className="w-20 h-20 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/30 flex items-center justify-center text-[#4edea3] text-3xl mx-auto mb-8">
                      ✓
                    </div>
                    <h3 className="text-3xl font-black text-[#e4e1e6] mb-4 italic">TRANSMISSION RECEIVED.</h3>
                    <p className="text-[#c7c4d7] mb-10 italic">Your internal node will respond within 12 standard hours.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="btn-secondary"
                    >
                      New Transmission
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <label className="label-text text-[#c7c4d7] ml-4">Identifier</label>
                      <input
                        name="name" required type="text" placeholder="Identity / Brand"
                        className="w-full bg-[#0e0e11] border border-[#464554]/10 rounded-xl px-6 py-4 text-[#e4e1e6] placeholder:text-[#c7c4d7]/40 focus:border-b-2 focus:border-[#4edea3] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="label-text text-[#c7c4d7] ml-4">Postal Node</label>
                      <input
                        name="email" required type="email" placeholder="example@brand.io"
                        className="w-full bg-[#0e0e11] border border-[#464554]/10 rounded-xl px-6 py-4 text-[#e4e1e6] placeholder:text-[#c7c4d7]/40 focus:border-b-2 focus:border-[#ec0101] outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="label-text text-[#c7c4d7] ml-4">Requirement Log</label>
                      <textarea
                        name="message" required rows="4" placeholder="How can we scale your operations?"
                        className="w-full bg-[#0e0e11] border border-[#464554]/10 rounded-xl px-6 py-4 text-[#e4e1e6] placeholder:text-[#c7c4d7]/40 focus:border-b-2 focus:border-[#4edea3] outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full btn-primary mt-4 disabled:opacity-50"
                    >
                      {formState === 'loading' ? 'TRANSMITTING...' : 'INITIATE CONNECTION'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
