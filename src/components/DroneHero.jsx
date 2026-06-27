import React from 'react';
import { Eye, ShieldCheck } from 'lucide-react';

export default function DroneHero() {
  return (
    <section className="text-center space-y-6 max-w-4xl mx-auto pt-12 md:pt-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
        <ShieldCheck size={12} /> Military Grade Lens Protection
      </div>
      
      <h1 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase leading-[0.95] text-white">
        Precision Engineering For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">Aerial Masters</span>
      </h1>
      
      <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
        Equip your setup with ultra-light gimbal lens guards, custom carbon fiber assets, and cinematic filtration optics engineered for extreme high-speed execution.
      </p>

      {/* Interactive Button: Icon changes state smoothly on Hover */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10 hover:bg-cyan-400 transition-all cursor-pointer group">
          Explore Pro Gear
          <Eye size={14} className="group-hover:scale-120 transition-transform duration-300" />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-800 bg-slate-900/30 hover:border-slate-700 text-slate-300 text-xs tracking-widest uppercase font-bold transition-all cursor-pointer">
          View Supplier Agency
        </button>
      </div>
    </section>
  );
}