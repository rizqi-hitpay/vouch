import dot from '../assets/ellipse-495.svg'
import { Button } from './Button'
import './Developers.css'

const lineNumbers = Array.from({ length: 23 }, (_, i) => i + 1)

const Url = ({ path }: { path: string }) => (
  <>
    <span className="tok-f">https</span>:<span className="tok-c">{`//vouch.hitpay.dev/api/${path}`}</span>
  </>
)

export function Developers() {
  return (
    <section className="dev stroke-b" id="developers">
      <div className="dev__top">
        <div className="dev__title">
          <p className="eyebrow">For developers and assistants</p>
          <h2 className="section-title">One MCP server. No web UI.</h2>
          <p className="section-desc">
            Vouch is agent-only by design. Connect over MCP with OAuth, or use the CLI or the REST API. Pass the
            checkout URL when you create a spend and Vouch pays the moment the person approves.
          </p>
          <div className="dev__buttons">
            <Button arrow href="#mcp-guide">
              Read the MCP guide
            </Button>
            <Button variant="secondary" href="#openapi">
              OpenAPI spec
            </Button>
          </div>
        </div>

        <div className="dev__image">
          <div className="dev__image-inner">
            <div className="dev__window">
              {[19, 37, 55].map((left) => (
                <img key={left} className="dev__dot" src={dot} width={12} height={12} style={{ left }} alt="" />
              ))}
            </div>
            <div className="dev__code">
              <div className="dev__code-main">
                <div className="dev__gutter" aria-hidden>
                  {lineNumbers.map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
                <pre className="dev__snippet">
                  {'# Remote '}
                  <span className="tok-k">MCP</span>
                  {', OAuth sign'}
                  <span className="tok-o">-in</span>
                  {'\n'}
                  <Url path="mcp" />
                  {'\n​\n# Claude Code\nclaude mcp add '}
                  <span className="tok-o">--</span>
                  {'transport http vouch '}
                  <Url path="mcp" />
                  {'\n​\n# '}
                  <span className="tok-k">CLI</span>
                  {', or a local stdio server\nnpm install '}
                  <span className="tok-o">-</span>
                  {'g @hitpay'}
                  <span className="tok-o">/</span>
                  {'vouch\nvouch login\nnpx '}
                  <span className="tok-o">-</span>
                  {'y @hitpay'}
                  <span className="tok-o">/</span>
                  {'vouch mcp\n​\n# '}
                  <span className="tok-k">REST</span>
                  {'\n'}
                  <Url path="v1" />
                </pre>
              </div>
            </div>
          </div>
          <div className="dev__fade" />
        </div>
      </div>
    </section>
  )
}
