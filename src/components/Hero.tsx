import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { content } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'

const heroArtworks = content.series.flatMap((series) => series.artworks)
const SLIDE_INTERVAL = 2500

export default function Hero() {
  const t = useT()
  const { lang } = useLanguage()
  const { hero } = content
  const [artworkIndex, setArtworkIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setArtworkIndex((index) => (index + 1) % heroArtworks.length)
    }, SLIDE_INTERVAL)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* Every painting, in series order, crossfading every 2.5 seconds */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroArtworks.map((artwork, i) => (
          <img
            key={artwork.src}
            src={artwork.src}
            alt=""
            draggable={false}
            className={`hero-artwork absolute inset-0 h-full w-full object-cover ${
              i === artworkIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-paper-3/45" />
      </div>

      {/* Center stage — one zooming title block per slide */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        {hero.slides.map((s, i) => (
          <div key={i} className="cd-title absolute max-w-5xl" style={{ animationDelay: `${i * 7}s` }}>
            <p className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-ink-soft mb-6">
              {t(s.kicker)}
            </p>
            <div className="group block">
              {s.link ? (
                <Link to={s.link} className="block">
                  <h1
                    className={`hero-title leading-[1.02] uppercase text-[clamp(40px,8.5vw,120px)] ${
                      lang === 'zh' ? 'serif-zh text-ink tracking-[0.08em]' : 'font-monstra gold-text'
                    }`}
                  >
                    {t(s.title)}
                  </h1>
                </Link>
              ) : (
                <h1
                  className={`hero-title leading-[1.02] uppercase text-[clamp(40px,8.5vw,120px)] ${
                    lang === 'zh' ? 'serif-zh text-ink tracking-[0.08em]' : 'font-monstra gold-text'
                  }`}
                >
                  {t(s.title)}
                </h1>
              )}
            </div>
            <p
              className={`mt-6 text-[clamp(15px,1.8vw,22px)] text-ink/90 ${
                lang === 'zh' ? 'serif-zh tracking-[0.12em]' : 'serif-latin italic'
              }`}
            >
              {t(s.tag)}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom-left tagline block */}
      <div className="absolute left-5 sm:left-8 lg:left-12 bottom-8 sm:bottom-10 max-w-[260px]">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink-soft leading-[2]">
          {t(hero.tagline)}
        </p>
      </div>

      {/* Bottom-right gold disc scroll button */}
      <a
        href="#works"
        aria-label={t(hero.scroll)}
        className="absolute right-5 sm:right-8 lg:right-12 bottom-8 sm:bottom-10 bg-olive text-paper rounded-full h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-110"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M9 2.5v13M4 9.5 9 14.5l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
