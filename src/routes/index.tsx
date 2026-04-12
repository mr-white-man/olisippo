import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects, allBlogs } from 'content-collections'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type CategoryHref = '/' | '/projects' | '/thesis' | '/studies' | '/thoughts' | '/contact'

const categories: Array<{
  id: string
  label: string
  sublabel: string
  href: CategoryHref
  color: string
  accent: string
  icon: string
  description: string
  span: string
}> = [
  {
    id: 'games',
    label: 'GAME.PROJECTS',
    sublabel: 'Interactive Worlds Built',
    href: '/projects',
    color: 'cyan',
    accent: 'var(--neon-cyan)',
    icon: '◈',
    description: 'Shipped titles, prototypes, and game jam entries spanning FPS, puzzle, horror, and racing genres.',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 'thesis',
    label: 'THESIS',
    sublabel: 'Research & Theory',
    href: '/thesis',
    color: 'magenta',
    accent: 'var(--neon-magenta)',
    icon: '⬡',
    description: 'Academic research on procedural narrative systems and emergent gameplay.',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'thoughts',
    label: 'THOUGHTS',
    sublabel: 'Ideas & Writing',
    href: '/thoughts',
    color: 'green',
    accent: 'var(--neon-green)',
    icon: '▸',
    description: 'Dev logs, design philosophy, and technical deep-dives.',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'studies',
    label: 'CASE.STUDIES',
    sublabel: 'Post-Mortems',
    href: '/studies',
    color: 'purple',
    accent: 'var(--neon-purple)',
    icon: '◎',
    description: 'Retrospectives on shipped projects — what worked, what broke, and what was learned.',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'contact',
    label: 'CONTACT',
    sublabel: 'Get In Touch',
    href: '/contact',
    color: 'orange',
    accent: 'var(--neon-orange)',
    icon: '◇',
    description: 'Open to collaboration, contracts, and interesting conversations.',
    span: 'col-span-1 row-span-1',
  },
]

