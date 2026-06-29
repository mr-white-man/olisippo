export type Section =
  | HeroSectionType
  | StatsSectionType
  | NavGridSectionType
  | LatestPostSectionType
  | PageHeaderSectionType
  | ProjectsGridSectionType
  | BlogListSectionType
  | ContactSectionType
  | ThesisSectionType
  | StudiesSectionType
  | ResumeSectionType
  | TextSectionType

export interface HeroSectionType {
  type: 'HeroSection'
  badge?: string
  title: string
  subtitle: string
  tagline: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export interface StatsSectionType {
  type: 'StatsSection'
  stats: { num: string; label: string }[]
}

export interface NavGridSectionType {
  type: 'NavGridSection'
  heading?: string
  items: {
    id: string; label: string; sublabel: string
    href: string; accent: string; icon: string; description: string
  }[]
}

export interface LatestPostSectionType {
  type: 'LatestPostSection'
  heading?: string
}

export interface PageHeaderSectionType {
  type: 'PageHeaderSection'
  badge?: string
  title: string
  titleAccent?: string
  accentColor?: string
  subtitle?: string
}

export interface ProjectsGridSectionType { type: 'ProjectsGridSection' }
export interface BlogListSectionType { type: 'BlogListSection' }
export interface StudiesSectionType { type: 'StudiesSection' }
export interface ResumeSectionType { type: 'ResumeSection' }

export interface ContactSectionType {
  type: 'ContactSection'
  availability?: string
  contacts?: { label: string; value: string; icon: string }[]
}

export interface ThesisSectionType {
  type: 'ThesisSection'
  title: string; subtitle: string; meta?: string[]
  abstract?: string
  contributions?: { label: string; desc: string }[]
  chapters?: { num: string; title: string; summary: string }[]
  result?: string
}

export interface TextSectionType {
  type: 'TextSection'
  content: string
  align?: 'left' | 'center'
}
