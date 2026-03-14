import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Work = lazy(() => import('./pages/Work'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[var(--bg-primary)]"></div>}>
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
    </div>
  )
}

export default App
