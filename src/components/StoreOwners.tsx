import cardTick from '../assets/card-tick.svg'
import profileTick from '../assets/profile-tick.svg'
import sound from '../assets/sound.svg'
import { Button } from './Button'
import './StoreOwners.css'

const carries = [
  { title: 'Paid', icon: cardTick, desc: 'By a single-use card for the exact total.' },
  { title: 'Verified', icon: profileTick, desc: 'Buyer, approval and amount in a signed header' },
  { title: 'Named', icon: sound, desc: 'VouchAgent/1.0 in the user agent, Web Bot Auth on every request' },
]

export function StoreOwners() {
  return (
    <section className="store stroke-t" id="merchants">
      <div className="store__inner">
        <div className="store__title">
          <p className="eyebrow">For store owners</p>
          <h2 className="section-title">Agents already shop at your store. This one tells you so.</h2>
          <p className="section-desc">
            Vouch pays HitPay checkouts and Shopify stores today, with a verified buyer behind every order and a
            signed header you can check. Nothing is changed on your side. If you would rather not take orders from
            it, a robots.txt group for VouchAgent is enough.
          </p>
          <div className="store__cta">
            <Button arrow href="#add-vouch">
              Set up in 2 minutes
            </Button>
          </div>
        </div>

        <div className="store__box">
          <p className="store__box-label">What an order from Vouch carries</p>
          <div className="store__grid">
            {carries.map((c) => (
              <article key={c.title} className="carry">
                <span className="carry__icon">
                  <img src={c.icon} width={24} height={24} alt="" />
                </span>
                <div className="carry__head">
                  <h3 className="card-title">{c.title}</h3>
                  <p className="body-15">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="store__link" href="#vouch-agent">
            Read about the browser and how to verify or block it →
          </a>
        </div>
      </div>
    </section>
  )
}
