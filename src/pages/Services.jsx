import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import WorkflowDiagram from '../components/WorkflowDiagram'
import TiltCard from '../components/TiltCard'

function FadeInSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] bg-white rounded-xl shadow-3d overflow-hidden mx-auto transition-transform duration-700 hover:!transform-none"
         style={{ transform: 'perspective(1200px) rotateX(6deg) rotateY(-4deg)' }}>
      {/* Browser Bar */}
      <div className="h-8 bg-bg-alt border-b border-border flex items-center px-4 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-terra/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gold/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-sage/80"></div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="w-3/4 h-8 bg-bg-alt rounded mb-4"></div>
        <div className="w-1/2 h-4 bg-bg-alt rounded mb-8"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[4/3] bg-bg-alt rounded"></div>
          <div className="aspect-[4/3] bg-bg-alt rounded"></div>
        </div>
      </div>
    </div>
  )
}

function IsometricStack() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <div className="relative w-[300px] h-[300px]" style={{ transform: 'rotateX(50deg) rotateY(-20deg)', transformStyle: 'preserve-3d' }}>
        
        {/* Layer 1 */}
        <div className="absolute inset-0 bg-[#3D5468]/90 border border-steel/50 rounded-xl shadow-xl flex items-center justify-center translate-z-0 transition-transform duration-500 hover:translate-z-[10px]">
          <span className="font-mono text-white/50" style={{ transform: 'rotateX(-50deg) rotateY(20deg)' }}>Data Sources</span>
        </div>
        
        {/* Layer 2 */}
        <div className="absolute inset-0 bg-bg-navy/90 border border-sage/50 rounded-xl shadow-[0_20px_20px_rgba(0,0,0,0.1)] flex items-center justify-center transform translate-z-[60px] transition-transform duration-500 hover:translate-z-[80px]">
          <span className="font-mono text-sage-light" style={{ transform: 'rotateX(-50deg) rotateY(20deg)' }}>AI Processing</span>
        </div>
        
        {/* Layer 3 */}
        <div className="absolute inset-0 bg-sage/90 border border-white/20 rounded-xl shadow-[0_20px_20px_rgba(0,0,0,0.05)] flex items-center justify-center transform translate-z-[120px] transition-transform duration-500 hover:translate-z-[150px]">
          <span className="font-mono text-bg-card" style={{ transform: 'rotateX(-50deg) rotateY(20deg)' }}>Your Output</span>
        </div>

      </div>
    </div>
  )
}

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Page Hero */}
      <section className="pt-24 pb-16 safe-paddings relative overflow-hidden bg-bg-alt">
        <div className="absolute -top-6 -right-10 font-serif font-bold text-[240px] text-border opacity-20 pointer-events-none select-none leading-none z-0">
          02
        </div>
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h1 className="font-serif font-bold text-[clamp(48px,8vw,80px)] text-bg-navy leading-none mb-6">
            What We Build
          </h1>
          <p className="font-sans text-[18px] text-text-mid max-w-[600px]">
             We specialize in four core areas to help your business operate faster, smarter, and with less overhead.
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section id="ai-automations" className="min-h-[480px] py-20 bg-bg safe-paddings border-b border-border">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeInSection className="order-2 md:order-1">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-4">01 / AI Automations</h4>
            <h2 className="font-serif font-semibold text-[44px] text-text mb-4 leading-[1.1]">Self-Running Systems</h2>
            <p className="font-sans text-[16px] text-text-mid mb-6">
              Connect your favorite apps to automate tedious tasks. From lead capture to CRM updates, we build workflows that run flawlessly 24/7.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['n8n', 'Make', 'Zapier', 'APIs'].map(tech => (
                <span key={tech} className="px-3.5 py-1.5 bg-bg-alt border border-border rounded-full font-mono text-[12px] text-text-mid hover:border-sage hover:text-sage-dark transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Automated CRM & Lead Management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Cross-platform data synchronization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Email triage & outreach automation</span>
              </li>
            </ul>

            <div className="flex gap-4 mb-8">
              <span className="px-3 py-1 bg-bg-alt border border-border rounded-full font-mono text-[12px] text-text-muted">⏱ 5–10 days</span>
              <span className="px-3 py-1 bg-bg-alt border border-border rounded-full font-mono text-[12px] text-text-muted">From ₹15,000</span>
            </div>

            <Link to="/contact?service=automations" className="group font-sans font-medium text-[15px] text-sage-dark inline-block relative py-1">
              Start This Project
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-sage-dark origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </FadeInSection>
          
          <FadeInSection className="order-1 md:order-2 flex justify-center">
            <WorkflowDiagram scale={0.8} />
          </FadeInSection>
        </div>
      </section>

      {/* Service 2 */}
      <section id="ai-agents" className="min-h-[480px] py-20 bg-bg-alt safe-paddings border-b border-border">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeInSection className="flex justify-center">
             <IsometricStack />
          </FadeInSection>

          <FadeInSection>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-4">02 / AI Agents</h4>
            <h2 className="font-serif font-semibold text-[44px] text-text mb-4 leading-[1.1]">Custom Intelligence</h2>
            <p className="font-sans text-[16px] text-text-mid mb-6">
              We build specialized AI agents trained exclusively on your business data. They can handle customer support, internal research, or specific document generation.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['OpenAI', 'Anthropic', 'LangChain', 'Vector DBs'].map(tech => (
                <span key={tech} className="px-3.5 py-1.5 bg-bg-card border border-border rounded-full font-mono text-[12px] text-text-mid hover:border-sage hover:text-sage-dark transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">24/7 AI Customer Support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Internal Knowledge Base Assistants</span>
              </li>
            </ul>

            <div className="flex gap-4 mb-8">
              <span className="px-3 py-1 bg-bg-card border border-border rounded-full font-mono text-[12px] text-text-muted">⏱ 10–14 days</span>
              <span className="px-3 py-1 bg-bg-card border border-border rounded-full font-mono text-[12px] text-text-muted">From ₹25,000</span>
            </div>

            <Link to="/contact?service=agents" className="group font-sans font-medium text-[15px] text-sage-dark inline-block relative py-1">
              Start This Project
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-sage-dark origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Service 3 */}
      <section id="workflow-engineering" className="min-h-[480px] py-20 bg-bg safe-paddings border-b border-border">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeInSection className="order-2 md:order-1">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-4">03 / Workflow Engineering</h4>
            <h2 className="font-serif font-semibold text-[44px] text-text mb-4 leading-[1.1]">Robust Architecture</h2>
            <p className="font-sans text-[16px] text-text-mid mb-6">
              For complex operations that require custom code, direct API integration, and fault-tolerant architecture. We build systems that don't break at scale.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Python', 'Node.js', 'Webhooks', 'Custom REST API'].map(tech => (
                <span key={tech} className="px-3.5 py-1.5 bg-bg-alt border border-border rounded-full font-mono text-[12px] text-text-mid hover:border-gold hover:text-gold-dark transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Custom API development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Legacy system modernizations</span>
              </li>
            </ul>

            <Link to="/contact?service=workflow" className="group font-sans font-medium text-[15px] text-gold-dark inline-block relative py-1">
              Start This Project
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-dark origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </FadeInSection>
          
          <FadeInSection className="order-1 md:order-2 flex justify-center">
            {/* Using workflow diagram again for now as generic tech visual */}
            <WorkflowDiagram scale={0.7} />
          </FadeInSection>
        </div>
      </section>

      {/* Service 4 */}
      <section id="web-development" className="min-h-[480px] py-20 bg-bg-alt safe-paddings">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeInSection className="flex justify-center">
            <BrowserMockup />
          </FadeInSection>

          <FadeInSection>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-4">04 / Web Development</h4>
            <h2 className="font-serif font-semibold text-[44px] text-text mb-4 leading-[1.1]">High-Converting Sites</h2>
            <p className="font-sans text-[16px] text-text-mid mb-6">
              Lightning-fast React websites designed to position your brand as a premium authority. No templates, just bespoke digital experiences.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['React 18', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                <span key={tech} className="px-3.5 py-1.5 bg-bg-card border border-border rounded-full font-mono text-[12px] text-text-mid hover:border-steel transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Bespoke UI/UX Design</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2"></div>
                <span className="font-sans text-[15px] text-text-mid">Performance Optimized to 100/100</span>
              </li>
            </ul>

            <Link to="/contact?service=web" className="group font-sans font-medium text-[15px] text-steel inline-block relative py-1">
              Start This Project
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-steel origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg border-t border-border safe-paddings">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-serif font-semibold text-[32px] text-center mb-16">How We Work</h2>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[22px] left-8 right-8 h-[1px] border-t border-dashed border-border z-0"></div>
            
            {[
              { num: '01', title: 'Discovery', desc: 'We audit your manual workflows' },
              { num: '02', title: 'Architecture', desc: 'Design the optimal pipeline' },
              { num: '03', title: 'Build', desc: 'Develop and configure APIs' },
              { num: '04', title: 'Test', desc: 'Rigorous edge-case testing' },
              { num: '05', title: 'Deploy', desc: 'Launch and monitor' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4 mb-8 md:mb-0 w-full md:w-[16%]">
                <div className="w-[44px] h-[44px] shrink-0 rounded-full bg-bg-navy text-[#F7F4EE] flex items-center justify-center font-serif font-bold text-[18px]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[18px] mb-1">{step.title}</h3>
                  <p className="font-sans text-[14px] text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
