import { useNavigate } from 'react-router-dom';

const HalamanKontak = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white flex flex-col p-8 md:p-16 font-sans overflow-hidden relative">
      <nav className="flex justify-between items-center mb-16 md:mb-24 z-10 w-full max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xs tracking-[0.4em] font-semibold uppercase">JelajahBali</span>
        </div>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 border border-white/20 rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Kembali ke Daftar
        </button>
      </nav>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 z-10 w-full max-w-6xl mx-auto items-center">
        <div className="md:col-span-12 xl:col-span-7 flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase mb-4">Layanan Pengelola</span>
          <h1 className="text-6xl md:text-[100px] leading-[1] md:leading-[0.85] font-light italic font-serif mb-8">
            Hubungi<br className="hidden md:block"/>
            <span className="not-italic">Kami.</span>
          </h1>
          <div className="h-[1px] w-24 bg-white/30 mb-8"></div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed font-light">
            Tim kami siap melayani pertanyaan seputar destinasi, paket wisata eksklusif, dan bantuan operasional selama perjalanan Anda di Pulau Dewata.
          </p>
        </div>

        <div className="md:col-span-12 xl:col-span-5 flex flex-col justify-center space-y-12 border-l border-white/10 pl-8 md:pl-16">
          <div className="space-y-8">
            <div className="group">
              <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Pengelola Utama</p>
              <p className="text-xl font-light tracking-tight">Admin JelajahBali</p>
            </div>

            <div className="group">
              <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Surat Elektronik</p>
              <p className="text-xl font-light tracking-tight">info@jelajahbali.com</p>
            </div>

            <div className="group">
              <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Telepon & WhatsApp</p>
              <p className="text-xl font-light tracking-tight text-[#D4AF37]">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[10px] tracking-widest text-white/30 uppercase mb-4">Jam Operasional</p>
            <div className="flex justify-between text-xs font-light mb-2">
              <span className="text-white/60">Senin — Jumat</span>
              <span>08:00 - 20:00 WITA</span>
            </div>
            <div className="flex justify-between text-xs font-light">
              <span className="text-white/60">Sabtu — Minggu</span>
              <span>09:00 - 17:00 WITA</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 flex flex-col md:flex-row justify-between items-center md:items-end pt-8 border-t border-white/10 z-10 w-full max-w-6xl mx-auto">
        <div className="text-[9px] tracking-widest text-white/30 uppercase mb-4 md:mb-0">
          Denpasar, Bali — Indonesia
        </div>
        <div className="flex space-x-8 text-[9px] tracking-widest text-white/30 uppercase">
          <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
          <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
        </div>
      </footer>

      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default HalamanKontak;
