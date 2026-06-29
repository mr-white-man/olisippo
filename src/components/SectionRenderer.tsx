import type { Section } from '@/types/sections'
import { HeroSection } from './sections/HeroSection'
import { StatsSection } from './sections/StatsSection'
import { NavGridSection } from './sections/NavGridSection'
import { LatestPostSection } from './sections/LatestPostSection'
import { PageHeaderSection } from './sections/PageHeaderSection'
import { ProjectsGridSection } from './sections/ProjectsGridSection'
import { BlogListSection } from './sections/BlogListSection'
import { ContactSection } from './sections/ContactSection'
import { ThesisSection } from './sections/ThesisSection'
import { StudiesSection } from './sections/StudiesSection'
import { ResumeSection } from './sections/ResumeSection'
import { TextSection } from './sections/TextSection'

const sectionMap: Record<string, React.ComponentType<{ section: any; index: number }>> = {
  HeroSection,
  StatsSection,
  NavGridSection,
  LatestPostSection,
  PageHeaderSection,
  ProjectsGridSection,
  BlogListSection,
  ContactSection,
  ThesisSection,
  StudiesSection,
  ResumeSection,
  TextSection,
}

export function SectionRenderer({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section, i) => {
        const Component = sectionMap[section.type]
        if (!Component) {
          console.warn(`Unknown section type: ${section.type}`)
          return null
        }
        return (
          <div key={i} data-sb-field-path={`.sections[${i}]`}>
            <Component section={section} index={i} />
          </div>
        )
      })}
    </>
  )
}
