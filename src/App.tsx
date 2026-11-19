import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header, MenuSheet } from './components/Header'
import { TabBar } from './components/TabBar'
import { Audience } from './components/sections/Audience'
import { Coverage } from './components/sections/Coverage'
import { CtaBand } from './components/sections/CtaBand'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Reviews } from './components/sections/Reviews'
import { Services } from './components/sections/Services'
import { Why } from './components/sections/Why'
import { Work } from './components/sections/Work'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-root" id="top">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MenuSheet open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main">
        <Hero />
        <div className="panel">
          <Services />
          <Audience />
          <Process />
          <Why />
          <Work />
          <Reviews />
          <Coverage />
        </div>
        <CtaBand />
      </main>
      <Footer />
      <TabBar />
    </div>
  )
}
