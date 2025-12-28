
import React from 'react';
import { PROGRAM } from '../constants';
import { Clock, MapPin, Info } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 md:px-8">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">Il Programma</h1>
        <p className="text-slate-500">Dalla partenza al rientro: ecco cosa faremo.</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-12">
        {PROGRAM.map((day, dayIndex) => (
          <div key={dayIndex} className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                <span className="block text-xs uppercase font-bold tracking-tighter opacity-80">Giorno {dayIndex + 1}</span>
                <span className="block text-lg font-serif">{day.date}</span>
              </div>
              <h2 className="text-2xl font-serif text-slate-800">{day.title}</h2>
            </div>

            <div className="ml-6 border-l-2 border-slate-200 pl-8 space-y-8">
              {day.items.map((item, itemIndex) => (
                <div key={itemIndex} className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></div>
                  <div className="glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      {item.time && (
                        <div className="flex items-center gap-1 text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded-md">
                          <Clock size={14} />
                          {item.time}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-slate-800">{item.activity}</h3>
                    </div>
                    
                    {item.location && (
                      <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                    )}

                    {item.description && (
                      <p className="text-slate-600 leading-relaxed mb-3">
                        {item.description}
                      </p>
                    )}

                    {item.note && (
                      <div className="flex items-start gap-2 bg-amber-50 text-amber-800 p-3 rounded-xl text-sm italic">
                        <Info size={16} className="mt-0.5 shrink-0" />
                        <span>{item.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
