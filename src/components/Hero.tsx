import { AddVouch } from './AddVouch'
import { Button } from './Button'
import { Header } from './Header'
import { useScrolledPast } from '../hooks'
import './Hero.css'

export function Hero() {
  const expanded = useScrolledPast()

  return (
    <section className={`hero${expanded ? ' hero--expanded' : ''}`}>
      <div className="hero__bg" />
      <Header />
      <div className="hero__content">
        <p className="hero__tag">
          <span>The wallet for AI shopping</span>
          <span className="hero__tag-dot">•</span>
          <span>Works worldwide</span>
        </p>
        <div className="hero__text">
          <h1 className="hero__title">The wallet your AI assistant pays with.</h1>
          <p className="hero__lead">
            Vouch is a payment wallet for people anywhere who shop through an AI assistant. Verify yourself
            once, link your card or e-wallet once, and from then on any assistant you use can buy for you.
            Nothing is charged until you tap Approve on a Vouch page for that exact purchase.
          </p>
        </div>
        <div className="hero__actions">
          <div className="hero__buttons">
            <Button arrow href="#add-vouch">
              Set up in 2 minutes
            </Button>
            <Button variant="secondary" href="#how-it-works">
              See how purchase works
            </Button>
          </div>
          <p className="hero__note">No app to install. No card number ever leaves Vouch.</p>
        </div>
      </div>
      <AddVouch />
    </section>
  )
}
