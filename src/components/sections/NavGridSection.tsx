import { Link } from '@tanstack/react-router'
import type { NavGridSectionType } from '@/types/sections'

export function NavGridSection({ section }: { section: NavGridSectionType; index: number }) {
  const [games, thesis, thoughts, studies, contact] = section.items
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10" data-sb-field-path=".heading">
          <h2 className="section-header text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>{section.heading ?? 'NAVIGATION.MATRIX'}</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.3), transparent)' }} />
        </div>
        {/* Desktop bento */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-3 h-[520px]">
          {games && (
            <Link to={games.href as any} className="category-card col-span-2 row-span-2 p-8 flex flex-col justify-between group" style={{ border: '1px solid rgba(0,245,255,0.2)', clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }} data-sb-field-path=".items[0]">
              <div>
                <div className="font-heading text-5xl mb-6 neon-pulse" style={{ color: 'var(--neon-cyan)' }}>{games.icon}</div>
                <div className="font-mono-game text-xs mb-2" style={{ color: 'rgba(0,245,255,0.6)' }}>01 // GAMES</div>
                <h3 className="font-heading text-3xl font-black mb-3" style={{ color: 'white' }}>GAME<br/>PROJECTS</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>{games.description}</p>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: 'var(--neon-cyan)' }}>
                <span>ENTER_SECTION</span><span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          )}
          {[thesis, thoughts, studies, contact].map((item, i) => item && (
            <Link key={item.id} to={item.href as any} className="category-card p-6 flex flex-col justify-between group" style={{ border: `1px solid ${item.accent}30`, ...(i === 3 ? { gridColumn: 'span 2' } : {}) }} data-sb-field-path={`.items[${i+1}]`}>
              <div>
                <div className="font-heading text-2xl mb-3" style={{ color: item.accent }}>{item.icon}</div>
                <div className="font-mono-game text-xs mb-1" style={{ color: `${item.accent}99` }}>0{i+2} // {item.sublabel.toUpperCase()}</div>
                <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>{item.label}</h3>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs" style={{ color: item.accent }}>
                <span>ENTER</span><span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
        {/* Mobile stack */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
          {section.items.map((item, i) => (
            <Link key={item.id} to={item.href as any} className="category-card p-6 flex flex-col gap-3 group" style={{ border: `1px solid ${item.accent}30` }}>
              <div className="font-heading text-2xl" style={{ color: item.accent }}>{item.icon}</div>
              <div>
                <div className="font-mono-game text-xs mb-1" style={{ color: `${item.accent}99` }}>0{i+1}</div>
                <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>{item.label}</h3>
                <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Rajdhani, sans-serif' }}>{item.description}</p>
              </div>
              <div className="flex items-center gap-2 font-mono-game text-xs mt-auto" style={{ color: item.accent }}>
                <span>ENTER</span><span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
