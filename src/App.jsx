import { useEffect, useRef, useState } from 'react';
import IntroOverlay from './components/IntroOverlay.jsx';
import StoryPager from './components/StoryPager.jsx';
import FloatingHearts from './components/FloatingHearts.jsx';
import SignatureFooter from './components/SignatureFooter.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  // 7-page story content (placeholders ready to be personalized)
  const pages = [
    {
      title: 'Once upon a quiet night...',
      text:
        'In the hush of midnight, I stitched together a tiny universe — soft and starlit — so you could wander where the world feels kind.\n\nEvery glow here remembers you.',
    },
    {
      title: 'The calm I never knew',
      text:
        'Before you, silence felt empty. After you, silence feels warm — like a hand resting gently in mine, saying nothing, saying everything.',
    },
    {
      title: 'When you smile',
      text:
        'The night tilts brighter. The shy moons peek out. The restless thoughts sit quietly and listen. Even the stars learn how to glow from you.',
    },
    {
      title: "You're rare",
      text:
        'Gentle and brave in the same breath. Soft, yet you hold entire worlds together. You don’t realize it — but I do. Always.',
    },
    {
      title: 'Whispers of stars',
      text:
        'If the sky could speak, it would write your name in quiet constellations and let it drift across the blue, again and again.',
    },
    {
      title: 'You deserve peace',
      text:
        'The kind that hums like lullabies. The kind that sits beside you and waits — patiently — until you are ready to be held.',
    },
    {
      title: 'For my princess',
      text:
        'This is my love letter in motion — a small, glowing place for your heart to rest. Close your eyes. Breathe. You are cherished, Omi. Always.',
    },
  ];

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    // Attempt to autoplay silently (allowed by most browsers). User can unmute.
    a.volume = 0.35;
    a.muted = muted;
    const play = () => {
      a.play().catch(() => {});
    };
    play();
  }, [muted]);

  const toggleMute = () => {
    setMuted((m) => !m);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 text-white">
      {/* Soft starry glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10),transparent_40%),_radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.08),transparent_42%),_radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.07),transparent_45%)]" />

      {/* Floating hearts/stars */}
      <FloatingHearts count={22} />

      {/* Main content area */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        {!showIntro && (
          <div className="w-full">
            <StoryPager pages={pages} />
          </div>
        )}
      </div>

      {showIntro && (
        <IntroOverlay onFinish={() => setShowIntro(false)} />
      )}

      {/* Signature */}
      <SignatureFooter />

      {/* Ambient background audio (soft night sound) */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/02/23/audio_8e4dd70d67.mp3?filename=ambient-piano-logo-112199.mp3"
        loop
        autoPlay
        playsInline
        className="hidden"
      />

      {/* Mute / Unmute control */}
      <button
        aria-label={muted ? 'Unmute background music' : 'Mute background music'}
        onClick={toggleMute}
        className="fixed bottom-20 right-4 z-30 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-pink-100 shadow-lg ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20"
      >
        {muted ? 'Unmute 🌙' : 'Mute 🌙'}
      </button>

      {/* Import romantic + body fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap');
        :root { --serifRomance: 'Great Vibes', cursive; --softBody: 'Poppins', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        body { font-family: var(--softBody); }
      `}</style>
    </div>
  );
}

export default App;
