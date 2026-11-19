import { Link } from 'react-router-dom'
import { CheckIcon } from './icons'
import { LayeredShot } from './ui/LayeredShot'

type Crumb = { label: string; to?: string }

type PageHeadProps = {
  title: string
  lead: string
  facts?: string[]
  photo?: { src: string; alt: string; objectPosition: string }
  crumbs: Crumb[]
}

export function PageHead({ title, lead, facts, photo, crumbs }: PageHeadProps) {
  return (
    <section className="page-head dark grain">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            {crumbs.map((crumb, index) => (
              <li
                key={crumb.label}
                aria-current={index === crumbs.length - 1 ? 'page' : undefined}
              >
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
              </li>
            ))}
          </ol>
        </nav>
        <div className="head-grid">
          <div className="head-copy">
            <h1 className="h1">{title}</h1>
            <p className="lead">{lead}</p>
            {facts && (
              <ul className="facts">
                {facts.map((fact) => (
                  <li key={fact}>
                    <CheckIcon width={18} height={18} />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {photo && (
            <LayeredShot
              className="shot head-photo load"
              src={photo.src}
              alt={photo.alt}
              objectPosition={photo.objectPosition}
              eager
            />
          )}
        </div>
      </div>
    </section>
  )
}
