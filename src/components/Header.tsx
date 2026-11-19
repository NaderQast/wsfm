import { useEffect, useRef, useState } from 'react'
import {
  CONTACT,
  NAV,
  SERVICE_LINKS,
  SHEET_GROUPS,
  hrefFor,
} from '../data/site'
import { ChevronDown, MenuIcon, PhoneIcon } from './icons'

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
      <a className="nav-link" href={hrefFor('services')}>
        Services
      </a>
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
          <a key={link.title} href={hrefFor(link.page)}>
            <strong>{link.title}</strong>
            <span>{link.note}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <header className="site-header">
      <div className="container header-row">
        <a
          className="brand"
          translate="no"
          href={hrefFor('home')}
          aria-label="Western Sydney Facility Maintenance, home"
        >
          <img src="/assets/logo-wsfm.svg" alt="WSFM" width="128" height="56" />
        </a>
        <nav className="nav" aria-label="Main">
          <ServiceDropdown />
          {NAV.slice(1).map((item) => (
            <a key={item.label} className="nav-link" href={hrefFor(item.page)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={CONTACT.phoneHref}>
            {CONTACT.phoneDisplay}
          </a>
          <a className="btn btn-loud" href={hrefFor('quote')}>
            Get a quote
          </a>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-haspopup="dialog"
          aria-expanded="false"
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
    <dialog className="sheet" ref={ref} onClose={onClose}>
      <div className="sheet-inner">
        <div className="grabber" aria-hidden="true" />
        <div className="sheet-top">
          <span aria-hidden="true" />
          <h2>Menu</h2>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
        {SHEET_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="group-title">{group.title}</p>
            <div className="group">
              {group.links.map((link) => (
                <a key={link.label} href={hrefFor(link.page)} onClick={onClose}>
                  <span className="icon-tile" aria-hidden="true">
                    <ChevronDown width={14} height={14} />
                  </span>
                  <span className="grow">{link.label}</span>
                </a>
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
            <span className="grow">Email WSFM</span>
          </a>
        </div>
        <a className="btn btn-loud" href={hrefFor('quote')} onClick={onClose}>
          Get a quote
        </a>
      </div>
    </dialog>
  )
}
