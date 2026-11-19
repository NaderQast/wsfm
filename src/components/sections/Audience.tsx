import { AUDIENCE, IMAGE_SIZE, hrefFor } from '../../data/site'

export function Audience() {
  return (
    <section className="section" id="about" aria-labelledby="who-h">
      <div className="container">
        <div className="section-head">
          <div className="prose">
            <h2 className="h2" id="who-h">
              Four kinds of client, one reliable contractor
            </h2>
            <p className="muted">
              Trusted by property managers, strata managers, facility teams and
              community housing providers.
            </p>
          </div>
        </div>
        <div className="aud">
          {AUDIENCE.map((row) => (
            <a key={row.name} href={hrefFor(row.page)}>
              <span className="name">{row.name}</span>
              <span className="desc">{row.desc}</span>
              <span className="thumb">
                <img
                  loading="lazy"
                  decoding="async"
                  width={IMAGE_SIZE[row.src].width}
                  height={IMAGE_SIZE[row.src].height}
                  src={row.src}
                  alt=""
                  style={{ objectPosition: row.objectPosition }}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
