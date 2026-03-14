import { motion } from 'framer-motion'

export default function AgentIllustration({ className = "" }) {
  return (
    <div className={`relative w-full aspect-square max-w-[400px] mx-auto ${className}`}>
      <motion.svg 
        viewBox="0 0 400 400" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-full h-full drop-shadow-[2px_12px_24px_var(--shadow)]"
      >
        <defs>
          <filter id="shadow-agent" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="var(--text-primary)" floodOpacity="0.08"/>
          </filter>
        </defs>

        {/* Orbit Path */}
        <circle cx="200" cy="200" r="140" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />

        {/* Central Robot holding clipboard */}
        <g transform="translate(140, 140)" filter="url(#shadow-agent)">
          {/* Antenna */}
          <line x1="60" y1="10" x2="60" y2="30" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="60" cy="8" r="4" fill="var(--accent-primary)" />
          
          {/* Head */}
          <rect x="35" y="30" width="50" height="40" rx="16" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Screen / Face */}
          <rect x="42" y="38" width="36" height="20" rx="6" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="1.5" />
          
          {/* Eyes */}
          <circle cx="50" cy="48" r="2.5" fill="var(--text-primary)" />
          <circle cx="70" cy="48" r="2.5" fill="var(--text-primary)" />

          {/* Body */}
          <path d="M 45 70 L 75 70 L 85 110 C 85 115, 35 115, 35 110 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Arms holding clipboard */}
          <path d="M 40 85 C 30 95, 45 105, 55 100" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 80 85 C 90 95, 75 105, 65 100" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Clipboard */}
          <rect x="45" y="85" width="30" height="40" rx="4" fill="var(--accent-yellow)" stroke="var(--text-primary)" strokeWidth="2" transform="rotate(-10 60 105)" />
          <line x1="55" y1="95" x2="70" y2="92" stroke="var(--text-primary)" strokeWidth="1.5" />
          <line x1="55" y1="105" x2="70" y2="102" stroke="var(--text-primary)" strokeWidth="1.5" />
          <circle cx="60" cy="85" r="3" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1" />
        </g>

        {/* Orbiting Elements Group */}
        {/* We use framer-motion to spin the parent and counter-spin the children */}
        <motion.g 
          style={{ originX: "200px", originY: "200px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {/* Task 1: Research */}
          <motion.g 
            transform="translate(60, 200)" filter="url(#shadow-agent)"
            style={{ originX: "0px", originY: "0px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            <rect x="-45" y="-18" width="90" height="36" rx="18" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="12px" fontWeight="600">
              <tspan fill="currentColor">🔍 Research</tspan>
            </text>
          </motion.g>

          {/* Task 2: Email */}
          <motion.g 
            transform="translate(200, 60)" filter="url(#shadow-agent)"
            style={{ originX: "0px", originY: "0px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            <rect x="-40" y="-18" width="80" height="36" rx="18" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="12px" fontWeight="600">
              <tspan fill="currentColor">📧 Email</tspan>
            </text>
          </motion.g>

          {/* Task 3: CRM */}
          <motion.g 
            transform="translate(340, 200)" filter="url(#shadow-agent)"
            style={{ originX: "0px", originY: "0px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            <rect x="-35" y="-18" width="70" height="36" rx="18" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="12px" fontWeight="600">
              <tspan fill="currentColor">📊 CRM</tspan>
            </text>
          </motion.g>

          {/* Task 4: Report */}
          <motion.g 
            transform="translate(200, 340)" filter="url(#shadow-agent)"
            style={{ originX: "0px", originY: "0px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            <rect x="-42" y="-18" width="84" height="36" rx="18" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-mono)" fontSize="12px" fontWeight="600">
              <tspan fill="currentColor">📄 Report</tspan>
            </text>
          </motion.g>

        </motion.g>
      </motion.svg>
    </div>
  )
}
