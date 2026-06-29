import type { PageHeaderSectionType } from '@/types/sections'

export function PageHeaderSection({ section }: { section: PageHeaderSectionType; index: number }) {
  const accent = section.accentColor ?? 'var(--neon-cyan)'
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16" style={{ borderBottom: `1px solid ${accent}15`, background: `radial-gradient(ellipse at 30% 50%, ${accent}05 0%, transparent 60%)` }}>
      <div className="max-w-7xl mx-auto">
        {section.badge && (
          <div className="font-mono-game text-xs mb-3" style={{ color: accent }} data-sb-field-path=".badge">{section.badge}</div>
        )}
        <h1 className="font-heading text-4xl sm:text-6xl font-black mb-4" style={{ color: 'white' }} data-sb-field-path=".title">
          {section.title}<span style={{ color: accent }}>{section.titleAccent ?? '.'}</span>
        </h1>
        {section.subtitle && (
          <p className="max-w-xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path=".subtitle">
            {section.subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
