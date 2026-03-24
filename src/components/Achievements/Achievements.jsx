import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink } from "react-icons/fi";
import { achievements } from "../../data/portfolioData";

// ─── Achievement Item ─────────────────────────────────────────────────────────
const AchievementItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className={`relative flex items-center gap-6 md:gap-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } mb-12`}
    >
      {/* Card */}
      <div className={`flex-1 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          className="achievement-badge rounded-2xl p-6 md:p-8 cursor-default relative overflow-hidden"
          style={{ borderColor: `${item.accent}40`, boxShadow: `0 10px 30px -10px ${item.accent}30` }}
        >
          {/* Subtle background glow locally */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: item.accent }} />
          
          <div className="flex items-start gap-4 relative z-10">
            <span className="text-4xl drop-shadow-lg">{item.icon}</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="section-heading text-xl md:text-2xl text-white">{item.title}</h3>
                <span
                  className="hidden md:inline text-xs font-mono px-3 py-1 rounded-full shrink-0 font-bold tracking-wider"
                  style={{ background: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}40` }}
                >
                  {item.year}
                </span>
              </div>
              <p className="text-white/60 text-base leading-relaxed font-body">{item.description}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-all hover:gap-2 mt-2"
                  style={{ color: item.accent }}
                >
                  <FiExternalLink size={12} />
                  View Certificate / Link
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center node — hidden on mobile, visible on md+ */}
      <div className="hidden md:flex flex-col items-center relative z-10">
        {/* The Node */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0.5 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg glass"
          style={{
            borderColor: item.accent,
            borderWidth: "2px",
            boxShadow: `0 0 25px ${item.accent}60`,
          }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: item.accent }} />
        </motion.div>
      </div>

      {/* Empty flex side (desktop) */}
      <div className="hidden md:block flex-1" />

      {/* Mobile year badge */}
      <span
        className="md:hidden text-xs font-mono px-3 py-1 rounded-full shrink-0 self-start mt-2 font-bold"
        style={{ background: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}40` }}
      >
        {item.year}
      </span>
    </motion.div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Achievements() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="orb w-80 h-80 bg-[#ff0080] top-1/3 right-0 translate-x-1/2" style={{ opacity: 0.07 }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--neon-pink)] text-sm tracking-widest uppercase mb-3 block">
            Milestones
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            Key <span style={{ background: "linear-gradient(135deg, #ff0080, #bf00ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Achievements</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-body">
            Highlights that define my journey across competitions, research, and open source.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line — desktop only */}
          <div className="hidden md:block timeline-line absolute" />

          <div className="relative z-10">
            {achievements.map((item, i) => (
              <AchievementItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
