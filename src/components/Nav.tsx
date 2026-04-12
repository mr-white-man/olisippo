import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: '// Home' },
  { to: '/projects', label: '// Games' },
  { to: '/thesis', label: '// Thesis' },
  { to: '/studies', label: '// Studies' },
  { to: '/thoughts', label: '// Thoughts' },
  { to: '/contact', label: '// Contact' },
]

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouterState()
  const currentPath = router.location.pathname

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(5,5,13,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,245,255,0.1)',
        boxShadow: '0 0 30px rgba(0,245,255,0.03)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 flex items-center justify-center text-xs font-mono font-bold"
              style={{
                border: '1px solid var(--neon-cyan)',
                color: 'var(--neon-cyan)',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                boxShadow: '0 0 8px rgba(0,245,255,0.3)',
              }}
            >
              KX
            </div>
            <span
              className="font-heading text-sm font-bold tracking-widest"
              style={{ color: 'var(--neon-cyan)', letterSpacing: '0.2em' }}
            >
              KADE.XERO
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = link.to === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.to)
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden font-mono text-xs"
            style={{ color: 'var(--neon-cyan)' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '[CLOSE]' : '[MENU]'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 space-y-3"
          style={{ borderTop: '1px solid rgba(0,245,255,0.1)' }}
        >
          {navLinks.map((link) => {
            const isActive = link.to === '/'
              ? currentPath === '/'
              : currentPath.startsWith(link.to)
            return (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link block ${isActive ? 'nav-link-active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </nav>
  )
}
