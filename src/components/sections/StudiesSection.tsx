import { Link } from '@tanstack/react-router'
import { allStudies } from 'content-collections'

export function StudiesSection({ index }: { section: any; index: number }) {
  const studies = [...allStudies].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      {studies.map((study, i) => (
        <Link key={study._meta.path} to="/studies/$slug" params={{ slug: study._meta.path }} className="block group">
          <div data-sb-object-id={`studies/${study._meta.path}.md`} className="game-card p-6 flex gap-6 items-start" style={{ border: '1px solid rgba(191,95,255,0.15)' }}>
            <div className="font-heading text-4xl font-black flex-shrink-0 w-12 leading-none" style={{ color: 'rgba(191,95,255,0.2)' }}>{String(i + 1).padStart(2, '0')}</div>
            <div className="flex-1 min-w-0">
              <div className="font-mono-game text-xs mb-2" style={{ color: 'rgba(191,95,255,0.7)' }}>
                {new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
              <h2 className="font-heading text-xl font-bold mb-2 transition-colors" style={{ color: 'white' }} data-sb-field-path="title">{study.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="subtitle">{study.subtitle}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {study.tags.map((tag) => (
                  <span key={tag} className="font-mono-game text-xs px-2 py-0.5" style={{ border: '1px solid rgba(191,95,255,0.25)', color: 'var(--neon-purple)', background: 'rgba(191,95,255,0.05)' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="font-mono-game text-xs flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--neon-purple)' }}>→</div>
          </div>
        </Link>
      ))}
    </section>
  )
}
