import { motion } from 'framer-motion'

export default function HeroIllustration({ className = "" }) {
  return (
    <div className={`relative w-full aspect-square max-w-[500px] mx-auto ${className}`}>
      {/* Background soft halo */}
      <div className="absolute inset-0 m-auto w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] rounded-full bg-bg-secondary blur-3xl opacity-50 -z-10" />

      <motion.svg 
        viewBox="0 0 500 500" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        className="w-full h-full drop-shadow-[2px_12px_24px_var(--shadow)]"
      >
        <defs>
          <linearGradient id="primary-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.0" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="var(--text-primary)" floodOpacity="0.08"/>
          </filter>
        </defs>

        {/* Isometric Grid Background Dots */}
        <g stroke="var(--border)" strokeWidth="1" strokeDasharray="1 16" opacity="0.6">
          <line x1="50" y1="200" x2="450" y2="400" />
          <line x1="50" y1="220" x2="450" y2="420" />
          <line x1="50" y1="240" x2="450" y2="440" />
          <line x1="50" y1="260" x2="450" y2="460" />
          <line x1="50" y1="280" x2="450" y2="480" />
          <line x1="450" y1="200" x2="50" y2="400" />
          <line x1="450" y1="220" x2="50" y2="420" />
          <line x1="450" y1="240" x2="50" y2="440" />
          <line x1="450" y1="260" x2="50" y2="460" />
          <line x1="450" y1="280" x2="50" y2="480" />
        </g>

        {/* Floating Nodes & Connecting Lines */}
        <g stroke="var(--border-strong)" strokeWidth="1.5">
          <path d="M 250 350 C 150 350, 100 250, 100 150" fill="none" />
          <path d="M 250 350 C 200 300, 200 120, 200 120" fill="none" />
          <path d="M 250 350 C 300 300, 320 160, 350 160" fill="none" />
          <path d="M 250 350 C 350 350, 420 280, 420 220" fill="none" />
        </g>

        {/* Node 1: Gear (Yellow) */}
        <g transform="translate(60, 110)" filter="url(#shadow)">
          <rect width="80" height="80" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="40" cy="40" r="16" fill="var(--accent-yellow)" />
          <path d="M 40 18 L 40 24 M 40 56 L 40 62 M 18 40 L 24 40 M 56 40 L 62 40 M 24 24 L 28 28 M 52 52 L 56 56 M 24 56 L 28 52 M 52 24 L 56 28" stroke="var(--text-primary)" strokeWidth="2" />
        </g>

        {/* Node 2: Database (Lavender) */}
        <g transform="translate(160, 40)" filter="url(#shadow)">
          <rect width="80" height="80" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 25 30 C 25 24, 55 24, 55 30 C 55 36, 25 36, 25 30 Z" fill="var(--accent-lavender)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 25 30 L 25 50 C 25 56, 55 56, 55 50 L 55 30" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <line x1="25" y1="40" x2="55" y2="40" stroke="var(--text-primary)" strokeWidth="2" />
        </g>

        {/* Node 3: Lightning (Tangerine) */}
        <g transform="translate(310, 80)" filter="url(#shadow)">
          <rect width="80" height="80" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 45 20 L 25 45 L 40 45 L 35 60 L 55 35 L 40 35 Z" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="2" />
        </g>

        {/* Node 4: Chat Bubble (Teal) */}
        <g transform="translate(380, 180)" filter="url(#shadow)">
          <rect width="80" height="80" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 25 35 C 25 25, 55 25, 55 35 C 55 45, 40 48, 40 55 C 40 50, 25 50, 25 35 Z" fill="var(--accent-secondary)" stroke="var(--text-primary)" strokeWidth="2" />
        </g>

        {/* Desk (Isometric) */}
        <path d="M 120 400 L 250 330 L 380 400 L 250 470 Z" fill="url(#primary-grad)" stroke="var(--text-primary)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 120 400 L 120 420 L 250 490 L 250 470 Z" fill="var(--accent-primary)" opacity="0.3" stroke="var(--text-primary)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 380 400 L 380 420 L 250 490 L 250 470 Z" fill="var(--accent-primary)" opacity="0.1" stroke="var(--text-primary)" strokeWidth="2" strokeLinejoin="round" />
        <line x1="160" y1="450" x2="160" y2="480" stroke="var(--text-primary)" strokeWidth="2" />
        <line x1="340" y1="450" x2="340" y2="480" stroke="var(--text-primary)" strokeWidth="2" />
        <line x1="250" y1="490" x2="250" y2="520" stroke="var(--text-primary)" strokeWidth="2" />

        {/* Robot Character */}
        <g transform="translate(250, 310)" filter="url(#shadow)">
          {/* Antenna */}
          <line x1="0" y1="-50" x2="0" y2="-70" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="0" cy="-74" r="4" fill="var(--accent-primary)" />
          
          {/* Head */}
          <rect x="-35" y="-50" width="70" height="50" rx="20" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Screen / Face area */}
          <rect x="-25" y="-40" width="50" height="30" rx="10" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="1.5" />
          
          {/* Eyes */}
          <circle cx="-10" cy="-25" r="3" fill="var(--text-primary)" />
          <circle cx="10" cy="-25" r="3" fill="var(--text-primary)" />

          {/* Body */}
          <path d="M -20 0 L 20 0 L 30 40 C 30 45, -30 45, -30 40 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Arms */}
          <path d="M -25 15 C -40 20, -45 35, -30 45" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 25 15 C 40 20, 45 35, 30 45" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Laptop */}
          <path d="M -40 45 L 40 45 L 30 20 L -30 20 Z" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M -50 45 L 50 45 L 40 55 L -40 55 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
        </g>
      </motion.svg>
    </div>
  )
}
