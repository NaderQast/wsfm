import { CONTACT, hrefFor } from '../../data/site'
import { PhoneIcon } from '../icons'

export function CtaBand() {
  return (
    <section className="cta-band dark grain pitch" id="contact" aria-labelledby="cta-h">
      <div className="container cta-inner">
        <div className="prose" style={{ maxWidth: 'none' }}>
          <h2 className="h2" id="cta-h">
            Send us the scope. We’ll come back with a clear price.
          </h2>
          <p className="muted" style={{ fontSize: 18, maxWidth: '34em' }}>
            Tell us the customer type, property address, scope and preferred
            date. Attach photos or scope documents if you have them. Urgent jobs,
            call us directly.
          </p>
        </div>
        <div className="btn-row">
          <a className="btn btn-loud" href={hrefFor('quote')}>
            Get a quote
          </a>
          <a className="btn btn-line" href={CONTACT.phoneHref}>
            <PhoneIcon />
            <span>
              Call <span className="num">{CONTACT.phoneDisplay}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
