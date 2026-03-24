import { useCursor } from "../../hooks/usePortfolio";

export default function CursorGlow() {
  const { pos, dotPos, clicking } = useCursor();

  return (
    <>
      {/* Glow aura — follows with lag */}
      <div
        className={`cursor-glow ${clicking ? "clicking" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      {/* Precise dot */}
      <div
        className="cursor-dot"
        style={{ left: dotPos.x, top: dotPos.y }}
      />
    </>
  );
}
