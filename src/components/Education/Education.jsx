import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "../../data/portfolioData";

// ─── Education Item ───────────────────────────────────────────────────────────
const EduItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8 pb-12 last:pb-0 group"
    >
      {/* Left: Timeline spine & glowing dot */}
      <div className="flex flex-col items-center relative">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0 relative z-10 glass"
          style={{
            borderColor: `${item.accent}50`,
            boxShadow: `0 0 30px ${item.accent}30`,
          }}
        >
          {item.icon}
        </motion.div>
        
        {/* Animated Spine */}
        {index < education.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
            className="absolute top-14 bottom-0 w-1 rounded-full z-0"
            style={{
              background: `linear-gradient(to bottom, ${item.accent}80, ${education[index + 1].accent}10)`,
            }}
          />
        )}
      </div>

      {/* Right: Content Card */}
      <div
        className="flex-1 glass rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
        style={{ border: `1px solid ${item.accent}30` }}
      >
        <div className="absolute top-0 left-0 w-2 h-full" style={{ background: item.accent }} />
        
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <span
              className="text-xs font-mono uppercase tracking-widest mb-2 block"
              style={{ color: item.accent }}
            >
              {item.level}
            </span>
            <h3 className="section-heading text-2xl text-white">{item.institution}</h3>
          </div>
          <span className="text-sm font-mono text-white/40 shrink-0 mt-1">{item.dateRange}</span>
        </div>

        <p className="text-lg font-medium text-white/80 mb-4 font-body">{item.degree}</p>
        <p className="text-base text-white/50 leading-relaxed font-body mb-6">{item.description}</p>

        <div className="flex items-center gap-3">
          <span className="text-sm text-white/40 font-mono">GPA:</span>
          <span
            className="text-sm font-mono px-3 py-1 rounded-md"
            style={{ background: `${item.accent}15`, color: item.accent, border: `1px solid ${item.accent}30` }}
          >
            {item.gpa}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Education() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="orb w-72 h-72 bg-[#00f5ff] top-1/2 left-0 -translate-x-1/2" style={{ opacity: 0.07 }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--neon-cyan)] text-sm tracking-widest uppercase mb-3 block">
            My Journey
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto font-body">
            From robots built out of LEGO to real-time ML pipelines — here's how I got here.
          </p>
        </motion.div>

        <div>
          {education.map((item, i) => (
            <EduItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
