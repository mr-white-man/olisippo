import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import pageData from '../../content/pages/resume.json'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="min-h-screen page-enter" data-sb-object-id="pages/resume.json">
      <SectionRenderer sections={pageData.sections as any} />
    </div>
  )
}
