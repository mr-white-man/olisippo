import { Link } from '@tanstack/react-router'
import type { HeroSectionType } from '@/types/sections'

export function HeroSection({ section }: { section: HeroSectionType; index: number }) {
  return (
    <section className="relative hero-gradient px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl animate-slide-in-left">
          {section.badge && (
            <div className="font-mono-game text-xs mb-4 tracking-widest" style={{ color: 'var(--neon-cyan)' }} data-sb-field-path=".badge">
              {section.badge}
            </div>
          )}
          <h1 className="font-heading text-5xl sm:text-7xl font-black mb-2 leading-none" style={{ letterSpacing: '-0.02em' }} data-sb-field-path=".title">
            <span className="glitch-text" style={{ color: 'var(--neon-cyan)' }}>{section.title.split(' ')[0]}</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{section.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="font-mono-game text-sm sm:text-base mb-6 mt-4" style={{ color: 'rgba(255,255,255,0.5)' }} data-sb-field-path=".subtitle">
            <span style={{ color: 'var(--neon-green)' }}>$</span>{' '}
            <span className="cursor-blink">{section.subtitle}</span>
          </div>
          <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path=".tagline">
            {section.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            {section.ctaPrimary && (
              <Link to={section.ctaPrimary.href as any} className="btn-neon" data-sb-field-path=".ctaPrimary.label">
                {section.ctaPrimary.label}
              </Link>
            )}
            {section.ctaSecondary && (
              <Link to={section.ctaSecondary.href as any} className="btn-neon btn-neon-magenta" data-sb-field-path=".ctaSecondary.label">
                {section.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
