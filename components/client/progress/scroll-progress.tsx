"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (window.scrollY / total) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-999 h-1 bg-emerald-600 transition-all duration-150"
      style={{ width: `${scroll}%` }}
    />
  );
}