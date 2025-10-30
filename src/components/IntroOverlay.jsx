import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay({ onFinish, duration = 5600 }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), duration);
    return () => clearTimeout(t);
  }, [onFinish, duration]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-950 text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_40%),_radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative px-6"
        >
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white/90 leading-relaxed drop-shadow-xl">
              <span className="block font-[\'Great Vibes\',cursive] text-4xl sm:text-5xl md:text-6xl text-pink-200">
                Once upon a quiet night,
              </span>
              <span className="mt-4 block font-light">
                I built a little world — just for you, Omi 💗
              </span>
            </h1>
          </div>
        </motion.div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap');
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
