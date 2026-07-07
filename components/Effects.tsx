"use client";

import { useEffect } from "react";

// Cursor spotlight + film-grain overlays, ported verbatim from the Vite App.tsx.
export function Effects() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cy', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Cursor spotlight — updates via CSS variable, no React re-renders */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[48]"
        style={{
          background:
            'radial-gradient(600px circle at var(--cx, -9999px) var(--cy, -9999px), rgba(255,255,255,0.04) 0%, transparent 80%)',
        }}
      />
      {/* Film-grain noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[49] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />
    </>
  );
}
