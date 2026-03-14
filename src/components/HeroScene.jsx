import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene
    const scene = new THREE.Scene()
    
    // Camera
    const camera = new THREE.PerspectiveCamera(40, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 100)
    camera.position.set(0, 2, 10)
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: false })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFF8EE, 0.6)
    scene.add(ambientLight)
    
    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
    dirLight.position.set(5, 10, 5)
    scene.add(dirLight)

    // Generate Noise Normal Map for micro-texture
    const generateNoiseNormalMap = () => {
      const size = 256
      const data = new Uint8Array(size * size * 4)
      for (let i = 0; i < size * size * 4; i += 4) {
        data[i] = 128 + (Math.random() - 0.5) * 50     // R
        data[i+1] = 128 + (Math.random() - 0.5) * 50   // G
        data[i+2] = 255                                // B
        data[i+3] = 255                                // A
      }
      const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat)
      tex.needsUpdate = true
      return tex
    }
    const normalMap = generateNoiseNormalMap()

    // Helper to create text texture
    const createTextTexture = (text, bgColor) => {
      const canvas = document.createElement('canvas')
      canvas.width = 256
      canvas.height = 128
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'rgba(0,0,0,0)'
      ctx.fillRect(0, 0, 256, 128)
      ctx.fillStyle = '#FFFFFF'
      ctx.font = '500 24px "Fira Code", monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = 'rgba(0,0,0,0.5)'
      ctx.shadowBlur = 4
      ctx.fillText(text, 128, 64)
      
      const tex = new THREE.CanvasTexture(canvas)
      return tex
    }

    // Nodes data
    const nodesData = [
      { text: 'Trigger', color: 0x2C3E50, pos: [-3.5, 1.2, 0] },
      { text: 'AI Agent', color: 0x8B9E7A, pos: [-1.8, 0.0, 0.4] },
      { text: 'Process', color: 0x6B8FAB, pos: [0, 0.8, 0.2] },
      { text: 'Email', color: 0xC4A882, pos: [1.8, -0.2, 0.6] },
      { text: 'CRM', color: 0x8B9E7A, pos: [3.5, 0.5, 0] },
      { text: 'Deploy', color: 0xE07B54, pos: [2.2, -1.5, 0.8] },
    ]

    const isMobile = window.innerWidth < 768
    const activeNodesData = isMobile ? nodesData.slice(0, 3) : nodesData
    
    if (isMobile) {
      // Adjust positions for mobile to fit in smaller screen
      activeNodesData[0].pos = [-1.5, 1.0, 0]
      activeNodesData[1].pos = [0, 0, 0.4]
      activeNodesData[2].pos = [1.5, -1.0, 0.2]
      camera.position.set(0, 0, 12)
    }

    const nodes = []
    const createRoundedBox = (w, h, d, r, s) => {
      // A simple approximation since RoundedBoxGeometry is in an add-on
      const geom = new THREE.BoxGeometry(w, h, d, s, s, s)
      return geom // To keep it simple without importing from examples
    }

    activeNodesData.forEach((data, index) => {
      const group = new THREE.Group()
      
      // Main box
      const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.12)
      const material = new THREE.MeshStandardMaterial({
        color: data.color,
        roughness: 0.2,
        metalness: 0.05,
        normalMap: normalMap
      })
      const mesh = new THREE.Mesh(geometry, material)
      group.add(mesh)

      // Border effect
      const borderGeom = new THREE.BoxGeometry(0.92, 0.92, 0.10)
      const borderMat = new THREE.MeshBasicMaterial({ color: 0xFDFCF9 })
      const borderMesh = new THREE.Mesh(borderGeom, borderMat)
      borderMesh.position.z = -0.02
      group.add(borderMesh)

      // Text label
      const textGeom = new THREE.PlaneGeometry(0.7, 0.3)
      const textMat = new THREE.MeshBasicMaterial({
        map: createTextTexture(data.text, data.color),
        transparent: true,
        depthWrite: false
      })
      const textMesh = new THREE.Mesh(textGeom, textMat)
      textMesh.position.z = 0.08
      group.add(textMesh)

      group.position.set(...data.pos)
      group.userData = { phase: Math.random() * Math.PI * 2 }
      
      nodes.push(group)
      scene.add(group)
    })

    // Connectors and Particles
    const particles = []
    if (!isMobile) {
      for (let i = 0; i < activeNodesData.length - 1; i++) {
        const p1 = new THREE.Vector3(...activeNodesData[i].pos)
        const p2 = new THREE.Vector3(...activeNodesData[i+1].pos)
        
        // Midpoint and control points for gentle curve
        const mid = p1.clone().lerp(p2, 0.5)
        mid.y += 0.5 // arc upward
        mid.z -= 0.5
        
        const curve = new THREE.CatmullRomCurve3([p1, mid, p2])
        const tubeGeom = new THREE.TubeGeometry(curve, 20, 0.008, 8, false)
        const tubeMat = new THREE.LineBasicMaterial({ color: 0xC4A882, transparent: true, opacity: 0.5 })
        const tube = new THREE.Mesh(tubeGeom, tubeMat)
        scene.add(tube)

        // Particle
        const particleGeom = new THREE.SphereGeometry(0.04, 8, 8)
        const particleMat = new THREE.MeshBasicMaterial({ color: 0xF7F4EE })
        const particle = new THREE.Mesh(particleGeom, particleMat)
        scene.add(particle)
        particles.push({ mesh: particle, curve: curve, t: Math.random() })
      }
    }

    // Mouse Parallax
    let mouseX = 0
    let mouseY = 0
    const targetCameraPos = new THREE.Vector3(0, 2, 10)
    if(isMobile) targetCameraPos.set(0, 0, 12)

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    // Animation Loop
    let clock = new THREE.Clock()
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Nodes float
      nodes.forEach(node => {
        const { phase } = node.userData
        node.position.y += Math.sin(elapsedTime * 0.8 + phase) * 0.003
        node.rotation.z = Math.sin(elapsedTime * 0.5 + phase) * 0.08
        node.rotation.y = Math.sin(elapsedTime * 0.3 + phase) * 0.05
      })

      // Particles along curves
      particles.forEach(p => {
        p.t = (p.t + 0.004) % 1
        const pos = p.curve.getPointAt(p.t)
        p.mesh.position.copy(pos)
      })

      // Parallax
      if (!isMobile) {
        targetCameraPos.x = mouseX * 0.4
        targetCameraPos.y = 2 + mouseY * 0.4
        camera.position.lerp(targetCameraPos, 0.05)
      } else {
        targetCameraPos.x = mouseX * 0.2
        targetCameraPos.y = mouseY * 0.2
        camera.position.lerp(targetCameraPos, 0.05)
      }
      
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const onResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frameId)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      geometry?.dispose()
      material?.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="w-full h-[320px] md:h-[500px]" />
}
