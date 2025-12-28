import React, { useState } from 'react';
import { NYE_MENU, HONEST_NYE_MENU } from '../constants'; // Importa entrambi
import { UtensilsCrossed, Star, Sparkles, Loader2, Heart } from 'lucide-react';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState<MenuItem[]>(NYE_MENU);
  const [isHonestMode, setIsHonestMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const categories = Array.from(new Set(currentMenu.map((item) => item.category)));

  const toggleHonesty = () => {
    if (isHonestMode) {
      setCurrentMenu(NYE_MENU);
      setIsHonestMode(false);
      return;
    }

    // Simuliamo un brevissimo caricamento per dare enfasi al cambio
    setIsLoading(true);
    setTimeout(() => {
      setCurrentMenu(HONEST_NYE_MENU);
      setIsHonestMode(true);
      setIsLoading(false);
    }, 800); 
  };

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 md:px-8">
      <header className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">Cenone di Capodanno</h1>
        <p className="text-slate-500 uppercase tracking-widest text-sm">31 Dicembre 2024 • Ore 20:00</p>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleHonesty}
            disabled={isLoading}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-lg ${
              isHonestMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : isHonestMode ? (
              <Sparkles size={18} />
            ) : (
              <Star size={18} />
            )}
            {isLoading 
              ? "Cucinando la verità..." 
              : isHonestMode 
                ? "Torna al Menù Formale" 
                : "Versione 'Senza Fronzoli'"}
          </button>
        </div>
      </header>

      <div className={`max-w-2xl mx-auto glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 ${isHonestMode ? 'bg-blue-50/90 border-blue-200' : 'bg-white/80'}`}>
        {/* Elementi Decorativi */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-50 blur-2xl transition-colors duration-500 ${isHonestMode ? 'bg-blue-200' : 'bg-blue-50'}`}></div>
        <div className={`absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-30 blur-3xl transition-colors duration-500 ${isHonestMode ? 'bg-indigo-200' : 'bg-blue-100'}`}></div>

        {isHonestMode && (
          <div className="absolute top-4 left-4 text-[10px] font-bold text-blue-700 uppercase tracking-widest border border-blue-200 px-2 py-1 rounded bg-white/50">
            Qualità Garantita, Nome Semplificato
          </div>
        )}

        <div className="relative z-10 space-y-12">
          {categories.map((category) => (
            <div key={category} className="text-center">
              <h2 className={`text-xl font-serif italic border-b pb-2 mb-6 uppercase tracking-widest transition-colors duration-500 ${isHonestMode ? 'text-blue-800 border-blue-200' : 'text-slate-700 border-blue-100'}`}>
                {category}
              </h2>
              <div className="space-y-8">
                {currentMenu.filter((item) => item.category === category).map((item, idx) => (
                  <div key={idx} className="group">
                    <h3 className={`text-2xl font-serif mb-1 transition-all duration-300 ${isHonestMode ? 'text-slate-900 drop-shadow-sm' : 'text-slate-800 group-hover:text-blue-600'}`}>
                      {item.dish}
                    </h3>
                    {item.ingredients && (
                      <p className={`text-sm italic font-light transition-colors duration-300 ${isHonestMode ? 'text-blue-900/80 leading-relaxed' : 'text-slate-500'}`}>
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-slate-100 pt-8">
          {isHonestMode ? (
            <Heart className="mx-auto text-rose-400 mb-4 animate-pulse" size={32} />
          ) : (
            <UtensilsCrossed className="mx-auto text-slate-300 mb-4" size={32} />
          )}
          <p className="text-slate-400 font-serif text-sm">
            {isHonestMode 
              ? "Pochi giri di parole, tanta sostanza nel piatto." 
              : "Bevande incluse: Vino locale, acqua e caffè."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;