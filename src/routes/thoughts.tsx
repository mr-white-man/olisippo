import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import pageData from '../../content/pages/thoughts.json'

export const Route = createFileRoute('/thoughts')({
  component: ThoughtsPage,
})

function ThoughtsPage() {
  return (
    <div className="min-h-screen page-enter" data-sb-object-id="pages/thoughts.json">
      <SectionRenderer sections={pageData.sections as any} />
    </div>
  )
}
