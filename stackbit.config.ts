import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types'
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
        {
          name: 'blog',
          type: 'page',
          urlPath: '/blog/{_id}',
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
          name: 'projects',
          type: 'data',
          filePath: 'content/projects/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'string', required: true },
            { name: 'tags', type: 'list', items: { type: 'string' } },
            { name: 'github', type: 'string' },
            { name: 'liveUrl', type: 'string' },
            { name: 'image', type: 'string' },
          ],
        },
        {
          name: 'studies',
          type: 'data',
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
          name: 'jobs',
          type: 'data',
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
          name: 'education',
          type: 'data',
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

  siteMap: ({ documents }): SiteMapEntry[] => {
    const entries: SiteMapEntry[] = []
    for (const doc of documents) {
      if (doc.modelName === 'blog') {
        const slug = doc.id.replace(/^blog\//, '').replace(/\.md$/, '')
        entries.push({
          stableId: doc.id,
          label: doc.fields.title?.toString() ?? slug,
          urlPath: `/blog/${slug}`,
          document: doc,
        })
      }
    }
    return entries
  },
})
