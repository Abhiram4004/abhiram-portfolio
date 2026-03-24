import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";

const SOCIALS = [
  { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-display font-bold text-2xl"
        >
          <span className="gradient-text">KA</span>
          <span className="text-white/30">.</span>
        </motion.div>

        {/* Copyright */}
        <p className="text-white/25 text-sm font-body text-center">
          © {new Date().getFullYear()} {personalInfo.name}. Crafted with ☕ & curiosity.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, color: "#00f5ff" }}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-[var(--neon-cyan)] transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--neon-cyan)] btn-primary ml-2"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
