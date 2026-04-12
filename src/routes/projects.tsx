import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

const accentColors = [
  'var(--neon-cyan)',
  'var(--neon-magenta)',
  'var(--neon-green)',
  'var(--neon-purple)',
  'var(--neon-orange)',
]

function ProjectsPage() {
  return (
    <div className="min-h-screen page-enter">
      {/* Header */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{
          borderBottom: '1px solid rgba(0,245,255,0.1)',
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,245,255,0.04) 0%, transparent 60%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="font-mono-game text-xs mb-3" style={{ color: 'var(--neon-cyan)' }}>
            {'// SECTION_02 :: GAME.PROJECTS'}
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black mb-4" style={{ color: 'white' }}>
            GAME<span style={{ color: 'var(--neon-cyan)' }}>.</span>PROJECTS
          </h1>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
            Shipped titles, prototypes, and jam entries. Each one a different problem space, a different aesthetic, a different lesson.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allProjects.map((project, i) => {
            const accent = accentColors[i % accentColors.length]
            return (
              <div
                key={project._meta.path}
                className="game-card relative p-8 flex flex-col gap-5 group"
                style={{
                  border: `1px solid ${accent}20`,
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-6 h-6"
                  style={{
                    borderTop: `2px solid ${accent}`,
                    borderRight: `2px solid ${accent}`,
                    boxShadow: `0 0 8px ${accent}40`,
                  }}
                />

                <div>
                  <div className="font-mono-game text-xs mb-2" style={{ color: `${accent}99` }}>
                    PROJECT_{String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-heading text-2xl font-black mb-3" style={{ color: 'white' }}>
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-game text-xs px-2 py-1"
                      style={{
                        border: `1px solid ${accent}30`,
                        color: accent,
                        background: `${accent}08`,
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4" style={{ borderTop: `1px solid ${accent}15` }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-game text-xs flex items-center gap-2 hover:opacity-80 transition-opacity"
                      style={{ color: accent }}
                    >
                      {'</>'} SOURCE
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-game text-xs flex items-center gap-2 hover:opacity-80 transition-opacity"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      ▶ PLAY
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
