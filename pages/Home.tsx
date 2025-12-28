
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Snowflake } from 'lucide-react';
import WeatherWidget from '../components/WeatherWidget';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1600&auto=format&fit=crop"
          alt="Val d'Aosta Mountains"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-4">
            <Snowflake className="animate-spin-slow text-blue-200" size={48} />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg">
            Hône 2025
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-90 mb-8">
            Capodanno in Val d'Aosta
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/programma"
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              Vedi Programma <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro & Weather Section */}
      <section className="max-w-4xl w-full px-6 py-12 space-y-8">
        {/* Weather Widget First - Practical for checking what to pack */}
        <div className="animate-fade-in">
          <WeatherWidget />
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-serif mb-6 text-center text-slate-800">Un'avventura tra le vette</h2>
          <p className="text-lg text-slate-600 text-center leading-relaxed mb-8">
            Dal 31 Dicembre al 4 Gennaio ci immergeremo nel cuore della Valle d'Aosta.
            Tra sci, borghi medievali, la magia del Forte di Bard e il gran finale di Stranger Things, 
            sarà un Capodanno indimenticabile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <MapPin />
              </div>
              <h3 className="font-bold">Base</h3>
              <p className="text-sm text-slate-500">Hône, Val d'Aosta</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <Snowflake />
              </div>
              <h3 className="font-bold">Attività</h3>
              <p className="text-sm text-slate-500">Sci & Cultura</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <MapPin />
              </div>
              <h3 className="font-bold">Date</h3>
              <p className="text-sm text-slate-500">31/12 - 04/01</p>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
