import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-6xl font-black mb-4" style={{ color: 'var(--neon-magenta)' }}>404</div>
          <p className="font-mono-game text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
            SIGNAL.NOT_FOUND
          </p>
          <Link to="/thoughts" className="btn-neon">
            Back to Thoughts
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="min-h-screen page-enter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/thoughts"
          className="inline-flex items-center gap-2 font-mono-game text-xs mb-10 hover:opacity-80 transition-opacity"
          style={{ color: 'var(--neon-green)' }}
        >
          ← BACK_TO_THOUGHTS
        </Link>

        <article>
          <header className="mb-10">
            <div className="font-mono-game text-xs mb-4" style={{ color: 'rgba(57,255,20,0.7)' }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {' // '}{post.author}
            </div>

            <h1
              className="font-heading text-3xl sm:text-4xl font-black mb-6 leading-tight"
              style={{ color: 'white' }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-game text-xs px-2 py-1"
                  style={{
                    border: '1px solid rgba(57,255,20,0.25)',
                    color: 'var(--neon-green)',
                    background: 'rgba(57,255,20,0.05)',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, var(--neon-green), transparent)' }}
            />
          </header>

          <div
            className="prose-game"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, fontSize: '1.05rem', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(0,245,255,0.1)' }}>
          <Link to="/thoughts" className="btn-neon font-mono-game text-xs">
            ← More Thoughts
          </Link>
        </div>
      </div>
    </div>
  )
}
