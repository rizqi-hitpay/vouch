import { useEffect, useId, useState } from 'react'
import logo from '../assets/logo-vouch.svg'
import { Button } from './Button'
import { useActiveSection } from '../hooks'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
  { label: 'Developers', href: '#developers' },
  { label: 'Merchants', href: '#merchants' },
]
const sectionIds = links.map((l) => l.href.slice(1))

type Props = {
  /** Fixed copy pinned to the viewport; slides in/out with `visible`. */
  fixed?: boolean
  visible?: boolean
}

export function Header({ fixed = false, visible = true }: Props) {
  const hidden = fixed && !visible
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const activeSection = useActiveSection(sectionIds)
  const linkProps = (href: string, className: string) => {
    const isActive = href.slice(1) === activeSection
    return {
      href,
      className: `${className}${isActive ? ' is-active' : ''}`,
      'aria-current': isActive ? ('location' as const) : undefined,
    }
  }

  // Close the mobile menu when this header hides, and on Escape.
  useEffect(() => {
    if (hidden) setMenuOpen(false)
  }, [hidden])
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const cta = (
    <Button variant={fixed ? 'primary' : 'secondary'} className="header__cta" href="#add-vouch">
      Add to your assistant
    </Button>
  )

  return (
    <header
      className={`header${fixed ? ' header--fixed' : ''}${fixed && visible ? ' header--visible' : ''}${
        menuOpen ? ' header--menu-open' : ''
      }`}
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
    >
      <div className="header__pill">
        <div className="header__inner">
          <a className="header__logo" href="/" aria-label="Vouch home">
            <img src={logo} width={115.941} height={32} alt="Vouch" />
          </a>
          <nav className="header__menu" aria-label="Main">
            {links.map((l) => (
              <a key={l.label} {...linkProps(l.href, 'nav-link')}>
                {l.label}
              </a>
            ))}
            {cta}
          </nav>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="header__toggle-bar" />
            <span className="header__toggle-bar" />
          </button>
        </div>
      </div>

      {/* Tablet/mobile menu: a card under the pill. Closes when a link is chosen. */}
      <nav
        id={menuId}
        className="header__panel"
        aria-label="Main"
        inert={!menuOpen || undefined}
        onClick={(e) => {
          if ((e.target as Element).closest('a')) setMenuOpen(false)
        }}
      >
        {links.map((l) => (
          <a key={l.label} {...linkProps(l.href, 'header__panel-link')}>
            {l.label}
          </a>
        ))}
        {cta}
      </nav>
    </header>
  )
}
