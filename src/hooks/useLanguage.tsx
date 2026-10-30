import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang, LStr } from '@/content'

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLanguage() {
  return useContext(LangContext)
}

/** Pick the current-language string from a bilingual pair */
export function useT() {
  const { lang } = useLanguage()
  return (s: LStr) => (lang === 'zh' ? s.zh : s.en)
}
