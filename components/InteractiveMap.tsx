
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Flag, Camera, Bed, Mountain, MapPin } from 'lucide-react';

interface Location {
  name: string;
  coords: [number, number];
  description: string;
  type: 'ritrovo' | 'tappa' | 'alloggio' | 'attivita';
}

const locations: Location[] = [
  { name: "Veternigo (Parchetto di Leo)", coords: [45.5186, 12.0463], description: "Punto di ritrovo principale ore 8:00.", type: 'ritrovo' },
  { name: "Padova (Stazione FS)", coords: [45.4177, 11.8812], description: "Ritrovo alternativo ore 8:30.", type: 'ritrovo' },
  { name: "Bergamo", coords: [45.695, 9.67], description: "Sosta per visita città e pranzo.", type: 'tappa' },
  { name: "Hône (Auberge de la Gare)", coords: [45.6111, 7.7389], description: "La nostra base per il soggiorno.", type: 'alloggio' },
  { name: "Borgo di Bard", coords: [45.608, 7.744], description: "Visita culturale e Forte di Bard.", type: 'attivita' },
  { name: "Monte Rosa (Monterosa Ski)", coords: [45.837, 7.823], description: "Giornata di sci e neve.", type: 'attivita' },
  { name: "Châtillon", coords: [45.750, 7.616], description: "Visita facoltativa del 3 Gennaio.", type: 'attivita' },
  { name: "Aosta", coords: [45.737, 7.320], description: "Visita facoltativa del 3 Gennaio.", type: 'attivita' },
  { name: "Courmayeur", coords: [45.787, 6.972], description: "Visita facoltativa del 3 Gennaio.", type: 'attivita' },
];

const InteractiveMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    mapRef.current = L.map(mapContainerRef.current, {
      center: [45.65, 8.5],
      zoom: 8,
      scrollWheelZoom: false
    });

    // Add CartoDB Voyager tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(mapRef.current);

    // Helpers to get visual styling
    const getMarkerColor = (type: string) => {
      switch (type) {
        case 'ritrovo': return '#ef4444'; // Red
        case 'alloggio': return '#2563eb'; // Blue
        case 'tappa': return '#f59e0b'; // Amber
        case 'attivita': return '#10b981'; // Emerald
        default: return '#64748b';
      }
    };

    const getMarkerIconHtml = (type: string) => {
      const size = 18;
      // We use simple SVG paths for the markers to avoid complexity with React rendering inside Leaflet
      switch (type) {
        case 'ritrovo': 
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`;
        case 'alloggio': 
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
        case 'tappa': 
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;
        case 'attivita': 
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>`; // Skis/Direction feel
        default: 
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`;
      }
    };

    // Add markers
    locations.forEach(loc => {
      const color = getMarkerColor(loc.type);
      const iconSvg = getMarkerIconHtml(loc.type);
      
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div style="
            background-color: ${color}; 
            width: 34px; 
            height: 34px; 
            border-radius: 50% 50% 50% 0; 
            transform: rotate(-45deg); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            border: 2px solid white; 
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          ">
            <div style="transform: rotate(45deg); color: white;">
              ${iconSvg}
            </div>
          </div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 34], // Bottom point anchor
        popupAnchor: [0, -34]
      });

      const marker = L.marker(loc.coords, { icon: customIcon }).addTo(mapRef.current!);
      
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.coords[0]},${loc.coords[1]}`;
      
      marker.bindPopup(`
        <div class="p-2 min-w-[180px]">
          <h4 class="font-bold text-slate-900 mb-1 flex items-center gap-2">
            ${loc.name}
          </h4>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed">${loc.description}</p>
          <a href="${mapsUrl}" target="_blank" class="flex items-center justify-center gap-2 bg-blue-600 text-white text-xs py-2 px-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md">
            Ottieni indicazioni
          </a>
        </div>
      `);
    });

    // Adjust view to fit all markers
    const group = L.featureGroup(locations.map(loc => L.marker(loc.coords)));
    mapRef.current.fitBounds(group.getBounds().pad(0.2));

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
      <div ref={mapContainerRef} className="w-full h-full z-10" />
      
      {/* Legend */}
      <div className="absolute top-4 right-4 z-[400] glass-card p-4 rounded-2xl shadow-xl text-[11px] space-y-3 border border-white/40">
        <h5 className="font-bold text-slate-400 uppercase tracking-widest text-[9px] mb-2">Legenda</h5>
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white shadow-sm">
            <Flag size={14} />
          </div> 
          <span className="font-medium text-slate-700">Ritrovo</span>
        </div>
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Bed size={14} />
          </div> 
          <span className="font-medium text-slate-700">Alloggio</span>
        </div>
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-sm">
            <Camera size={14} />
          </div> 
          <span className="font-medium text-slate-700">Tappa</span>
        </div>
        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
            <Mountain size={14} />
          </div> 
          <span className="font-medium text-slate-700">Attività</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
