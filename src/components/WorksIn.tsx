import claudeLogo from '../assets/claude-logo.svg'
import chatgptLogo from '../assets/chatgpt-logo.svg'
import museLogo from '../assets/logo-3.svg'
import instinctMark from '../assets/image-1.png'
import instinctText from '../assets/instinct.svg'
import grokLogo from '../assets/grok-logo.svg'
import cursorDark from '../assets/cursor-dark.svg'
import cursorWhite from '../assets/cursor-white.svg'
import codexVector from '../assets/codex-vector.svg'
import './WorksIn.css'

export function WorksIn() {
  return (
    <section className="works-in">
      <p className="works-in__label">works in</p>
      <div className="works-in__logos">
        <div className="works-in__logo" style={{ width: 146.054 }}>
          <img src={claudeLogo} width={111.753} height={24} alt="Claude" />
        </div>
        <div className="works-in__logo" style={{ width: 146.054 }}>
          <img src={chatgptLogo} width={106.163} height={26} alt="ChatGPT" />
        </div>
        <div className="works-in__logo" style={{ width: 146 }}>
          <img src={museLogo} width={86.6551} height={30} alt="Muse" />
        </div>
        <div className="works-in__logo" style={{ width: 146 }}>
          <div className="works-in__instinct" aria-label="Instinct">
            <img src={instinctMark} width={7.606} height={20} alt="" />
            <img src={instinctText} width={71.3795} height={14.62} alt="Instinct" />
          </div>
        </div>
        <div className="works-in__logo" style={{ width: 146 }}>
          <img src={grokLogo} width={74.6667} height={28} alt="Grok" />
        </div>
        <div className="works-in__logo" style={{ width: 146 }}>
          <div className="works-in__clip" style={{ width: 115.068, height: 28 }} aria-label="Cursor">
            <img src={cursorDark} width={115.068} height={27.4573} style={{ left: 0, top: 0 }} alt="" />
            <img src={cursorWhite} width={21.8534} height={19.057} style={{ left: 1.082, top: 7.249 }} alt="" />
          </div>
        </div>
        <div className="works-in__logo" style={{ width: 146.054 }}>
          <div className="works-in__clip" style={{ width: 106.163, height: 26 }}>
            <img src={codexVector} width={25.0144} height={25.0185} style={{ left: 0.775, top: 0.598 }} alt="" />
            <span className="works-in__codex-text">Codex</span>
          </div>
        </div>
        <div className="works-in__logo" style={{ width: 146.054 }}>
          <span className="works-in__any">Any MCP clients</span>
        </div>
      </div>
    </section>
  )
}
