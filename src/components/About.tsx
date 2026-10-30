import { content } from '@/content'
import Reveal from '@/components/Reveal'
import { useLanguage, useT } from '@/hooks/useLanguage'

export default function About() {
  const t = useT()
  const { lang } = useLanguage()
  const { about } = content

  return (
    <section id="about" className="bg-paper-2 border-y border-hairline">
      <div className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40 grid lg:grid-cols-12 gap-12 lg:gap-6">
        {/* Portrait */}
        <Reveal className="lg:col-span-4 lg:col-start-1">
          <div className="overflow-hidden bg-paper-3 max-w-sm">
            <img
              src={about.portrait}
              alt={t(content.artist)}
              width={400}
              height={560}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-ink-soft">
            {t(content.artist)} — {t(content.role)}
          </p>
        </Reveal>

        {/* Bio */}
        <div className="lg:col-span-6 lg:col-start-6">
          <Reveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-5">{t(about.heading)}</p>
            <h2
              className={`leading-[1.05] text-[clamp(32px,4.2vw,56px)] mb-10 ${
                lang === 'zh' ? 'serif-zh font-light text-ink tracking-[0.05em]' : 'font-monstra gold-text'
              }`}
            >
              {lang === 'zh' ? (
                <>山水之间，<br />以金为语。</>
              ) : (
                <>Between mountains,<br />speaking in gold.</>
              )}
            </h2>
          </Reveal>
          {about.bio.map((p, i) => (
            <Reveal key={i} delay={100 + i * 80}>
              <p className={`text-sm sm:text-[15px] leading-[1.9] text-ink-soft mb-6 ${lang === 'zh' ? 'text-justify' : ''}`}>
                {t(p)}
              </p>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8">
              {about.facts.map((f) => (
                <div key={f.label.en}>
                  <dt className="text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-1.5">{t(f.label)}</dt>
                  <dd className="text-sm">{t(f.value)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
