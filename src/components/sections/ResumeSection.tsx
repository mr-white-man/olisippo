import { allJobs, allEducations } from 'content-collections'
import { marked } from 'marked'

export function ResumeSection({ index }: { section: any; index: number }) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="section-header text-sm" style={{ color: 'var(--neon-cyan)' }}>WORK_EXPERIENCE</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.4), transparent)' }} />
        </div>
        <div className="space-y-8">
          {allJobs.map((job, i) => (
            <div key={job._meta.path} className="game-card relative p-8" style={{ border: '1px solid rgba(0,245,255,0.12)', clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }} data-sb-object-id={`jobs/${job._meta.path}.md`}>
              <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: '1px solid var(--neon-cyan)', borderRight: '1px solid var(--neon-cyan)' }} />
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <div className="font-mono-game text-xs mb-1" style={{ color: 'rgba(0,245,255,0.5)' }}>JOB_{String(i+1).padStart(2,'0')}</div>
                  <h3 className="font-heading text-xl font-black" style={{ color: 'white' }} data-sb-field-path="jobTitle">{job.jobTitle}</h3>
                  <div className="font-mono-game text-sm mt-1" style={{ color: 'var(--neon-cyan)' }} data-sb-field-path="company">{job.company} // {job.location}</div>
                </div>
                <div className="font-mono-game text-xs px-3 py-1" style={{ border: '1px solid rgba(0,245,255,0.2)', color: 'rgba(255,255,255,0.4)', background: 'rgba(0,245,255,0.03)' }}>
                  {new Date(job.startDate).getFullYear()} — {job.endDate ? new Date(job.endDate).getFullYear() : 'PRESENT'}
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="summary">{job.summary}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => <span key={tag} className="font-mono-game text-xs px-2 py-0.5" style={{ border: '1px solid rgba(0,245,255,0.2)', color: 'var(--neon-cyan)', background: 'rgba(0,245,255,0.05)' }}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="section-header text-sm" style={{ color: 'var(--neon-magenta)' }}>EDUCATION</h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.4), transparent)' }} />
        </div>
        {allEducations.map((edu) => (
          <div key={edu._meta.path} className="game-card game-card-magenta p-8" style={{ border: '1px solid rgba(255,0,128,0.12)' }} data-sb-object-id={`education/${edu._meta.path}.md`}>
            <h3 className="font-heading text-xl font-black mb-2" style={{ color: 'white' }} data-sb-field-path="school">{edu.school}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }} data-sb-field-path="summary">{edu.summary}</p>
            <div className="flex flex-wrap gap-2">
              {edu.tags.map((tag) => <span key={tag} className="font-mono-game text-xs px-2 py-0.5" style={{ border: '1px solid rgba(255,0,128,0.2)', color: 'var(--neon-magenta)', background: 'rgba(255,0,128,0.05)' }}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
