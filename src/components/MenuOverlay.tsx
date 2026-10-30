import { useEffect } from 'react'
import { Link } from 'react-router'
import { content } from '@/content'
import { useLanguage } from '@/hooks/useLanguage'

const routeMap: Record<string, string> = {
  barzakh: '/series/barzakh',
  adornments: '/series/adornments',
  unseen: '/series/unseen',
  cv: '/cv',
}

interface MenuOverlayProps {
  open: boolean
  onClose: () => void
}

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const { lang } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={`menu-overlay ${open ? 'open' : ''} fixed inset-0 z-30 bg-paper flex flex-col justify-between pointer-events-none`}
      aria-hidden={!open}
      style={{ visibility: open ? 'visible' : 'hidden', transitionProperty: 'transform, visibility', pointerEvents: open ? 'auto' : 'none' }}
    >
      <div style={{ height: 'calc(72px + env(safe-area-inset-top))' }} />

      <nav className="flex-1 flex flex-col justify-center px-6 sm:px-14 lg:px-24 overflow-y-auto">
        <ul>
          {content.nav.map((item, i) => (
            <li key={item.id} className="menu-item border-b border-hairline last:border-b-0" style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}>
              {routeMap[item.id] ? (
                <Link
                  to={routeMap[item.id]}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 sm:gap-8 py-3 sm:py-4"
                >
                  <span className="text-[11px] tracking-[0.2em] text-olive font-medium w-6 shrink-0">
                    {String(i).padStart(2, '0')}
                  </span>
                  <span className="font-monstra gold-text text-[clamp(26px,5.2vh,44px)] leading-tight transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2">
                    {item.en}
                  </span>
                  <span className="serif-zh whitespace-nowrap text-sm sm:text-base text-ink-soft group-hover:text-olive group-active:text-olive transition-colors duration-300">
                    {item.zh}
                  </span>
                </Link>
              ) : (
                <a
                  href={`/#${item.id}`}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 sm:gap-8 py-3 sm:py-4"
                >
                  <span className="text-[11px] tracking-[0.2em] text-olive font-medium w-6 shrink-0">
                    {String(i).padStart(2, '0')}
                  </span>
                  <span className="font-monstra gold-text text-[clamp(26px,5.2vh,44px)] leading-tight transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2">
                    {item.en}
                  </span>
                  <span className="serif-zh whitespace-nowrap text-sm sm:text-base text-ink-soft group-hover:text-olive group-active:text-olive transition-colors duration-300">
                    {item.zh}
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 sm:px-14 lg:px-24 pb-8 flex flex-wrap gap-x-10 gap-y-2 text-[12px] tracking-[0.14em] text-ink-soft">
        <a className="u-link" href={`mailto:${content.contact.emails[0]}`}>{content.contact.emails[0]}</a>
        <span>{content.contact.phone}</span>
        <span>{lang === 'zh' ? content.contact.location.zh : content.contact.location.en}</span>
      </div>
    </div>
  )
}
