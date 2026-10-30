import { useState } from 'react'
import { Link } from 'react-router'
import Header from '@/components/Header'
import MenuOverlay from '@/components/MenuOverlay'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { content, marqueeItems } from '@/content'
import { useLanguage, useT } from '@/hooks/useLanguage'

function CVContent() {
  const t = useT()
  const { lang } = useLanguage()
  const { cv } = content

  return (
    <main className="relative z-10">
      {/* Header block */}
      <div className="px-5 sm:px-8 lg:px-12 pt-[calc(72px+4rem)] sm:pt-[calc(72px+6rem)] pb-14 sm:pb-20">
        <Reveal>
          <Link to="/" className="u-link text-[11px] tracking-[0.3em] uppercase text-ink-soft">
            ← {t({ en: 'Home', zh: '首页' })}
          </Link>
        </Reveal>
        <div className="mt-10 sm:mt-14 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-5">{t(cv.heading)}</p>
            <h1 className={`gold-text leading-[1.02] text-[clamp(40px,6.5vw,88px)] ${lang === 'zh' ? 'serif-zh' : 'font-monstra'}`}>
              {lang === 'zh' ? '艺术履历' : 'Curriculum Vitae'}
            </h1>
            <p
              className={`font-light mt-3 text-[clamp(17px,2.2vw,26px)] text-ink-soft ${
                lang === 'zh' ? 'serif-zh tracking-[0.06em]' : 'serif-latin italic'
              }`}
            >
              {t(content.artist)} — {t(content.role)}
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 self-end">
            <p className="text-sm leading-[1.9] text-ink-soft">
              {t({
                en: 'Exhibitions across four continents, from Tehran to Miami, London to Shanghai — alongside awards, publications and teaching.',
                zh: '展览跨越四大洲——从德黑兰到迈阿密，从伦敦到上海——并涵盖奖项、出版与教学经历。',
              })}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Exhibition marquee strip */}
      <div className="overflow-hidden border-y border-hairline py-5 select-none" aria-hidden="true">
        <div className="marquee-track flex whitespace-nowrap w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex">
              {marqueeItems.map((m, i) => (
                <span key={i} className="flex items-baseline text-[13px] tracking-[0.15em] text-ink-soft">
                  <span className="px-6">{lang === 'zh' ? m.zh : m.en}</span>
                  <span className="text-olive">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CV groups */}
      <div className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-20">
          {cv.groups.map((group, gi) => (
            <div key={group.title.en} className={group.items.length > 8 ? 'lg:col-span-2' : ''}>
              <Reveal>
                <h3 className="flex items-baseline gap-4 border-b border-ink pb-4 mb-2">
                  <span className="text-[11px] tracking-[0.2em] text-olive">{String(gi + 1).padStart(2, '0')}</span>
                  <span className="font-monstra text-[26px] sm:text-3xl text-ink">{t(group.title)}</span>
                </h3>
              </Reveal>
              <ul className={group.items.length > 8 ? 'lg:columns-2 lg:gap-16' : ''}>
                {group.items.map((item, i) => (
                  <Reveal key={i} delay={Math.min(i, 6) * 40}>
                    <li className="flex gap-5 py-4 border-b border-hairline break-inside-avoid">
                      <span className="w-24 shrink-0 text-[11px] tracking-[0.12em] text-ink-soft pt-[3px] tabular-nums">
                        {item.year || '—'}
                      </span>
                      <span className="text-sm leading-relaxed">{lang === 'zh' ? item.zh : item.en}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default function CVPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CVContent />
      <div className="relative z-10"><Footer /></div>
    </>
  )
}
