import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';

const HalamanDaftar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white flex flex-col p-8 md:p-16 font-sans overflow-x-hidden relative">
      <nav className="flex justify-between items-center mb-16 md:mb-24 z-10 w-full max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xs tracking-[0.4em] font-semibold uppercase">JelajahBali</span>
        </div>
        <button 
          onClick={() => navigate('/kontak')}
          className="px-6 py-2 border border-white/20 rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Lihat Kontak
        </button>
      </nav>

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 z-10 w-full max-w-6xl mx-auto items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center lg:sticky lg:top-32"
        >
          <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase mb-4">Direktori Pariwisata</span>
          <h1 className="text-6xl md:text-[100px] leading-[1] md:leading-[0.85] font-light italic font-serif mb-8">
            Jelajah<br className="hidden md:block"/>
            <span className="not-italic">Surga.</span>
          </h1>
          <div className="h-[1px] w-24 bg-white/30 mb-8"></div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed font-light">
            Temukan destinasi wisata menakjubkan di Bali. Dari pantai berpasir hingga hamparan sawah hijau, semuanya menanti kedatangan Anda.
          </p>
        </motion.div>

        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-4 lg:pl-8 xl:pl-16 mt-12 lg:mt-0">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
              onClick={() => navigate(`/detail/${dest.id}`)}
            >
              <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col space-y-2 z-10">
                  <span className="font-light tracking-wide text-xl group-hover:text-[#D4AF37] transition-colors">{dest.name}</span>
                  <span className="text-xs text-white/40 font-light">{dest.location}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-300 z-10">
                  <ChevronRight size={16} className="text-white/50 group-hover:text-[#D4AF37] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="mt-24 flex flex-col md:flex-row justify-between items-center md:items-end pt-8 border-t border-white/10 z-10 w-full max-w-6xl mx-auto">
        <div className="text-[9px] tracking-widest text-white/30 uppercase mb-4 md:mb-0">
          Denpasar, Bali — Indonesia
        </div>
        <div className="flex space-x-8 text-[9px] tracking-widest text-white/30 uppercase">
          <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
          <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
        </div>
      </footer>

      <div className="fixed top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default HalamanDaftar;
