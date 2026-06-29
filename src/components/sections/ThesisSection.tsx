import type { ThesisSectionType } from '@/types/sections'

export function ThesisSection({ section }: { section: ThesisSectionType; index: number }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {section.abstract && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-header text-sm" style={{ color: 'rgba(255,0,128,0.8)' }}>ABSTRACT</h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.4), transparent)' }} />
          </div>
          <div className="terminal-box" style={{ borderLeftColor: 'var(--neon-magenta)', borderColor: 'rgba(255,0,128,0.2)' }}>
            <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }} data-sb-field-path=".abstract">{section.abstract}</p>
          </div>
        </section>
      )}
      {section.contributions && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-header text-sm" style={{ color: 'rgba(255,0,128,0.8)' }}>KEY_CONTRIBUTIONS</h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.4), transparent)' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.contributions.map((item, i) => (
              <div key={i} className="p-5" style={{ border: '1px solid rgba(255,0,128,0.2)', background: 'rgba(255,0,128,0.03)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }} data-sb-field-path={`.contributions[${i}]`}>
                <div className="font-heading text-sm font-bold mb-2" style={{ color: 'var(--neon-magenta)' }} data-sb-field-path=".label">{item.label}</div>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path=".desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {section.chapters && (
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-header text-sm" style={{ color: 'rgba(255,0,128,0.8)' }}>TABLE_OF_CONTENTS</h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.4), transparent)' }} />
          </div>
          <div className="space-y-4">
            {section.chapters.map((ch, i) => (
              <div key={i} className="game-card game-card-magenta p-6 flex gap-5" style={{ border: '1px solid rgba(255,0,128,0.12)' }} data-sb-field-path={`.chapters[${i}]`}>
                <div className="font-heading text-3xl font-black flex-shrink-0 leading-none" style={{ color: 'rgba(255,0,128,0.2)' }}>{ch.num}</div>
                <div>
                  <h3 className="font-heading text-base font-bold mb-2" style={{ color: 'white' }} data-sb-field-path=".title">{ch.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path=".summary">{ch.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {section.result && (
        <div className="p-6 text-center" style={{ border: '1px solid rgba(255,0,128,0.3)', background: 'rgba(255,0,128,0.05)' }}>
          <div className="font-mono-game text-xs mb-2" style={{ color: 'var(--neon-magenta)' }}>RESULT</div>
          <p className="font-heading text-lg" style={{ color: 'white' }} data-sb-field-path=".result">{section.result}</p>
        </div>
      )}
    </div>
  )
}
