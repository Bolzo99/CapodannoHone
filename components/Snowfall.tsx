
import React, { useEffect, useState, useRef } from 'react';

const Snowfall: React.FC = () => {
  const [flakes, setFlakes] = useState<{ id: number; left: number; duration: number; delay: number; size: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newFlakes = Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 7,
      delay: Math.random() * -10, // Negative delay to start mid-animation
      size: 2 + Math.random() * 5,
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed inset-0 z-0 overflow-hidden cursor-default transition-colors duration-700"
      style={{
        pointerEvents: 'auto', // Needs to catch hover
        background: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
      }}
    >
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full transition-opacity duration-1000 ease-in-out"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            top: '-10px',
            opacity: isHovered ? 0.7 : 0,
            filter: 'blur(1px)',
            pointerEvents: 'none', // Ensure flakes don't block clicks
            animation: isHovered ? `fall ${flake.duration}s linear ${flake.delay}s infinite` : 'none',
          }}
        />
      ))}
      
      {/* Visual hint when not hovered */}
      {!isHovered && (
        <div className="absolute bottom-8 right-8 text-blue-400/30 flex flex-col items-center gap-2 pointer-events-none animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-t from-blue-400/30 to-transparent rounded-full"></div>
          <p className="text-[10px] uppercase tracking-widest font-bold">Passa il mouse per la neve</p>
        </div>
      )}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) translateX(0px);
          }
          50% {
            transform: translateY(50vh) translateX(25px);
          }
          100% {
            transform: translateY(110vh) translateX(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Snowfall;
