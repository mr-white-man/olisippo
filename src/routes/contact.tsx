import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const inputStyle = (field: string) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'rgba(0,245,255,0.03)',
    border: `1px solid ${focused === field ? 'var(--neon-cyan)' : 'rgba(0,245,255,0.15)'}`,
    color: 'white',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === field ? '0 0 12px rgba(0,245,255,0.12)' : 'none',
    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
  } as React.CSSProperties)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div
            className="font-heading text-5xl font-black mb-4 neon-pulse"
            style={{ color: 'var(--neon-cyan)' }}
          >
            ◈
          </div>
          <h2 className="font-heading text-2xl font-black mb-3" style={{ color: 'white' }}>
            SIGNAL_TRANSMITTED
          </h2>
          <p className="font-mono-game text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Message received. Response incoming.
          </p>
          <div className="terminal-box text-xs mb-8" style={{ textAlign: 'left' }}>
            <div className="terminal-prompt" style={{ color: 'var(--neon-green)' }}>
              STATUS: 200 OK
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>
              Your message has been queued for delivery.
            </div>
          </div>
          <button onClick={() => setSubmitted(false)} className="btn-neon">
            Send Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen page-enter">
      <div
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{
          borderBottom: '1px solid rgba(255,107,0,0.1)',
          background: 'radial-gradient(ellipse at 50% 30%, rgba(255,107,0,0.04) 0%, transparent 60%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="font-mono-game text-xs mb-3" style={{ color: 'var(--neon-orange)' }}>
            {'// SECTION_06 :: OPEN_CHANNEL'}
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black mb-4" style={{ color: 'white' }}>
            CONTACT<span style={{ color: 'var(--neon-orange)' }}>.</span>ME
          </h1>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
            Open to collaboration, contracts, consulting, and interesting conversations. Games, systems, creative tech.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <div className="font-mono-game text-xs mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                AVAILABILITY_STATUS
              </div>
              <div
                className="flex items-center gap-3 p-4"
                style={{
                  border: '1px solid rgba(57,255,20,0.25)',
                  background: 'rgba(57,255,20,0.05)',
                }}
              >
                <div
                  className="w-2 h-2 rounded-full neon-pulse"
                  style={{ background: 'var(--neon-green)', boxShadow: '0 0 6px var(--neon-green)' }}
                />
                <span className="font-mono-game text-sm" style={{ color: 'var(--neon-green)' }}>
                  OPEN_TO_WORK // Contract & Full-Time
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'EMAIL', value: 'kade@xero.dev', icon: '◇' },
                { label: 'GITHUB', value: 'github.com/kadexero', icon: '</>' },
                { label: 'DISCORD', value: 'kadexero#0001', icon: '▸' },
                { label: 'LOCATION', value: 'Remote / Austin, TX', icon: '◈' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
                >
                  <span className="font-mono-game text-sm w-6 text-center" style={{ color: 'var(--neon-orange)' }}>
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-mono-game text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {item.label}
                    </div>
                    <div className="font-mono-game text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="terminal-box">
              <div className="terminal-prompt text-xs" style={{ color: 'var(--neon-green)' }}>
                RESPONSE_TIME: {'<'} 24h
              </div>
              <div className="terminal-prompt text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                TIMEZONE: CST (UTC-6)
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="font-mono-game text-xs mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
              COMPOSE_MESSAGE
            </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(
                    formData as unknown as Record<string, string>,
                  ).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block font-mono-game text-xs mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  IDENTIFIER &gt;
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name or handle"
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono-game text-xs mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  RETURN_ADDRESS &gt;
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono-game text-xs mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  SUBJECT &gt;
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Collaboration / Contract / Other"
                  style={inputStyle('subject')}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono-game text-xs mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  MESSAGE_BODY &gt;
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe your project, idea, or question..."
                  style={{ ...inputStyle('message'), resize: 'none' }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button type="submit" className="btn-neon w-full text-center">
                ◈ TRANSMIT_MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
