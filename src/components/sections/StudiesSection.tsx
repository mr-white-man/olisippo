import { Link } from '@tanstack/react-router'
import { allStudies } from 'content-collections'
import { marked } from 'marked'
import { useState } from 'react'

const accentColors = ['var(--neon-purple)', 'var(--neon-orange)']

export function StudiesSection({ index }: { section: any; index: number }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      {allStudies.map((study, i) => {
        const accent = accentColors[i % accentColors.length]
        const isOpen = expanded === study._meta.path
        const html = marked(study.content)
        return (
          <div key={study._meta.path} className="game-card" style={{ border: `1px solid ${accent}20` }} data-sb-object-id={`studies/${study._meta.path}.md`}>
            <button className="w-full text-left p-8 flex gap-5 items-start group" onClick={() => setExpanded(isOpen ? null : study._meta.path)}>
              <div className="font-heading text-4xl font-black flex-shrink-0 leading-none" style={{ color: `${accent}30` }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="flex-1 min-w-0">
                <div className="font-mono-game text-xs mb-2" style={{ color: `${accent}80` }}>{new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</div>
                <h2 className="font-heading text-xl font-black mb-1" style={{ color: 'white' }} data-sb-field-path="title">{study.title}</h2>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="subtitle">{study.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tags.map((tag) => <span key={tag} className="font-mono-game text-xs px-2 py-0.5" style={{ border: `1px solid ${accent}25`, color: accent, background: `${accent}08` }}>{tag}</span>)}
                </div>
              </div>
              <div className="font-mono-game text-xs flex-shrink-0 transition-transform duration-300" style={{ color: accent, transform: isOpen ? 'rotate(90deg)' : 'none' }}>▶</div>
            </button>

            {/* Collapsed: show outcomes preview */}
            {!isOpen && study.outcomes.length > 0 && (
              <div className="px-8 pb-6">
                <div className="font-mono-game text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>KEY_OUTCOMES:</div>
                <ul className="space-y-1">
                  {study.outcomes.map((outcome, oi) => (
                    <li key={oi} className="text-xs flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      <span style={{ color: accent }}>◈</span>{outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expanded: full content + VIEW STUDY link */}
            {isOpen && (
              <div className="px-8 pb-8" style={{ borderTop: `1px solid ${accent}15` }}>
                <div
                  className="prose-game mt-6"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, fontSize: '1rem', lineHeight: '1.75' }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className="mt-8 pt-4" style={{ borderTop: `1px solid ${accent}20` }}>
                  <Link
                    to="/studies/$slug"
                    params={{ slug: study._meta.path }}
                    className="font-mono-game text-xs flex items-center gap-2 w-fit transition-opacity hover:opacity-70"
                    style={{ color: accent }}
                  >
                    <span>◈</span> VIEW STUDY
                  </Link>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </section>
  )
}
