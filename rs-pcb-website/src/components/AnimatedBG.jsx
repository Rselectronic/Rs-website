import { useEffect, useRef } from 'react'

export default function AnimatedBG() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let connections = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      initParticles()
    }

    const PARTICLE_COUNT = 60
    const CONNECTION_DIST = 160
    const SPEED = 0.3

    function initParticles() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          r: Math.random() * 1.5 + 0.5,
          pulse: Math.random() * Math.PI * 2,
        })
      }
    }

    function draw() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // Update particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)

            // Circuit-style: draw L-shaped lines instead of straight
            if (Math.abs(dx) > Math.abs(dy)) {
              ctx.lineTo(particles[j].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
            } else {
              ctx.lineTo(particles[i].x, particles[j].y)
              ctx.lineTo(particles[j].x, particles[j].y)
            }

            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw particles (nodes)
      for (const p of particles) {
        const glow = 0.3 + Math.sin(p.pulse) * 0.15
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${glow})`
        ctx.fill()

        // Outer glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${glow * 0.2})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
