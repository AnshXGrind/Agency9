import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene'
import FloatingOrbs from '../components/FloatingOrbs'
import TiltCard from '../components/TiltCard'
import WorkflowDiagram from '../components/WorkflowDiagram'
import StatsCounter from '../components/StatsCounter'

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-10 pb-20 overflow-hidden">
        <FloatingOrbs section="hero" />
        <div className="max-w-[1100px] mx-auto w-full px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center relative">
          
          <div className="relative z-10">
            {/* Ghost Numeral */}
            <div className="absolute -top-10 -right-4 font-serif font-bold text-[200px] text-border opacity-20 pointer-events-none select-none leading-none z-[-1]">
              01
            </div>

            <motion.div custom={0} initial="hidden" animate="visible" variants={staggerVariants} className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-bg-alt border border-border font-serif italic text-[14px] text-text-mid rounded-full">
                AI Automation Agency
              </span>
            </motion.div>

            <motion.h1 custom={1} initial="hidden" animate="visible" variants={staggerVariants} className="font-serif font-bold text-[clamp(52px,9vw,104px)] leading-[1.0] tracking-[-0.02em] text-text mb-6">
              We Build the AI That<br />
              <span className="text-bg-navy relative whitespace-nowrap">
                Works While You <span className="relative">
                  Sleep.
                  <svg className="absolute left-0 -bottom-2 w-full h-auto text-sage" viewBox="0 0 30 6" preserveAspectRatio="none">
                    <path d="M0 4 Q7.5 0 15 4 Q22.5 8 30 4" fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
                  </svg>
                </span>
              </span>
            </motion.h1>

            <motion.p custom={2} initial="hidden" animate="visible" variants={staggerVariants} className="font-sans text-[16px] text-text-mid leading-[1.75] mb-10 max-w-lg">
              Automations. Agents. Workflows. Websites. Built by <em className="text-sage-dark">Launcify</em>.
            </motion.p>

            <motion.div custom={3} initial="hidden" animate="visible" variants={staggerVariants} className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="px-6 py-3 bg-terra text-white font-sans font-medium text-[14px] rounded-full hover:bg-terra-dark hover:-translate-y-[2px] hover:shadow-warm transition-all">
                Start a Project &rarr;
              </Link>
              <Link to="/work" className="px-6 py-3 bg-transparent border-[1.5px] border-bg-navy text-bg-navy font-sans font-medium text-[14px] rounded-full hover:bg-bg-alt transition-colors">
                See Our Work
              </Link>
            </motion.div>

            <motion.div custom={4} initial="hidden" animate="visible" variants={staggerVariants} className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[13px] text-text-muted">
              <div className="flex items-center gap-1.5">
                <span className="text-sage">✓</span> 50+ Automations
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sage">✓</span> 8 Countries
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sage">✓</span> 100% Retention
              </div>
            </motion.div>
          </div>

          <div className="relative w-full h-[320px] md:h-full min-h-[400px]">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-bg-alt border-y border-border py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_40s_linear_infinite] flex items-center font-mono text-[13px] text-text-muted uppercase tracking-wider hover:[animation-play-state:paused]">
          {Array(4).fill("AI AUTOMATIONS <span class='text-gold px-4'>·</span> WORKFLOW ENGINEERING <span class='text-gold px-4'>·</span> AI AGENTS <span class='text-gold px-4'>·</span> N8N <span class='text-gold px-4'>·</span> MAKE <span class='text-gold px-4'>·</span> ZAPIER <span class='text-gold px-4'>·</span> CUSTOM GPT AGENTS <span class='text-gold px-4'>·</span> API INTEGRATIONS <span class='text-gold px-4'>·</span> CRM AUTOMATIONS <span class='text-gold px-4'>·</span> WEBSITE DEVELOPMENT <span class='text-gold px-4'>·</span> ").map((str, i) => (
             <div key={i} dangerouslySetInnerHTML={{__html: str}} className="flex items-center" />
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 safe-paddings">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-16">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-4">What We Build</h4>
            <h2 className="font-serif font-semibold text-[clamp(28px,4vw,48px)] text-text mb-4">Four Capabilities. One Agency.</h2>
            <p className="font-sans text-[16px] text-text-mid">No retainers. No bloat. Just systems that work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <TiltCard className="bg-bg-card border border-border rounded-[20px] p-8 group hover:border-sage/40 transition-colors">
              <div className="w-[52px] h-[52px] rounded-full bg-bg-navy flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                 <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="font-serif font-semibold text-[22px] text-text mb-2">AI Automations</h3>
              <p className="font-sans text-[15px] text-text-mid line-clamp-2 mb-8">
                Eliminate manual data entry. We connect your tools to work seamlessly behind the scenes.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-mono text-[12px] text-text-muted">n8n · Make · Zapier</span>
                <span className="font-sans font-medium text-[13px] text-sage-dark flex items-center gap-1">
                  Explore <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </TiltCard>

            <TiltCard className="bg-bg-card border border-border rounded-[20px] p-8 group hover:border-sage/40 transition-colors">
              <div className="w-[52px] h-[52px] rounded-full bg-sage flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                 <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="font-serif font-semibold text-[22px] text-text mb-2">AI Agents</h3>
              <p className="font-sans text-[15px] text-text-mid line-clamp-2 mb-8">
                Custom GPT agents trained on your business data for customer support or internal research.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-mono text-[12px] text-text-muted">OpenAI · LangChain</span>
                <span className="font-sans font-medium text-[13px] text-sage-dark flex items-center gap-1">
                  Explore <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </TiltCard>

            <TiltCard className="bg-bg-card border border-border rounded-[20px] p-8 group hover:border-sage/40 transition-colors">
              <div className="w-[52px] h-[52px] rounded-full bg-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                 <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="font-serif font-semibold text-[22px] text-text mb-2">Workflow Engineering</h3>
              <p className="font-sans text-[15px] text-text-mid line-clamp-2 mb-8">
                End-to-end system architecture. We build robust, error-proof operational pipelines.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-mono text-[12px] text-text-muted">APIs · Webhooks</span>
                <span className="font-sans font-medium text-[13px] text-sage-dark flex items-center gap-1">
                  Explore <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </TiltCard>

            <TiltCard className="bg-bg-card border border-border rounded-[20px] p-8 group hover:border-sage/40 transition-colors">
              <div className="w-[52px] h-[52px] rounded-full bg-steel flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                 <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="font-serif font-semibold text-[22px] text-text mb-2">Web Development</h3>
              <p className="font-sans text-[15px] text-text-mid line-clamp-2 mb-8">
                High-converting, impossibly fast React websites that position your brand as an authority.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-mono text-[12px] text-text-muted">React · Next.js</span>
                <span className="font-sans font-medium text-[13px] text-sage-dark flex items-center gap-1">
                  Explore <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Workflow Showcase */}
      <section className="py-24 bg-bg overflow-hidden relative">
        <div className="max-w-[1100px] mx-auto text-center mb-16 relative z-10 px-6">
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-text-muted mb-4">Real Systems</h4>
          <h2 className="font-serif font-semibold text-[clamp(28px,4vw,48px)] text-text">Real Workflows. Real Results.</h2>
        </div>
        
        <div className="w-full max-w-[900px] mx-auto mb-12 flex justify-center px-4">
          <WorkflowDiagram scale={window.innerWidth < 768 ? 0.65 : 1} />
        </div>

        <div className="flex justify-center gap-4 px-6 relative z-10 flex-wrap">
          <div className="px-4 py-2 bg-bg-navy rounded-full font-mono text-[12px] text-white">
            ⚡ Avg build time: 7 days
          </div>
          <div className="px-4 py-2 bg-bg-navy rounded-full font-mono text-[12px] text-white">
            ✓ 0 downtime since launch
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* Testimonials */}
      <section className="py-24 safe-paddings relative">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-serif font-semibold text-[clamp(28px,4vw,48px)] text-text mb-12">What Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TiltCard className="bg-bg-card border border-border rounded-[20px] p-9 relative">
              <div className="absolute top-4 left-6 font-serif font-bold text-[96px] text-border/40 leading-none">"</div>
              <div className="relative z-10">
                <div className="border-l-[2px] border-sage pl-6 mb-8">
                  <p className="font-serif italic text-[18px] text-text leading-[1.6]">
                    Launcify didn’t just build us an automation; they fundamentally changed how our operations team works. We’ve saved over 40 hours a week since launch.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-bg-alt flex items-center justify-center font-serif italic text-[16px] text-text">
                    JD
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] text-text">John Davis</h4>
                    <p className="font-sans text-[13px] text-text-muted">Operations Director, TechFlow</p>
                  </div>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="bg-bg-card border border-border rounded-[20px] p-9 relative">
              <div className="absolute top-4 left-6 font-serif font-bold text-[96px] text-border/40 leading-none">"</div>
              <div className="relative z-10">
                <div className="border-l-[2px] border-sage pl-6 mb-8">
                  <p className="font-serif italic text-[18px] text-text leading-[1.6]">
                    The AI agent Saksham built for our customer support handles 70% of tier 1 tickets automatically. It’s fast, accurate, and completely transformed our response times.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-[44px] h-[44px] rounded-full bg-bg-alt flex items-center justify-center font-serif italic text-[16px] text-text">
                    AR
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] text-text">Amanda Rossi</h4>
                    <p className="font-sans text-[13px] text-text-muted">Founder, Elevate E-com</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Cofounder Teaser */}
      <section className="py-24 bg-bg-navy safe-paddings">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard className="bg-white/[0.06] border border-white/[0.12] rounded-[20px] p-8">
            <h3 className="font-serif italic font-semibold text-[28px] text-[#F7F4EE] mb-1">Saksham Garg</h3>
            <p className="font-mono text-[12px] uppercase text-gold mb-6">Technical Builder</p>
            <p className="font-sans text-[15px] text-[#F7F4EE]/70 mb-8">
              Architecting complex n8n workflows and custom language models. 
              The technical mind behind 50+ successful deployments.
            </p>
            <Link to="/about" className="inline-block px-4 py-2 border border-white/20 rounded-full text-white text-[13px] hover:border-gold transition-colors">
              Read Bio &rarr;
            </Link>
          </TiltCard>

          <TiltCard className="bg-white/[0.06] border border-white/[0.12] rounded-[20px] p-8">
            <h3 className="font-serif italic font-semibold text-[28px] text-[#F7F4EE] mb-1">Yadyansh</h3>
            <p className="font-mono text-[12px] uppercase text-gold mb-6">Growth Lead</p>
            <p className="font-sans text-[15px] text-[#F7F4EE]/70 mb-8">
              Connecting automation capabilities to real business outcomes. 
              Ensuring every system built drives measurable ROI.
            </p>
            <Link to="/about" className="inline-block px-4 py-2 border border-white/20 rounded-full text-white text-[13px] hover:border-gold transition-colors">
              Read Bio &rarr;
            </Link>
          </TiltCard>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-bg-navy relative overflow-hidden text-center safe-paddings">
        <FloatingOrbs section="navy" />
        <div className="relative z-10 max-w-[600px] mx-auto">
          <h2 className="font-serif font-bold text-[clamp(36px,6vw,56px)] text-[#F7F4EE] mb-6">Ready to automate everything?</h2>
          <p className="font-sans text-[16px] text-[#F7F4EE]/60 mb-10">Stop doing repetitive work manually. Let's build a system that scales.</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-terra text-white font-sans font-medium text-[16px] rounded-full hover:bg-terra-dark hover:-translate-y-[2px] hover:shadow-warm transition-all">
            Book a Free Call &rarr;
          </Link>
        </div>
      </section>

    </motion.div>
  )
}
