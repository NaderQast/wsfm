import { BRAND, CONTACT, FOOTER_COLUMNS, hrefFor } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer dark grain">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand" translate="no">
            <img
              src="/assets/logo-wsfm-footer.svg"
              alt="Western Sydney Facility Maintenance"
              width="200"
              height="113"
            />
            <p>
              Professional cleaning, hygiene, handyman and property maintenance
              for residential, commercial and industrial clients across Greater
              Sydney and the South Coast.
            </p>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2>{column.heading}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={hrefFor(link.page)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a className="num" href={CONTACT.phoneHref}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{ overflowWrap: 'anywhere' }}
                >
                  {CONTACT.email}
                </a>
              </li>
              <li style={{ color: 'var(--sky)' }}>
                PO Box <span className="ph">[XXXX]</span>
                <br />
                Campbelltown NSW 2560
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>
            © {BRAND.year} {BRAND.legalName}
          </span>
          <span className="num">{BRAND.abn}</span>
          <span className="num">{BRAND.acn}</span>
        </div>
      </div>
    </footer>
  )
}
