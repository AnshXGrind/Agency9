import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function PageTransition({ children }) {
  // Use location here to capture page changes, but we are inside Routes which works OK
  return children
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Launcify | AI Automation Agency',
      '/services': 'Services | Launcify',
      '/work': 'Work | Launcify',
      '/about': 'About | Launcify',
      '/contact': 'Contact | Launcify'
    }
    document.title = titles[location.pathname] || 'Launcify'
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen pb-[64px] md:pb-0"> {/* mobile spacing for sticky CTA */}
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Suspense fallback={<div className="h-screen w-full bg-bg"></div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}

export default App