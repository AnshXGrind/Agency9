import { motion } from 'framer-motion'

export default function AutomationIllustration({ className = "" }) {
  return (
    <div className={`w-full aspect-video ${className}`}>
      <svg viewBox="0 0 600 300" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[2px_8px_16px_var(--shadow)]">
        <defs>
          <filter id="shadow-auto" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="var(--text-primary)" floodOpacity="0.08"/>
          </filter>
        </defs>

        {/* Animated Dashed Connection 1 */}
        <motion.line 
          x1="160" y1="120" x2="260" y2="120" 
          stroke="var(--accent-primary)" strokeWidth="3" 
          strokeDasharray="8 6"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated Dashed Connection 2 */}
        <motion.line 
          x1="340" y1="120" x2="440" y2="120" 
          stroke="var(--accent-secondary)" strokeWidth="3" 
          strokeDasharray="8 6"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Box 1: Trigger (Inbox) */}
        <g transform="translate(60, 70)" filter="url(#shadow-auto)">
          <rect width="100" height="100" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 25 35 L 75 35 L 75 65 C 75 70, 70 75, 65 75 L 35 75 C 30 75, 25 70, 25 65 Z" fill="var(--accent-primary)" fillOpacity="0.2" stroke="var(--accent-primary)" strokeWidth="2" />
          <path d="M 25 35 L 50 55 L 75 35" stroke="var(--accent-primary)" strokeWidth="2" />
          <text x="50" y="140" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="13px" fontWeight="500">TRIGGER</text>
        </g>

        {/* Box 2: Process (Robot) */}
        <g transform="translate(240, 70)" filter="url(#shadow-auto)">
          <rect width="100" height="100" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <path d="M 30 40 L 70 40 C 75 40, 80 45, 80 50 L 80 70 C 80 75, 75 80, 70 80 L 30 80 C 25 80, 20 75, 20 70 L 20 50 C 20 45, 25 40, 30 40 Z" fill="var(--accent-secondary)" fillOpacity="0.2" stroke="var(--accent-secondary)" strokeWidth="2" />
          <circle cx="35" cy="55" r="4" fill="var(--accent-secondary)" />
          <circle cx="65" cy="55" r="4" fill="var(--accent-secondary)" />
          <line x1="40" y1="65" x2="60" y2="65" stroke="var(--accent-secondary)" strokeWidth="2" />
          <line x1="50" y1="25" x2="50" y2="40" stroke="var(--accent-secondary)" strokeWidth="2" />
          <circle cx="50" cy="22" r="3" fill="var(--accent-secondary)" />
          <text x="50" y="140" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="13px" fontWeight="500">PROCESS</text>
        </g>

        {/* Box 3: Action (Check/Send) */}
        <g transform="translate(420, 70)" filter="url(#shadow-auto)">
          <rect width="100" height="100" rx="24" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" fill="var(--accent-yellow)" />
          <path d="M 35 50 L 45 60 L 65 40" stroke="var(--text-primary)" strokeWidth="3" />
          <text x="50" y="140" textAnchor="middle" fill="var(--text-secondary)" fontFamily="var(--font-mono)" fontSize="13px" fontWeight="500">ACTION</text>
        </g>
      </svg>
    </div>
  )
}
