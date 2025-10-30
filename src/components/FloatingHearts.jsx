export default function FloatingHearts({ count = 18 }) {
  const items = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const size = 10 + Math.random() * 16; // px
    const delay = Math.random() * 6; // s
    const duration = 8 + Math.random() * 10; // s
    const opacity = 0.25 + Math.random() * 0.5;
    return { i, left, size, delay, duration, opacity };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120vh) translateX(20px) scale(1.1); opacity: 0; }
        }
        .heart::before, .heart::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, #fbcfe8, #f472b6 60%, transparent 70%);
          border-radius: 50%;
        }
        .heart::before { left: -50%; }
        .heart::after { top: -50%; }
      `}</style>
      {items.map(({ i, left, size, delay, duration, opacity }) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: `${left}%`,
            bottom: '-40px',
            width: `${size}px`,
            height: `${size}px`,
            animation: `floatUp ${duration}s linear ${delay}s infinite`,
            opacity,
            filter: 'drop-shadow(0 6px 14px rgba(244,114,182,0.35))',
          }}
        >
          <span className="heart absolute inset-0" />
        </span>
      ))}
    </div>
  );
}
