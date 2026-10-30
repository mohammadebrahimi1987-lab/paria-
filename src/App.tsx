import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import SeriesPage from './pages/SeriesPage'
import CVPage from './pages/CVPage'
import { LanguageProvider } from './hooks/useLanguage'

export default function App() {
  return (
    <LanguageProvider>
      <div aria-hidden className="ambient-light" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series/:id" element={<SeriesPage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </LanguageProvider>
  )
}
