import { motion, AnimatePresence } from "framer-motion";
import CursorGlow from "./components/UI/CursorGlow";
import ScrollProgress from "./components/UI/ScrollProgress";
import BackToTop from "./components/UI/BackToTop";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import GitHubActivity from "./components/GitHubActivity/GitHubActivity";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import { useState } from "react";
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introFinished ? (
          <IntroScreen key="intro" onComplete={() => setIntroFinished(true)} />
        ) : (
          <motion.div
            key="mainApp"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            className="relative min-h-screen bg-[var(--dark-900)] text-white overflow-x-hidden"
          >
            {/* Global UI overlays */}
            <CursorGlow />
            <ScrollProgress />
            <BackToTop />

            {/* Navigation */}
            <Navbar />

            {/* Main content */}
            <main>
              <Hero />
              <Skills />
              <Projects />
              <Certificates />
              <Achievements />
              <Education />
              <GitHubActivity />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
