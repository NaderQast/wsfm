import { GOV_EXPERIENCE, STORY_STEPS, hrefFor } from '../../data/site'
import { CheckIcon } from '../icons'

export function Process() {
  return (
    <section className="section dark grain pitch" aria-labelledby="how-h">
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', gap: 96 }}
      >
        <div className="story" id="process">
          <div className="story-head">
            <h2 className="h2" id="how-h">
              How every job runs
            </h2>
            <p className="muted" style={{ fontSize: 18, maxWidth: '26em' }}>
              The same five steps on every job, so what you’re quoted is what
              gets delivered and documented.
            </p>
            <div className="btn-row">
              <a className="btn btn-loud" href={hrefFor('quote')}>
                Start with a quote
              </a>
            </div>
          </div>
          <ol className="story-steps">
            {STORY_STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="big">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div
          className="two-col"
          id="government"
          style={{
            paddingTop: 56,
            borderTop: '1px solid rgba(195,206,218,.3)',
          }}
        >
          <div className="prose">
            <h2 className="h2 sm" id="gov-h">
              Subcontracted delivery on government-related property scopes
            </h2>
            <p>
              WSFM provides professional cleaning, hygiene and property
              maintenance services, with experience delivering subcontracted
              scopes on government-related contracts as a subcontractor to a
              Tier 1 contract holder.
            </p>
            <p className="muted" style={{ fontSize: 15 }}>
              WSFM is a subcontractor. We do not represent ourselves as the
              principal contractor, contract holder, government-approved
              supplier or government-certified provider.
            </p>
            <div className="btn-row">
              <a className="btn btn-line" href={hrefFor('government')}>
                Government experience
              </a>
            </div>
          </div>
          <div>
            <p className="overline" style={{ marginBottom: 12 }}>
              Relevant experience includes
            </p>
            <ul className="checklist">
              {GOV_EXPERIENCE.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
