import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-50 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl transition-transform duration-200 hidden md:block"
      style={{
        background: "radial-gradient(circle, oklch(0.7 0.22 295) 0%, transparent 70%)",
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
      }}
    />
  );
}