import React from 'react';
import { Play, Calendar } from 'lucide-react';

export default function DroneShowcase() {
  const reels = [
    { 
      title: "Mountain Ridge Cinematic Run", 
      location: "Karakoram Range", 
      duration: "4k 60fps",
      // Cyber-tech dark gradient placeholder
      cardClass: "bg-gradient-to-br from-slate-900 to-cyan-950/40"
    },
    { 
      title: "Urban Twilight Logistics Tracking", 
      location: "Metropolis Grid", 
      duration: "1080p 120fps",
      // Cyber-tech dark gradient placeholder
      cardClass: "bg-gradient-to-br from-slate-900 to-orange-950/30"
    }
  ];

  return (
    <section id="cinematic" className="space-y-12">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">AERIAL SHOWCASE</span>
        <h2 className="text-3xl font-black uppercase text-white">Captured On Matrix Guard</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reels.map((reel, index) => (
          <div 
            key={index} 
            className={`group relative rounded-xl border border-slate-900/80 h-64 flex flex-col justify-end p-6 cursor-pointer shadow-xl transition-all duration-500 hover:border-cyan-500/20 ${reel.cardClass}`}
          >
            
            {/* Tech Grid Patterns using Pure CSS (Bina kisi image ke) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
            
            {/* Cinematic Gradient Bottom Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 -z-10"></div>

            {/* Hover Play Button Overlay Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                <Play size={20} fill="currentColor" />
              </div>
            </div>

            {/* Reel Details Meta Info */}
            <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative z-10">
              <div className="flex items-center gap-4 text-[10px] font-mono text-cyan-400 font-bold tracking-widest uppercase">
                <span className="flex items-center gap-1"><Calendar size={10} /> June 2026</span>
                <span>{reel.duration}</span>
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-orange-400 transition-colors">
                {reel.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium">{reel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}