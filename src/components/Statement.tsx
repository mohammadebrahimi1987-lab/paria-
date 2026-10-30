import { content } from '@/content'
import Reveal from '@/components/Reveal'
import { useLanguage, useT } from '@/hooks/useLanguage'

export default function Statement() {
  const t = useT()
  const { lang } = useLanguage()
  const { statement } = content

  return (
    <section id="statement" className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
      <Reveal>
        <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-16 sm:mb-24 text-center">
          {t(statement.heading)}
        </p>
      </Reveal>

      <div className="max-w-4xl mx-auto">
        {statement.quotes.map((q, i) => (
          <Reveal key={i} delay={i * 100}>
            <blockquote className={`mb-20 sm:mb-28 ${i % 2 === 1 ? 'lg:pl-24' : 'lg:pr-24'}`}>
              <p
                className={`leading-[1.5] text-[clamp(22px,3.4vw,40px)] ${
                  lang === 'zh' ? 'serif-zh tracking-[0.08em] font-light text-ink' : 'font-monstra italic gold-text'
                }`}
              >
                “{t(q.text)}”
              </p>
              <cite className="not-italic block mt-6 text-[12px] tracking-[0.3em] uppercase text-ink-soft">
                — {t(q.source)}
              </cite>
            </blockquote>
          </Reveal>
        ))}

        <Reveal delay={120}>
          <p
            className={`text-center text-sm sm:text-base leading-[2] text-ink-soft max-w-2xl mx-auto border-t border-hairline pt-14 ${
              lang === 'zh' ? 'tracking-[0.05em]' : ''
            }`}
          >
            {t(statement.closing)}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
