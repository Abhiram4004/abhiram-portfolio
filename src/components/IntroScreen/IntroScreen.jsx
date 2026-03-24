import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

export default function IntroScreen({ onComplete }) {
  const [letters, setLetters] = useState([]);
  const [animatingLastLetter, setAnimatingLastLetter] = useState(true);

  const name = personalInfo.name;
  const baseName = name.slice(0, -1);
  const targetLastLetter = name.slice(-1);

  // A list of random characters to roll through
  const rollChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

  useEffect(() => {
    // Generate the initial array of letters
    const initialLetters = name.split("").map((char, index) => ({
      id: index,
      char: char,
      isLast: index === name.length - 1,
    }));
    setLetters(initialLetters);

    // Roll the last letter
    let rollCount = 0;
    const maxRolls = 20; // Number of times it changes character
    const rollInterval = setInterval(() => {
      setLetters((prev) =>
        prev.map((l) => {
          if (l.isLast) {
            // Pick a random char
            const randomChar = rollChars[Math.floor(Math.random() * rollChars.length)];
            return { ...l, char: randomChar };
          }
          return l;
        })
      );
      rollCount++;

      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        // Set it back to the true target letter
        setLetters((prev) =>
          prev.map((l) => (l.isLast ? { ...l, char: targetLastLetter } : l))
        );
        
        // Wait a brief moment showing the correct name before starting to split
        setTimeout(() => {
          setAnimatingLastLetter(false); // Trigger the split animation
          
          // Wait for the split animation to finish before unmounting the screen
          setTimeout(onComplete, 1200);
        }, 1000);
      }
    }, 80);

    return () => clearInterval(rollInterval);
  }, [name, targetLastLetter, onComplete]);

  // Framer Motion variants for individual letters splitting apart
  const splitVariants = {
    initial: (l) => ({
      y: l.isLast ? 0 : 40,
      opacity: l.isLast ? 1 : 0,
      x: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      x: 0,
    },
    exit: (l) => {
      // Create a splitting effect by moving letters left or right depending on their position
      // The middle of the name is roughly index 7
      const isLeft = l.id < 7;
      return {
        y: (Math.random() - 0.5) * 100, // slight random vertical spread
        x: isLeft ? -100 - (7 - l.id) * 30 : 100 + (l.id - 7) * 30, // split outwards
        opacity: 0,
        filter: "blur(10px)",
      };
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505]"
      >
        <div className="flex text-5xl md:text-7xl font-display font-bold text-white tracking-widest overflow-hidden p-8">
          <AnimatePresence>
            {animatingLastLetter && letters.map((l) => (
              <motion.span
                key={l.id}
                custom={l}
                variants={splitVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: animatingLastLetter ? 0.6 : 0.8, // slower exit for the split
                  delay: animatingLastLetter && !l.isLast ? l.id * 0.05 : 0,
                  ease: animatingLastLetter ? "easeOut" : "easeInOut",
                }}
                className={`inline-block ${l.char === " " ? "w-4 md:w-8" : ""} ${
                  l.isLast ? "text-[#ff0000]" : "text-white"
                }`}
              >
                {l.char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
