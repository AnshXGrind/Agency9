export default function TeamIllustration({ className = "" }) {
  return (
    <div className={`relative w-full max-w-[600px] mx-auto ${className}`}>
      <svg viewBox="0 0 600 300" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-[2px_12px_24px_var(--shadow)]">
        
        {/* Divider */}
        <line x1="300" y1="40" x2="300" y2="260" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="6 6" />

        {/* --- LEFT: Saksham (Technical Builder) --- */}
        <g transform="translate(150, 150)">
          {/* Laptop slightly visible at bottom */}
          <path d="M -50 90 L 50 90 L 40 50 L -40 50 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          <line x1="-30" y1="70" x2="30" y2="70" stroke="var(--border)" strokeWidth="2" />

          {/* Shoulders */}
          <path d="M -40 90 C -60 40, -40 20, 0 20 C 40 20, 60 40, 40 90" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Head */}
          <rect x="-35" y="-40" width="70" height="65" rx="25" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Glasses */}
          <rect x="-25" y="-15" width="20" height="15" rx="5" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
          <rect x="5" y="-15" width="20" height="15" rx="5" fill="none" stroke="var(--accent-primary)" strokeWidth="2" />
          <line x1="-5" y1="-7" x2="5" y2="-7" stroke="var(--accent-primary)" strokeWidth="2" />

          {/* Eyes (behind glasses) */}
          <circle cx="-15" cy="-7" r="2.5" fill="var(--text-primary)" />
          <circle cx="15" cy="-7" r="2.5" fill="var(--text-primary)" />
          
          {/* Expression */}
          <path d="M -5 10 C 0 12, 5 12, 10 10" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />

          {/* Floating Code Elements */}
          <text x="-80" y="-10" fill="var(--accent-lavender)" fontFamily="var(--font-mono)" fontSize="20px" fontWeight="600">{`{`}</text>
          <text x="70" y="20" fill="var(--accent-yellow)" fontFamily="var(--font-mono)" fontSize="18px" fontWeight="600">{`</>`}</text>
        </g>

        {/* --- RIGHT: Yadyansh (Growth Lead) --- */}
        <g transform="translate(450, 150)">
          {/* Shoulders */}
          <path d="M -45 90 C -65 40, -45 20, 0 20 C 45 20, 65 40, 45 90" fill="var(--bg-accent)" stroke="var(--text-primary)" strokeWidth="2" />
          
          {/* Head */}
          <circle cx="0" cy="-10" r="35" fill="var(--bg-primary)" stroke="var(--text-primary)" strokeWidth="2" />

          {/* Eyes */}
          <circle cx="-12" cy="-15" r="2.5" fill="var(--text-primary)" />
          <circle cx="12" cy="-15" r="2.5" fill="var(--text-primary)" />
          
          {/* Expression (big smile) */}
          <path d="M -15 5 C -5 20, 5 20, 15 5" fill="none" stroke="var(--text-primary)" strokeWidth="2" />

          {/* Headset (Marketing/Calls) */}
          <path d="M -35 -10 C -45 -50, 45 -50, 35 -10" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" />
          <rect x="-42" y="-15" width="10" height="25" rx="5" fill="var(--accent-secondary)" />
          <rect x="32" y="-15" width="10" height="25" rx="5" fill="var(--accent-secondary)" />
          <path d="M -37 10 L -25 25" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
          <circle cx="-25" cy="25" r="3" fill="var(--accent-secondary)" />

          {/* Floating Chart Element */}
          <g transform="translate(-70, -30)">
            <rect x="0" y="25" width="8" height="15" rx="3" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <rect x="12" y="15" width="8" height="25" rx="3" fill="var(--accent-yellow)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <rect x="24" y="-5" width="8" height="45" rx="3" fill="var(--accent-primary)" stroke="var(--text-primary)" strokeWidth="1.5" />
          </g>

          {/* Sparkles */}
          <path d="M 60 -20 L 63 -28 L 71 -31 L 63 -34 L 60 -42 L 57 -34 L 49 -31 L 57 -28 Z" fill="var(--accent-lavender)" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinejoin="round" />
        </g>

      </svg>
    </div>
  )
}
