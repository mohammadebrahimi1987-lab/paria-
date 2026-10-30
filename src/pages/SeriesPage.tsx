import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Header from '@/components/Header'
import MenuOverlay from '@/components/MenuOverlay'
import Footer from '@/components/Footer'
import Lightbox, { type LightboxState } from '@/components/Lightbox'
import Reveal from '@/components/Reveal'
import AccordionGallery from '@/components/AccordionGallery'
import { content } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'

function SeriesContent() {
  const { id } = useParams()
  const t = useT()
  const { lang } = useLanguage()
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const seriesIndex = content.series.findIndex((s) => s.id === id)
  const series = seriesIndex >= 0 ? content.series[seriesIndex] : undefined
  const nextSeries = seriesIndex >= 0
    ? content.series[(seriesIndex + 1) % content.series.length]
    : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const navigate = useCallback((index: number) => {
    setLightbox((s) => (s ? { ...s, index } : s))
  }, [])

  if (!series) {
    return (
      <main className="px-5 sm:px-8 lg:px-12 pt-40 pb-32">
        <p className="serif-latin italic font-light text-2xl">{t({ en: 'Series not found.', zh: '未找到该系列。' })}</p>
        <Link to="/" className="u-link inline-block mt-6 text-[12px] tracking-[0.3em] uppercase">
          ← {t({ en: 'Back to home', zh: '返回首页' })}
        </Link>
      </main>
    )
  }

  return (
    <main className="relative z-10">
      {/* Header block */}
      <div className="px-5 sm:px-8 lg:px-12 pt-[calc(72px+4rem)] sm:pt-[calc(72px+6rem)] pb-16 sm:pb-24">
        <Reveal>
          <Link to="/" className="u-link text-[11px] tracking-[0.3em] uppercase text-ink-soft">
            ← {t({ en: 'All works', zh: '全部作品' })}
          </Link>
        </Reveal>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 mt-10 sm:mt-14">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-5">
              {t({ en: 'Series', zh: '系列' })} {series.index} — {t(series.count)}
            </p>
            <h1 className="font-monstra gold-text leading-[1.02] text-[clamp(38px,5.5vw,72px)]">
              {series.title.en}
            </h1>
            <p className="serif-latin italic font-light mt-2 text-[clamp(20px,2.6vw,32px)] text-ink-soft">
              {series.subtitle.en}
            </p>
            <p className="serif-zh mt-4 text-lg sm:text-xl tracking-[0.2em]">
              {series.title.zh} <span className="text-ink-soft">· {series.subtitle.zh}</span>
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className={`text-sm sm:text-[15px] leading-[1.9] text-ink-soft ${lang === 'zh' ? 'text-justify' : ''}`}>
              {t(series.intro)}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Accordion gallery — panels glide left/right; click reveals the artwork's details */}
      <Reveal>
        <p className="px-5 sm:px-8 lg:px-12 mb-6 text-[11px] tracking-[0.3em] uppercase text-ink-soft">
          {t({ en: 'Glide across the works — click a panel for its details', zh: '滑动浏览作品——点击画板查看详情' })}
        </p>
      </Reveal>
      <AccordionGallery
        artworks={series.artworks}
        onEnlarge={(index) => setLightbox({ artworks: series.artworks, index })}
      />

      {/* Next series link */}
      {nextSeries && (
        <div className="border-t border-hairline px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-6">
              {t({ en: 'Next series', zh: '下一系列' })}
            </p>
            <Link to={`/series/${nextSeries.id}`} className="group inline-block">
              <span className="font-monstra gold-text leading-none text-[clamp(34px,6vw,80px)] inline-block transition-transform duration-300 group-hover:translate-x-2 group-active:translate-x-2">
                {nextSeries.title.en}
              </span>
              <span className="serif-zh block mt-3 text-base sm:text-lg tracking-[0.25em] text-ink-soft">
                {nextSeries.title.zh}
              </span>
            </Link>
          </Reveal>
        </div>
      )}

      <Lightbox state={lightbox} onClose={() => setLightbox(null)} onNavigate={navigate} />
    </main>
  )
}

export default function SeriesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SeriesContent />
      <div className="relative z-10"><Footer /></div>
    </>
  )
}
