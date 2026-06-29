import { Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'

export function BlogListSection({ index }: { section: any; index: number }) {
  const posts = [...allBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
      {posts.map((post, i) => (
        <Link key={post._meta.path} to="/blog/$slug" params={{ slug: post._meta.path }} className="block group">
          <div data-sb-object-id={`blog/${post._meta.path}.md`} className="game-card game-card-green p-6 flex gap-6 items-start" style={{ border: '1px solid rgba(57,255,20,0.15)' }}>
            <div className="font-heading text-4xl font-black flex-shrink-0 w-12 leading-none" style={{ color: 'rgba(57,255,20,0.2)' }}>{String(i + 1).padStart(2, '0')}</div>
            <div className="flex-1 min-w-0">
              <div className="font-mono-game text-xs mb-2" style={{ color: 'rgba(57,255,20,0.7)' }}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} // <span data-sb-field-path="author">{post.author}</span>
              </div>
              <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-green-400 transition-colors" style={{ color: 'white' }} data-sb-field-path="title">{post.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="summary">{post.summary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="font-mono-game text-xs px-2 py-0.5" style={{ border: '1px solid rgba(57,255,20,0.25)', color: 'var(--neon-green)', background: 'rgba(57,255,20,0.05)' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="font-mono-game text-xs flex-shrink-0 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--neon-green)' }}>→</div>
          </div>
        </Link>
      ))}
    </section>
  )
}
