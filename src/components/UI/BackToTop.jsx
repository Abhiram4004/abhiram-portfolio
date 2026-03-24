import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, translateY: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] w-12 h-12 flex items-center justify-center rounded-full glass backdrop-blur-md"
          style={{
            border: "1px solid rgba(255, 0, 0, 0.3)",
            background: "rgba(5, 5, 5, 0.7)",
            boxShadow: "0 0 20px rgba(255, 0, 0, 0.2)"
          }}
          aria-label="Back to top"
        >
          <FaArrowUp className="text-[#ff0000] text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
