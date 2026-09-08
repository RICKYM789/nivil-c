'use client';

import { useEffect, useRef } from 'react';

export default function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!w || !h) return; // Never set zero dimensions
      canvas.width = w / 2; // Render at half res for high performance
      canvas.height = h / 2;
    };

    resize();
    window.addEventListener('resize', resize);

    const generateNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      // Guard: skip if dimensions are zero or non-finite (e.g. canvas not laid out yet)
      if (!w || !h || !Number.isFinite(w) || !Number.isFinite(h)) {
        animationFrameId = requestAnimationFrame(generateNoise);
        return;
      }
      const imgData = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(imgData.data.buffer);

      for (let i = 0; i < buffer32.length; i++) {
        // Generate random grayscale noise values
        const val = (Math.random() * 255) | 0;
        buffer32[i] = (255 << 24) | (val << 16) | (val << 8) | val;
      }

      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(generateNoise);
    };

    generateNoise();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="film-grain"
      aria-hidden="true"
    />
  );
}
