import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GitHubCalendar } from "react-github-calendar";
import { personalInfo } from "../../data/portfolioData";

export default function GitHubActivity() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Extract GitHub username from URL logic in portfolioData.js
  const githubUsername = personalInfo?.github?.split("/").filter(Boolean).pop() || "koduria";

  // A custom theme for the calendar that matches our red/black/white aesthetic
  const explicitTheme = {
    light: ['#1f1f1f', '#4d0014', '#800022', '#b3002f', '#ff0044'],
    dark: ['#1f1f1f', '#4d0014', '#800022', '#b3002f', '#ff0044']
  };

  return (
    <section id="github" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="orb w-96 h-96 bg-[#ff0044] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.05 }} />

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[#ff0044] text-sm tracking-widest uppercase mb-3 block">
            Open Source
          </span>
          <h2 className="section-heading text-4xl md:text-5xl text-white mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto font-body">
            A visual trace of my coding streak, open-source contributions, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          <div className="glass rounded-2xl p-6 md:p-10 flex border justify-center items-center overflow-x-auto relative" style={{ borderColor: 'rgba(255, 0, 68, 0.2)' }}>
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ff0044]" />
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: '#ff0044' }} />    
            <GitHubCalendar 
              username={githubUsername || "github"} 
              blockSize={14}
              blockMargin={6}
              colorScheme="dark"
              fontSize={16}
              theme={explicitTheme}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
