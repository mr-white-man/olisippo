import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import pageData from '../../content/pages/thesis.json'

export const Route = createFileRoute('/thesis')({
  component: ThesisPage,
})

function ThesisPage() {
  return (
    <div className="min-h-screen page-enter" data-sb-object-id="pages/thesis.json">
      <SectionRenderer sections={pageData.sections as any} />
    </div>
  )
}
