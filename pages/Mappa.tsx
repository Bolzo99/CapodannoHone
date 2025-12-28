
import React from 'react';
import InteractiveMap from '../components/InteractiveMap';
import { Map as MapIcon, Compass } from 'lucide-react';

const Mappa: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 md:px-8 flex flex-col items-center">
      <header className="max-w-4xl w-full text-center mb-10">
        <div className="flex justify-center mb-4 text-blue-600">
          <MapIcon size={40} className="opacity-80" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">Mappa dell'Evento</h1>
        <p className="text-slate-500">Esplora i luoghi che visiteremo e ottieni indicazioni stradali per ogni tappa.</p>
      </header>

      <div className="w-full max-w-5xl h-[60vh] md:h-[70vh]">
        <InteractiveMap />
      </div>

      <div className="max-w-4xl w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Compass size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-1">Navigazione Facilitata</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Tocca qualsiasi punto sulla mappa per vedere i dettagli e aprire automaticamente il navigatore del tuo smartphone.
            </p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <MapIcon size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-1">Luoghi di interesse</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Dalle stazioni di partenza in Veneto fino alle vette di Courmayeur e del Monte Rosa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mappa;
