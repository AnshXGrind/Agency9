import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FloatingOrbs from '../components/FloatingOrbs'
import TiltCard from '../components/TiltCard'

function TypewriterTerminal() {
  const lines = [
    { text: "> initializing launcify...", pause: 600 },
    { text: "> loading saksham.brain...   ████████ 100%", pause: 400 },
    { text: "> loading yadyansh.leads...  ████████ 100%", pause: 400 },
    { text: "> all systems online.", pause: 300 },
    { text: "> ready to build something great. ", pause: 0 }
  ]
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const line = lines[currentLineIndex]
    
    if (currentCharIndex < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(c => c + 1)
      }, 30) // Typing speed
      return () => clearTimeout(timer)
    } else {
      // Line complete, wait for pause before next line
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line.text])
        setCurrentLineIndex(i => i + 1)
        setCurrentCharIndex(0)
      }, line.pause)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, currentCharIndex])

  return (
    <div className="w-full max-w-[480px] mx-auto bg-bg-navy rounded-[12px] overflow-hidden shadow-2xl relative text-left">
      <div className="h-8 bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)] flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-sage"></div>
          <div className="w-3 h-3 rounded-full bg-gold"></div>
          <div className="w-3 h-3 rounded-full bg-terra"></div>
        </div>
        <span className="font-mono text-[11px] text-white/50">terminal</span>
      </div>
      <div className="p-6 font-mono text-[14px] text-sage leading-[1.6]">
        {displayedLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {currentLineIndex < lines.length && (
          <div>
            {lines[currentLineIndex].text.substring(0, currentCharIndex)}
            <span className="animate-[pulse_1s_infinite] bg-sage w-2 h-4 inline-block align-middle ml-1"></span>
          </div>
        )}
        {currentLineIndex >= lines.length && (
          <div>
            <span className="animate-[pulse_1s_infinite] bg-sage w-2 h-4 inline-block align-middle"></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">
      {/* Hero */}
      <section className="pt-24 pb-16 safe-paddings relative overflow-hidden bg-bg">
        <FloatingOrbs section="about" />
        <div className="absolute top-10 left-1/2 -translate-x-[20%] font-serif font-bold text-[240px] text-border opacity-20 pointer-events-none select-none leading-none z-0">
          04
        </div>
        
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h1 className="font-serif font-bold text-[clamp(48px,8vw,80px)] text-bg-navy leading-none mb-16 text-center">
            The Builders
          </h1>

          <div className="max-w-[680px] mx-auto text-center mb-24">
            <h2 className="font-serif italic font-semibold text-[26px] text-bg-navy mb-8">
              "We started <em className="text-sage-dark">Launcify</em> because businesses deserve systems, not just software."
            </h2>
            <p className="font-sans text-[16px] text-text-mid leading-[1.8] mb-12">
              Most agencies build tools that create more work for you. We build systems that remove work from your plate. We are a small, highly technical team focused on solving complex operational challenges using modern AI and automation frameworks. No bloat, no endless meetings. Just results.
            </p>
            {/* Squiggly divider */}
            <div className="flex justify-center text-border">
              <svg width="100" height="12" viewBox="0 0 100 12" fill="none">
                <path d="M0 6 Q 12.5 0 25 6 T 50 6 T 75 6 T 100 6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Cofounders */}
      <section className="safe-paddings mb-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <TiltCard className="bg-bg-card border border-border rounded-[24px] p-10 relative overflow-hidden">
             {/* Abstract Top Deco */}
             <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.08]" style={{ transform: 'rotateX(50deg) rotateZ(-30deg)' }}>
                <div className="w-full h-full border-[4px] border-bg-navy rounded-xl"></div>
                <div className="w-2/3 h-2/3 border-[4px] border-bg-navy rounded-xl absolute top-4 left-4"></div>
             </div>

             <h2 className="font-serif font-bold text-[32px] text-bg-navy mb-1 relative z-10">Saksham Garg</h2>
             <div className="font-mono text-[12px] uppercase text-sage-dark tracking-wider mb-6 relative z-10">Technical Builder</div>
             
             <blockquote className="font-serif italic text-[18px] text-text-mid mb-6 relative z-10 border-l-[2px] border-sage pl-4">
               "If it can be automated, I've already built it twice."
             </blockquote>
             
             <p className="font-sans text-[15px] text-text-mid leading-[1.7] mb-8 relative z-10">
               Saksham architects the data pipelines and AI systems that power our solutions. With deep expertise in backend infrastructure and LLM integrations, he ensures every system is robust, secure, and scalable.
             </p>

             <div className="flex flex-wrap gap-2 mb-10 relative z-10">
               {['n8n', 'LangChain', 'Next.js', 'Python', 'OpenAI', 'Webhooks', 'REST APIs'].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-bg-alt border border-border rounded-full font-mono text-[12px] text-text-mid">
                   {skill}
                 </span>
               ))}
             </div>

             <a href="#" title="LinkedIn coming soon" className="inline-block px-6 py-2 border border-border rounded-full font-sans text-[14px] text-text hover:border-bg-navy transition-colors relative z-10">
               LinkedIn Profile &rarr;
             </a>
          </TiltCard>

          <TiltCard className="bg-bg-card border border-border rounded-[24px] p-10 relative overflow-hidden">
             {/* Abstract Top Deco */}
             <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.08] flex items-end gap-2 p-4" style={{ transform: 'rotateX(20deg) rotateZ(10deg)' }}>
                <div className="w-6 h-12 bg-bg-navy rounded-sm"></div>
                <div className="w-6 h-20 bg-bg-navy rounded-sm"></div>
                <div className="w-6 h-16 bg-bg-navy rounded-sm"></div>
                <div className="w-6 h-24 bg-bg-navy rounded-sm"></div>
             </div>

             <h2 className="font-serif font-bold text-[32px] text-bg-navy mb-1 relative z-10">Yadyansh</h2>
             <div className="font-mono text-[12px] uppercase text-gold-dark tracking-wider mb-6 relative z-10">Growth Lead</div>
             
             <blockquote className="font-serif italic text-[18px] text-text-mid mb-6 relative z-10 border-l-[2px] border-gold pl-4">
               "If they haven't heard of you, they can't buy from you."
             </blockquote>
             
             <p className="font-sans text-[15px] text-text-mid leading-[1.7] mb-8 relative z-10">
               Yadyansh bridges the gap between raw technology and commercial success. He ensures that every automation built serves a direct business goal: increasing revenue, capturing more leads, or reducing operational overhead.
             </p>

             <div className="flex flex-wrap gap-2 mb-10 relative z-10">
               {['Meta Ads', 'Google Ads', 'Funnels', 'CRM', 'Lead Gen', 'Content'].map(skill => (
                 <span key={skill} className="px-3 py-1 bg-bg-alt border border-border rounded-full font-mono text-[12px] text-text-mid">
                   {skill}
                 </span>
               ))}
             </div>

             <a href="#" title="LinkedIn coming soon" className="inline-block px-6 py-2 border border-border rounded-full font-sans text-[14px] text-text hover:border-bg-navy transition-colors relative z-10">
               LinkedIn Profile &rarr;
             </a>
          </TiltCard>

        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-alt py-24 safe-paddings mb-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-border-strong mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
              <line x1="12" y1="2" x2="12" y2="4"></line>
            </svg>
            <h3 className="font-serif font-semibold text-[20px] text-text mb-3">Speed over Perfection</h3>
            <p className="font-sans text-[14px] text-text-mid">
              We ship prototypes fast to get real-world feedback, then iterate rapidly. A working system today beats a perfect system next month.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-border-strong mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <h3 className="font-serif font-semibold text-[20px] text-text mb-3">Systems over Hustle</h3>
            <p className="font-sans text-[14px] text-text-mid">
              Brute force doesn't scale. We believe in building resilient infrastructure that handles the heavy lifting so you don't have to.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-border-strong mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 className="font-serif font-semibold text-[20px] text-text mb-3">Clarity over Complexity</h3>
            <p className="font-sans text-[14px] text-text-mid">
              We don't hide behind technical jargon. If a simple zap solves the problem, we use it. No over-engineering.
            </p>
          </div>

        </div>
      </section>

      {/* Easter Egg Terminal */}
      <section className="safe-paddings pt-12 text-center">
        <TypewriterTerminal />
      </section>

    </motion.div>
  )
}
