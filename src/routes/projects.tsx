import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import pageData from '../../content/pages/projects.json'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <div className="min-h-screen page-enter" data-sb-object-id="pages/projects.json">
      <SectionRenderer sections={pageData.sections as any} />
    </div>
  )
}
