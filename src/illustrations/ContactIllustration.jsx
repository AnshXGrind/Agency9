import { motion } from 'framer-motion'

export default function ContactIllustration({ className = "" }) {
  return (
    <div className={`relative w-full aspect-square max-w-[300px] mx-auto ${className}`}>
      <svg viewBox="0 0 300 300" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[2px_12px_24px_var(--shadow)]">
        <defs>
          <filter id="shadow-contact" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="var(--text-primary)" floodOpacity="0.08"/>
          </filter>
        </defs>

        {/* Dotted Flight Path */}
        <path d="M 40 220 Q 150 120 220 260" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeDasharray="4 8" opacity="0.6" />

        {/* Envelope with Wings (bobbing) */}
        <motion.g 
          transform="translate(150, 100)" filter="url(#shadow-contact)"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        >
          {/* Left Wing */}
          <path d="M -40 10 Q -80 -10 -90 30 Q -60 40 -40 25 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M -60 10 L -45 20" stroke="var(--border)" strokeWidth="2" />
          
          {/* Right Wing */}
          <path d="M 40 10 Q 80 -10 90 30 Q 60 40 40 25 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 60 10 L 45 20" stroke="var(--border)" strokeWidth="2" />
          
          {/* Envelope Body */}
          <rect x="-50" y="-30" width="100" height="70" rx="8" fill="var(--accent-yellow)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M -50 -30 L 0 5 L 50 -30" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M -50 40 L -20 10 M 50 40 L 20 10" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="0" cy="5" r="8" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="2" />
        </motion.g>

        {/* Map Pin / Globe Base */}
        <g transform="translate(225, 260)">
          <path d="M 0 0 C 20 -20, 20 -40, 0 -40 C -20 -40, -20 -20, 0 0 Z" fill="var(--accent-lavender)" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="0" cy="-25" r="6" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <ellipse cx="0" cy="10" rx="15" ry="4" fill="var(--border)" />
        </g>
      </svg>
    </div>
  )
}
