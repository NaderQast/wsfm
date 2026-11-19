import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { QUOTE_PROPERTY_TYPES, QUOTE_SERVICES } from '../../data/site'
import { ChevronDown } from '../icons'

export function QuoteBar() {
  const [sent, setSent] = useState(false)
  const confirmation = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sent) confirmation.current?.focus()
  }, [sent])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form
      className="quote-bar"
      id="quote"
      aria-label="Start a quote"
      onSubmit={onSubmit}
    >
      <h2 className="qq-title">
        Start a quote<small>Three details now, the rest on the next page</small>
      </h2>
      <div className="fields">
        <div className="field">
          <label htmlFor="qq-service">Service</label>
          <span className="select-wrap">
            <select className="select" id="qq-service" name="service">
              {QUOTE_SERVICES.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
            <ChevronDown />
          </span>
        </div>
        <div className="field">
          <label htmlFor="qq-type">Property type</label>
          <span className="select-wrap">
            <select className="select" id="qq-type" name="type">
              {QUOTE_PROPERTY_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <ChevronDown />
          </span>
        </div>
        <div className="field">
          <label htmlFor="qq-suburb">Suburb</label>
          <input
            className="input"
            id="qq-suburb"
            name="suburb"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Parramatta…"
          />
        </div>
      </div>
      <button className="btn btn-loud" type="submit">
        Get a quote
      </button>
      <button className="btn btn-navy" type="submit">
        Continue to quote
      </button>
      <div
        className="done"
        ref={confirmation}
        role="status"
        tabIndex={-1}
        data-open={sent ? '' : undefined}
        hidden={!sent}
      >
        <h3 className="h3">Thanks, we have those three details.</h3>
        <p className="muted">
          The rest of the quote collects the scope, dates and photos. That form
          is not built yet, so this preview stops here.
        </p>
        <div className="btn-row">
          <Link className="btn btn-line" to="/about">
            More about WSFM
          </Link>
          <button className="btn btn-line" type="button" onClick={() => setSent(false)}>
            Change details
          </button>
        </div>
      </div>
    </form>
  )
}
