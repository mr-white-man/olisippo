import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        // ── PAGE FILES ──────────────────────────────────────────────
        {
          name: 'page',
          type: 'page',
          filePath: 'content/pages/{slug}.json',
          urlPath: '/{slug}',
          fields: [
            { name: 'title', type: 'string', required: true },
            {
              name: 'sections', type: 'list', items: {
                type: 'model', models: [
                  'HeroSection','StatsSection','NavGridSection','LatestPostSection',
                  'PageHeaderSection','ProjectsGridSection','BlogListSection',
                  'ContactSection','ThesisSection','StudiesSection','ResumeSection','TextSection',
                ]
              }
            },
          ],
        },

        // ── SECTION MODELS ──────────────────────────────────────────
        { name: 'HeroSection', type: 'object', fields: [
          { name: 'badge', type: 'string' },
          { name: 'title', type: 'string', required: true },
          { name: 'subtitle', type: 'string', required: true },
          { name: 'tagline', type: 'string', required: true },
          { name: 'ctaPrimary', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }] },
          { name: 'ctaSecondary', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'string' }] },
        ]},

        { name: 'StatsSection', type: 'object', fields: [
          { name: 'stats', type: 'list', items: { type: 'object', fields: [{ name: 'num', type: 'string' }, { name: 'label', type: 'string' }] } },
        ]},

        { name: 'NavGridSection', type: 'object', fields: [
          { name: 'heading', type: 'string' },
          { name: 'items', type: 'list', items: { type: 'object', fields: [
            { name: 'id', type: 'string' }, { name: 'label', type: 'string' },
            { name: 'sublabel', type: 'string' }, { name: 'href', type: 'string' },
            { name: 'accent', type: 'string' }, { name: 'icon', type: 'string' },
            { name: 'description', type: 'string' },
          ]}},
        ]},

        { name: 'LatestPostSection', type: 'object', fields: [
          { name: 'heading', type: 'string' },
        ]},

        { name: 'PageHeaderSection', type: 'object', fields: [
          { name: 'badge', type: 'string' },
          { name: 'title', type: 'string', required: true },
          { name: 'titleAccent', type: 'string' },
          { name: 'accentColor', type: 'string' },
          { name: 'subtitle', type: 'string' },
        ]},

        { name: 'ProjectsGridSection', type: 'object', fields: [] },
        { name: 'BlogListSection', type: 'object', fields: [] },
        { name: 'StudiesSection', type: 'object', fields: [] },
        { name: 'ResumeSection', type: 'object', fields: [] },

        { name: 'ContactSection', type: 'object', fields: [
          { name: 'availability', type: 'string' },
          { name: 'contacts', type: 'list', items: { type: 'object', fields: [
            { name: 'label', type: 'string' }, { name: 'value', type: 'string' }, { name: 'icon', type: 'string' },
          ]}},
        ]},

        { name: 'ThesisSection', type: 'object', fields: [
          { name: 'title', type: 'string' }, { name: 'subtitle', type: 'string' },
          { name: 'abstract', type: 'string' },
          { name: 'contributions', type: 'list', items: { type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'desc', type: 'string' }] } },
          { name: 'chapters', type: 'list', items: { type: 'object', fields: [{ name: 'num', type: 'string' }, { name: 'title', type: 'string' }, { name: 'summary', type: 'string' }] } },
          { name: 'result', type: 'string' },
        ]},

        { name: 'TextSection', type: 'object', fields: [
          { name: 'content', type: 'string', required: true },
          { name: 'align', type: 'enum', options: ['left', 'center'] },
        ]},

        // ── CONTENT MODELS ──────────────────────────────────────────
        {
          name: 'blog', type: 'page',
          urlPath: '/blog/{slug}',
          filePath: 'content/blog/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'date', type: 'date', required: true },
            { name: 'summary', type: 'string', required: true },
            { name: 'author', type: 'string', required: true },
            { name: 'tags', type: 'list', items: { type: 'string' } },
          ],
        },
        {
          name: 'projects', type: 'page',
          urlPath: '/projects/{slug}',
          filePath: 'content/projects/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string', required: true },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'github', type: 'string' },
            { name: 'liveUrl', type: 'string' },
          ],
        },
        {
          name: 'studies', type: 'data',
          filePath: 'content/studies/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'subtitle', type: 'string', required: true },
            { name: 'date', type: 'date', required: true },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'outcomes', type: 'list', items: { type: 'string' } },
          ],
        },
        {
          name: 'jobs', type: 'data',
          filePath: 'content/jobs/{slug}.md',
          fields: [
            { name: 'jobTitle', type: 'string', required: true },
            { name: 'company', type: 'string', required: true },
            { name: 'summary', type: 'string', required: true },
            { name: 'location', type: 'string', required: true },
            { name: 'startDate', type: 'string', required: true },
            { name: 'endDate', type: 'string' },
            { name: 'tags', type: 'list', items: { type: 'string' } },
          ],
        },
        {
          name: 'education', type: 'data',
          filePath: 'content/education/{slug}.md',
          fields: [
            { name: 'school', type: 'string', required: true },
            { name: 'summary', type: 'string', required: true },
            { name: 'startDate', type: 'string', required: true },
            { name: 'endDate', type: 'string' },
            { name: 'tags', type: 'list', items: { type: 'string' } },
          ],
        },
      ],
    }),
  ],
})
