import { useState } from 'react'
import logoSmall from '../assets/logo-vouch-small.svg'
import museIcon from '../assets/muse-icon.svg'
import instinctIcon from '../assets/image-1.png'
import claudeIcon from '../assets/claude-icon.svg'
import chatgptIcon from '../assets/chatgpt-icon.svg'
import grokIcon from '../assets/grok-icon.svg'
import copyIcon from '../assets/copy-left.svg'
import { Button } from './Button'
import './AddVouch.css'

// Setup copy per assistant, taken from vouch.hitpay.dev ("Add Vouch to your assistant").
// `label` is shown above the message; assistants with a settings UI get a how-to instead
// of "Send this to …".
const MCP_URL = 'https://vouch.hitpay.dev/api/mcp'
const WALKTHROUGH = 'Then call vouch_me and walk me through its nextSteps, one at a time. Give me each Vouch link to open.'
const FALLBACK = `If you cannot sign in, connect to ${MCP_URL}?bootstrap=1 instead, call vouch_auth_google_start and give me the loginUrl.`

const assistants = [
  {
    id: 'muse',
    name: 'Muse',
    icon: <img src={museIcon} width={20} height={20} alt="" />,
    label: 'Send this to Muse',
    message: `Create a Custom Connector for a remote MCP server and connect to it:
Name: Vouch
Transport: remote streamable HTTP
URL: ${MCP_URL}
Auth: OAuth (I will sign in when prompted; there is no key to paste)
${WALKTHROUGH}`,
  },
  {
    id: 'instinct',
    name: 'Instinct',
    icon: <img className="add-vouch__tab-icon--cover" src={instinctIcon} width={7.606} height={20} alt="" />,
    label: 'Send this to Instinct',
    message: `Add the MCP connection ${MCP_URL} (Streamable HTTP) and sign in when it asks.
${FALLBACK}
${WALKTHROUGH}`,
  },
  {
    id: 'claude',
    name: 'Claude',
    icon: (
      <span className="add-vouch__icon-box">
        <img src={claudeIcon} width={19.8779} height={19.8899} alt="" />
      </span>
    ),
    label:
      'In Claude: Settings, Connectors, Add custom connector, paste the URL and sign in with your email and mobile number. Then send this:',
    message: `Connector URL: ${MCP_URL}

Use the Vouch connector. ${WALKTHROUGH}`,
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    icon: <img src={chatgptIcon} width={20} height={20} alt="" />,
    label: 'In ChatGPT: Settings, Connectors, add an MCP server with the URL and OAuth. Then send this:',
    message: `MCP server URL: ${MCP_URL}

Use the Vouch connector. ${WALKTHROUGH}`,
  },
  {
    id: 'grokbot',
    name: 'Grokbot',
    icon: <img src={grokIcon} width={20.6061} height={20} alt="" />,
    label: 'Send this to Grokbot',
    message: `Connect to the MCP server at ${MCP_URL} (Streamable HTTP, OAuth sign-in).
${FALLBACK}
${WALKTHROUGH}`,
  },
]

export function AddVouch() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const current = assistants[active]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="add-vouch" id="add-vouch">
      <div className="add-vouch__content">
        <div className="add-vouch__head">
          <div className="add-vouch__title">
            <p className="add-vouch__title-text">{'Add           to your assistant'}</p>
            <img className="add-vouch__title-logo" src={logoSmall} width={45.5004} height={18.5001} alt="Vouch" />
          </div>
          <p className="add-vouch__sub">
            Pick your assistant, copy the message, paste it into the chat. It does the rest.
          </p>
        </div>

        <div className="add-vouch__tabs" role="tablist">
          {assistants.map((a, i) => (
            <button
              key={a.name}
              type="button"
              role="tab"
              id={`tab-${a.id}`}
              aria-selected={active === i}
              aria-controls="add-vouch-panel"
              className={`add-vouch__tab${active === i ? ' add-vouch__tab--active' : ''}`}
              onClick={() => {
                setActive(i)
                setCopied(false)
              }}
            >
              {a.icon}
              <span className="add-vouch__tab-label">{a.name}</span>
            </button>
          ))}
        </div>

        <div className="add-vouch__message" role="tabpanel" id="add-vouch-panel" aria-labelledby={`tab-${current.id}`}>
          <p className="add-vouch__label">{current.label}</p>
          <div className="add-vouch__snippet">
            <pre className="add-vouch__code">{current.message}</pre>
          </div>
          <Button
            onClick={copy}
            iconLeft={<img className="btn__icon add-vouch__copy-icon" src={copyIcon} width={22} height={22} alt="" />}
          >
            {copied ? 'Copied' : 'Copy message'}
          </Button>
        </div>
      </div>
    </div>
  )
}
