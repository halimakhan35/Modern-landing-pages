import React, { useState } from 'react';
import { Crosshair, Menu, X } from 'lucide-react';

export default function DroneNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900 bg-[#0A0D14]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black tracking-widest text-white text-lg">
          <Crosshair size={22} className="text-cyan-400" />
          <span>DRONE<span className="text-orange-500">MATRIX</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-slate-400">
          <a href="#gear" className="hover:text-cyan-400 transition-colors uppercase">Accessories</a>
          <a href="#cinematic" className="hover:text-cyan-400 transition-colors uppercase">Cinematic Reels</a>
          <button className="px-4 py-2 rounded-md border border-orange-500/40 text-orange-400 text-xs font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer">
            LAUNCH ACADEMY
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-400 hover:text-white cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="md:hidden glass-card absolute top-16 left-0 right-0 p-6 flex flex-col gap-4 text-center text-xs font-bold tracking-widest">
          <a href="#gear" onClick={() => setIsOpen(false)} className="py-2 text-slate-300 hover:text-cyan-400">Accessories</a>
          <a href="#cinematic" onClick={() => setIsOpen(false)} className="py-2 text-slate-300 hover:text-cyan-400">Cinematic Reels</a>
          <button className="w-full py-3 rounded bg-orange-500 text-white">LAUNCH ACADEMY</button>
        </div>
      )}
    </nav>
  );
}