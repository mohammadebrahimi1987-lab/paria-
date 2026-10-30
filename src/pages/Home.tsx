import { useState } from 'react'
import Header from '@/components/Header'
import MenuOverlay from '@/components/MenuOverlay'
import Hero from '@/components/Hero'
import SeriesTeaser from '@/components/SeriesTeaser'
import About from '@/components/About'
import Statement from '@/components/Statement'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { content } from '@/content'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="relative z-10">
        <Hero />
        <div id="works">
          {content.series.map((s, i) => (
            <SeriesTeaser key={s.id} series={s} flipped={i % 2 === 1} />
          ))}
        </div>
        <About />
        <Statement />
        <Contact />
      </main>

      <div className="relative z-10"><Footer /></div>
    </>
  )
}
