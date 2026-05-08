"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { setLenis } from "@/lib/lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
    });

    setLenis(lenisInstance);

    let frame: number;

    function raf(time: number) {
      lenisInstance.raf(time);

      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);

      lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
