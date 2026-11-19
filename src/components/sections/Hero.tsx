import { BAND_LINKS, HERO_PROOF, hrefFor } from '../../data/site'
import { BandChevron, CameraIcon, PhoneSmall, PinIcon } from '../icons'
import { HeroPhoto } from '../ui/LayeredShot'
import { QuoteBar } from './QuoteBar'

const PROOF_ICONS = [PhoneSmall, CameraIcon, PinIcon]

function Band() {
  return (
    <div className="band">
      <p className="band-title container">One contractor, every job on the property</p>
      <div className="band-track">
        <ul>
          {BAND_LINKS.flatMap((link) => [
            <li key={link.label}>
              <a href={hrefFor(link.page)}>{link.label}</a>
            </li>,
            <li key={`${link.label} separator`} aria-hidden="true">
              <BandChevron />
            </li>,
          ])}
        </ul>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="dark grain hero-outer"
      aria-labelledby="hero-h"
    >
      <div className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-h">
                <span className="k-line">Properties</span>
                <span className="k-line">kept clean,</span>
                <span className="k-line">safe and</span>
                <span className="k-line">serviceable.</span>
              </h1>
              <p className="lead">
                Cleaning, hygiene, handyman and make-safe work for residential,
                commercial and industrial sites across Greater Sydney and the
                South Coast.
              </p>
              <ul className="hero-proof">
                {HERO_PROOF.map((line, index) => {
                  const Icon = PROOF_ICONS[index]
                  return (
                    <li key={line}>
                      <span className="ic">
                        <Icon />
                      </span>
                      <span>{line}</span>
                    </li>
                  )
                })}
              </ul>
              <a
                className="link-arrow"
                href={hrefFor('services')}
                style={{ alignSelf: 'flex-start' }}
              >
                See all services
              </a>
            </div>
            <HeroPhoto
              src="/assets/hero-industrial-washdown.jpg"
              alt="A worker in navy pressure washes the loading dock of a Western Sydney warehouse at dawn"
            />
          </div>
          <QuoteBar />
        </div>
      </div>
      <Band />
    </section>
  )
}
