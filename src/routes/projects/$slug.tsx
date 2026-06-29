import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectPage,
})

function ProjectPage() {
  const { slug } = Route.useParams()
  const project = allProjects.find((p) => p._meta.path === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-6xl font-black mb-4" style={{ color: 'var(--neon-magenta)' }}>404</div>
          <p className="font-mono-game text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
            PROJECT.NOT_FOUND
          </p>
          <Link to="/projects" className="btn-neon">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(project.content)
  const objectId = `projects/${project._meta.path}.md`

  return (
    <div className="min-h-screen page-enter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono-game text-xs mb-10 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--neon-cyan)' }}
        >
          ← BACK_TO_PROJECTS
        </Link>

        <article data-sb-object-id={objectId}>
          <header className="mb-10">
            <div className="font-mono-game text-xs mb-4" style={{ color: 'rgba(0,245,255,0.7)' }}>
              PROJECT // {project._meta.path.toUpperCase()}
            </div>

            <h1
              data-sb-field-path="title"
              className="font-heading text-3xl sm:text-5xl font-black mb-6 leading-tight"
              style={{ color: 'white' }}
            >
              {project.title}
            </h1>

            <p
              data-sb-field-path="description"
              className="text-base mb-6 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-game text-xs px-2 py-1"
                  style={{
                    border: '1px solid rgba(0,245,255,0.25)',
                    color: 'var(--neon-cyan)',
                    background: 'rgba(0,245,255,0.05)',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon font-mono-game text-xs"
                >
                  {'</>'} SOURCE
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon btn-neon-magenta font-mono-game text-xs"
                >
                  ▶ PLAY
                </a>
              )}
            </div>

            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, var(--neon-cyan), transparent)' }}
            />
          </header>

          <div
            data-sb-field-path="content"
            className="prose-game"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, fontSize: '1.05rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: html as string }}
          />
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(0,245,255,0.1)' }}>
          <Link to="/projects" className="btn-neon font-mono-game text-xs">
            ← More Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
