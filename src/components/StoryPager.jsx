import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const labels = [
  'Next ✨',
  'Keep reading 💫',
  'Forward 🌙',
  'Onward ⭐',
  'Almost there ✨',
  'One more 💞',
  'Restart story 💌',
];

export default function StoryPager({ pages }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % pages.length);

  const page = pages[index];

  return (
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -8, rotateX: 8 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h2 className="font-['Great Vibes',cursive] text-3xl sm:text-4xl text-pink-200 text-center drop-shadow">
              {page.title}
            </h2>
            <p className="mt-5 whitespace-pre-line text-center text-base sm:text-lg leading-8 text-white/90 font-[Poppins,ui-sans-serif]">
              {page.text}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={next}
            className="group inline-flex items-center gap-2 rounded-full bg-pink-500/80 px-6 py-3 text-white shadow-xl shadow-pink-900/30 ring-1 ring-white/20 backdrop-blur hover:bg-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 transition"
          >
            <span className="font-medium">{labels[index]}</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
