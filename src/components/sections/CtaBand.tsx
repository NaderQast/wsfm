import { Link } from 'react-router-dom'
import { CONTACT, hrefFor } from '../../data/site'
import { PhoneIcon } from '../icons'

type CtaBandProps = {
  title?: string
  body?: string
}

export function CtaBand({
  title = 'Send us the scope. We’ll come back with a clear price.',
  body = 'Tell us the customer type, property address, scope and preferred date. Attach photos or scope documents if you have them. Urgent jobs, call us directly.',
}: CtaBandProps = {}) {
  return (
    <section className="cta-band dark grain pitch" id="contact" aria-labelledby="cta-h">
      <div className="container cta-inner">
        <div className="prose" style={{ maxWidth: 'none' }}>
          <h2 className="h2" id="cta-h">
            {title}
          </h2>
          <p className="muted" style={{ fontSize: 18, maxWidth: '34em' }}>
            {body}
          </p>
        </div>
        <div className="btn-row">
          <Link className="btn btn-loud" to={hrefFor('quote')}>
            Get a quote
          </Link>
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
