import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AutomationIllustration from '../illustrations/AutomationIllustration'
import AgentIllustration from '../illustrations/AgentIllustration'
import WorkflowIllustration from '../illustrations/WorkflowIllustration'
import WebDevIllustration from '../illustrations/WebDevIllustration'

export default function Services() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggeredContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const items = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const services = [
    {
      num: "01",
      title: "AI Automations",
      desc: "We design and deploy end-to-end automated workflows that eliminate repetitive tasks, reduce human error, and operate around the clock. Your business runs faster while you sleep.",
      stack: ["n8n", "Make", "Zapier", "Python", "REST APIs"],
      uses: [
        "Lead capture to CRM pipelines",
        "Email automation and rapid follow-ups",
        "Data sync across disparate platforms",
        "Report generation and delivery"
      ],
      time: "1–3 weeks",
      price: "$1,500",
      iconColor: "text-accent-primary",
      Visual: AutomationIllustration
    },
    {
      num: "02",
      title: "AI Agents",
      desc: "Autonomous AI agents that think, decide, and act. Built on top of GPT-4 and Claude 3, our agents can handle everything from complex research tasks to full-scale customer support.",
      stack: ["LangChain", "OpenAI", "Anthropic", "Python", "Vector DBs"],
      uses: [
        "Research agents (scraping, summarization)",
        "Customer service agents (chat, email)",
        "Lead qualification bots",
        "Automated content generation"
      ],
      time: "2–4 weeks",
      price: "$2,500",
      iconColor: "text-accent-secondary",
      Visual: AgentIllustration
    },
    {
      num: "03",
      title: "Workflow Engineering",
      desc: "Complex multi-system integrations at production scale. We connect your tools, orchestrate internal APIs, and build bulletproof data pipelines that never randomly drop webhooks.",
      stack: ["n8n", "Node.js", "Webhooks", "PostgreSQL", "AWS"],
      uses: [
        "Multi-platform API orchestration",
        "Resilient webhook handling",
        "Data transformation pipelines",
        "Legacy system to SaaS integration"
      ],
      time: "2–5 weeks",
      price: "$2,000",
      iconColor: "text-accent-yellow",
      Visual: WorkflowIllustration
    },
    {
      num: "04",
      title: "Website Development",
      desc: "Full-stack custom websites that are insanely fast, beautiful, and built strictly to convert. From high-performance landing pages to complex web applications.",
      stack: ["React", "Next.js", "Tailwind", "Framer", "Vercel"],
      uses: [
        "React/Next.js applications",
        "Headless CMS integration",
        "Performance-first SEO builds",
        "Premium editorial animations"
      ],
      time: "2–6 weeks",
      price: "$2,000",
      iconColor: "text-accent-lavender",
      Visual: WebDevIllustration
    }
  ]

  return (
    <motion.div initial="hidden" animate="show" variants={staggeredContainer} className="w-full">
      {/* PAGE HERO */}
      <section className="bg-bg-primary pt-24 pb-32 text-center px-6 md:px-10 border-b border-border">
        <motion.div variants={items} className="max-w-[800px] mx-auto">
          <h1 className="font-display font-bold text-[clamp(48px,8vw,80px)] tracking-tight mb-6">
            What We Build
          </h1>
          <p className="font-body text-[20px] text-text-secondary">
            Four core capabilities. One agency. Zero compromise.
          </p>
        </motion.div>
      </section>

      {/* SERVICES ITERATION */}
      {services.map((service, idx) => {
        const isOdd = idx % 2 === 0
        return (
          <section key={service.num} className={`py-32 px-6 md:px-10 border-b border-border ${isOdd ? 'bg-white' : 'bg-bg-secondary'}`}>
            <div className={`max-w-[1100px] mx-auto flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              
              {/* Text Side */}
              <div className="flex-1 w-full flex flex-col items-start pt-8">
                <span className="font-mono text-[13px] font-medium text-text-muted mb-6 tracking-wider">
                  {service.num} /
                </span>
                
                <h2 className="font-display font-semibold text-[40px] leading-[1.1] text-text-primary mb-6">
                  {service.title}
                </h2>
                
                <p className="font-body text-[16px] leading-[1.75] text-text-secondary mb-8 max-w-[480px]">
                  {service.desc}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-bg-secondary border border-border text-text-secondary font-mono text-[12px] rounded-full uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Uses list */}
                <ul className="space-y-3 mb-12">
                  {service.uses.map(use => (
                    <li key={use} className="flex items-start gap-4 font-body text-[15px] text-text-secondary">
                      <span className={`w-2 h-2 rounded-full translate-y-2 shrink-0 bg-current ${service.iconColor}`} />
                      {use}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-6">
                  <Link to="/contact" className="text-accent-primary font-body font-semibold text-[16px] group flex items-center gap-2 pr-6 border-r border-border">
                    <span className="border-b-2 border-transparent group-hover:border-accent-primary transition-colors pb-0.5">Start This Project</span>
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>

                  <div className="flex gap-3">
                    <span className="font-mono text-[12px] bg-bg-secondary border border-border px-4 py-1.5 rounded-full text-text-secondary">
                      ⏱ {service.time}
                    </span>
                    <span className="font-mono text-[12px] bg-bg-secondary border border-border px-4 py-1.5 rounded-full text-text-secondary">
                      From {service.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full max-w-[500px]">
                <service.Visual />
              </div>
              
            </div>
          </section>
        )
      })}

      {/* PROCESS */}
      <section className="py-32 px-6 md:px-10 bg-bg-primary">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-display font-semibold text-[clamp(40px,6vw,56px)] tracking-tight">How We Work</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between relative gap-12 md:gap-0">
            {/* Horizontal timeline line (desktop only) */}
            <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-border-strong -z-10" />

            {[
              { n: '01', t: 'Discovery', d: 'We learn your business, identify automation opportunities, and define the scope.' },
              { n: '02', t: 'Proposal', d: 'Clear deliverables, timeline, and pricing. No surprises.' },
              { n: '03', t: 'Build Phase', d: 'We build, you review. Weekly updates and live demos along the way.' },
              { n: '04', t: 'Testing', d: 'Rigorous testing across all edge cases before launch day.' },
              { n: '05', t: 'Handoff', d: 'Documentation, training, and 30-day post-launch support included.' },
            ].map((step, i) => (
              <div key={i} className="flex-1 flex flex-col md:items-center text-left md:text-center group relative w-full pr-8 md:pr-0 md:px-4">
                {/* Vertical timeline line (mobile only) */}
                {i !== 4 && <div className="md:hidden absolute left-[19px] top-[40px] bottom-[-48px] w-[1px] border-l border-dashed border-border-strong -z-10" />}
                
                <div className="w-[40px] h-[40px] rounded-full border border-accent-primary bg-bg-primary group-hover:bg-accent-primary flex items-center justify-center font-mono text-[14px] text-accent-primary group-hover:text-white transition-colors mb-6 shrink-0 relative z-10">
                  {step.n}
                </div>
                <div>
                  <h4 className="font-body text-[16px] font-semibold text-text-primary mb-2">{step.t}</h4>
                  <p className="font-body text-[14px] text-text-secondary leading-relaxed max-w-[200px] mx-auto md:mx-0">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
