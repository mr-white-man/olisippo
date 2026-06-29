import { useState } from 'react'
import type { ContactSectionType } from '@/types/sections'

export function ContactSection({ section }: { section: ContactSectionType; index: number }) {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%', padding: '0.75rem 1rem',
    background: 'rgba(0,245,255,0.03)',
    border: `1px solid ${focused === field ? 'var(--neon-cyan)' : 'rgba(0,245,255,0.15)'}`,
    color: 'white', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === field ? '0 0 12px rgba(0,245,255,0.12)' : 'none',
    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
  })

  if (submitted) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="font-heading text-5xl font-black mb-4 neon-pulse" style={{ color: 'var(--neon-cyan)' }}>◈</div>
        <h2 className="font-heading text-2xl font-black mb-3" style={{ color: 'white' }}>SIGNAL_TRANSMITTED</h2>
        <p className="font-mono-game text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>Message received. Response incoming.</p>
        <button onClick={() => setSubmitted(false)} className="btn-neon">Send Another</button>
      </div>
    </div>
  )

  const contacts = section.contacts ?? [
    { label: 'EMAIL', value: 'kade@xero.dev', icon: '◇' },
    { label: 'GITHUB', value: 'github.com/kadexero', icon: '</>' },
    { label: 'DISCORD', value: 'kadexero#0001', icon: '▸' },
    { label: 'LOCATION', value: 'Remote / Austin, TX', icon: '◈' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <div className="font-mono-game text-xs mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>AVAILABILITY_STATUS</div>
            <div className="flex items-center gap-3 p-4" style={{ border: '1px solid rgba(57,255,20,0.25)', background: 'rgba(57,255,20,0.05)' }}>
              <div className="w-2 h-2 rounded-full neon-pulse" style={{ background: 'var(--neon-green)', boxShadow: '0 0 6px var(--neon-green)' }} />
              <span className="font-mono-game text-sm" style={{ color: 'var(--neon-green)' }} data-sb-field-path=".availability">
                {section.availability ?? 'OPEN_TO_WORK // Contract & Full-Time'}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {contacts.map((item, i) => (
              <div key={item.label} className="flex items-center gap-4 p-4" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }} data-sb-field-path={`.contacts[${i}]`}>
                <span className="font-mono-game text-sm w-6 text-center" style={{ color: 'var(--neon-orange)' }}>{item.icon}</span>
                <div>
                  <div className="font-mono-game text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.label}</div>
                  <div className="font-mono-game text-sm" style={{ color: 'rgba(255,255,255,0.7)' }} data-sb-field-path=".value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-mono-game text-xs mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>COMPOSE_MESSAGE</div>
          <form name="contact" method="POST" data-netlify="true" onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(fd as any).toString() }).then(() => setSubmitted(true)) }} className="space-y-5">
            <input type="hidden" name="form-name" value="contact" />
            {['name', 'email', 'subject'].map((field) => (
              <div key={field}>
                <label className="block font-mono-game text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{field.toUpperCase()} &gt;</label>
                <input type={field === 'email' ? 'email' : 'text'} name={field} required={field !== 'subject'} style={inputStyle(field)} onFocus={() => setFocused(field)} onBlur={() => setFocused(null)} />
              </div>
            ))}
            <div>
              <label className="block font-mono-game text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>MESSAGE_BODY &gt;</label>
              <textarea name="message" required rows={6} style={{ ...inputStyle('message'), resize: 'none' }} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
            </div>
            <button type="submit" className="btn-neon w-full text-center">◈ TRANSMIT_MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  )
}
