import { AddVouch } from './AddVouch'
import { Button } from './Button'
import { Header } from './Header'
import { useScrolledPast } from '../hooks'
import type { CSSProperties } from 'react'
import './Hero.css'

const TITLE = 'The wallet your AI assistant pays with.'

/** Load-in timing (ms), modelled on hitpayapp.com: tag, then the title word by word,
 *  then copy, actions and the card, each sharpening from a blur. */
const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties
const WORD_START = 120
const WORD_STAGGER = 55

export function Hero() {
  const expanded = useScrolledPast()

  return (
    <section className={`hero${expanded ? ' hero--expanded' : ''}`}>
      <div className="hero__bg" />
      <Header />
      <div className="hero__content">
        {/* Wrapper animates so the tag keeps its own drop-shadow filter. */}
        <div className="reveal" style={delay(0)}>
          <p className="hero__tag">
            <span>The wallet for AI shopping</span>
            <span className="hero__tag-dot">•</span>
            <span>Works worldwide</span>
          </p>
        </div>
        <div className="hero__text">
          <h1 className="hero__title" aria-label={TITLE}>
            {TITLE.split(' ').map((word, i, words) => (
              <span key={i} aria-hidden>
                <span className="reveal reveal--word" style={delay(WORD_START + i * WORD_STAGGER)}>
                  {word}
                </span>
                {i < words.length - 1 ? ' ' : null}
              </span>
            ))}
          </h1>
          <p className="hero__lead reveal" style={delay(WORD_START + 4 * WORD_STAGGER + 120)}>
            Vouch is a payment wallet for people anywhere who shop through an AI assistant. Verify yourself
            once, link your card or e-wallet once, and from then on any assistant you use can buy for you.
            Nothing is charged until you tap Approve on a Vouch page for that exact purchase.
          </p>
        </div>
        <div className="hero__actions reveal" style={delay(WORD_START + 6 * WORD_STAGGER + 200)}>
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
