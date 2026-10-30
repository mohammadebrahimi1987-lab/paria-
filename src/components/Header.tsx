import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { content } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'

interface HeaderProps {
  menuOpen: boolean
  onToggleMenu: () => void
}

export default function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const { lang, setLang } = useLanguage()
  const t = useT()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const light = menuOpen || scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        light ? 'bg-paper-3/90 backdrop-blur-sm border-b border-hairline' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[72px]">
        {/* Wordmark */}
        <Link to="/" className="group leading-none" onClick={() => menuOpen && onToggleMenu()}>
          <span className="font-monstra gold-text block text-[15px] sm:text-base tracking-[0.22em] uppercase">
            Paria Karami
          </span>
          <span className="serif-zh block text-[11px] tracking-[0.5em] text-ink-soft mt-1.5">
            帕里亚 · 卡拉米
          </span>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          {/* Language toggle */}
          <div className="flex items-center text-[12px] tracking-[0.18em] select-none" aria-label="Language">
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-2 transition-colors ${lang === 'en' ? 'text-ink' : 'text-ink-soft/50 hover:text-ink active:text-ink'}`}
            >
              EN
            </button>
            <span className="text-ink-soft/40">/</span>
            <button
              onClick={() => setLang('zh')}
              className={`px-1.5 py-2 transition-colors ${lang === 'zh' ? 'text-ink' : 'text-ink-soft/50 hover:text-ink active:text-ink'}`}
            >
              中文
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={onToggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t(content.ui.close) : t(content.ui.menu)}
            className={`${menuOpen ? 'burger-open' : ''} group flex items-center gap-3 min-h-[44px] min-w-[44px] justify-end`}
          >
            <span className="hidden sm:block text-[11px] tracking-[0.3em] uppercase text-ink-soft group-hover:text-ink active:text-ink group-active:text-ink transition-colors">
              {menuOpen ? t(content.ui.close) : t(content.ui.menu)}
            </span>
            <span className="flex flex-col gap-[8px]">
              <span className="burger-line" />
              <span className="burger-line" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
