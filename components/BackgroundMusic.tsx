import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showSplash, setShowSplash] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Crea e shuffla la playlist una sola volta all'avvio
  const [playlist] = useState(() => {
    const tracks = [
      '/CapodannoHone/music/canzone1.mp3',
      '/CapodannoHone/music/canzone2.mp3',
      '/CapodannoHone/music/canzone3.mp3',
      '/CapodannoHone/music/canzone4.mp3',
    ];
    // Fisher-Yates shuffle
    const shuffled = [...tracks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleEnter = () => {
    setShowSplash(false);
    // Avvia la musica dopo l'interazione dell'utente
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Errore durante la riproduzione:', error);
        });
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTrackEnd = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    // Il cambio di src farà ricaricare l'audio
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]}
        onEnded={handleTrackEnd}
      />

      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-blue-500 to-slate-700 flex items-center justify-center">
          <div className="text-center space-y-8 px-4">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                🎉 Capodanno a Hône 2025 🎉
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Un&apos;avventura indimenticabile ti aspetta!
              </p>
            </div>
            <button
              onClick={handleEnter}
              className="group px-12 py-6 bg-white text-blue-600 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:bg-blue-50"
            >
              <span className="flex items-center gap-3">
                Fai partire la magia!
                <Music className="w-8 h-8 group-hover:animate-pulse" />
              </span>
            </button>
          </div>
        </div>
      )}
      
      <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-slate-200">
        <div className="flex items-center gap-3">
          {/* Icona musica */}
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
            <Music className="w-5 h-5 text-white" />
          </div>

          {/* Controlli */}
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              title={isPlaying ? 'Pausa' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-slate-700" />
              ) : (
                <Play className="w-5 h-5 text-slate-700 ml-0.5" />
              )}
            </button>

            {/* Volume Slider */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                title={isMuted ? 'Attiva audio' : 'Muto'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-slate-700" />
                ) : (
                  <Volume2 className="w-5 h-5 text-slate-700" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(59 130 246) ${volume * 100}%, rgb(226 232 240) ${volume * 100}%, rgb(226 232 240) 100%)`
                }}
              />
            </div>
          </div>

          {/* Track indicator */}
          <div className="text-xs text-slate-500 font-medium">
            {currentTrackIndex + 1}/{playlist.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;