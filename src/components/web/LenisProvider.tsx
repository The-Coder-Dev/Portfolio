'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.05,
      duration: 1.2,
      touchMultiplier: 2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
