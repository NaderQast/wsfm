import { Link } from 'react-router-dom'
import { CONTACT, hrefFor } from '../data/site'
import { PhoneIcon } from './icons'

export function TabBar() {
  return (
    <nav className="tabbar" aria-label="Quick actions">
      <a
        className="call"
        href={CONTACT.phoneHref}
        aria-label={`Call WSFM on ${CONTACT.phoneDisplay}`}
      >
        <PhoneIcon />
      </a>
      <Link className="btn btn-loud" to={hrefFor('quote')}>
        Get a quote
      </Link>
    </nav>
  )
}
