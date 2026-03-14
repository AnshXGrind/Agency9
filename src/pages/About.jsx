import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TeamIllustration from '../illustrations/TeamIllustration'

function TerminalEmulator() {
  const [lines, setLines] = useState([])
  const fullText = [
    { text: "initializing Launcify...", delay: 500, type: 'command' },
    { text: "loading saksham.brain... ████████ 100%", delay: 1500, type: 'process' },
    { text: "loading yadyansh.leads... ████████ 100%", delay: 2500, type: 'process' },
    { text: "all systems ready.", delay: 3500, type: 'system' },
    { text: "let's build something great.", delay: 4500, type: 'output' }
  ]

  useEffect(() => {
    let timeoutIds = []
    fullText.forEach(({ text, delay, type }, index) => {
      const id = setTimeout(() => {
        setLines(prev => [...prev, { text, type, id: index }])
      }, delay)
      timeoutIds.push(id)
    })
    return () => timeoutIds.forEach(clearTimeout)
  }, [])

  return (
    <div className="w-full max-w-[480px] mx-auto bg-[#1C1917] rounded-xl overflow-hidden shadow-card border border-white/10 text-left">
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#2A2624]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
      </div>
      <div className="p-6 font-mono text-[13px] text-white/90 leading-relaxed min-h-[180px]">
        {lines.map((line) => (
          <div key={line.id} className="flex gap-4 mb-2">
            <span className="text-accent-secondary shrink-0">{'>'}</span>
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={line.type === 'output' ? 'text-accent-primary' : ''}
            >
              {line.text}
            </motion.span>
          </div>
        ))}
        {lines.length === fullText.length && (
          <motion.div 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-4 bg-white inline-block ml-4 translate-y-1"
          />
        )}
      </div>
    </div>
  )
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const items = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut" } }
  }

  return (
    <motion.div initial="hidden" animate="show" variants={containerVariants} className="w-full">
      
      {/* PAGE HERO */}
      <section className="bg-bg-primary pt-24 pb-16 text-center px-6 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <span className="font-mono text-[13px] font-medium text-text-muted mb-4 tracking-wider uppercase inline-block">03 / About</span>
          <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] tracking-tight mb-8">
            The Builders Behind <em className="italic font-display text-accent-primary not-italic">Launcify</em>
          </h1>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-bg-primary pt-8 pb-32 px-6 md:px-10 border-b border-border text-center">
        <motion.div variants={items} className="max-w-[720px] mx-auto">
          <h2 className="font-display text-[clamp(28px,4vw,36px)] leading-[1.3] text-accent-primary italic font-semibold mb-8 tracking-tight">
            "We started Launcify because businesses deserve systems, not just software."
          </h2>
          <p className="font-body text-[18px] md:text-[20px] leading-[1.8] text-text-secondary mb-12">
            We were tired of watching businesses waste hours on tasks that machines could handle in seconds. We build automation systems that actually work — invisible infrastructure that powers your growth. No fluff. No dashboards nobody opens. Just systems that run, save time, and make money.
          </p>
          <svg className="w-48 h-12 mx-auto" viewBox="0 0 200 20" fill="none">
            <path d="M 0 10 Q 50 20, 100 10 T 200 10" stroke="var(--border-strong)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-bg-secondary py-32 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-24 px-4 w-full">
            <TeamIllustration className="w-full max-w-[800px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Saksham */}
            <motion.div variants={items} className="bg-white border border-border rounded-[20px] p-8 md:p-10 relative shadow-sm overflow-hidden group hover:shadow-card transition-all duration-300">
              <svg className="absolute top-0 right-0 w-32 h-32 text-border opacity-30 transform translate-x-8 -translate-y-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 50h80M50 10v80M30 30h40v40H30zM20 20l10 10M80 80l-10-10M20 80l10-10M80 20l-10 10"/>
              </svg>
              
              <h3 className="font-display font-semibold text-[28px] text-text-primary mb-2">Saksham Garg</h3>
              <p className="font-mono text-[13px] font-bold tracking-wider text-accent-primary uppercase mb-6">Technical Builder</p>
              
              <p className="font-body text-[16px] italic text-text-primary leading-relaxed border-l-[3px] border-accent-primary pl-5 mb-8 bg-bg-secondary/50 py-3 pr-4 rounded-r-lg">
                "If it can be automated, I've already built it twice."
              </p>
              
              <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-8 h-[120px] sm:h-[100px] md:h-[140px] lg:h-[100px]">
                Full-stack developer and AI systems architect. Builds n8n workflows, AI agents, LangChain pipelines, and custom web platforms. Obsessed with clean architecture and systems that don't break at 3 AM.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['n8n', 'LangChain', 'Next.js', 'Python', 'OpenAI', 'Webhooks'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-secondary border border-border text-text-secondary font-mono text-[11px] font-medium rounded-full uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-white text-text-primary text-[14px] font-body font-medium hover:bg-bg-secondary transition-colors">
                LinkedIn &rarr;
              </a>
            </motion.div>

            {/* Yadyansh */}
            <motion.div variants={items} className="bg-white border border-border rounded-[20px] p-8 md:p-10 relative shadow-sm overflow-hidden group hover:shadow-card transition-all duration-300">
               <svg className="absolute top-0 right-0 w-32 h-32 text-accent-yellow opacity-10 transform translate-x-8 -translate-y-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
                <path d="M10 90l30-40 20 20 30-50M90 20v30M90 20H60"/>
              </svg>

              <h3 className="font-display font-semibold text-[28px] text-text-primary mb-2">Yadyansh</h3>
              <p className="font-mono text-[13px] font-bold tracking-wider text-accent-primary uppercase mb-6">Growth Lead</p>
              
              <p className="font-body text-[16px] italic text-text-primary leading-relaxed border-l-[3px] border-accent-secondary pl-5 mb-8 bg-bg-secondary/50 py-3 pr-4 rounded-r-lg">
                "If they haven't heard of you, they can't buy from you."
              </p>
              
              <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-8 h-[120px] sm:h-[100px] md:h-[140px] lg:h-[100px]">
                Customer acquisition strategist and marketing architect. Runs campaigns, builds funnels, manages client relationships, and ensures every client becomes a success story worth telling.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Meta Ads', 'Google Ads', 'Funnels', 'CRM', 'Lead Gen', 'Content'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-bg-secondary border border-border text-text-secondary font-mono text-[11px] font-medium rounded-full uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-white text-text-primary text-[14px] font-body font-medium hover:bg-bg-secondary transition-colors">
                LinkedIn &rarr;
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bg-primary py-32 px-6 md:px-10 border-b border-border">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-20">
            <span className="font-mono text-[13px] font-medium text-text-muted mb-4 tracking-wider uppercase inline-block">What We Believe</span>
            <h2 className="font-display font-semibold text-[clamp(40px,5vw,56px)] leading-[1.1] tracking-tight">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { t: 'Speed Over Perfection', d: 'Ship fast. Iterate faster. Perfection is the enemy of deployed.', ic: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
              { t: 'Systems Over Hustle', d: 'Build once, run forever. We replace grind with infrastructure.', ic: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM4 6v4h16V6H4zm0 6v6h16v-6H4z' },
              { t: 'Clarity Over Complexity', d: 'If you can\'t explain it simply, you don\'t understand it well enough.', ic: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
            ].map((v, i) => (
              <motion.div variants={items} key={i} className="flex flex-col items-start pr-6">
                <div className="w-14 h-14 bg-bg-secondary border border-border flex items-center justify-center rounded-[12px] text-accent-primary mb-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={v.ic}/></svg>
                </div>
                <h4 className="font-display font-semibold text-[24px] tracking-tight text-text-primary mb-4">{v.t}</h4>
                <p className="font-body text-[16px] text-text-secondary leading-[1.8]">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINAL EASTER EGG */}
      <section className="bg-text-primary py-32 px-6 md:px-10 overflow-hidden text-center">
        <div className="max-w-[1100px] mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center">
          <TerminalEmulator />
        </div>
      </section>

    </motion.div>
  )
}
