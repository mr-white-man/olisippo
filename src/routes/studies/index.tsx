import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import pageData from '../../../content/pages/studies.json'

export const Route = createFileRoute('/studies/')({
  component: StudiesPage,
})

function StudiesPage() {
  return (
    <div className="min-h-screen page-enter" data-sb-object-id="pages/studies.json">
      <SectionRenderer sections={pageData.sections as any} />
    </div>
  )
}
