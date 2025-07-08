'use client';

import { useEffect, useRef } from 'react';

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Blob settings
    const blobs = [
      { x: 300, y: 200, r: 200, dx: 1, dy: 0.5, color: 'rgba(173, 108, 255, 0.50)' },
      { x: 800, y: 600, r: 250, dx: -0.8, dy: 0.3, color: 'rgba(255, 0, 255, 0.50)' },
      { x: 500, y: 400, r: 225, dx: 0.6, dy: -0.4, color: 'rgba(0, 255, 255, 0.50)' },
    ];

    // Animation loop
    function animate() {
      if(!ctx || !canvas)return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0d0c1d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'lighter';

      blobs.forEach(blob => {
        // Update position with free movement
        blob.x += blob.dx;
        blob.y += blob.dy;

        // Boundary checks for free movement
        if (blob.x - blob.r < 0 || blob.x + blob.r > canvas.width) blob.dx *= -1;
        if (blob.y - blob.r < 0 || blob.y + blob.r > canvas.height) blob.dy *= -1;

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{
        pointerEvents: 'none', // No pointer interaction
        filter: 'blur(50px)',
      }}
    ></canvas>
    </>
  );
}