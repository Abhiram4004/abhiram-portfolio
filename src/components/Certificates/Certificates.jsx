import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { certificates } from "../../data/portfolioData";

// ─── 3D Card hook ─────────────────────────────────────────────────────────────
function use3DCard() {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rX = ((y - r.height / 2) / r.height) * -10;
    const rY = ((x - r.width / 2) / r.width) * 10;
    el.style.transform = `perspective(700px) rotateX(${rX}deg) rotateY(${rY}deg) scale(1.03)`;
  };
  const handleMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
}

// ─── Certificate Card ─────────────────────────────────────────────────────────
const CertCard = ({ cert, index }) => {
  const { ref, handleMouseMove, handleMouseLeave } = use3DCard();
  const [cardRef, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-border-glow glass rounded-2xl overflow-hidden group h-full"
        style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
      >
        {/* Image Placeholder */}
        <div
          className="w-full h-40 flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${cert.accent}15, ${cert.accent}05)`,
            borderBottom: `1px solid ${cert.accent}20`,
          }}
        >
          {cert.image ? (
             <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
          ) : (
             <FiAward size={48} style={{ color: cert.accent, opacity: 0.6 }} />
          )}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at center, ${cert.accent}10, transparent)` }}
          />
        </div>

        <div className="p-5 relative z-10">
          <div className="flex items-start justify-between mb-2">
            <h3 className="section-heading text-base text-white leading-tight pr-2">{cert.title}</h3>
            <span
              className="text-xs font-mono shrink-0 px-2 py-0.5 rounded-full"
              style={{ background: `${cert.accent}15`, color: cert.accent }}
            >
              {cert.date}
            </span>
          </div>
          <p className="text-xs font-mono mb-3" style={{ color: `${cert.accent}99` }}>
            {cert.issuer}
          </p>
          <p className="text-white/45 text-sm leading-relaxed mb-4 font-body">{cert.description}</p>

          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-all hover:gap-2 relative z-20 cursor-pointer"
            style={{ color: cert.accent }}
          >
            <FiExternalLink size={12} />
            View Certificate
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Certificates() {
  const [headerRef, headerInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="certificates" className="section-padding relative overflow-hidden">
      <div className="orb w-72 h-72 bg-[#ffffff] bottom-0 left-1/4" style={{ opacity: 0.02 }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#ffffff] text-sm tracking-widest uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            <span className="gradient-text-green">Certificates</span> & Courses
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-body">
            Formal credentials validating skills across ML, cloud, and modern development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
