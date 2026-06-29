import { useState, useEffect, useRef } from 'react'
import { allProjects } from 'content-collections'

const accentColors = ['var(--neon-cyan)', 'var(--neon-magenta)', 'var(--neon-green)', 'var(--neon-purple)', 'var(--neon-orange)']

function isVideo(src: string) {
  return src.endsWith('.mp4') || src.endsWith('.webm')
}

function MediaSlideshow({ media, accent }: { media: string[]; accent: string }) {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setIndex(0)
    if (media.length <= 1) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % media.length)
    }, 1800)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [media])

  const src = media[index]

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 'inherit' }}>
      {isVideo(src) ? (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          key={src}
          src={src}
          alt=""
          className="w-full h-full object-cover"
        />
      )}
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,15,0.95) 0%, rgba(5,5,15,0.6) 50%, rgba(5,5,15,0.3) 100%)' }} />
      {/* Dot indicators */}
      {media.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {media.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? '16px' : '5px',
                height: '5px',
                background: i === index ? accent : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectsGridSection({ index: sectionIndex }: { section: any; index: number }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {allProjects.map((project, i) => {
          const accent = accentColors[i % accentColors.length]
          const isHovered = hoveredSlug === project._meta.path
          const media = project.media && project.media.length > 0
            ? project.media
            : project.image
              ? [project.image]
              : []
          const hasMedia = media.length > 0

          return (
            <div
              key={project._meta.path}
              data-sb-object-id={`projects/${project._meta.path}.md`}
              className="game-card relative flex flex-col gap-5 overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${isHovered && hasMedia ? accent + '70' : accent + '20'}`,
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                minHeight: hasMedia ? '320px' : 'auto',
              }}
              onMouseEnter={() => setHoveredSlug(project._meta.path)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              {/* Media slideshow (shows on hover) */}
              {hasMedia && isHovered && (
                <MediaSlideshow media={media} accent={accent} />
              )}

              {/* Cover image (shows when not hovered) */}
              {hasMedia && !isHovered && (
                <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 'inherit' }}>
                  <img src={media[0]} alt="" className="w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,15,1) 30%, rgba(5,5,15,0.7) 100%)' }} />
                </div>
              )}

              {/* Card content (always on top) */}
              <div className="relative z-10 p-8 flex flex-col gap-5 flex-1">
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
                  <h2
                    className="font-heading text-2xl font-black mb-3"
                    style={{ color: 'white' }}
                    data-sb-field-path="title"
                  >
                    {project.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
                    data-sb-field-path="description"
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-game text-xs px-2 py-1"
                      style={{
                        border: `1px solid ${accent}30`,
                        color: accent,
                        background: `${accent}10`,
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                      }}
                    >
                      {tag}
                    </span>
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
            </div>
          )
        })}
      </div>
    </section>
  )
}
