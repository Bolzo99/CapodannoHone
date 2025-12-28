
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Utensils, Phone, Home, Map as MapIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/programma', label: 'Programma', icon: <Calendar size={20} /> },
    { path: '/mappa', label: 'Mappa', icon: <MapIcon size={20} /> },
    { path: '/menu', label: 'Menù', icon: <Utensils size={20} /> },
    { path: '/contatti', label: 'Contatti', icon: <Phone size={20} /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[1000] w-[95%] max-w-lg bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-2 md:top-4 md:bottom-auto">
      <ul className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex flex-col md:flex-row items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span className="text-[10px] md:text-sm font-semibold">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
