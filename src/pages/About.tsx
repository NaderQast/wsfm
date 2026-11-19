import { PageHead } from '../components/PageHead'
import { CtaBand } from '../components/sections/CtaBand'
import { ABOUT_HEAD, ABOUT_INTRO, ABOUT_SAFETY, ABOUT_SUPPORT } from '../data/site'
import { usePageTitle } from '../lib/usePageTitle'

function AboutIntro() {
  return (
    <section className="section" aria-labelledby="who-h">
      <div className="container two-col">
        <div className="prose">
          <h2 className="h2" id="who-h">
            {ABOUT_INTRO.heading}
          </h2>
          {ABOUT_INTRO.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="spec">
          {ABOUT_INTRO.spec.map((row) => (
            <div key={row.term}>
              <dt>{row.term}</dt>
              <dd>{row.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function AboutSupport() {
  return (
    <section className="section" aria-labelledby="support-h">
      <div className="container">
        <div className="section-head">
          <div className="prose">
            <h2 className="h2" id="support-h">
              {ABOUT_SUPPORT.heading}
            </h2>
            <p className="muted">{ABOUT_SUPPORT.lede}</p>
          </div>
        </div>
        <dl className="spec cols">
          {ABOUT_SUPPORT.spec.map((row) => (
            <div key={row.term}>
              <dt>{row.term}</dt>
              <dd>{row.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function AboutSafety() {
  return (
    <section className="section dark grain pitch" aria-labelledby="comp-h">
      <div className="container">
        <div className="section-head">
          <div className="prose">
            <h2 className="h2" id="comp-h">
              {ABOUT_SAFETY.heading}
            </h2>
            <p className="muted" style={{ fontSize: 18 }}>
              {ABOUT_SAFETY.lede}
            </p>
          </div>
        </div>
        <dl className="spec cols">
          {ABOUT_SAFETY.spec.map((row) => (
            <div key={row.term}>
              <dt>{row.term}</dt>
              <dd>{row.detail}</dd>
            </div>
          ))}
        </dl>
        <p
          className="muted"
          style={{ margin: '32px 0 0', fontSize: 14, maxWidth: '60em' }}
        >
          {ABOUT_SAFETY.note}
        </p>
      </div>
    </section>
  )
}

export function About() {
  usePageTitle('About | WSFM website')

  return (
    <>
      <PageHead
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        title={ABOUT_HEAD.title}
        lead={ABOUT_HEAD.lead}
        facts={ABOUT_HEAD.facts}
        photo={{
          src: ABOUT_HEAD.photo,
          alt: ABOUT_HEAD.photoAlt,
          objectPosition: ABOUT_HEAD.photoPosition,
        }}
      />
      <div className="panel">
        <AboutIntro />
        <AboutSupport />
        <AboutSafety />
      </div>
      <CtaBand
        title="Work with a contractor that documents every job"
        body="Share the property details and we’ll come back with a clear, itemised price. Urgent jobs, call us directly."
      />
    </>
  )
}
