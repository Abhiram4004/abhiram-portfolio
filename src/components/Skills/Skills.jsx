import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { technicalSkills, nonTechnicalSkills, softSkills } from "../../data/portfolioData";

// ─── Skill Bar Component ─────────────────────────────────────────────────────
const SkillBar = ({ skill, index, color, inView }) => {
  const gradients = {
    cyan: "linear-gradient(90deg, #ffffff, #aaaaaa)",
    purple: "linear-gradient(90deg, #ff0000, #cc0000)",
    green: "linear-gradient(90deg, #ffffff, #888888)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-white/80 text-sm font-medium font-body">{skill.name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.4 }}
          className="text-xs font-mono text-white/40"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          style={{ background: gradients[color] }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// ─── Skill Category Card ─────────────────────────────────────────────────────
const SkillCategory = ({ title, skills, color, accent, icon, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="card-3d card-border-glow glass rounded-2xl p-6 md:p-8 hover:scale-[1.01] transition-transform duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
        >
          {icon}
        </div>
        <h3 className="section-heading text-lg text-white">{title}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-5">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} index={i} color={color} inView={inView} />
        ))}
      </div>
    </motion.div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Skills() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Orbs */}
      <div className="orb w-80 h-80 bg-[#ff0000] top-1/4 right-0 translate-x-1/2" style={{ opacity: 0.02 }} />
      <div className="orb w-64 h-64 bg-[#ffffff] bottom-1/4 left-0 -translate-x-1/2" style={{ opacity: 0.02 }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--neon-cyan)] text-sm tracking-widest uppercase mb-3 block">
            What I know
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-body">
            A curated toolkit built through years of building, breaking, and learning.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCategory
            title="Technical Skills"
            skills={technicalSkills}
            color="cyan"
            accent="#ffffff"
            icon="⚙️"
            delay={0}
          />
          <SkillCategory
            title="Non-Technical Skills"
            skills={nonTechnicalSkills}
            color="purple"
            accent="#ff0000"
            icon="🎯"
            delay={0.1}
          />
          <SkillCategory
            title="Soft Skills"
            skills={softSkills}
            color="green"
            accent="#ffffff"
            icon="🌱"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
