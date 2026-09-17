'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '/#expertise', label: 'Expertise' },
  { href: '/#profile', label: 'Profile' },
  { href: '/blog', label: 'Insights' },
  { href: '/#notable', label: 'Notable Work' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-dark text-white/60 text-[0.72rem] tracking-wide py-[0.4rem] hidden sm:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span>1A Middle Temple Lane, London EC4Y 9AA</span>
          <span className="flex gap-4">
            <a href="tel:+442035761203" className="hover:text-gold transition-colors">020 3576 1203</a>
            <span className="opacity-30">|</span>
            <a href="mailto:clerks@burnellchambers.co.uk" className="hover:text-gold transition-colors">
              clerks@burnellchambers.co.uk
            </a>
          </span>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-navy transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.35)]' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 no-underline">
              <Image
                src="/images/burnell-chambers-logo.webp"
                alt="Burnell Chambers"
                width={160}
                height={46}
                className="h-12 w-auto brightness-0 invert"
                priority
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.slice(0, -1).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/75 hover:text-white hover:bg-white/8 px-3.5 py-2 text-[0.75rem] tracking-wide uppercase transition-all rounded-sm"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contact"
                className="ml-2 bg-gold hover:bg-gold-light text-white px-5 py-2 text-[0.75rem] tracking-wide uppercase transition-colors rounded-sm font-medium"
              >
                Instruct Mr. Feingold
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Open menu"
            >
              <span className={`block w-5 h-[2px] bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="md:hidden border-t border-white/10 py-3 flex flex-col gap-0.5 pb-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="text-white/80 hover:text-white py-2.5 px-1 text-sm tracking-wide uppercase border-b border-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
