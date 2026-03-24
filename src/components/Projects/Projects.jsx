import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { projects } from "../../data/portfolioData";

// ─── 3D Card Hook ─────────────────────────────────────────────────────────────
function use3DCard() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return { ref, handleMouseMove, handleMouseLeave };
}

// ─── Project Modal ─────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="modal-overlay p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 40 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="glass rounded-2xl max-w-2xl w-full p-8 relative"
      style={{ border: `1px solid ${project.accent}30` }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <FiX />
      </button>

      {/* Media or Live Demo Placeholder */}
      <div
        className={`w-full h-48 lg:h-64 rounded-xl mb-6 bg-gradient-to-br ${project.color} overflow-hidden flex items-center justify-center relative group`}
        style={{ border: `1px solid ${project.accent}20` }}
      >
        {project.demoVideo ? (
          <video src={project.demoVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : project.demoYoutube ? (
          <iframe 
            src={`https://www.youtube.com/embed/${project.demoYoutube}`} 
            className="w-full h-full border-0" 
            allowFullScreen 
            title="Live Demo"
          />
        ) : project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl">🖥️</span>
        )}
      </div>

      <h3 className="section-heading text-2xl text-white mb-4">{project.title}</h3>

      <ul className="space-y-3 mb-6">
        {project.description.map((point, i) => (
          <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed font-body">
            <span style={{ color: project.accent }} className="mt-0.5 shrink-0">▹</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}25`, color: project.accent }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl !== "#" ? project.liveUrl : undefined}
            onClick={(e) => {
              if (project.liveUrl === "#") {
                e.preventDefault();
                alert("Live Demo URL is not provided yet! You need to deploy your Python project (e.g. to Streamlit Cloud or Render) and update the liveUrl in portfolioData.js.");
              }
            }}
            target={project.liveUrl !== "#" ? "_blank" : undefined}
            rel={project.liveUrl !== "#" ? "noreferrer" : undefined}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer"
            style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}30`, color: project.accent }}
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/60 border border-white/10 hover:border-white/30 transition-all"
          >
            <FiGithub /> Repository
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpen }) => {
  const { ref, handleMouseMove, handleMouseLeave } = use3DCard();
  const [cardRef, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          border: `1px solid ${project.accent}20`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onClick={() => onOpen(project)}
      >
        {/* Screenshot or Video cover */}
        <div
          className={`w-full h-44 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}
        >
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity" />
          ) : project.demoVideo ? (
            <video src={project.demoVideo} muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity" />
          ) : (
            <span className="text-5xl group-hover:scale-110 transition-transform duration-500">🖥️</span>
          )}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            style={{ background: `${project.accent}12` }}
          >
            <span className="text-sm font-mono" style={{ color: project.accent }}>
              Click to preview →
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Title */}
          <h3 className="section-heading text-lg text-white mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">
            {project.title}
          </h3>

          {/* Description bullets */}
          <ul className="space-y-1.5 mb-4">
            {project.description.map((point, i) => (
              <li key={i} className="flex gap-2 text-white/50 text-sm leading-relaxed font-body">
                <span style={{ color: project.accent }} className="mt-0.5 shrink-0 text-xs">▹</span>
                <span className="line-clamp-1">{point}</span>
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-full text-xs font-mono"
                style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}20`, color: `${project.accent}cc` }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-white/30 border border-white/10">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Action links */}
          <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
            {project.liveUrl && (
              <a
                href={project.liveUrl !== "#" ? project.liveUrl : undefined}
                onClick={(e) => {
                  if (project.liveUrl === "#") {
                    e.preventDefault();
                    alert("Live Demo URL is not provided yet! You need to deploy your Python project (e.g. to Streamlit Cloud or Render) and update the liveUrl in portfolioData.js.");
                  }
                }}
                target={project.liveUrl !== "#" ? "_blank" : undefined}
                rel={project.liveUrl !== "#" ? "noreferrer" : undefined}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-pointer"
                style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}25`, color: project.accent }}
              >
                <FiExternalLink size={12} /> Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white/50 border border-white/10 hover:border-white/30 hover:text-white/80 transition-all"
              >
                <FiGithub size={12} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [headerRef, headerInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="orb w-96 h-96 bg-[#ffffff] top-0 left-1/2 -translate-x-1/2" style={{ opacity: 0.02 }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--neon-purple)] text-sm tracking-widest uppercase mb-3 block">
            What I've built
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-body">
            A selection of projects that showcase my depth across Machine Learning, web development, and systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
