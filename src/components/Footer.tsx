import logo from '../assets/logo-vouch-footer.svg'
import line from '../assets/line-21.svg'
import './Footer.css'

const links = [
  { label: 'MCP guide', href: '#mcp-guide' },
  { label: 'API', href: '#api' },
  { label: 'VouchAgent', href: '#vouch-agent' },
  { label: 'Contact support', href: '#support' },
]

export function Footer() {
  return (
    <footer className="footer stroke-t">
      <div className="footer__bar">
        <div className="footer__brand">
          <a className="footer__logo" href="/" aria-label="Vouch by HitPay">
            <img src={logo} width={115.941} height={31.9997} alt="" />
            <span className="footer__by">by HitPay</span>
          </a>
        </div>
        <nav className="footer__menu">
          {links.map((l) => (
            <a key={l.label} className="nav-link" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer__line">
        <img src={line} alt="" />
      </div>
      <p className="footer__copy">© 2026 HitPay Payment Solutions Pte Ltd. All rights reserved.</p>
    </footer>
  )
}
