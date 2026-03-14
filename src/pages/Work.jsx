import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AgentIllustration from '../illustrations/AgentIllustration'
import WorkflowIllustration from '../illustrations/WorkflowIllustration'
import AutomationIllustration from '../illustrations/AutomationIllustration'
import WebDevIllustration from '../illustrations/WebDevIllustration'

const TABS = ['All', 'AI Agent', 'Workflow Automation', 'AI Automation', 'Web Development']

const CASES = [
  {
    id: 1,
    category: 'AI Agent',
    title: 'Lead Qualification Agent for a B2B SaaS',
    desc: 'Built an autonomous AI agent that qualifies inbound leads, scores them against ICP criteria, pushes qualified leads to CRM, and auto-responds to unqualified ones.',
    stats: ['4h → 30s response time', '100% CRM sync rate'],
    bg: 'bg-accent-secondary/15',
    tagColor: 'text-accent-secondary',
    Illustration: AgentIllustration,
    size: 'lg' // large spanning 2 cols
  },
  {
    id: 2,
    category: 'Workflow Automation',
    title: 'Full E-commerce Automation Pipeline',
    desc: 'End-to-end automation: inventory sync, order processing, multi-channel notifications, and return handling across Shopify, Stripe, and custom APIs.',
    stats: ['6 tools integrated', 'Zero manual entry'],
    bg: 'bg-accent-yellow/15',
    tagColor: 'text-yellow-800',
    Illustration: WorkflowIllustration,
    size: 'sm'
  },
  {
    id: 3,
    category: 'AI Automation',
    title: 'AI Content Engine',
    desc: 'One input generates blog posts, social media content, and email newsletters. Fully automated content pipeline powered by GPT-4 and custom prompts.',
    stats: ['10x content output', 'Fully automated'],
    bg: 'bg-accent-primary/15',
    tagColor: 'text-accent-primary',
    Illustration: AutomationIllustration,
    size: 'sm'
  },
  {
    id: 4,
    category: 'Web Development',
    title: 'Custom Agency Website — Next.js Build',
    desc: 'Designed and developed a premium agency website with editorial typography, scroll animations, and sub-2s load times. Deployed on Vercel with perfect Lighthouse scores.',
    stats: ['98 Lighthouse score', '0.8s LCP'],
    bg: 'bg-accent-lavender/15',
    tagColor: 'text-accent-lavender',
    Illustration: WebDevIllustration,
    size: 'full' // full-width
  }
]

export default function Work() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredCases = CASES.filter(c => activeTab === 'All' || c.category === activeTab)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
      
      {/* PAGE HERO */}
      <section className="bg-bg-primary pt-24 pb-16 text-center px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <span className="font-mono text-[13px] font-medium text-text-muted mb-4 tracking-wider uppercase inline-block">02 / Portfolio</span>
          <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] tracking-tight mb-16">
            Case Studies
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TABS.map(tab => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-5 py-2.5 rounded-full text-[14px] font-body font-medium transition-colors ${isActive ? 'text-white' : 'text-text-secondary hover:bg-border/50 bg-bg-secondary'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {tab}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* CASES GRID */}
      <section className="py-16 px-6 md:px-10 bg-bg-primary min-h-[50vh]">
        <div className="max-w-[1100px] mx-auto">
          
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredCases.map(item => {
                
                // Determine layout classes based on item.size
                let colSpan = "col-span-1"
                if (item.size === 'lg') colSpan = "md:col-span-2"
                if (item.size === 'full') colSpan = "md:col-span-2"
                
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={item.id}
                    className={`group bg-white rounded-[16px] border border-border overflow-hidden flex flex-col ${colSpan} hover:shadow-card hover:-translate-y-1 transition-all duration-300`}
                  >
                    {/* Top Vis */}
                    <div className={`w-full relative overflow-hidden flex items-center justify-center ${item.bg} ${item.size === 'full' ? 'h-[360px]' : 'h-[280px]'}`}>
                      <div className={`w-full ${item.size === 'full' ? 'max-w-[500px]' : 'max-w-[320px]'} transition-transform duration-500 group-hover:scale-105`}>
                        <item.Illustration />
                      </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <span className={`font-mono text-[11px] font-bold uppercase tracking-wider bg-bg-secondary px-3 py-1.5 rounded-full w-fit mb-4 ${item.tagColor}`}>
                        {item.category}
                      </span>
                      
                      <h3 className="font-display font-semibold text-[24px] text-text-primary mb-3 leading-tight tracking-tight">
                        {item.title}
                      </h3>
                      
                      <p className="font-body text-[15px] leading-[1.6] text-text-secondary mb-8 line-clamp-2 pr-4 flex-grow">
                        {item.desc}
                      </p>
                      
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-border">
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                          {item.stats.map(stat => (
                            <div key={stat} className="flex items-center gap-1.5 text-accent-primary font-mono text-[12px] font-medium tracking-wide">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                              {stat}
                            </div>
                          ))}
                        </div>
                        
                        <Link to="/contact" className="font-body text-[14px] font-medium text-text-primary group-hover:text-accent-primary transition-colors flex items-center gap-1">
                          Read More <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-bg-secondary py-32 px-6 md:px-10 border-t border-border text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-display font-semibold text-[clamp(32px,5vw,48px)] leading-[1.1] mb-6 tracking-tight">
            Want Results Like These?
          </h2>
          <p className="text-[18px] text-text-secondary font-body mb-10">
            Let's build your next automation success story.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-accent-primary text-white rounded-full text-[15px] font-semibold hover:-translate-y-1 hover:shadow-card transition-all font-body inline-block">
            Start a Project &rarr;
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
