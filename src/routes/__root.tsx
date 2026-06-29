import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import siteConfig from '../../content/pages/config.json'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteConfig.siteTitle },
      { name: 'description', content: siteConfig.siteDescription },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap' },
      ...(siteConfig.favicon ? [{ rel: 'icon', href: siteConfig.favicon }] : []),
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body style={{ background: 'var(--dark-bg)', minHeight: '100vh' }}>
        <div className="grid-bg min-h-screen">
          <Nav />
          <main className="pt-14">
            <Outlet />
          </main>
          <footer
            className="mt-20 py-8 px-4 text-center"
            style={{ borderTop: '1px solid rgba(0,245,255,0.1)' }}
          >
            <p className="font-mono-game text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              &lt; {siteConfig.siteName} © 2026 // GAME.DEV // ALL.RIGHTS.RESERVED &gt;
            </p>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
