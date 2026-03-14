import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function StatsCounter({ endValue, suffix = "", label, hasBorder }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 1500;
      
      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // cubic easeOut
        
        setCount(Math.floor(easeOut * endValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      
      requestAnimationFrame(animate);
    }
  }, [isInView, endValue])

  return (
    <div ref={ref} className={`flex flex-col ${hasBorder ? 'pl-6 border-l-[3px] border-accent-primary' : ''}`}>
      <div className="flex items-baseline">
        <span className="font-display text-[clamp(40px,6vw,64px)] font-bold tracking-tight text-text-primary leading-none">
          {count}
        </span>
        <span className="font-display text-[clamp(40px,6vw,64px)] font-bold tracking-tight text-accent-primary leading-none ml-0.5">
          {suffix}
        </span>
      </div>
      <span className="font-body text-[14px] text-text-secondary mt-2">{label}</span>
    </div>
  )
}
