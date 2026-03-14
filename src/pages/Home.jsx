import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroIllustration from '../illustrations/HeroIllustration'
import MarqueeStrip from '../components/MarqueeStrip'
import StatsCounter from '../components/StatsCounter'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  }

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-24 overflow-hidden">
        <div className="max-w-[1100px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex px-4 py-1.5 rounded-full border border-border bg-bg-secondary mb-8 shadow-subtle">
              <span className="font-mono text-[12px] font-medium tracking-wide uppercase text-accent-primary">AI Automation Agency</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-display font-bold text-[clamp(48px,8vw,96px)] leading-[1.05] tracking-tight mb-6">
              We Build the <span className="relative inline-block">
                AI
                {/* SVG Underline */}
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="var(--accent-primary)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> That Works While You Sleep.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[18px] md:text-[20px] text-text-secondary leading-relaxed mb-10 max-w-[500px]">
              Automations. Agents. Workflows. Websites.<br/>Built by <em className="font-display italic text-accent-primary text-[22px] not-italic">Launcify</em>.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/contact" className="px-8 py-4 bg-accent-primary text-white rounded-full text-[15px] font-semibold hover:bg-orange-600 transition-all font-body hover:-translate-y-[1px] shadow-subtle hover:shadow-card active:translate-y-[1px]">
                Start a Project &rarr;
              </Link>
              <Link to="/work" className="px-8 py-4 bg-transparent border border-border text-text-primary rounded-full text-[15px] font-medium hover:bg-bg-secondary transition-all font-body">
                See Our Work
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 md:gap-8 pt-6 border-t border-border w-full max-w-[400px]">
              {["50+ Automations", "8 Countries", "100% Retention"].map((trust, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-accent-secondary text-[16px] font-bold">✓</span>
                  <span className="font-body text-[13px] font-medium text-text-secondary">{trust}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative flex justify-center mt-12 md:mt-0"
          >
            <HeroIllustration className="w-full max-w-[450px]" />
          </motion.div>
        </div>
      </section>

      {/* 2. MARQUEE STRIP */}
      <MarqueeStrip />

      {/* 3. SERVICES GRID */}
      <section className="py-32 px-6 md:px-10 bg-bg-primary">
        <div className="max-w-[1100px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-24"
          >
            <span className="font-mono text-[12px] font-medium text-text-muted tracking-widest uppercase mb-4 block">What We Do</span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,56px)] leading-[1.1] max-w-[700px] tracking-tight">
              Built for Businesses That Want to Scale Without Hiring More
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* AI Automations */}
            <motion.Link to="/services" whileHover="hover" className="group block bg-white border border-border rounded-[16px] p-8 md:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-[3px] hover:border-accent-primary/20">
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary text-[20px] mb-8">⚡</div>
              <h3 className="font-body text-[22px] font-semibold mb-3">AI Automations</h3>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-8 h-12">
                End-to-end automated workflows that eliminate repetitive tasks and run 24/7.
              </p>
              <span className="font-body text-[14px] font-medium text-accent-primary group-hover:underline">Explore &rarr;</span>
            </motion.Link>

            {/* AI Agents */}
            <motion.Link to="/services" whileHover="hover" className="group block bg-white border border-border rounded-[16px] p-8 md:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-[3px] hover:border-accent-secondary/30">
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-accent-secondary/10 text-accent-secondary text-[20px] mb-8">🤖</div>
              <h3 className="font-body text-[22px] font-semibold mb-3">AI Agents</h3>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-8 h-12">
                Intelligent agents that research, qualify leads, answer customers, and think for you.
              </p>
              <span className="font-body text-[14px] font-medium text-accent-primary group-hover:underline">Explore &rarr;</span>
            </motion.Link>

            {/* Workflow Engineering */}
            <motion.Link to="/services" whileHover="hover" className="group block bg-white border border-border rounded-[16px] p-8 md:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-[3px] hover:border-accent-yellow/50">
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-accent-yellow/20 text-[#C9A227] text-[20px] mb-8">⚙️</div>
              <h3 className="font-body text-[22px] font-semibold mb-3">Workflow Engineering</h3>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-8 h-12">
                Complex multi-system integrations with n8n, Make, and Zapier at production scale.
              </p>
              <span className="font-body text-[14px] font-medium text-accent-primary group-hover:underline">Explore &rarr;</span>
            </motion.Link>
            
            {/* Website Development */}
            <motion.Link to="/services" whileHover="hover" className="group block bg-white border border-border rounded-[16px] p-8 md:p-10 transition-all duration-300 hover:shadow-card hover:-translate-y-[3px] hover:border-accent-lavender/50">
              <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-accent-lavender/20 text-accent-lavender text-[20px] mb-8">🌐</div>
              <h3 className="font-body text-[22px] font-semibold mb-3">Website Development</h3>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-8 h-12">
                High-performance custom websites built with React, Next.js, and modern tooling.
              </p>
              <span className="font-body text-[14px] font-medium text-accent-primary group-hover:underline">Explore &rarr;</span>
            </motion.Link>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW SHOWCASE */}
      <section className="py-24 px-6 md:px-10 bg-bg-secondary">
        <div className="max-w-[1100px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-20"
          >
            <span className="font-mono text-[12px] font-medium text-text-muted tracking-widest uppercase mb-4 block">Real Systems</span>
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,56px)] leading-[1.1] max-w-[700px] tracking-tight">
              Real Workflows. Real Results.
            </h2>
          </motion.div>

          {/* Simple horizontal layout for workflows */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x">
            {/* Card 1 */}
            <div className="flex-1 bg-white border border-border rounded-[16px] p-6 lg:p-8 min-w-[340px] snap-center shrink-0 shadow-sm relative overflow-hidden group">
              <div className="flex flex-col gap-6">
                {/* Node Chain visual */}
                <div className="flex flex-wrap items-center gap-y-6">
                  <WorkflowNode label="📥 Lead Capture" bgColor="bg-bg-secondary" textColor="text-text-primary" />
                  <WorkflowArrow />
                  <WorkflowNode label="🤖 AI Qualifier" bgColor="bg-accent-primary/10" textColor="text-accent-primary" />
                  <WorkflowArrow color="stroke-accent-primary" />
                  <WorkflowNode label="📊 CRM" bgColor="bg-bg-secondary" textColor="text-text-primary" />
                  <WorkflowArrow />
                  <WorkflowNode label="📧 Email" bgColor="bg-accent-secondary/15" textColor="text-teal-700" />
                  <WorkflowArrow />
                  <WorkflowNode label="✅ Notify" bgColor="bg-accent-yellow/20" textColor="text-yellow-800" />
                </div>
                <div className="pt-6 mt-4 border-t border-border">
                  <p className="font-body text-[15px] text-text-secondary leading-relaxed">
                    Automatically ingests leads, qualifies them using an AI agent trained on your ICP, pushes to the CRM, and drafts targeted follow-up emails in seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white border border-border rounded-[16px] p-6 lg:p-8 min-w-[340px] snap-center shrink-0 shadow-sm relative overflow-hidden group">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-y-6">
                  <WorkflowNode label="🔗 Webhook" bgColor="bg-accent-primary/10" textColor="text-accent-primary" />
                  <WorkflowArrow color="stroke-accent-primary" />
                  <WorkflowNode label="🧠 GPT-4" bgColor="bg-bg-secondary" textColor="text-text-primary" />
                  <WorkflowArrow />
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                      <WorkflowNode label="💬 Slack" bgColor="bg-accent-secondary/15" textColor="text-teal-700" />
                    </div>
                    <div className="flex items-center">
                      <WorkflowNode label="📊 Sheets" bgColor="bg-bg-secondary" textColor="text-text-primary" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-4 border-t border-border">
                  <p className="font-body text-[15px] text-text-secondary leading-relaxed">
                    Listens for data events globally, processes unstructured text via OpenAI, structures the data into Google Sheets, and sends a Slack alert to the team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="py-24 px-6 md:px-10 border-b border-border bg-bg-primary">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <StatsCounter endValue={50} suffix="+" label="Automations Deployed" hasBorder={true} />
            <StatsCounter endValue={12} suffix="+" label="AI Agents Built" hasBorder={true} />
            <StatsCounter endValue={8} suffix="" label="Countries Served" hasBorder={true} />
            <StatsCounter endValue={100} suffix="%" label="Client Retention" hasBorder={true} />
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-32 px-6 md:px-10 bg-bg-primary">
        <div className="max-w-[1100px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-20 text-center mx-auto"
          >
            <h2 className="font-display font-semibold text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-border rounded-[16px] p-8 md:p-12 relative shadow-sm">
              <span className="absolute top-8 left-8 font-display text-[80px] leading-[0.5] text-border italic">"</span>
              <p className="font-body text-[16px] text-text-primary italic leading-[1.8] relative z-10 pt-8 mb-8">
                <em className="font-display">Launcify</em> built us an AI lead qualification system that reduced our response time from 4 hours to 30 seconds. Our sales team now focuses on closing, not sorting through unqualified meetings.
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-accent-yellow/20 text-[#A6841A] font-display font-bold text-[18px] flex items-center justify-center shrink-0">
                  AM
                </div>
                <div>
                  <h4 className="font-body text-[15px] font-semibold text-text-primary">Arjun Mehta</h4>
                  <p className="font-body text-[13px] text-text-secondary">Head of Sales, NexGen SaaS</p>
                </div>
              </div>
              <svg className="absolute top-8 right-8 w-6 h-6 text-accent-yellow hidden sm:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 10L23 12L15 14L12 22L9 14L1 12L9 10L12 2Z" /></svg>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-border rounded-[16px] p-8 md:p-12 relative shadow-sm">
              <span className="absolute top-8 left-8 font-display text-[80px] leading-[0.5] text-border italic">"</span>
              <p className="font-body text-[16px] text-text-primary italic leading-[1.8] relative z-10 pt-8 mb-8">
                We needed complex workflow automation across 6 disparate tools. <em className="font-display">Launcify</em> delivered a flawless architecture in 10 days. Zero downtime since launch, effectively replacing 2 junior roles.
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="w-12 h-12 rounded-full bg-accent-secondary/20 text-teal-800 font-display font-bold text-[18px] flex items-center justify-center shrink-0">
                  PS
                </div>
                <div>
                  <h4 className="font-body text-[15px] font-semibold text-text-primary">Priya Sharma</h4>
                  <p className="font-body text-[13px] text-text-secondary">COO, ScaleUp Commerce</p>
                </div>
              </div>
              <svg className="absolute top-8 right-8 w-6 h-6 text-accent-lavender hidden sm:block" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 10L23 12L15 14L12 22L9 14L1 12L9 10L12 2Z" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA (Dark Section) */}
      <section className="bg-text-primary py-32 px-6 md:px-10 relative overflow-hidden">
        {/* Decorative Ghost Robot */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] opacity-10 pointer-events-none filter brightness-200">
          <HeroIllustration />
        </div>

        <div className="max-w-[1100px] mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <h2 className="font-display text-white font-semibold text-[clamp(40px,6vw,64px)] leading-[1.1] mb-6 tracking-tight">
              Ready to automate everything?
            </h2>
            <p className="text-[20px] text-white/70 font-body mb-12">
              Let's build something that runs itself.
            </p>
            <Link to="/contact" className="px-10 py-5 bg-accent-primary text-white rounded-full text-[16px] font-semibold hover:bg-white hover:text-text-primary transition-colors font-body">
              Book a Free Call &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

// Inline components for workflow visual
function WorkflowNode({ label, bgColor, textColor }) {
  return (
    <div className={`px-4 py-2 rounded-full border border-border ${bgColor} ${textColor} flex items-center justify-center whitespace-nowrap z-10 relative shadow-sm`}>
      <span className="font-mono text-[12px] font-medium uppercase tracking-wider">{label}</span>
    </div>
  )
}

function WorkflowArrow({ color = "stroke-border-strong", delay = 0 }) {
  return (
    <div className="w-8 md:w-16 h-[2px] relative flex items-center -mx-2 z-0">
      <motion.svg className="w-full h-full absolute overflow-visible" preserveAspectRatio="none">
        <motion.line 
          x1="0" y1="1" x2="100%" y2="1" 
          stroke="var(--border-strong)" 
          strokeWidth="2" 
          strokeDasharray="4 4" 
        />
        {/* Animated flow line */}
        <motion.line 
          x1="0" y1="1" x2="100%" y2="1" 
          className={color}
          strokeWidth="2" 
          strokeDasharray="10 100" 
          strokeLinecap="round"
          initial={{ strokeDashoffset: -50 }}
          animate={{ strokeDashoffset: 50 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
        />
      </motion.svg>
    </div>
  )
}
