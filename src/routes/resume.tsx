import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="min-h-screen page-enter">
      <div
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{
          borderBottom: '1px solid rgba(0,245,255,0.1)',
          background: 'radial-gradient(ellipse at 20% 60%, rgba(0,245,255,0.04) 0%, transparent 50%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="font-mono-game text-xs mb-3" style={{ color: 'var(--neon-cyan)' }}>
            {'// SECTION_07 :: EXPERIENCE.LOG'}
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black mb-4" style={{ color: 'white' }}>
            EXP<span style={{ color: 'var(--neon-cyan)' }}>.</span>LOG
          </h1>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
            Professional experience, education, and the technical stack accumulated over 6 years of shipping games.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Work Experience */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="section-header text-sm" style={{ color: 'var(--neon-cyan)' }}>
              WORK_EXPERIENCE
            </h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.4), transparent)' }} />
          </div>

          <div className="space-y-8">
            {allJobs.map((job, i) => (
              <div
                key={job._meta.path}
                className="game-card relative p-8"
                style={{
                  border: '1px solid rgba(0,245,255,0.12)',
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
                }}
              >
                <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: '1px solid var(--neon-cyan)', borderRight: '1px solid var(--neon-cyan)' }} />

                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="font-mono-game text-xs mb-1" style={{ color: 'rgba(0,245,255,0.5)' }}>
                      JOB_{String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-heading text-xl font-black" style={{ color: 'white' }}>{job.jobTitle}</h3>
                    <div className="font-mono-game text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
                      {job.company} // {job.location}
                    </div>
                  </div>
                  <div
                    className="font-mono-game text-xs px-3 py-1"
                    style={{
                      border: '1px solid rgba(0,245,255,0.2)',
                      color: 'rgba(255,255,255,0.4)',
                      background: 'rgba(0,245,255,0.03)',
                    }}
                  >
                    {new Date(job.startDate).getFullYear()} — {job.endDate ? new Date(job.endDate).getFullYear() : 'PRESENT'}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                  {job.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-game text-xs px-2 py-0.5"
                      style={{
                        border: '1px solid rgba(0,245,255,0.2)',
                        color: 'var(--neon-cyan)',
                        background: 'rgba(0,245,255,0.05)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {job.content && (
                  <div
                    className="prose-game text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, borderTop: '1px solid rgba(0,245,255,0.08)', paddingTop: '1.25rem' }}
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="section-header text-sm" style={{ color: 'var(--neon-magenta)' }}>
              EDUCATION
            </h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.4), transparent)' }} />
          </div>

          {allEducations.map((edu) => (
            <div
              key={edu._meta.path}
              className="game-card game-card-magenta p-8"
              style={{ border: '1px solid rgba(255,0,128,0.12)' }}
            >
              <h3 className="font-heading text-xl font-black mb-2" style={{ color: 'white' }}>
                {edu.school}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                {edu.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-game text-xs px-2 py-0.5"
                    style={{
                      border: '1px solid rgba(255,0,128,0.2)',
                      color: 'var(--neon-magenta)',
                      background: 'rgba(255,0,128,0.05)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {edu.content && (
                <div
                  className="prose-game text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500, borderTop: '1px solid rgba(255,0,128,0.08)', paddingTop: '1.25rem' }}
                  dangerouslySetInnerHTML={{ __html: marked(edu.content) }}
                />
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
