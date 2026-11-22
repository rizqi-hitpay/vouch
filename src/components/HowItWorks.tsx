import { useState, type CSSProperties } from 'react'
import line from '../assets/line-20.svg'
import plug from '../assets/plug-01.svg'
import faceId from '../assets/face-id-01.svg'
import cardAdd from '../assets/card-add.svg'
import checkBroken from '../assets/check-broken.svg'
import ellipse from '../assets/ellipse-483.svg'
import './HowItWorks.css'

const steps = [
  {
    num: '01',
    icon: plug,
    rotate: true,
    title: 'Connect',
    desc: 'Add Vouch to your assistant as a connector and sign in with your email and mobile number. One URL, no key to copy.',
  },
  {
    num: '02',
    icon: faceId,
    title: 'Verify once',
    desc: 'A selfie and your ID, checked by Persona. Your name and delivery address come from the ID, so nothing is typed into a chat.',
  },
  {
    num: '03',
    icon: cardAdd,
    title: 'Link what pays',
    desc: "Your own card, from any country, typed into Vouch's secure form. Or an APAC e-wallet through HitPay: GrabPay, ShopeePay, WeChat Pay, Touch 'n Go and others. The assistant never sees either.",
  },
  {
    num: '03',
    icon: checkBroken,
    title: 'Approve each purchase',
    desc: "Your assistant sends a Vouch page naming the store and the exact total. Tap Approve and Vouch's own browser pays with a single-use card token. The order number comes back to your chat.",
  },
]

const DEFAULT_ACTIVE = 2

export function HowItWorks() {
  const [active, setActive] = useState(DEFAULT_ACTIVE)

  return (
    <section className="how stroke-tb" id="how-it-works">
      <div className="how__top">
        <div className="how__title">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">Set up once in your assistant. Then every purchase is one tap.</h2>
        </div>
        <div className="how__steps" onMouseLeave={() => setActive(DEFAULT_ACTIVE)}>
          {steps.map((s, i) => (
            <article
              key={s.title}
              className={`step${active === i ? ' step--active' : ''}`}
              onMouseEnter={() => setActive(i)}
            >
              <div className="step__top">
                <div className="step__num">
                  <div className="step__num-inner">
                    <span className="step__num-text">{s.num}</span>
                  </div>
                </div>
                <img src={line} width={32} height={1} alt="" />
                <div className="step__ring">
                  <div className="step__ring-inner">
                    <span
                      className={`step__icon${s.rotate ? ' step__icon--rotate' : ''}`}
                      style={{ '--icon': `url("${s.icon}")` } as CSSProperties}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
              <div className="step__content">
                <h3 className="card-title">{s.title}</h3>
                <p className="body-15">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="stats">
        <div className="stats__glow" aria-hidden>
          <div className="stats__glow-rot">
            <div className="stats__glow-box">
              <img src={ellipse} alt="" />
            </div>
          </div>
        </div>
        <div className="stats__inner">
          <div className="stat">
            <p className="stat__value">
              14<span className="stat__unit">s</span>
            </p>
            <p className="stat__label">{'Tap to order confirmed,\ncheckout prepared'}</p>
          </div>
          <div className="stat">
            <p className="stat__value">1</p>
            <p className="stat__label">{'Tap per purchase, \nafter the first sign-in'}</p>
          </div>
          <div className="stat">
            <p className="stat__value">0</p>
            <p className="stat__label">{'Card numbers shown \nto any assistant'}</p>
          </div>
        </div>
      </div>

      <div className="how__footnote">
        <p className="how__footnote-label">Measured on a live Shopify store</p>
        <p className="how__footnote-text">
          Vouch opens the checkout while you read the approval page, so the order is placed within seconds of your
          tap. The card is a token that works only on that store, for that amount, for fifteen minutes
        </p>
      </div>
    </section>
  )
}
