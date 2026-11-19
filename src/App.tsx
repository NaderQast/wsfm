import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header, MenuSheet } from './components/Header'
import { TabBar } from './components/TabBar'
import { About } from './pages/About'
import { Home } from './pages/Home'

/**
 * The Home page is one long page and the nav links into it carry a hash.
 * Scroll after the target page has rendered, not before.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const frame = requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-root" id="top">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <MenuSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ScrollToHash />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <TabBar />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
