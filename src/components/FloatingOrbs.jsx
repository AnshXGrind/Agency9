import React from 'react'

export default function FloatingOrbs({ section = 'hero' }) {
  if (section === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '280px', height: '280px',
          background: 'var(--gold)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.35,
          animation: 'orbFloat 7s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%', width: '200px', height: '200px',
          background: 'var(--sage)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.35,
          animation: 'orbFloat 9s ease-in-out infinite 2s'
        }}></div>
      </div>
    )
  }
  if (section === 'services') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div style={{
          position: 'absolute', top: '30%', left: '10%', width: '240px', height: '240px',
          background: 'var(--sage)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.35,
          animation: 'orbFloat 11s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute', bottom: '20%', right: '10%', width: '180px', height: '180px',
          background: 'var(--steel)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.35,
          animation: 'orbFloat 8s ease-in-out infinite 1s'
        }}></div>
      </div>
    )
  }
  if (section === 'about') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px',
          background: 'var(--bg-alt)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.35,
          animation: 'orbFloat 10s ease-in-out infinite'
        }}></div>
      </div>
    )
  }
  if (section === 'navy') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div style={{
          position: 'absolute', top: '20%', left: '20%', width: '250px', height: '250px',
          background: 'var(--gold)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.15,
          animation: 'orbFloat 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute', bottom: '10%', right: '20%', width: '200px', height: '200px',
          background: 'var(--sage)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.15,
          animation: 'orbFloat 10s ease-in-out infinite 1.5s'
        }}></div>
      </div>
    )
  }
  return null
}
