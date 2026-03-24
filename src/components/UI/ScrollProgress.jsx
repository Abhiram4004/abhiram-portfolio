import { useScrollProgress } from "../../hooks/usePortfolio";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}
