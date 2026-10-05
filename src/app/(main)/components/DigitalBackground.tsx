"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01010101ABCDEF0123456789<>/{}[]#$&*+=";

/**
 * Fixed full-screen "digital" background:
 * - perspective cyber grid
 * - falling code rain (canvas)
 * - glow orbs + scanlines + vignette
 */
export default function DigitalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontSize = 16;
    let columns: number[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.ceil(width / fontSize);
      columns = Array.from({ length: count }, () => Math.random() * -(height / fontSize));
    };

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw);
      if (time - last < 55) return; // ~18fps keeps it subtle & cheap
      last = time;

      // fade previous frame -> trailing effect
      ctx.fillStyle = "rgba(3, 7, 18, 0.14)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

      for (let i = 0; i < columns.length; i++) {
        // only ~40% of columns active to keep it airy
        if (i % 5 === 1 || i % 5 === 3) continue;
        const y = columns[i] * fontSize;
        const char = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        const head = Math.random() > 0.975;
        ctx.fillStyle = head ? "rgba(224, 255, 255, 0.9)" : "rgba(34, 211, 238, 0.35)";
        ctx.fillText(char, i * fontSize, y);

        if (y > height && Math.random() > 0.975) columns[i] = Math.random() * -20;
        columns[i] += 1;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      // static sprinkle of glyphs
      ctx.font = `${fontSize}px ui-monospace, monospace`;
      ctx.fillStyle = "rgba(34, 211, 238, 0.18)";
      for (let i = 0; i < 400; i++) {
        ctx.fillText(
          GLYPHS[(Math.random() * GLYPHS.length) | 0],
          Math.random() * width,
          Math.random() * height
        );
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="digital-bg">
      <div className="digital-bg__base" />
      <canvas ref={canvasRef} className="digital-bg__rain" />
      <div className="digital-bg__grid" />
      <div className="digital-bg__orb digital-bg__orb--cyan" />
      <div className="digital-bg__orb digital-bg__orb--violet" />
      <div className="digital-bg__scan" />
      <div className="digital-bg__vignette" />
    </div>
  );
}
