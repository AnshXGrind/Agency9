import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { prefix: '', num: 50, suffix: '+', label: 'Automations Built' },
  { prefix: '', num: 12, suffix: '+', label: 'AI Agents Live' },
  { prefix: '', num: 8, suffix: '', label: 'Countries Served' },
  { prefix: '', num: 100, suffix: '%', label: 'Client Retention' }
]

function Digit({ value, isAnimating, delay }) {
  return (
    <div className="relative inline-block overflow-hidden h-[1.1em] leading-[1.1em]" style={{ perspective: '400px' }}>
      <div 
        className="transition-transform duration-1000 ease-out"
        style={{
          transform: isAnimating ? 'rotateX(0deg)' : 'rotateX(-90deg)',
          transformOrigin: 'bottom',
          transitionDelay: `${delay}ms`
        }}
      >
        {value}
      </div>
    </div>
  )
}

function StatItem({ stat, index, inView }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime
    const duration = 1500
    
    const animate = (time) => {
      if (!startTime) startTime = time
      const progress = (time - startTime) / duration
      
      if (progress < 1) {
        const easeProgress = 1 - Math.pow(1 - progress, 4)
        setCurrent(Math.floor(easeProgress * stat.num))
        requestAnimationFrame(animate)
      } else {
        setCurrent(stat.num)
      }
    }
    
    requestAnimationFrame(animate)
  }, [inView, stat.num])

  const digits = current.toString().split('')

  return (
    <div className="flex flex-col relative pl-4 border-l-[3px] border-sage">
      <div className="font-serif font-bold text-[48px] md:text-[64px] text-bg-navy leading-none flex items-baseline">
        {stat.prefix}
        {digits.map((d, i) => (
          <Digit key={i} value={d} isAnimating={inView} delay={index * 100 + i * 80} />
        ))}
        <span className="font-serif font-normal text-[32px] md:text-[40px] text-gold ml-1">{stat.suffix}</span>
      </div>
      <div className="font-sans text-[14px] text-text-muted mt-2">{stat.label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="w-full bg-bg-alt py-16 safe-paddings">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} inView={inView} />
        ))}
      </div>
    </div>
  )
}
