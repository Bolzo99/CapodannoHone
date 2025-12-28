
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Snowfall from './components/Snowfall';
import Home from './pages/Home';
import Program from './pages/Program';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Mappa from './pages/Mappa';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {/* Snowfall is now at z-0, so we ensure the main content is relative and at a higher z-index */}
        <Snowfall />
        
        {/* Background Gradients */}
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <Navbar />
        
        {/* Main content must be above Snowfall (z-0) to be clickable, but Snowfall catches hover where content is absent */}
        <main className="relative z-10 pointer-events-none">
          {/* We use pointer-events-none on main and pointer-events-auto on children cards 
              to let the Snowfall background catch hover events in empty spaces */}
          <div className="pointer-events-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programma" element={<Program />} />
              <Route path="/mappa" element={<Mappa />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contatti" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <footer className="relative z-10 py-12 text-center text-slate-400 text-sm">
          <p>© 2024 Capodanno a Hône • Organizzato con passione</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
