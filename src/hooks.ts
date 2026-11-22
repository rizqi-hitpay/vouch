import { useEffect, useState } from 'react'

/** True once the page has been scrolled past `threshold` px; false again back at the top. */
export function useScrolledPast(threshold = 24) {
  const [past, setPast] = useState(() => typeof window !== 'undefined' && window.scrollY > threshold)

  useEffect(() => {
    // React skips the re-render when the boolean is unchanged, so no throttling is needed.
    const update = () => setPast(window.scrollY > threshold)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return past
}

/**
 * Scroll-spy: the id of the section currently under the header, or null above the first one.
 * A section counts as current once its top passes `line` px from the viewport top (just
 * below the pinned header); the last section stays current through the footer.
 */
export function useActiveSection(ids: string[], line = 120) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    const list = key.split(',')
    const update = () => {
      let current: string | null = null
      for (const id of list) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // Layout also shifts without scrolling (the hero expands), so watch the page size too.
    const ro = new ResizeObserver(update)
    ro.observe(document.body)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      ro.disconnect()
    }
  }, [key, line])

  return active
}
