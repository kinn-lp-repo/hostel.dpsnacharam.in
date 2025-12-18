import { useEffect } from 'react'

/**
 * Preloader controller for the static preloader markup in `index.html`.
 * Keeps the preloader visible for `delayMs`, then fades it out and removes it from layout.
 */
const Preloader = ({ delayMs = 2000 }) => {
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    if (!preloader) return

    const hidePreloader = () => {
      preloader.classList.add('fade-out')
      // Match CSS transition duration (0.6s)
      window.setTimeout(() => {
        preloader.style.display = 'none'
      }, 600)
    }

    const timer = window.setTimeout(hidePreloader, delayMs)
    return () => window.clearTimeout(timer)
  }, [delayMs])

  // This component only controls the existing DOM node in index.html.
  return null
}

export default Preloader


