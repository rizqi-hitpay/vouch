import type { CSSProperties } from 'react'
import logogram from '../assets/hitpay-logogram.svg'
import logotext from '../assets/hitpay-logotext.svg'
import mas from '../assets/mas.svg'
import pci from '../assets/pci.svg'
import shield from '../assets/shield-01.svg'
import card02 from '../assets/card-02.svg'
import checkContained from '../assets/check-contained.svg'
import userCheck from '../assets/user-profile-check.svg'
import browserCode from '../assets/browser-code.svg'
import './Trust.css'

const boxes = [
  {
    title: 'Single-use card tokens',
    icon: card02,
    desc: "Each purchase gets a token that only works on that store, for the approved amount, for fifteen minutes, through Vouch's card proxy. Your real card number is never typed into a store page.",
  },
  {
    title: 'You approve every charge',
    icon: checkContained,
    desc: 'An approval needs you signed in on the Vouch page, or your fingerprint or face. The link alone does nothing, and a request expires after thirty minutes',
  },
  {
    title: 'Verified people only',
    icon: userCheck,
    desc: 'Identity and sanctions screening before any money moves. Merchants and risk engines are told the buyer is verified, without seeing the ID.',
  },
  {
    title: 'A browser that says who it is',
    icon: browserCode,
    desc: "Every request Vouch makes to a store is signed: Web Bot Auth, a signed token naming the purchase, and Forter's Trusted Agentic Commerce message. Store owners can verify it or keep it out with one robots.txt line",
  },
]

export function Trust() {
  return (
    <section className="trust stroke-b" id="trust">
      <div className="trust__top">
        <div className="trust__title">
          <p className="eyebrow">Trust</p>
          <h2 className="section-title">Built so the assistant never holds your card.</h2>
          <p className="section-desc">
            Vouch is run by HitPay Payment Solutions Pte Ltd, a licensed payment institution in Singapore. The rules
            below are enforced in the service, not promised in a policy.
          </p>
          <div className="trust__badges-wrap">
            <div className="trust__badges">
              <div className="trust__hitpay" aria-label="HitPay">
                <img src={logogram} width={32.0415} height={32} alt="" />
                <img src={logotext} width={88.8121} height={27.1982} alt="HitPay" />
              </div>
              <img src={mas} width={31.968} height={32} alt="MAS" />
              <div className="trust__pci">
                <img src={pci} width={74.3449} height={28.4448} alt="PCI DSS compliant" />
              </div>
              <img src={shield} width={32} height={32} alt="AES" />
            </div>
          </div>
        </div>

        <div className="trust__cols">
          {boxes.map((b) => (
            <article key={b.title} className="trust-box">
              <div className="trust-box__head">
                <div className="trust-box__row">
                  <h3 className="card-title">{b.title}</h3>
                  <span className="trust-box__icon">
                    <span
                      className="trust-box__glyph"
                      style={{ '--icon': `url("${b.icon}")` } as CSSProperties}
                      aria-hidden
                    />
                  </span>
                </div>
                <p className="body-15">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
