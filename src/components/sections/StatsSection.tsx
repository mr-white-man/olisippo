import type { StatsSectionType } from '@/types/sections'

export function StatsSection({ section }: { section: StatsSectionType; index: number }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 max-w-lg animate-slide-in-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
          {section.stats.map((stat, i) => (
            <div key={i} className="text-center p-4" data-sb-field-path={`.stats[${i}]`}
              style={{ border: '1px solid rgba(0,245,255,0.15)', background: 'rgba(0,245,255,0.03)', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              <div className="font-heading text-2xl font-black" style={{ color: 'var(--neon-cyan)' }} data-sb-field-path=".num">{stat.num}</div>
              <div className="font-mono-game text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }} data-sb-field-path=".label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
