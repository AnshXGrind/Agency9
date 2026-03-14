import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most automation projects take 5-14 days. Complex custom AI agents or full web applications can take 3-4 weeks. We focus on rapid deployment and iteration."
  },
  {
    q: "Do you charge monthly retainers?",
    a: "No. We believe in performance, not padding. Most builds are fixed-price, one-time fees. We hand over the keys. If you need ongoing maintenance, we offer optional tailored support."
  },
  {
    q: "Do I need technical knowledge to use what you build?",
    a: "Not at all. We build tools specifically for non-technical teams. The goal is to hide the complexity behind a simple interface or have it run completely invisibly in the background."
  },
  {
    q: "What if the automation breaks?",
    a: "We build fault-tolerant systems with error catching. If an API fails, you get notified. We also provide a 30-day bug-fix guarantee on all custom code."
  },
  {
    q: "Will AI replace my team?",
    a: "AI replaces tasks, not people. Our systems handle the repetitive data-entry and initial processing so your team can focus on strategy, relationships, and high-value work."
  }
]

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 group focus:outline-none"
      >
        <span className="font-sans font-medium text-[16px] text-text group-hover:text-sage-dark transition-colors">{faq.q}</span>
        <motion.svg 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          className="w-5 h-5 text-text-muted flex-shrink-0" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[14px] text-text-mid pt-2 pb-4 leading-[1.6]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FloatingInput({ id, label, type = "text", value, onChange, options = null, ...props }) {
  const [focused, setFocused] = useState(false)
  
  const isFilled = value.length > 0 || (type === 'select' && value !== '')
  const isActive = focused || isFilled

  return (
    <div className="relative pt-6 pb-2 w-full">
      <label 
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 pointer-events-none font-sans ${
          isActive ? 'top-0 text-[13px] text-sage-dark font-medium' : 'top-[28px] text-[16px] text-text-muted'
        }`}
      >
        {label}
      </label>
      
      {type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent border-0 border-b-[1.5px] rounded-none px-0 py-2 font-sans text-[16px] text-text outline-none transition-colors ${
            focused ? 'border-sage' : 'border-border'
          }`}
          {...props}
        >
          <option value="" disabled className="text-text-muted hidden" />
          {options.map(opt => <option key={opt.value} value={opt.value} className="text-text">{opt.label}</option>)}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent border-0 border-b-[1.5px] rounded-none px-0 py-2 font-sans text-[16px] text-text outline-none resize-none transition-colors ${
            focused ? 'border-sage' : 'border-border'
          }`}
          rows={4}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent border-0 border-b-[1.5px] rounded-none px-0 py-2 font-sans text-[16px] text-text outline-none transition-colors ${
            focused ? 'border-sage' : 'border-border'
          }`}
          {...props}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const location = useLocation()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    brief: '',
    budget: ''
  })
  
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    // Pre-fill service based on query param
    const params = new URLSearchParams(location.search)
    const s = params.get('service')
    if (s && ['automations', 'agents', 'workflow', 'web'].includes(s)) {
      setFormData(prev => ({ ...prev, service: s }))
    }
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate send
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">
      {/* Hero */}
      <section className="pt-24 pb-16 safe-paddings relative overflow-hidden bg-bg">
        <div className="absolute -top-6 -right-10 font-serif font-bold text-[240px] text-border opacity-20 pointer-events-none select-none leading-none z-0">
          05
        </div>
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h1 className="font-serif font-bold text-[clamp(48px,8vw,80px)] text-bg-navy leading-none mb-6">
            Let's Build Something
          </h1>
          <p className="font-sans text-[18px] text-text-mid max-w-[600px]">
            Tell us about your operational bottlenecks or digital ambitions. 
            We'll outline a concrete system architecture on our first call.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="safe-paddings pt-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-20">
          
          {/* Left Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8 pr-0 lg:pr-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput id="name" label="Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <FloatingInput id="email" type="email" label="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput id="company" label="Company (Optional)" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                <FloatingInput id="service" type="select" label="Service Needed *" required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} options={[
                  { value: 'automations', label: 'AI Automations' },
                  { value: 'agents', label: 'AI Agents' },
                  { value: 'workflow', label: 'Workflow Engineering' },
                  { value: 'web', label: 'Web Development' },
                  { value: 'other', label: 'Other / Unsure' }
                ]} />
              </div>

              <FloatingInput id="brief" type="textarea" label="Project Brief *" required value={formData.brief} onChange={e => setFormData({...formData, brief: e.target.value})} />
              
              <FloatingInput id="budget" type="select" label="Budget Range (Optional)" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} options={[
                { value: 'under-50k', label: 'Under ₹50,000' },
                { value: '50k-1L', label: '₹50,000 - ₹1,00,000' },
                { value: '1L-3L', label: '₹1,00,000 - ₹3,00,000' },
                { value: '3L+', label: '₹3,00,000+' }
              ]} />

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full md:w-auto px-10 h-[56px] rounded-full font-serif font-semibold text-[18px] text-[#F7F4EE] transition-all flex items-center justify-center gap-2 ${
                    status === 'success' ? 'bg-sage cursor-default' : 'bg-bg-navy hover:bg-terra hover:-translate-y-1 hover:shadow-warm'
                  }`}
                >
                  {status === 'idle' && (<span>Send It &rarr;</span>)}
                  {status === 'loading' && (
                    <>
                      <div className="w-5 h-5 border-[2px] border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  )}
                  {status === 'success' && (<span>✓ We'll reply within 24 hours!</span>)}
                </button>
              </div>
            </form>
          </div>

          {/* Right Info */}
          <div className="space-y-12">
            <div className="bg-bg-alt rounded-[20px] p-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse border border-green-300"></div>
                <span className="font-mono text-[12px] text-sage-dark uppercase tracking-wider">Currently accepting projects</span>
              </div>
              
              <div className="mb-8">
                <a href="mailto:hello@launcify.com" className="font-serif italic font-semibold text-[22px] text-bg-navy hover:text-sage transition-colors">
                  hello@launcify.com
                </a>
                <p className="font-sans text-[14px] text-text-muted mt-1">Average response time: &lt; 2 hours</p>
              </div>

              <div className="w-full h-[1px] bg-border mb-8"></div>

              <div>
                <p className="font-sans text-[14px] text-text-mid mb-4">Or book a call directly:</p>
                <a href="#" className="inline-block px-5 py-2.5 bg-transparent border border-border rounded-full font-sans text-[14px] text-text hover:bg-white transition-colors" title="Calendly coming soon">
                  Schedule via Calendly
                </a>
              </div>
            </div>

            {/* Accordion */}
            <div>
              <h3 className="font-serif font-semibold text-[24px] text-text mb-6">Frequently Asked</h3>
              <div className="border-t border-border">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </motion.div>
  )
}
