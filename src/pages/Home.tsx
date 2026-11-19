import { Audience } from '../components/sections/Audience'
import { Coverage } from '../components/sections/Coverage'
import { CtaBand } from '../components/sections/CtaBand'
import { Hero } from '../components/sections/Hero'
import { Process } from '../components/sections/Process'
import { Reviews } from '../components/sections/Reviews'
import { Services } from '../components/sections/Services'
import { Why } from '../components/sections/Why'
import { Work } from '../components/sections/Work'
import { usePageTitle } from '../lib/usePageTitle'

export function Home() {
  usePageTitle('Home | WSFM website')

  return (
    <>
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
    </>
  )
}
