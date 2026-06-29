import { createFileRoute } from '@tanstack/react-router'
import { SectionRenderer } from '@/components/SectionRenderer'
import pageData from '../../content/pages/contact.json'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="min-h-screen page-enter" data-sb-object-id="pages/contact.json">
      <SectionRenderer sections={pageData.sections as any} />
    </div>
  )
}
