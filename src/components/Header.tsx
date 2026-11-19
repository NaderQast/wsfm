import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  CONTACT,
  NAV,
  SERVICE_LINKS,
  SHEET_GROUPS,
  hrefFor,
} from '../data/site'
import { ChevronDown, ChevronRight, MailIcon, MenuIcon, PhoneIcon } from './icons'

function ServiceDropdown() {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (event: MouseEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={open ? 'has-menu open' : 'has-menu'} ref={wrap}>
      <Link className="nav-link" to={hrefFor('services')}>
        Services
      </Link>
      <button
        type="button"
        className="nav-link"
        aria-expanded={open}
        aria-label="Show service pages"
        style={{ padding: '0 6px', marginLeft: -8 }}
        onClick={() => setOpen((value) => !value)}
      >
        <ChevronDown />
      </button>
      <div className="dropdown">
        {SERVICE_LINKS.map((link) => (
          <Link key={link.title} to={hrefFor(link.page)}>
            <strong>{link.title}</strong>
            <span>{link.note}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

/** The one page that exists as a route of its own, for now. */
function currentPage(pathname: string) {
  return pathname === '/about' ? 'about' : ''
}

export function Header({
  menuOpen,
  onOpenMenu,
}: {
  menuOpen: boolean
  onOpenMenu: () => void
}) {
  const { pathname } = useLocation()
  const current = currentPage(pathname)

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link
          className="brand"
          translate="no"
          to={hrefFor('home')}
          aria-label="Western Sydney Facility Maintenance, home"
        >
          <img src="/assets/logo-wsfm.svg" alt="WSFM" width="128" height="56" />
        </Link>
        <nav className="nav" aria-label="Main">
          <ServiceDropdown />
          {NAV.slice(1).map((item) => (
            <Link
              key={item.label}
              className="nav-link"
              to={hrefFor(item.page)}
              aria-current={item.page === current ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={CONTACT.phoneHref}>
            {CONTACT.phoneDisplay}
          </a>
          <Link className="btn btn-loud" to={hrefFor('quote')}>
            Get a quote
          </Link>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label="Open menu"
          onClick={onOpenMenu}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}

export function MenuSheet({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      className="sheet"
      id="site-menu"
      ref={ref}
      aria-labelledby="sheet-heading"
      onClose={onClose}
    >
      <div className="sheet-inner">
        <div className="grabber" aria-hidden="true" />
        <div className="sheet-top">
          <span aria-hidden="true" />
          <h2 id="sheet-heading">Menu</h2>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
        {SHEET_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="group-title">{group.title}</p>
            <div className="group">
              {group.links.map((link) => (
                <Link key={link.label} to={hrefFor(link.page)} onClick={onClose}>
                  <span className="icon-tile" aria-hidden="true">
                    <ChevronRight width={14} height={14} />
                  </span>
                  <span className="grow">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="group">
          <a href={CONTACT.phoneHref} onClick={onClose}>
            <span className="icon-tile" aria-hidden="true">
              <PhoneIcon width={16} height={16} />
            </span>
            <span className="grow">{CONTACT.phoneDisplay}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} onClick={onClose}>
            <span className="icon-tile" aria-hidden="true">
              <MailIcon width={16} height={16} />
            </span>
            <span className="grow">Email WSFM</span>
          </a>
        </div>
        <Link className="btn btn-loud" to={hrefFor('quote')} onClick={onClose}>
          Get a quote
        </Link>
      </div>
    </dialog>
  )
}
