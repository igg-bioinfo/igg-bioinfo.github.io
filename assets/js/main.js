/* DNA particle canvas */
(function () {
  const canvas = document.getElementById('dnaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor(W / 12), 80);
    for (let i = 0; i < count; i++) {
      particles.push({ x: Math.random()*W, y: Math.random()*H, r: Math.random()*2.5+0.8, vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35, phase: Math.random()*Math.PI*2 });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      const pulse = 0.6 + 0.4 * Math.sin(t*0.0008 + p.phase);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(26,158,143,${pulse})`; ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x-particles[j].x, dy = particles[i].y-particles[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 110) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(100,200,240,${(1-dist/110)*0.5})`; ctx.lineWidth = 0.6; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize(); createParticles(); requestAnimationFrame(draw);
  window.addEventListener('resize', () => { resize(); createParticles(); });
})();

/* Navbar scroll shadow */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
});

/* Mobile nav */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
