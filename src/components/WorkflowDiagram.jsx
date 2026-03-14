import React from 'react'

export default function WorkflowDiagram({ scale = 1, className = '' }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div 
        className="relative transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:!transform-none"
        style={{
          transform: 'perspective(1200px) rotateX(4deg) rotateY(-3deg)',
          width: 500 * scale,
          height: 300 * scale,
          backgroundColor: 'var(--bg-navy-dark)',
          borderRadius: 16 * scale,
          boxShadow: '0 20px 60px rgba(26, 39, 56, 0.4)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.05)] flex items-center px-4" style={{ height: 32 * scale }}>
          <div className="flex gap-2" style={{ gap: 6 * scale }}>
            <div className="rounded-full bg-sage" style={{ width: 10 * scale, height: 10 * scale }}></div>
            <div className="rounded-full bg-gold" style={{ width: 10 * scale, height: 10 * scale }}></div>
            <div className="rounded-full bg-steel" style={{ width: 10 * scale, height: 10 * scale }}></div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="font-mono text-white/50" style={{ fontSize: 11 * scale }}>workflow_v3.json</span>
          </div>
        </div>

        {/* Grid pattern */}
        <svg className="absolute inset-0 pointer-events-none opacity-50" width="100%" height="100%">
          <pattern id="grid" width={20 * scale} height={20 * scale} patternUnits="userSpaceOnUse">
            <circle cx={2 * scale} cy={2 * scale} r={1 * scale} fill="rgba(255, 248, 238, 0.06)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Workflow lines and nodes */}
        <div className="absolute inset-0" style={{ marginTop: 32 * scale }}>
          <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%">
            {/* Connectors */}
            <path id="path1" d={`M ${180 * scale} ${50 * scale} L ${230 * scale} ${50 * scale}`} fill="none" stroke="var(--gold)" strokeWidth={1.5 * scale} strokeDasharray="6 4" className="animate-[dash_3s_linear_infinite]" />
            <path id="path2" d={`M ${300 * scale} ${50 * scale} L ${350 * scale} ${50 * scale}`} fill="none" stroke="var(--gold)" strokeWidth={1.5 * scale} strokeDasharray="6 4" className="animate-[dash_3s_linear_infinite]" />
            
            <path id="path3" d={`M ${120 * scale} ${150 * scale} L ${170 * scale} ${150 * scale}`} fill="none" stroke="var(--gold)" strokeWidth={1.5 * scale} strokeDasharray="6 4" className="animate-[dash_3s_linear_infinite]" />
            <path id="path4" d={`M ${260 * scale} ${150 * scale} L ${310 * scale} ${150 * scale}`} fill="none" stroke="var(--gold)" strokeWidth={1.5 * scale} strokeDasharray="6 4" className="animate-[dash_3s_linear_infinite]" />
            <path id="path5" d={`M ${400 * scale} ${150 * scale} L ${440 * scale} ${150 * scale}`} fill="none" stroke="var(--gold)" strokeWidth={1.5 * scale} strokeDasharray="6 4" className="animate-[dash_3s_linear_infinite]" />
          </svg>

          {/* Nodes */}
          {/* Row 1 */}
          <Node x={40} y={26} color="var(--bg-navy)" border="var(--steel)" label="Lead Capture" icon="📥" scale={scale} />
          <Node x={230} y={26} color="#3D5468" border="var(--sage)" label="AI Qualifier" icon="🤖" scale={scale} />
          <Node x={350} y={26} color="#4A6741" border="var(--gold)" label="CRM Update" icon="📊" scale={scale} />

          {/* Row 2 */}
          <Node x={30} y={126} color="var(--bg-navy)" border="var(--steel)" label="Webhook" icon="🔗" scale={scale} width={90} />
          <Node x={170} y={126} color="#3D5468" border="var(--sage)" label="GPT-4" icon="🧠" scale={scale} width={90} />
          <Node x={310} y={126} color="#3D5468" border="var(--gold)" label="Slack" icon="💬" scale={scale} width={90} />
          <Node x={440} y={126} color="#4A6741" border="var(--sage)" label="Done" icon="✅" scale={scale} width={80} />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
      `}} />
    </div>
  )
}

function Node({ x, y, width = 140, height = 48, color, border, label, icon, scale }) {
  return (
    <div 
      className="absolute flex items-center overflow-hidden"
      style={{
        left: x * scale,
        top: y * scale,
        width: width * scale,
        height: height * scale,
        backgroundColor: color,
        borderRadius: 10 * scale,
        border: `1px solid rgba(196,168,130,0.3)`,
        boxShadow: 'inset 0 0 12px rgba(196,168,130,0.08)',
        transform: 'skewY(-2deg)'
      }}
    >
      <div className="absolute left-0 top-0 bottom-0" style={{ width: 3 * scale, backgroundColor: border }}></div>
      <div 
        className="flex items-center justify-center rounded-full bg-black/20"
        style={{ width: 24 * scale, height: 24 * scale, marginLeft: 12 * scale, fontSize: 12 * scale }}
      >
        {icon}
      </div>
      <span className="font-mono text-white ml-2" style={{ fontSize: 11 * scale }}>{label}</span>
    </div>
  )
}
