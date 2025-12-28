
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Snowflake, Sun, Cloud, CloudRain, Thermometer, Wind, Loader2 } from 'lucide-react';

interface DayWeather {
  date: string;
  tempMin: number;
  tempMax: number;
  condition: 'snow' | 'sun' | 'cloud' | 'rain';
  description: string;
}

const WeatherWidget: React.FC = () => {
  const [weatherData, setWeatherData] = useState<DayWeather[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: "Provide a typical weather outlook for Hône, Val d'Aosta, Italy from December 31st to January 4th. Include min/max temperatures in Celsius and general conditions.",
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                forecast: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      date: { type: Type.STRING, description: "The date, e.g., '31 Dic'" },
                      tempMin: { type: Type.NUMBER },
                      tempMax: { type: Type.NUMBER },
                      condition: { 
                        type: Type.STRING, 
                        enum: ['snow', 'sun', 'cloud', 'rain'],
                        description: "Standard condition identifier" 
                      },
                      description: { type: Type.STRING, description: "Short description in Italian" }
                    },
                    required: ["date", "tempMin", "tempMax", "condition", "description"]
                  }
                }
              },
              required: ["forecast"]
            }
          }
        });

        const data = JSON.parse(response.text || '{}');
        setWeatherData(data.forecast);
      } catch (err) {
        console.error("Weather fetch failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getIcon = (condition: string) => {
    switch (condition) {
      case 'snow': return <Snowflake className="text-blue-400" size={24} />;
      case 'sun': return <Sun className="text-amber-400" size={24} />;
      case 'rain': return <CloudRain className="text-slate-400" size={24} />;
      default: return <Cloud className="text-slate-400" size={24} />;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white/30 backdrop-blur-md rounded-3xl border border-white/20 min-h-[200px]">
        <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
        <p className="text-slate-500 text-sm italic">Consultando gli spiriti della montagna...</p>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="p-6 text-center glass-card rounded-3xl text-slate-500 text-sm">
        Previsioni meteo al momento non disponibili. Ricorda di portare la giacca pesante!
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6 justify-center">
        <Thermometer className="text-blue-600" size={20} />
        <h2 className="text-xl font-serif text-slate-800">Meteo Previsto: Hône (VdA)</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {weatherData.map((day, idx) => (
          <div key={idx} className="glass-card p-4 rounded-2xl flex flex-col items-center text-center shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{day.date}</span>
            <div className="mb-3 p-2 bg-blue-50/50 rounded-full">
              {getIcon(day.condition)}
            </div>
            <div className="flex gap-2 text-sm font-semibold mb-1">
              <span className="text-blue-600">{day.tempMin}°</span>
              <span className="text-slate-300">/</span>
              <span className="text-rose-600">{day.tempMax}°</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight h-8 flex items-center">
              {day.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400 italic">
        <span className="flex items-center gap-1"><Wind size={10} /> Clima Alpino</span>
        <span>•</span>
        <span>Aggiornato via AI</span>
      </div>
    </div>
  );
};

export default WeatherWidget;
