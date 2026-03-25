import { useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  SiPython, SiTensorflow, SiReact, SiNodedotjs,
  SiDocker, SiKubernetes, SiGooglecloud, SiPytorch,
} from "react-icons/si";
import { personalInfo } from "../../data/portfolioData";

// ─── Floating tech icon ─────────────────────────────────────────────────────
const FloatingIcon = ({ icon: Icon, color, style }) => (
  <motion.div
    className="absolute text-3xl md:text-4xl opacity-20 pointer-events-none select-none"
    style={style}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -5, 0] }}
    transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <Icon color={color} />
  </motion.div>
);

const FLOAT_ICONS = [
  { icon: SiPython, color: "#3776AB", style: { top: "15%", left: "8%" } },
  { icon: SiTensorflow, color: "#FF6F00", style: { top: "25%", right: "10%" } },
  { icon: SiReact, color: "#00f5ff", style: { top: "65%", left: "5%" } },
  { icon: SiNodedotjs, color: "#00ff88", style: { top: "75%", right: "8%" } },
  { icon: SiDocker, color: "#2496ED", style: { top: "40%", left: "3%" } },
  { icon: SiKubernetes, color: "#326CE5", style: { top: "45%", right: "5%" } },
  { icon: SiGooglecloud, color: "#4285F4", style: { top: "10%", right: "25%" } },
  { icon: SiPytorch, color: "#EE4C2C", style: { top: "80%", left: "20%" } },
];

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#ffffff", "#ff0000"] },
      links: { color: "#ffffff", distance: 140, enable: true, opacity: 0.05, width: 1 },
      move: { enable: true, speed: 0.4, outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 900 }, value: 30 },
      opacity: { value: { min: 0.1, max: 0.2 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 lg:pt-32"
    >
      <Particles id="tsparticles" init={particlesInit} options={particleOptions} />

      <div className="orb w-96 h-96 bg-[#ffffff] top-[10%] left-[5%]" style={{ opacity: 0.02 }} />
      <div className="orb w-80 h-80 bg-[#ff0000] bottom-[10%] right-[5%]" style={{ opacity: 0.02 }} />

      {FLOAT_ICONS.map((item, i) => (
        <FloatingIcon key={i} {...item} />
      ))}

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Text & CTA */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 lg:mb-8 border border-[var(--neon-green)]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
            <span className="text-[var(--neon-green)] text-xs md:text-sm font-mono">
              Available for Internships & Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-heading text-5xl md:text-7xl lg:text-8xl mb-4 text-white leading-[1.1]"
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span key={i} className={i === 0 ? "gradient-text" : "text-white"}>{word} </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-mono text-[var(--neon-cyan)] mb-6 h-8 lg:h-10"
          >
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((r) => [r, 2200])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="animate-pulse text-[var(--neon-purple)]">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-white/50 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-body"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="btn-primary px-8 py-3.5 rounded-full font-display font-semibold text-[var(--neon-cyan)] text-base tracking-wide"
            >
              View Projects
            </motion.button>
            <motion.a
              href={personalInfo.resumeUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              download
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display font-semibold text-white/80 text-base tracking-wide border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <span>Download Resume</span>
              <span>↓</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Avatar */}
        <div className="flex-1 flex justify-center lg:justify-end w-full relative mb-12 lg:mb-0 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full card-border-glow p-1.5 shadow-[0_0_50px_rgba(0,245,255,0.15)] relative z-10 bg-gradient-to-br from-[#111] to-transparent">
              <div className="w-full h-full rounded-full bg-[#111] glass flex items-center justify-center text-7xl md:text-9xl overflow-hidden relative border border-white/5">
                {personalInfo.avatar ? (
                  <img src={personalInfo.avatar} alt="Profile Portrait" className="w-full h-full object-cover select-none pointer-events-none" />
                ) : (
                  "👨‍💻"
                )}
              </div>
            </div>
            
            {/* Online indicator */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-10 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[var(--neon-green)] border-[4px] border-[var(--dark-900)] shadow-[0_0_20px_var(--neon-green)] z-20" />
            
            {/* Decorative background blur circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[var(--neon-cyan)]/20 to-[var(--neon-purple)]/20 rounded-full blur-[80px] -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
          </motion.div>
        </div>

      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[var(--neon-cyan)]/50 to-transparent"
        />
      </motion.div>

    </section>
  );
}
