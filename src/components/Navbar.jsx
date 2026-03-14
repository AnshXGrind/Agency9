import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import HeroIllustration from '../illustrations/HeroIllustration'

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link to="/" className="text-text-primary text-[22px] tracking-tight font-display italic decoration-transparent z-[60]">
            Launcify
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative text-[15px] font-body transition-colors duration-300 pb-1 ${
                      location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary group'
                    }`}
                  >
                    {link.label}
                    {/* Hover & Active underliine */}
                    <span 
                      className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-accent-primary origin-left transition-transform duration-300 ease-out ${
                        location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-accent-primary text-white rounded-full text-[14px] font-body font-semibold hover:bg-[#E85D2A] transform hover:scale-[1.02] shadow-subtle hover:shadow-card transition-all"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-[60] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
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
            className="fixed inset-0 z-[55] bg-bg-primary flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link
                    to={link.path}
                    className="text-[40px] font-display font-medium text-text-secondary hover:text-text-primary tracking-tight transition-colors"
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
                  className="px-8 py-3 bg-accent-primary text-white text-[16px] rounded-full inline-block font-body"
                >
                  Start a Project
                </Link>
              </motion.div>
            </nav>
            <div className="absolute bottom-8 right-8 scale-[0.6] origin-bottom-right opacity-80 pointer-events-none">
              <HeroIllustration />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
