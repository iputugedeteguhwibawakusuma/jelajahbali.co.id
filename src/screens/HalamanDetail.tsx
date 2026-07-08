import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';

const HalamanDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="w-full min-h-screen bg-[#050505] text-white flex flex-col p-8 md:p-16 font-sans items-center justify-center">
        <h1 className="text-3xl font-serif italic mb-4">Destinasi tidak ditemukan</h1>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 border border-white/20 rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-x-hidden relative">
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
        />
        
        <nav className="absolute top-0 left-0 w-full p-8 md:p-16 flex justify-between items-center z-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xs tracking-[0.4em] font-semibold uppercase hidden md:inline">JelajahBali</span>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-3 px-6 py-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Kembali</span>
          </button>
        </nav>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-12 left-8 md:left-16 z-20 max-w-4xl"
        >
          <div className="flex items-center space-x-4 mb-4">
            <span className="flex items-center space-x-1 text-[10px] tracking-widest text-[#D4AF37] uppercase">
              <MapPin size={12} />
              <span>{destination.location}</span>
            </span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span className="flex items-center space-x-1 text-[10px] tracking-widest text-white/70 uppercase">
              <Star size={12} className="text-[#D4AF37]" fill="currentColor" />
              <span>{destination.rating} / 5.0</span>
            </span>
          </div>
          <h1 className="text-5xl md:text-[80px] leading-[1.1] font-light italic font-serif drop-shadow-lg">
            {destination.name.split(' ')[0]} <span className="not-italic">{destination.name.split(' ').slice(1).join(' ')}</span>
          </h1>
        </motion.div>
      </div>

      <main className="flex-grow z-10 w-full max-w-6xl mx-auto px-8 md:px-16 pt-16 pb-24 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:col-span-12 xl:col-span-8 flex flex-col space-y-10"
        >
          <div className="h-[1px] w-24 bg-[#D4AF37] mb-2"></div>
          <p className="text-xl md:text-2xl font-light font-serif leading-relaxed text-white/90">
            {destination.description}
          </p>
          <p className="text-white/60 text-sm leading-loose font-light">
            {destination.fullDescription}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="md:col-span-12 xl:col-span-4 flex flex-col space-y-8"
        >
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">Daya Tarik Utama</p>
            <ul className="space-y-4">
              {destination.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-sm font-light text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>

      <footer className="mt-auto px-8 md:px-16 py-8 border-t border-white/10 z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end">
        <div className="text-[9px] tracking-widest text-white/30 uppercase mb-4 md:mb-0">
          Denpasar, Bali — Indonesia
        </div>
        <div className="flex space-x-8 text-[9px] tracking-widest text-white/30 uppercase">
          <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
          <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
        </div>
      </footer>

      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default HalamanDetail;
