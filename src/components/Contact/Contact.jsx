import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";

const SOCIALS = [
  { icon: FiLinkedin, label: "LinkedIn", value: personalInfo.linkedin, href: personalInfo.linkedin, accent: "#00f5ff" },
  { icon: FiGithub, label: "GitHub", value: personalInfo.github, href: personalInfo.github, accent: "#bf00ff" },
  { icon: FiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, accent: "#00ff88" },
  { icon: FiPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, accent: "#ff0080" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send — replace with your API/EmailJS integration
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb w-96 h-96 bg-[#ff0000] bottom-0 left-1/2 -translate-x-1/2" style={{ opacity: 0.02 }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[var(--neon-cyan)] text-sm tracking-widest uppercase mb-3 block">
            Get in touch
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto font-body">
            Whether it's an internship, collaboration, or just a chat about AI — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Social Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={headerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="flex items-center gap-4 glass rounded-xl p-4 group"
                style={{ border: `1px solid ${social.accent}15` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${social.accent}15`, color: social.accent }}
                >
                  <social.icon />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest">{social.label}</p>
                  <p className="text-sm text-white/70 truncate font-body">{social.value}</p>
                </div>
                <div
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: social.accent }}
                >
                  →
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass rounded-xl p-4 mt-2"
              style={{ border: "1px solid rgba(0,255,136,0.15)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse" />
                <span className="text-[var(--neon-green)] text-sm font-mono font-medium">Available</span>
              </div>
              <p className="text-white/40 text-sm font-body">
                Open to Summer 2026 internships in ML Engineering, Artificial Intelligence, and Web Development.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-border-glow glass rounded-2xl p-6 md:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 gap-4"
                >
                  <span className="text-5xl">🎉</span>
                  <h3 className="section-heading text-xl text-white">Message Sent!</h3>
                  <p className="text-white/50 text-center font-body">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-sm text-[var(--neon-cyan)] hover:underline font-mono"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="input-glass w-full rounded-xl px-4 py-3 text-sm font-body placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="input-glass w-full rounded-xl px-4 py-3 text-sm font-body placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the opportunity, project, or just say hi..."
                      className="input-glass w-full rounded-xl px-4 py-3 text-sm font-body placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center justify-center gap-2 py-3.5 rounded-xl font-display font-semibold text-[var(--neon-cyan)] tracking-wide disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-[var(--neon-cyan)] border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
