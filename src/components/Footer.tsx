import { content } from '@/content'
import { useT } from '@/hooks/useLanguage'

export default function Footer() {
  const t = useT()

  return (
    <footer className="bg-paper-3 border-t border-hairline overflow-hidden">
      <div className="px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28">
        <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-6">{t(content.role)}</p>
        {/* Oversized wordmark spanning the full width */}
        <h2 className="font-monstra leading-[0.9] whitespace-nowrap text-[clamp(56px,12.5vw,220px)] gold-text select-none">
          Paria Karami
        </h2>
        <p className="serif-zh mt-4 text-[clamp(14px,1.8vw,20px)] tracking-[0.6em] text-ink-soft">
          帕里亚 · 卡拉米
        </p>
      </div>

      <div
        className="px-5 sm:px-8 lg:px-12 mt-16 sm:mt-24 border-t border-hairline py-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
        style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
      >
        <p className="text-[11px] tracking-[0.14em] text-ink-soft">{t(content.footer.copyright)}</p>
        <a href={`mailto:${content.contact.emails[0]}`} className="u-link text-[12px] tracking-[0.2em] text-ink/80 w-fit">
          {content.contact.emails[0]}
        </a>
      </div>
    </footer>
  )
}
