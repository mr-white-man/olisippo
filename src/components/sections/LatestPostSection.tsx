import { Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import type { LatestPostSectionType } from '@/types/sections'

export function LatestPostSection({ section }: { section: LatestPostSectionType; index: number }) {
  const recentPost = [...allBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  if (!recentPost) return null
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12" style={{ borderTop: '1px solid rgba(0,245,255,0.08)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="section-header text-sm" style={{ color: 'rgba(255,255,255,0.3)' }} data-sb-field-path=".heading">
            {section.heading ?? 'LATEST_TRANSMISSION'}
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(57,255,20,0.3), transparent)' }} />
        </div>
        <Link to="/blog/$slug" params={{ slug: recentPost._meta.path }} className="block max-w-2xl">
          <div className="game-card p-6 group" style={{ borderColor: 'rgba(57,255,20,0.2)' }} data-sb-object-id={`blog/${recentPost._meta.path}.md`}>
            <div className="font-mono-game text-xs mb-2" style={{ color: 'var(--neon-green)' }}>
              {new Date(recentPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
            <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-green-400 transition-colors" style={{ color: 'white' }} data-sb-field-path="title">{recentPost.title}</h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="summary">{recentPost.summary}</p>
            <div className="flex items-center gap-2 font-mono-game text-xs mt-4" style={{ color: 'var(--neon-green)' }}>
              <span>READ_POST</span><span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
