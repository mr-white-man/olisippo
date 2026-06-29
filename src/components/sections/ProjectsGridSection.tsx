import { Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'

const accentColors = ['var(--neon-cyan)', 'var(--neon-magenta)', 'var(--neon-green)', 'var(--neon-purple)', 'var(--neon-orange)']

export function ProjectsGridSection({ index }: { section: any; index: number }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {allProjects.map((project, i) => {
          const accent = accentColors[i % accentColors.length]
          return (
            <div
              key={project._meta.path}
              data-sb-object-id={`projects/${project._meta.path}.md`}
              className="game-card relative p-8 flex flex-col gap-5 h-full"
              style={{ border: `1px solid ${accent}20`, clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}
            >
              <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}`, boxShadow: `0 0 8px ${accent}40` }} />

              <div>
                <div className="font-mono-game text-xs mb-2" style={{ color: `${accent}99` }}>PROJECT_{String(i + 1).padStart(2, '0')}</div>
                <h2 className="font-heading text-2xl font-black mb-3" style={{ color: 'white' }} data-sb-field-path="title">{project.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="description">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono-game text-xs px-2 py-1" style={{ border: `1px solid ${accent}30`, color: accent, background: `${accent}08`, clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>{tag}</span>
                ))}
              </div>

              {/* SOURCE + PLAY buttons */}
              <div className="flex gap-6 mt-auto pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-game text-xs flex items-center gap-2 transition-opacity hover:opacity-70"
                    style={{ color: accent }}
                  >
                    <span style={{ opacity: 0.7 }}>&lt;/&gt;</span> SOURCE
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-game text-xs flex items-center gap-2 transition-opacity hover:opacity-70"
                    style={{ color: accent }}
                  >
                    <span>▶</span> PLAY
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
