import { COVERAGE, hrefFor } from '../../data/site'

export function Coverage() {
  return (
    <section className="section lightgrid glow-ml" id="coverage" aria-labelledby="area-h">
      <div className="container two-col">
        <div className="prose">
          <h2 className="h2" id="area-h">
            Greater Sydney to the South Coast
          </h2>
          <p>
            Despite the name, WSFM works well beyond Western Sydney. Teams
            mobilise across metropolitan Sydney, with coverage extending south to
            Wollongong and the South Coast. Our regular list covers{' '}
            <strong className="num">87</strong> suburbs across six regions.
          </p>
          <div className="btn-row">
            <a className="btn btn-line" href={hrefFor('contact')}>
              Check your suburb
            </a>
          </div>
        </div>
        <ul className="coverage">
          {COVERAGE.map((row) => (
            <li key={row.region}>
              <strong>{row.region}</strong>
              <span className="cov-count">{row.count} suburbs</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
