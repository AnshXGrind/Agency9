import React, { useRef, useState, useEffect } from 'react'

export default function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)',
    transition: 'transform 0.5s ease',
  })
  const [shine, setShine] = useState({
    background: 'radial-gradient(circle at 50% 50%, rgba(255,248,238,0), transparent 60%)'
  })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within the element.
    const y = e.clientY - rect.top  // y position within the element.
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    
    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`,
      transition: 'transform 0.1s ease',
    })
    
    setShine({
      background: `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255,248,238,0.15), transparent 60%)`
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)',
      transition: 'transform 0.5s ease',
    })
    setShine({
      background: 'radial-gradient(circle at 50% 50%, rgba(255,248,238,0), transparent 60%)'
    })
  }

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={shine}
      />
      {children}
    </div>
  )
}
