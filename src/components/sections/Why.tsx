import { SPEC } from '../../data/site'
import { LayeredShot } from '../ui/LayeredShot'

export function Why() {
  return (
    <section
      className="section"
      aria-labelledby="why-h"
      style={{ paddingTop: 'var(--section)' }}
    >
      <div className="container two-col" style={{ alignItems: 'stretch' }}>
        <LayeredShot
          className="shot cut scroll"
          style={{ minHeight: 560 }}
          src="/assets/service-residential-stairwell.jpg"
          alt="A cleaner mops the steps of a common-area stairwell"
          objectPosition="50% 40%"
        />
        <div className="stack" style={{ justifyContent: 'center' }}>
          <div className="prose">
            <h2 className="h2" id="why-h">
              Why property managers choose WSFM
            </h2>
            <p className="muted">
              A safer, better-presented building, assets that hold their
              condition, and less of your time spent chasing the work.
            </p>
          </div>
          <dl className="spec">
            {SPEC.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd>{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
