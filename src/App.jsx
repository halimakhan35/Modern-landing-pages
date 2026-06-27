import React, { useState } from 'react';
import { ShoppingBag, ShieldCheck, Zap, Layers } from 'lucide-react';
import DroneNavbar from './components/DroneNavbar';
import DroneHero from './components/DroneHero';
import DroneProducts from './components/DroneProducts';
import DroneShowcase from './components/DroneShowcase';

export default function App() {
  // Cart state to make the page interactive
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">

      {/* Dynamic Navbar with Live Cart Count */}
      <header className="sticky top-0 z-50 bg-[#070a13]/80 backdrop-blur-md border-b border-slate-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-black text-xl tracking-tighter">DRONE</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-black text-xl tracking-tighter">MATRIX</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400 tracking-widest uppercase">
          <a href="#gear" className="hover:text-cyan-400 transition-colors">Gears</a>
          <a href="#specs" className="hover:text-cyan-400 transition-colors">Specifications</a>
          <a href="#cinematic" className="hover:text-cyan-400 transition-colors">Showcase</a>
        </nav>

        {/* Live Cart Action Icon */}
        <div className="flex items-center gap-4">
          <div className="relative p-2 bg-slate-900 rounded-md border border-slate-800 text-cyan-400">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[9px] font-bold font-mono h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
          <button className="hidden sm:block px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider rounded transition-all shadow-lg shadow-orange-500/10 cursor-pointer">
            Inquire Bulk
          </button>
        </div>
      </header>

      {/* Main Layout Wrap */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-28">

        <DroneHero />

        {/* Pass the dynamic function to products section */}
        <div id="gear">
          <DroneProducts onAddToCart={handleAddToCart} />
        </div>

        {/* NEW MEANINGFUL SECTION: Technical Specs Matrix */}
        <section id="specs" className="space-y-8 border-t border-slate-900/60 pt-16">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-orange-400 font-bold tracking-widest uppercase"> BENCHMARK TESTING</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Defense Matrix Specs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-slate-950/40 border border-slate-900 rounded-xl space-y-3">
              <div className="w-10 h-10 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400"><ShieldCheck size={20} /></div>
              <h4 className="font-bold uppercase text-sm text-slate-200">High-Impact Resistance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Absorbs structural shocks up to 4.8J kinetic impact energy safely away from drone camera optics.</p>
            </div>
            <div className="p-6 bg-slate-950/40 border border-slate-900 rounded-xl space-y-3">
              <div className="w-10 h-10 mx-auto rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400"><Zap size={20} /></div>
              <h4 className="font-bold uppercase text-sm text-slate-200">Zero Signal Deflection</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Anti-interference carbon fiber composite guarantees absolute zero transmission loss with DJI grids.</p>
            </div>
            <div className="p-6 bg-slate-950/40 border border-slate-900 rounded-xl space-y-3">
              <div className="w-10 h-10 mx-auto rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400"><Layers size={20} /></div>
              <h4 className="font-bold uppercase text-sm text-slate-200">Ultra Lightweight Tech</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Weighing less than 4 grams, it keeps aerodynamic balancing flawless without straining core gimbals.</p>
            </div>
          </div>
        </section>

        <DroneShowcase />

        {/* NEW MEANINGFUL SECTION: Contact/Wholesale Form */}
        <section className="max-w-xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-slate-950 to-[#0b101d] border border-slate-900 space-y-6 text-center">
          <div className="space-y-1">
            <h3 className="text-xl font-black uppercase text-white tracking-tight">Request Agency Pricing</h3>
            <p className="text-xs text-slate-400">Need protection gear in bulk for your tech fleet? Let's connect.</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="ENTER CLIENT EMAIL"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-200 uppercase focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="w-full py-3 bg-slate-100 hover:bg-cyan-400 hover:text-slate-950 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer">
              Secure Quote Blueprint
            </button>
          </form>
        </section>

      </main>

      <footer className="text-center py-8 text-[10px] font-mono text-slate-600 border-t border-slate-950 mt-12 bg-slate-950/20">
        © 2026 DRONEMATRIX LABS. ALL AERIAL RIGHTS RESERVED.
      </footer>
    </div>
  );
}