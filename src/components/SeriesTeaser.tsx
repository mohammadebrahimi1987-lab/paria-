import { Link } from 'react-router'
import type { Series } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'
import Reveal from '@/components/Reveal'
import ArtworkFrame from '@/components/ArtworkFrame'

export default function SeriesTeaser({ series, flipped = false }: { series: Series; flipped?: boolean }) {
  const t = useT()
  const { lang } = useLanguage()
  const cover = series.artworks[Math.floor(series.artworks.length / 2)]

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Framed artwork */}
        <Reveal className={`lg:col-span-5 ${flipped ? 'lg:order-2 lg:col-start-8' : ''}`}>
          <Link to={`/series/${series.id}`} className="block group">
            <ArtworkFrame>
              <img
                src={cover.src}
                alt={t(series.title)}
                width={cover.w}
                height={cover.h}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03] group-active:scale-[1.03]"
              />
            </ArtworkFrame>
          </Link>
        </Reveal>

        {/* Text column */}
        <div className={`lg:col-span-6 ${flipped ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-5">
              {t({ en: 'Series', zh: '系列' })} {series.index} — {t(series.count)}
            </p>
            <h2
              className={`leading-[1.05] text-[clamp(34px,4.6vw,60px)] ${
                lang === 'zh' ? 'serif-zh font-light text-ink tracking-[0.05em]' : 'font-monstra gold-text'
              }`}
            >
              {t(series.title)}
            </h2>
            <p
              className={`mt-3 text-[clamp(17px,2.2vw,24px)] text-ink-soft ${
                lang === 'zh' ? 'serif-zh tracking-[0.1em]' : 'serif-latin italic'
              }`}
            >
              {t(series.subtitle)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className={`mt-7 text-sm sm:text-[15px] leading-[1.9] text-ink-soft line-clamp-5 ${lang === 'zh' ? 'text-justify' : ''}`}>
              {t(series.intro)}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={`/series/${series.id}`}
              className="group inline-flex items-center gap-3 mt-9 text-[11px] tracking-[0.3em] uppercase text-ink"
            >
              <span className="border-b border-ink/40 pb-1 transition-colors group-hover:text-olive group-active:text-olive group-hover:border-olive group-active:border-olive">
                {t({ en: 'Enter the series', zh: '进入系列' })}
              </span>
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5 group-active:translate-x-1.5">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
