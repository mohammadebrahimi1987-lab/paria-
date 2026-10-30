import { useCallback, useEffect, useRef, useState } from 'react'
import type { Artwork } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'

interface AccordionGalleryProps {
  artworks: Artwork[]
  onEnlarge: (index: number) => void
}

/**
 * Accordion gallery — a row of tall strips (desktop) / stacked strips (mobile).
 * Panels glide left & right as the active one expands; clicking the active
 * panel reveals the artwork's information.
 */
export default function AccordionGallery({ artworks, onEnlarge }: AccordionGalleryProps) {
  const t = useT()
  const { lang } = useLanguage()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<number | null>(null)

  /* Slow auto-drift so the row is always in motion; pauses on interaction */
  useEffect(() => {
    if (paused) return
    timer.current = window.setInterval(() => {
      setActive((a) => (a + 1) % artworks.length)
    }, 4200)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [paused, artworks.length])

  const hold = useCallback(() => setPaused(true), [])
  const release = useCallback(() => setPaused(false), [])

  const info = (art: Artwork, i: number, compact = false) => (
    <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 ${compact ? 'p-4' : 'p-5 sm:p-7'}`}>
      <div className="bg-gradient-to-t from-paper-3/95 via-paper-3/70 to-transparent absolute inset-0 -z-10" />
      <p className="text-[10px] tracking-[0.3em] text-olive mb-1.5">
        {String(i + 1).padStart(2, '0')} / {String(artworks.length).padStart(2, '0')}
      </p>
      <p
        className={`font-light text-ink ${compact ? 'text-base' : 'text-lg sm:text-2xl'} ${
          lang === 'zh' ? 'serif-zh tracking-[0.05em]' : 'serif-latin italic'
        }`}
      >
        {t(art.title)}
      </p>
      <p className={`mt-1 tracking-[0.12em] text-ink-soft ${compact ? 'text-[10px]' : 'text-[11px] sm:text-xs'}`}>
        {t(art.medium)} · {art.size}
      </p>
    </div>
  )

  return (
    <div className="pb-24 sm:pb-32">
      {/* ---------- Desktop: horizontal accordion ---------- */}
      <div
        className="hidden lg:flex gap-[3px] px-5 sm:px-8 lg:px-12 h-[74vh] min-h-[480px]"
        onMouseEnter={hold}
        onMouseLeave={release}
      >
        {artworks.map((art, i) => {
          const isActive = i === active
          return (
            <button
              key={art.src}
              onClick={() => {
                setActive(i)
                if (isActive) onEnlarge(i)
              }}
              onMouseEnter={() => setActive(i)}
              className="accordion-panel group relative min-w-0 overflow-hidden text-left focus-visible:z-20"
              style={{ flexGrow: isActive ? 5.5 : 1 }}
              aria-label={`${t(art.title)} — ${t({ en: 'View details', zh: '查看详情' })}`}
              aria-expanded={isActive}
            >
              <img
                src={art.src}
                alt={t(art.title)}
                loading={i < 3 ? 'eager' : 'lazy'}
                draggable={false}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? 'scale-100 brightness-100' : 'scale-110 brightness-[0.55] saturate-[0.7]'
                }`}
              />
              {/* hairline divider */}
              <span className="absolute inset-y-0 right-0 w-px bg-paper/60" />

              {/* collapsed: vertical index + title */}
              <span
                className={`absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-500 ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="vertical-text text-[11px] tracking-[0.3em] uppercase text-ink/90 select-none">
                  {lang === 'zh'
                    ? `${String(i + 1).padStart(2, '0')} — 第 ${i + 1} 号`
                    : `${String(i + 1).padStart(2, '0')} — ${t(art.title)}`}
                </span>
              </span>

              {/* active: artwork information */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive ? 'opacity-100 delay-300' : 'opacity-0'
                }`}
              >
                {info(art, i)}
                <span className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 text-ink/80 transition-colors group-hover:border-olive group-active:border-olive group-hover:text-olive group-active:text-olive">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 4 L20 4 L20 9 M20 4 L13 11 M9 20 L4 20 L4 15 M4 20 L11 13" />
                  </svg>
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* ---------- Mobile: vertical accordion ---------- */}
      <div className="lg:hidden flex flex-col gap-[3px] px-5 sm:px-8">
        {artworks.map((art, i) => {
          const isActive = i === active
          return (
            <button
              key={art.src}
              onClick={() => {
                hold()
                if (isActive) {
                  onEnlarge(i)
                } else {
                  setActive(i)
                }
              }}
              className="accordion-panel-v group relative w-full overflow-hidden text-left"
              style={{ height: isActive ? 380 : 72 }}
              aria-label={`${t(art.title)} — ${t({ en: 'View details', zh: '查看详情' })}`}
              aria-expanded={isActive}
            >
              <img
                src={art.src}
                alt={t(art.title)}
                loading="lazy"
                draggable={false}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? 'scale-100 brightness-100' : 'scale-110 brightness-[0.55] saturate-[0.7]'
                }`}
              />
              {/* collapsed strip label */}
              <span
                className={`absolute inset-0 flex items-center gap-3 px-4 transition-opacity duration-500 ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="text-[10px] tracking-[0.25em] text-olive">{String(i + 1).padStart(2, '0')}</span>
                <span className={`text-sm text-ink/90 truncate ${lang === 'zh' ? 'serif-zh' : 'serif-latin italic'}`}>
                  {t(art.title)}
                </span>
              </span>
              {/* active info */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive ? 'opacity-100 delay-200' : 'opacity-0'
                }`}
              >
                {info(art, i, true)}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
