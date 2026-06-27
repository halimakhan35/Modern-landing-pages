import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function DroneProducts({ onAddToCart }) {
  const products = [
    { 
      id: "01", 
      name: "Gimbal Lens Protector v4", 
      spec: "Tempered Glass / DJI Friendly", 
      price: "$49.00",
      imgUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: "02", 
      name: "Carbon Fiber Strut Guard", 
      spec: "Ultra Lightweight / Aero Impact", 
      price: "$85.00",
      imgUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=500&q=80"
    },
    { 
      id: "03", 
      name: "Cine-ND Optical Filter Kit", 
      spec: "4-Pack Polarized / Anti-Scratch", 
      price: "$120.00",
      imgUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="gear" className="space-y-12 w-full">
      
      {/* 100% Perfectly Centered Header Block */}
      <div className="text-center max-w-2xl mx-auto border-b border-slate-900 pb-6 mb-8 flex flex-col items-center justify-center">
        <span className="text-[10px] font-mono font-bold text-orange-500 tracking-widest uppercase block mb-1">
           PREMIUM PROTECTION
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3 text-center w-full">
          Gimbal & Lens Ecosystem
        </h2>
        
        <p className="text-slate-400 font-mono text-xs leading-relaxed tracking-wide text-center max-w-md mx-auto block">
          High impact defense components built specifically to guard high-end drone camera mechanisms.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {products.map((item) => (
          <div key={item.id} className="glass-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:border-cyan-500/30">
            <div className="absolute top-2 right-4 text-7xl font-black text-slate-900/30 select-none group-hover:text-cyan-500/5 group-hover:scale-110 transition-all duration-500 font-mono">
              {item.id}
            </div>

            <div className="space-y-6 relative z-10">
              <div className="h-44 w-full bg-[#111622] rounded-lg border border-slate-900/60 flex items-center justify-center overflow-hidden relative">
                <img src={item.imgUrl} alt={item.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 ease-out" />
                <div className="absolute bottom-2 right-2 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800 text-[10px] font-mono text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">AERO-GEAR</div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">{item.spec}</span>
                <h3 className="font-bold text-base text-slate-200 uppercase tracking-tight mt-0.5">{item.name}</h3>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-900/80 relative z-10">
              <span className="font-mono text-sm font-bold text-orange-400">{item.price}</span>
              <button onClick={onAddToCart} className="p-2 rounded-md bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 transition-all duration-300 cursor-pointer">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}