import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactIllustration from '../illustrations/ContactIllustration'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', brief: '', budget: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
      
      {/* PAGE HERO */}
      <section className="bg-bg-primary pt-24 pb-16 text-center px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <span className="font-mono text-[13px] font-medium text-text-muted mb-4 tracking-wider uppercase inline-block">04 / Contact</span>
          <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] tracking-tight mb-8 leading-[1.1]">
            Let's Build <em className="italic font-display text-accent-primary not-italic">Something</em>
          </h1>
          <p className="font-body text-[18px] text-text-secondary max-w-[500px] mx-auto">
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM & INFO GRID */}
      <section className="bg-bg-primary pb-32 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 md:gap-24">
          
          {/* LEFT: Form */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-accent-secondary/10 border border-accent-secondary/20 p-8 rounded-[16px] flex flex-col items-center justify-center text-center h-[500px]"
                >
                  <div className="w-16 h-16 bg-accent-secondary/20 text-teal-800 rounded-full flex items-center justify-center mb-6 text-[24px]">
                    &check;
                  </div>
                  <h3 className="font-display font-semibold text-[28px] text-text-primary mb-2">Message received</h3>
                  <p className="font-body text-text-secondary">We'll reply within 24 hours! 🎉</p>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="relative group">
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-border py-3 px-0 font-body text-[16px] text-text-primary placeholder-transparent focus:outline-none focus:ring-0 focus:border-accent-primary peer" placeholder="Name" />
                      <label htmlFor="name" className="absolute left-0 top-3 font-body text-[16px] text-text-secondary transition-all peer-focus:-top-4 peer-focus:text-[13px] peer-focus:text-accent-primary peer-valid:-top-4 peer-valid:text-[13px]">Name</label>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-border py-3 px-0 font-body text-[16px] text-text-primary placeholder-transparent focus:outline-none focus:ring-0 focus:border-accent-primary peer" placeholder="Email" />
                      <label htmlFor="email" className="absolute left-0 top-3 font-body text-[16px] text-text-secondary transition-all peer-focus:-top-4 peer-focus:text-[13px] peer-focus:text-accent-primary peer-valid:-top-4 peer-valid:text-[13px]">Email</label>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative group pt-4">
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-border py-3 px-0 font-body text-[16px] text-text-primary placeholder-transparent focus:outline-none focus:ring-0 focus:border-accent-primary peer" placeholder="Company (optional)" />
                    <label htmlFor="company" className="absolute left-0 top-7 font-body text-[16px] text-text-secondary transition-all peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-accent-primary peer-valid:top-0 peer-valid:text-[13px]">Company (optional)</label>
                  </div>

                  {/* Service */}
                  <div className="relative group pt-4">
                    <select id="service" name="service" required value={formData.service} onChange={handleChange} className={`w-full bg-transparent border-0 border-b-2 border-border py-3 px-0 font-body text-[16px] focus:outline-none focus:ring-0 focus:border-accent-primary peer ${formData.service ? 'text-text-primary' : 'text-text-secondary'}`}>
                      <option value="" disabled hidden></option>
                      <option className="text-text-primary bg-bg-primary" value="AI Automation">AI Automation</option>
                      <option className="text-text-primary bg-bg-primary" value="AI Agent">AI Agent</option>
                      <option className="text-text-primary bg-bg-primary" value="Workflow Engineering">Workflow Engineering</option>
                      <option className="text-text-primary bg-bg-primary" value="Website Development">Website Development</option>
                      <option className="text-text-primary bg-bg-primary" value="Full Package">Full Package</option>
                    </select>
                    <label htmlFor="service" className={`absolute left-0 font-body transition-all text-text-secondary ${formData.service ? 'top-0 text-[13px]' : 'top-7 text-[16px] peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-accent-primary'}`}>Required Service</label>
                  </div>

                  {/* Budget */}
                  <div className="relative group pt-4">
                    <select id="budget" name="budget" required value={formData.budget} onChange={handleChange} className={`w-full bg-transparent border-0 border-b-2 border-border py-3 px-0 font-body text-[16px] focus:outline-none focus:ring-0 focus:border-accent-primary peer ${formData.budget ? 'text-text-primary' : 'text-text-secondary'}`}>
                      <option value="" disabled hidden></option>
                      <option className="text-text-primary bg-bg-primary" value="Under 25k">Under ₹25k</option>
                      <option className="text-text-primary bg-bg-primary" value="25k-75k">₹25k – ₹75k</option>
                      <option className="text-text-primary bg-bg-primary" value="75k-2L">₹75k – ₹2L</option>
                      <option className="text-text-primary bg-bg-primary" value="2L+">₹2L+</option>
                    </select>
                    <label htmlFor="budget" className={`absolute left-0 font-body transition-all text-text-secondary ${formData.budget ? 'top-0 text-[13px]' : 'top-7 text-[16px] peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-accent-primary'}`}>Budget Range</label>
                  </div>

                  {/* Brief */}
                  <div className="relative group pt-4">
                    <textarea id="brief" name="brief" rows="4" required value={formData.brief} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-border py-3 px-0 font-body text-[16px] text-text-primary placeholder-transparent focus:outline-none focus:ring-0 focus:border-accent-primary peer resize-y min-h-[120px]" placeholder="Project Brief" />
                    <label htmlFor="brief" className="absolute left-0 top-7 font-body text-[16px] text-text-secondary transition-all peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-accent-primary peer-valid:top-0 peer-valid:text-[13px]">Project Brief</label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full h-[56px] rounded-full bg-accent-primary text-white font-display text-[18px] font-semibold mt-4 flex items-center justify-center hover:bg-accent-primary/90 transition-colors shadow-subtle hover:shadow-card disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send It \u2192"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Info Panel */}
          <div className="bg-bg-secondary p-8 md:p-12 rounded-[20px] flex flex-col h-full border border-border">
            <div className="mb-12">
              <ContactIllustration className="w-[180px]" />
            </div>

            <a href="mailto:hello@launcify.in" className="font-display font-semibold text-[24px] text-accent-primary mb-2 hover:underline decoration-2 underline-offset-4">
              hello@launcify.in
            </a>
            
            <p className="font-body text-[15px] text-text-secondary mb-10 pb-10 border-b border-border-strong border-dashed">
              We typically respond within 24 hours
            </p>

            <div className="flex items-center gap-3 mb-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-mono text-[13px] font-medium tracking-wide">
                Currently accepting new projects
              </span>
            </div>

            <div className="mt-auto">
              <p className="font-body text-[14px] text-text-secondary mb-4">Or book a call:</p>
              <a href="#" className="inline-block px-8 py-3 bg-bg-primary text-text-primary border border-border-strong rounded-full font-body font-medium hover:bg-white hover:border-text-primary transition-colors focus:ring-2 focus:ring-accent-primary">
                Calendly &rarr;
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary py-32 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[13px] font-medium text-text-muted mb-4 tracking-wider uppercase inline-block">FAQ</span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,48px)] tracking-tight">Common Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { q: "What's the typical timeline for a project?", a: "Most projects take 1–4 weeks depending on complexity. Simple automations can be done in days. Complex AI agent builds or full-stack websites take 3–6 weeks. We'll give you an exact timeline during our discovery call." },
              { q: "How much does it cost?", a: "Projects start at $1,500 for simple automations. AI agents typically range $2,500–$5,000. Full-package engagements (automation + agent + website) start at $5,000. Every project gets a detailed proposal with transparent pricing." },
              { q: "What tools do you work with?", a: "n8n, Make, Zapier for workflow automation. LangChain, OpenAI, Anthropic for AI agents. React, Next.js, Node.js for web development. We also work with any API your business uses — CRMs, email tools, databases, and more." },
              { q: "Do you offer ongoing support?", a: "Every project includes 30 days of post-launch support. After that, we offer retainer plans for ongoing maintenance, monitoring, and iteration. Most clients stay because their systems keep growing." },
              { q: "Can you work with our existing systems?", a: "Absolutely. We specialize in integrating with existing infrastructure — CRMs, ERPs, legacy databases, third-party APIs. If it has an API (or even if it doesn't), we can connect it." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border border-border rounded-[12px] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-body font-semibold text-[16px] text-text-primary pr-8">{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          className="text-text-muted shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 font-body text-[15px] leading-relaxed text-text-secondary border-t border-border/50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
