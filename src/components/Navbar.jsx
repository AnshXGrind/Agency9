import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/[0.95] backdrop-blur-[16px] border-b border-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="text-bg-navy text-[22px] font-serif italic z-[60]">
            Launcify
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative font-sans font-medium text-[14px] transition-colors duration-300 pb-1 ${
                        isActive ? 'text-bg-navy' : 'text-text-mid hover:text-sage-dark'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-sage" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link
              to="/contact"
              className="px-[24px] py-[10px] bg-bg-navy text-[#F7F4EE] rounded-full text-[14px] font-sans font-medium hover:bg-terra hover:-translate-y-[1px] hover:shadow-warm transition-all duration-300"
            >
              Start a Project &rarr;
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-bg-navy transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-bg-navy transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-[1.5px] bg-bg-navy transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-bg flex flex-col px-8 pt-32"
          >
            {/* Blurred background texture hook (placeholder) */}
            <div className="absolute inset-0 z-0 opacity-40 blur-[40px] pointer-events-none flex items-center justify-center">
               <div className="w-[200px] h-[200px] rounded-full bg-sage blur-[60px]" />
               <div className="w-[200px] h-[200px] rounded-full bg-gold blur-[60px]" />
            </div>

            <nav className="relative z-10 flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className="text-[40px] font-serif text-bg-navy hover:text-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-bg-navy text-[#F7F4EE] text-[16px] rounded-full inline-block font-sans font-medium"
                >
                  Start a Project &rarr;
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}