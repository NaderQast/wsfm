import { REVIEWS, hrefFor } from '../../data/site'

export function Reviews() {
  return (
    <section className="section" id="reviews" aria-labelledby="rev-h">
      <div className="container">
        <div className="section-head">
          <h2 className="h2" id="rev-h">
            What our clients say
          </h2>
          <a className="btn btn-line" href={hrefFor('reviews')}>
            All reviews
          </a>
        </div>
        <div className="grid">
          {REVIEWS.map((label) => (
            <div className="slot" key={label}>
              <p className="slot-label">{label}</p>
              <p>A short quote from a real WSFM client, in their words.</p>
              <p className="muted" style={{ fontSize: 14 }}>
                Name, role and suburb, published with the client’s permission.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
