import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import homeData from '../../content/pages/home.json'

export const Route = createFileRoute('/')({
  component: HomePage,
})

export default function HomePage() {
  return (
    <div className="min-h-screen" data-sb-object-id="pages/home.json">
      <SectionRenderer sections={homeData.sections as any} />
    </div>
  )
}
