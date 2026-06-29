import type { TextSectionType } from '@/types/sections'

export function TextSection({ section }: { section: TextSectionType; index: number }) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className={`prose-game ${section.align === 'center' ? 'text-center' : ''}`}
        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, fontSize: '1.05rem', lineHeight: '1.8' }}
        data-sb-field-path=".content">
        {section.content}
      </div>
    </section>
  )
}
