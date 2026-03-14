import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkflowDiagram from '../components/WorkflowDiagram'
import TiltCard from '../components/TiltCard'

const categories = ['All', 'AI Automation', 'AI Agent', 'Website']

const projects = [
  {
    id: 1,
    title: 'Lead Intake Pipeline',
    category: 'AI Automation',
    desc: 'End-to-end webhook based pipeline sorting leads, qualifying via GPT-4, and updating Hubspot.',
    metric: '4h → 30 sec response time',
    size: 'large', // spanning 2 col
    bgHex: '#EEE9DF'
  },
  {
    id: 2,
    title: 'Knowledge Base Agent',
    category: 'AI Agent',
    desc: 'Vector DB driven chatbot exclusively trained on 5 years of PDF manuals.',
    metric: 'Handles 70% Tier-1 tickets',
    size: 'small',
    bgHex: '#E8F0E4'
  },
  {
    id: 3,
    title: 'LawMind Landing Page',
    category: 'Website',
    desc: 'High-end React site focused on conversion and trust.',
    metric: '98/100 Lighthouse score',
    size: 'small',
    bgHex: '#E8EDF2'
  },
  {
    id: 4,
    title: 'Multi-channel Content Sync',
    category: 'AI Automation',
    desc: 'Takes one long-form video, slices and formats content using AI, distributes to social channels.',
    metric: '+300% content throughput',
    size: 'full',
    bgHex: '#EEE9DF'
  }
]

export default function Work() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pb-24">
      {/* Hero */}
      <section className="pt-24 pb-16 safe-paddings relative overflow-hidden bg-bg">
        <div className="absolute -top-6 -right-10 font-serif font-bold text-[240px] text-border opacity-20 pointer-events-none select-none leading-none z-0">
          03
        </div>
        <div className="max-w-[1100px] mx-auto relative z-10 text-center">
          <h1 className="font-serif font-bold text-[clamp(48px,8vw,80px)] text-bg-navy leading-none mb-6">
            Case Studies
          </h1>
          <p className="font-sans text-[18px] text-text-mid max-w-[600px] mx-auto">
            Real systems we've built to solve complex operational challenges.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="safe-paddings mb-12">
        <div className="max-w-[1100px] mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-5 py-2 rounded-full font-sans font-medium text-[14px] transition-colors z-10 ${
                activeTab === cat ? 'text-white' : 'text-text-mid hover:bg-bg-alt'
              }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-bg-navy rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="safe-paddings">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => {
              const spanClass = project.size === 'large' ? 'md:col-span-2 aspect-[2/1] md:aspect-[2.5/1]' 
                              : project.size === 'full' ? 'md:col-span-2 aspect-[2/1] md:aspect-[3/1]'
                              : 'col-span-1 aspect-[4/3]'

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className={`block ${spanClass}`}
                >
                  <TiltCard className="w-full h-full bg-bg-card border border-border rounded-[20px] overflow-hidden flex flex-col group transition-shadow hover:shadow-3d">
                    {/* Visual Upper Panel */}
                    <div 
                      className="relative h-[45%] w-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ backgroundColor: project.bgHex }}
                    >
                      {project.category === 'AI Automation' && (
                        <div className="opacity-80 scale-50 md:scale-75 pointer-events-none">
                          <WorkflowDiagram scale={1} />
                        </div>
                      )}
                      {project.category === 'AI Agent' && (
                        <div className="font-mono text-[24px] text-sage-dark pointer-events-none opacity-40">
                          {`{ "agent": "online" }`}
                        </div>
                      )}
                      {project.category === 'Website' && (
                        <div className="w-[60%] h-[60%] bg-white rounded shadow-sm border border-border flex flex-col pointer-events-none">
                          <div className="h-4 border-b border-border flex gap-1 px-2 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-steel opacity-50"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-steel opacity-50"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-steel opacity-50"></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Lower Panel */}
                    <div className="p-7 md:p-8 flex-grow flex flex-col">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-bg-alt rounded-full font-mono text-[11px] uppercase tracking-wider text-text-muted">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-serif font-semibold text-[22px] md:text-[24px] text-text mb-2">
                        {project.title}
                      </h3>
                      <p className="font-sans text-[14px] md:text-[15px] text-text-mid mb-auto line-clamp-2">
                        {project.desc}
                      </p>
                      <div className="mt-6 flex justify-between items-end border-t border-border pt-4">
                        <div className="font-mono text-[12px] text-sage-dark font-medium max-w-[70%]">
                          {project.metric}
                        </div>
                        <div className="font-sans font-medium text-[13px] text-text-muted group-hover:text-bg-navy transition-colors flex items-center gap-1">
                          Read More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  )
}
