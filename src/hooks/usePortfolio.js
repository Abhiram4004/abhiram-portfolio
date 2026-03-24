// ─── useCursor Hook ─────────────────────────────────────────────────────────
import { useEffect, useState } from "react";

export function useCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    let animFrame;
    let target = { x: 0, y: 0 };

    const onMove = (e) => {
      target = { x: e.clientX, y: e.clientY };
      setDotPos({ x: e.clientX, y: e.clientY });
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // Smooth glow follows cursor with slight lag
    const lerp = (a, b, t) => a + (b - a) * t;
    let current = { x: 0, y: 0 };

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.1);
      current.y = lerp(current.y, target.y, 0.1);
      setPos({ x: current.x, y: current.y });
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return { pos, dotPos, clicking };
}

// ─── useScrollProgress Hook ─────────────────────────────────────────────────
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

// ─── useActiveSection Hook ─────────────────────────────────────────────────
export function useActiveSection(sections) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o && o.disconnect());
  }, [sections]);

  return active;
}
