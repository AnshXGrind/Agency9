import { motion } from 'framer-motion'

export default function MarqueeStrip() {
  const content = "AI Automations · Workflow Engineering · AI Agents · Website Development · n8n · Make · Zapier · Custom GPT Agents · API Integrations · CRM Automations · "
  
  return (
    <div className="w-full bg-bg-secondary border-y border-border overflow-hidden py-3">
      <div className="flex w-fit group">
        <motion.div 
          className="flex whitespace-nowrap text-[13px] font-mono text-text-secondary uppercase tracking-widest pl-8"
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
        </motion.div>
      </div>
    </div>
  )
}
