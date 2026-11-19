import { WORK_MAIN, WORK_SIDE, hrefFor } from '../../data/site'
import { InfoIcon } from '../icons'
import { LayeredShot } from '../ui/LayeredShot'

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="container">
        <div className="section-head">
          <h2 className="h2" id="work-h">
            The kind of work we deliver
          </h2>
          <a className="btn btn-line" href={hrefFor('projects')}>
            View projects
          </a>
        </div>
        <div className="work">
          <a className="work-main" href={hrefFor('projects')}>
            <LayeredShot
              className="shot cut scroll"
              src={WORK_MAIN.src}
              alt={WORK_MAIN.alt}
              objectPosition={WORK_MAIN.objectPosition}
            />
            <span className="overline">{WORK_MAIN.overline}</span>
            <h3>{WORK_MAIN.title}</h3>
            <p>{WORK_MAIN.body}</p>
          </a>
          <div className="work-side">
            {WORK_SIDE.map((item) => (
              <a key={item.title} className="work-row" href={hrefFor('projects')}>
                <LayeredShot
                  src={item.src}
                  alt={item.alt}
                  objectPosition={item.objectPosition}
                />
                <div>
                  <span className="overline">{item.overline}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 28 }}>
          <div className="note">
            <InfoIcon />
            <p>
              <strong>Preview note:</strong> photos are style stand-ins. Swap in
              real WSFM job photos before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
