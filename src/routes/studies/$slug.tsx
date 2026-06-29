import { createFileRoute, Link } from '@tanstack/react-router'
import { allStudies } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/studies/$slug')({
  component: StudyPage,
})

function StudyPage() {
  const { slug } = Route.useParams()
  const study = allStudies.find((s) => s._meta.path === slug)

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-6xl font-black mb-4" style={{ color: 'var(--neon-magenta)' }}>404</div>
          <p className="font-mono-game text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>STUDY.NOT_FOUND</p>
          <Link to="/studies" className="btn-neon">Back to Studies</Link>
        </div>
      </div>
    )
  }

  const html = marked(study.content)

  return (
    <div className="min-h-screen page-enter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/studies"
          className="inline-flex items-center gap-2 font-mono-game text-xs mb-10 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--neon-purple)' }}
        >
          ← BACK_TO_STUDIES
        </Link>

        <article data-sb-object-id={`studies/${study._meta.path}.md`}>
          <header className="mb-10">
            <div className="font-mono-game text-xs mb-4" style={{ color: 'rgba(191,95,255,0.7)' }}>
              {new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              {' // CASE.STUDY'}
            </div>

            <h1
              data-sb-field-path="title"
              className="font-heading text-3xl sm:text-4xl font-black mb-4 leading-tight"
              style={{ color: 'white' }}
            >
              {study.title}
            </h1>

            <p
              data-sb-field-path="subtitle"
              className="text-base mb-6 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
            >
              {study.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-game text-xs px-2 py-1"
                  style={{
                    border: '1px solid rgba(191,95,255,0.25)',
                    color: 'var(--neon-purple)',
                    background: 'rgba(191,95,255,0.05)',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {study.outcomes.length > 0 && (
              <div className="p-6 mb-8" style={{ border: '1px solid rgba(191,95,255,0.25)', background: 'rgba(191,95,255,0.05)', borderLeft: '3px solid var(--neon-purple)' }}>
                <div className="font-mono-game text-xs mb-3" style={{ color: 'rgba(191,95,255,0.7)' }}>// KEY_OUTCOMES</div>
                <ul className="space-y-2">
                  {study.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                      <span style={{ color: 'var(--neon-purple)' }}>◈</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, var(--neon-purple), transparent)' }} />
          </header>

          <div
            data-sb-field-path="content"
            className="prose-game"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, fontSize: '1.05rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: html as string }}
          />
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(191,95,255,0.1)' }}>
          <Link to="/studies" className="btn-neon font-mono-game text-xs">
            ← More Studies
          </Link>
        </div>
      </div>
    </div>
  )
}