export default function HomePage() {
  const recentPost = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0]

  const featuredProject = allProjects[0]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative hero-gradient px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Decorative lines */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)' }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-slide-in-left">
            <div
              className="font-mono-game text-xs mb-4 tracking-widest"
              style={{ color: 'var(--neon-cyan)' }}
            >
              {'// SYSTEM.BOOT — PORTFOLIO.V2.6'}
            </div>

            <h1
              className="font-heading text-5xl sm:text-7xl font-black mb-2 leading-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="glitch-text" style={{ color: 'var(--neon-cyan)' }}>KADE</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>XERO</span>
            </h1>

            <div
              className="font-mono-game text-sm sm:text-base mb-6 mt-4"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <span style={{ color: 'var(--neon-green)' }}>$</span>{' '}
              <span className="cursor-blink">GAME_DEVELOPER // SYSTEMS_ARCHITECT // WORLD_BUILDER</span>
            </div>

            <p
              className="text-lg mb-8 leading-relaxed max-w-xl"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}
            >
              Building interactive experiences that live at the intersection of technical systems and dark imagination.
              6 years. 4 shipped titles. 40K+ players.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-neon">
                View Games
              </Link>
              <Link to="/contact" className="btn-neon btn-neon-magenta">
                Work Together
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg animate-slide-in-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            {[
              { num: '4', label: 'Shipped Titles' },
              { num: '40K+', label: 'Players' },
              { num: '6 YRS', label: 'Experience' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4"
                style={{
                  border: '1px solid rgba(0,245,255,0.15)',
                  background: 'rgba(0,245,255,0.03)',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                }}
              >
                <div className="font-heading text-2xl font-black" style={{ color: 'var(--neon-cyan)' }}>
                  {stat.num}
                </div>
                <div className="font-mono-game text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="section-header text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
              NAVIGATION.MATRIX
            </h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.3), transparent)' }} />
          </div>

          {/* Desktop: Bento grid */}
          <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-3 h-[520px]">
            {/* Large featured card - Games */}
            <Link
              to="/projects"
              className="category-card col-span-2 row-span-2 p-8 flex flex-col justify-between group"
              style={{
                border: '1px solid rgba(0,245,255,0.2)',
                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
              }}
            >
              <div>
                <div
                  className="font-heading text-5xl mb-6 neon-pulse"
                  style={{ color: 'var(--neon-cyan)' }}
                >
                  ◈
                </div>
                <div className="font-mono-game text-xs mb-2" style={{ color: 'rgba(0,245,255,0.6)' }}>
                  01 // GAMES
                </div>
                <h3 className="font-heading text-3xl font-black mb-3" style={{ color: 'white' }}>
                  GAME<br />PROJECTS
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  {categories[0].description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: 'var(--neon-cyan)' }}>
                <span>ENTER_SECTION</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>

            {/* Thesis */}
            <Link
              to="/thesis"
              className="category-card game-card-magenta p-6 flex flex-col justify-between group"
              style={{ border: '1px solid rgba(255,0,128,0.2)' }}
            >
              <div>
                <div className="font-heading text-2xl mb-3" style={{ color: 'var(--neon-magenta)' }}>⬡</div>
                <div className="font-mono-game text-xs mb-1" style={{ color: 'rgba(255,0,128,0.6)' }}>02 // RESEARCH</div>
                <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>THESIS</h3>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: 'var(--neon-magenta)' }}>
                <span>READ</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Thoughts */}
            <Link
              to="/thoughts"
              className="category-card game-card-green p-6 flex flex-col justify-between group"
              style={{ border: '1px solid rgba(57,255,20,0.2)' }}
            >
              <div>
                <div className="font-heading text-2xl mb-3" style={{ color: 'var(--neon-green)' }}>▸</div>
                <div className="font-mono-game text-xs mb-1" style={{ color: 'rgba(57,255,20,0.6)' }}>03 // BLOG</div>
                <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>THOUGHTS</h3>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: 'var(--neon-green)' }}>
                <span>READ</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Studies */}
            <Link
              to="/studies"
              className="category-card game-card-purple p-6 flex flex-col justify-between group"
              style={{ border: '1px solid rgba(191,95,255,0.2)' }}
            >
              <div>
                <div className="font-heading text-2xl mb-3" style={{ color: 'var(--neon-purple)' }}>◎</div>
                <div className="font-mono-game text-xs mb-1" style={{ color: 'rgba(191,95,255,0.6)' }}>04 // ANALYSIS</div>
                <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>CASE STUDIES</h3>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: 'var(--neon-purple)' }}>
                <span>EXPLORE</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="category-card p-6 flex flex-col justify-between group col-span-2"
              style={{
                border: '1px solid rgba(255,107,0,0.2)',
                background: 'linear-gradient(135deg, var(--dark-card), rgba(255,107,0,0.05))',
              }}
            >
              <div>
                <div className="font-heading text-2xl mb-3" style={{ color: 'var(--neon-orange)' }}>◇</div>
                <div className="font-mono-game text-xs mb-1" style={{ color: 'rgba(255,107,0,0.6)' }}>05 // CONNECT</div>
                <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>CONTACT ME</h3>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: 'var(--neon-orange)' }}>
                <span>SEND_MESSAGE</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>

          {/* Mobile: Stack */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={cat.href}
                className="category-card p-6 flex flex-col gap-3 group"
                style={{ border: `1px solid ${cat.accent}30` }}
              >
                <div className="font-heading text-2xl" style={{ color: cat.accent }}>{cat.icon}</div>
                <div>
                  <div className="font-mono-game text-xs mb-1" style={{ color: `${cat.accent}99` }}>
                    0{i + 1}
                  </div>
                  <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>{cat.label}</h3>
                  <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Rajdhani, sans-serif' }}>
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono-game text-xs mt-auto" style={{ color: cat.accent }}>
                  <span>ENTER</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Post Preview */}
      {recentPost && (
        <section className="px-4 sm:px-6 lg:px-8 py-12" style={{ borderTop: '1px solid rgba(0,245,255,0.08)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="section-header text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                LATEST_TRANSMISSION
              </h2>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(57,255,20,0.3), transparent)' }} />
            </div>
            <Link to="/blog/$slug" params={{ slug: recentPost._meta.path }} className="block max-w-2xl">
              <div
                className="game-card p-6 group"
                style={{ borderColor: 'rgba(57,255,20,0.2)' }}
              >
                <div className="font-mono-game text-xs mb-2" style={{ color: 'var(--neon-green)' }}>
                  {new Date(recentPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-green-400 transition-colors" style={{ color: 'white' }}>
                  {recentPost.title}
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  {recentPost.summary}
                </p>
                <div className="flex items-center gap-2 font-mono-game text-xs mt-4" style={{ color: 'var(--neon-green)' }}>
                  <span>READ_POST</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}
