import { motion } from 'framer-motion'

export default function WorkflowIllustration({ className = "" }) {
  return (
    <div className={`relative w-full aspect-square max-w-[500px] mx-auto ${className}`}>
      <svg viewBox="0 0 500 500" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[2px_12px_24px_var(--shadow)]">
        
        {/* Layer connections */}
        <g stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
          <line x1="150" y1="360" x2="150" y2="160" />
          <line x1="250" y1="380" x2="250" y2="180" />
          <line x1="350" y1="360" x2="350" y2="160" />
        </g>

        {/* Bottom Layer: Data Sources */}
        <g transform="translate(0, 180)">
          <path d="M 100 220 L 250 160 L 400 220 L 250 280 Z" fill="var(--accent-lavender)" fillOpacity="0.2" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 100 220 L 100 240 L 250 300 L 250 280 Z" fill="var(--accent-lavender)" fillOpacity="0.3" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 400 220 L 400 240 L 250 300 L 250 280 Z" fill="var(--accent-lavender)" fillOpacity="0.1" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Labels / Icons on Bottom Layer */}
          <text x="130" y="240" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="12px" transform="scale(1, 0.6) skewX(-20)">Data Sources</text>
        </g>

        {/* Middle Layer: Engine */}
        <motion.g 
          transform="translate(0, 80)"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <path d="M 100 220 L 250 160 L 400 220 L 250 280 Z" fill="var(--accent-primary)" fillOpacity="0.2" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 100 220 L 100 240 L 250 300 L 250 280 Z" fill="var(--accent-primary)" fillOpacity="0.3" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 400 220 L 400 240 L 250 300 L 250 280 Z" fill="var(--accent-primary)" fillOpacity="0.1" stroke="var(--text-primary)" strokeWidth="2" />
          
          <text x="130" y="240" fill="var(--accent-primary)" fontFamily="var(--font-mono)" fontSize="12px" fontWeight="600" transform="scale(1, 0.6) skewX(-20)">n8n / Make</text>
          
          {/* Middle layer icons / gears */}
          <g transform="translate(250, 220) scale(1, 0.6) skewX(-20)">
            <circle cx="0" cy="0" r="15" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
            <circle cx="0" cy="0" r="4" fill="var(--accent-primary)" />
          </g>
        </motion.g>

        {/* Top Layer: Your Business */}
        <motion.g 
          transform="translate(0, -20)"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
        >
          <path d="M 100 220 L 250 160 L 400 220 L 250 280 Z" fill="var(--accent-yellow)" fillOpacity="0.3" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 100 220 L 100 240 L 250 300 L 250 280 Z" fill="var(--accent-yellow)" fillOpacity="0.4" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 400 220 L 400 240 L 250 300 L 250 280 Z" fill="var(--accent-yellow)" fillOpacity="0.1" stroke="var(--text-primary)" strokeWidth="2" />
          
          <text x="130" y="240" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="12px" fontWeight="600" transform="scale(1, 0.6) skewX(-20)">Your Business</text>
          
          <g transform="translate(250, 220) scale(1, 0.6) skewX(-20)">
            <path d="M -10 0 L -3 7 L +12 -8" fill="none" stroke="var(--text-primary)" strokeWidth="3" />
          </g>
        </motion.g>

      </svg>
    </div>
  )
}
