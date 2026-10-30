import { content } from '@/content'
import Reveal from '@/components/Reveal'
import { useT } from '@/hooks/useLanguage'

export default function Contact() {
  const t = useT()
  const { contact } = content

  return (
    <section id="contact" className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
      <div className="grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.35em] uppercase text-olive mb-5">{t(contact.heading)}</p>
          <h2 className="font-monstra gold-text leading-[1.05] text-[clamp(32px,4.2vw,56px)]">
            {t(contact.lead)}
          </h2>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8 self-end">
          <Reveal delay={120}>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {contact.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="u-link serif-latin font-light block py-5 text-[clamp(17px,2vw,24px)] break-all"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <dt className="text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">{t(contact.phoneLabel)}</dt>
                <dd>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="u-link text-sm tracking-[0.08em]">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.25em] uppercase text-ink-soft mb-2">{t(contact.locationLabel)}</dt>
                <dd className="text-sm">{t(contact.location)}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
