/**
 * Same-page anchor transitions.
 *
 * Motion rules (animations.dev / Emil Kowalski):
 * - ease-out: starts fast so the click feels answered immediately, settles gently.
 * - Interruptible: any wheel / touch / key input from the user cancels the animation.
 * - Never animate keyboard-initiated actions: Enter on a focused link jumps instantly.
 * - prefers-reduced-motion: jump instantly.
 * - Marketing-page exception to "under 300ms": long page distances get a little more
 *   time so the travel stays readable, clamped to 450–850ms.
 */

const MIN_DURATION = 450
const MAX_DURATION = 850

// Ease-out quint, the JS equivalent of cubic-bezier(0.23, 1, 0.32, 1) used in CSS.
const easeOut = (t: number) => 1 - Math.pow(1 - t, 5)

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let cancelActive: (() => void) | null = null

function targetTop(el: HTMLElement) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  return Math.max(0, Math.min(el.getBoundingClientRect().top + window.scrollY - margin, max))
}

function focusTarget(el: HTMLElement) {
  // Move focus for keyboard and screen-reader users without a second scroll.
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

export function scrollToElement(el: HTMLElement, { animate = true } = {}) {
  cancelActive?.()

  if (!animate || prefersReducedMotion()) {
    window.scrollTo(0, targetTop(el))
    focusTarget(el)
    return
  }

  const start = window.scrollY
  const distance = Math.abs(targetTop(el) - start)
  const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, 300 + distance * 0.15))
  const startTime = performance.now()
  let frame = 0

  const stop = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
    window.removeEventListener('keydown', stop)
    cancelActive = null
  }

  const step = (now: number) => {
    const t = Math.min(1, (now - startTime) / duration)
    // Re-measure every frame: the hero grows while we scroll, which moves the target.
    const to = targetTop(el)
    window.scrollTo(0, start + (to - start) * easeOut(t))
    if (t < 1) {
      frame = requestAnimationFrame(step)
    } else {
      stop()
      focusTarget(el)
    }
  }

  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })
  window.addEventListener('keydown', stop)
  cancelActive = stop
  frame = requestAnimationFrame(step)
}

/** Delegated click handler for every `<a href="#id">` on the page. */
export function installAnchorTransitions() {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
    if (!link) return
    const id = decodeURIComponent(link.hash.slice(1))
    const target = id ? document.getElementById(id) : null
    if (!target) return

    e.preventDefault()
    // detail === 0 means the click came from the keyboard (Enter): no animation.
    scrollToElement(target, { animate: e.detail !== 0 })
    if (location.hash !== link.hash) history.pushState(null, '', link.hash)
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
