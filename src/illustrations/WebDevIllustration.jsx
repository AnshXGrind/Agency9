import { motion } from 'framer-motion'

export default function WebDevIllustration({ className = "" }) {
  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <svg viewBox="0 0 400 240" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[2px_8px_16px_var(--shadow)]">
        <defs>
          <filter id="shadow-web" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="var(--text-primary)" floodOpacity="0.08"/>
          </filter>
        </defs>

        {/* Browser Window */}
        <g transform="translate(40, 20)" filter="url(#shadow-web)">
          <rect width="320" height="200" rx="12" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Mac window dots */}
          <line x1="0" y1="24" x2="320" y2="24" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="16" cy="12" r="3" fill="var(--accent-primary)" />
          <circle cx="28" cy="12" r="3" fill="var(--accent-yellow)" />
          <circle cx="40" cy="12" r="3" fill="var(--accent-secondary)" />
          
          {/* Wireframe UI */}
          {/* Nav */}
          <rect x="20" y="32" width="40" height="8" rx="4" fill="var(--border-strong)" />
          <rect x="220" y="32" width="20" height="8" rx="4" fill="var(--bg-secondary)" />
          <rect x="250" y="32" width="20" height="8" rx="4" fill="var(--bg-secondary)" />
          <rect x="280" y="32" width="20" height="8" rx="4" fill="var(--accent-secondary)" opacity="0.3" />
          
          {/* Hero */}
          <rect x="20" y="56" width="140" height="16" rx="6" fill="var(--text-primary)" />
          <rect x="20" y="80" width="200" height="6" rx="3" fill="var(--border-strong)" />
          <rect x="20" y="92" width="160" height="6" rx="3" fill="var(--border-strong)" />
          
          {/* CTA Button */}
          <rect x="20" y="112" width="80" height="20" rx="10" fill="var(--accent-primary)" />
          
          {/* Columns */}
          <rect x="20" y="148" width="130" height="32" rx="6" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="170" y="148" width="130" height="32" rx="6" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="1.5" />
        </g>

        {/* Cursor floating up to click the CTA */}
        <motion.g 
          transform="translate(140, 160)"
          animate={{ x: [0, -30, -50], y: [0, -20, -10] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        >
          <path d="M 0 0 L 10 25 L 14 14 L 25 10 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" strokeLinejoin="round" />
        </motion.g>

      </svg>
    </div>
  )
}
