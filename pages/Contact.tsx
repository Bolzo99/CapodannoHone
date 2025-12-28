
import React from 'react';
import { Mail, Phone, MapPin, Instagram, ExternalLink, Info } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 md:px-8">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">Contatti & Info</h1>
        <p className="text-slate-500">Tutte le informazioni utili per il nostro soggiorno.</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card p-8 rounded-3xl">
            <h2 className="text-2xl font-serif mb-6 text-slate-800">Organizzatori</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Telefono</p>
                  <p className="text-slate-800 font-semibold">+39 0123 456789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Email</p>
                  <p className="text-slate-800 font-semibold">capodanno.hone@example.it</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Instagram</p>
                  <p className="text-slate-800 font-semibold">@capodanno_vda_2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-serif mb-4 flex items-center gap-2">
              <Info size={24} /> Promemoria Importanti
            </h2>
            <ul className="space-y-4 opacity-95 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                <p>
                  <strong>Lenzuola e asciugamani:</strong> Da portare autonomamente. 
                  In alternativa, disponibili in struttura a <strong>15€</strong>.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                <p>
                  <strong>Intolleranze:</strong> Qualora non fossero già state comunicate, si prega di scrivere agli organizzatori quanto prima.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                <p>
                  <strong>Flessibilità:</strong> Il programma è da intendersi come indicativo e sempre modificabile in ogni momento.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                <p>
                  <strong>Abbigliamento:</strong> Portare capi pesanti, termici e scarponcini per la neve.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Location & Map */}
        <div className="glass-card p-8 rounded-3xl flex flex-col h-full">
          <h2 className="text-2xl font-serif mb-6 text-slate-800">La Nostra Base</h2>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-slate-800 font-bold text-lg leading-tight">Auberge de la Gare</p>
              <p className="text-slate-500 text-sm">Hône, Valle d'Aosta</p>
            </div>
          </div>
          
          <div className="flex-1 min-h-[300px] rounded-2xl overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/hone-vda/600/800" 
              alt="Hône Val d'Aosta"
              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=45.6111,7.7389" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2"
              >
                Naviga verso la struttura <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
