import {
  BENTO_HANDOVER,
  BENTO_HANDYMAN,
  BENTO_PHOTOS,
  CONTACT,
  IMAGE_SIZE,
  hrefFor,
} from '../../data/site'
import { PhoneIcon } from '../icons'

const BT_CLASS = ['bt wide tall', 'bt tall', 'bt', 'bt']

export function Services() {
  return (
    <section className="section lightgrid" id="services" aria-labelledby="svc-h">
      <div className="container">
        <div className="section-head">
          <h2 className="h2" id="svc-h">
            Everything the property needs, from one contractor
          </h2>
          <a className="btn btn-line" href={hrefFor('services')}>
            All services
          </a>
        </div>
        <div className="bento">
          {BENTO_PHOTOS.map((tile, index) => (
            <a
              key={tile.title}
              className={BT_CLASS[index]}
              href={hrefFor(tile.page)}
            >
              <img
                loading="lazy"
                decoding="async"
                width={IMAGE_SIZE[tile.src].width}
                height={IMAGE_SIZE[tile.src].height}
                src={tile.src}
                alt={tile.alt}
                style={{ objectPosition: tile.objectPosition }}
              />
              <span className="cap">
                <strong>{tile.title}</strong>
                <span>{tile.note}</span>
              </span>
            </a>
          ))}
          <a className="bt wide text grain" href={hrefFor(BENTO_HANDYMAN.page)}>
            <h3>{BENTO_HANDYMAN.title}</h3>
            <ul>
              {BENTO_HANDYMAN.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="more">{BENTO_HANDYMAN.more}</span>
          </a>
          <a className="bt wide text light" href={hrefFor(BENTO_HANDOVER.page)}>
            <h3>{BENTO_HANDOVER.title}</h3>
            <p>{BENTO_HANDOVER.body}</p>
            <span className="more">{BENTO_HANDOVER.more}</span>
          </a>
        </div>
        <div className="unsure dark grain">
          <div>
            <h3>Not sure which service you need?</h3>
            <p>
              Describe the job in your own words. We’ll work out the scope and
              come back with a price.
            </p>
          </div>
          <div className="btn-row">
            <a className="btn btn-loud" href={hrefFor('contact')}>
              Describe the job
            </a>
            <a className="btn btn-line" href={CONTACT.phoneHref}>
              <PhoneIcon />
              <span>
                Call <span className="num">{CONTACT.phoneDisplay}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
