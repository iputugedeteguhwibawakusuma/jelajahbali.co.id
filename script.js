/**
 * JelajahBali — Proyek Progresif Exhibition Edition
 * Core Javascript Logic (Navigation, Leaflet Map, Geolocation, WebRTC Camera, LocalStorage Journal)
 */

// 1. Data Destinasi Lengkap dengan Koordinat & Info Kunjungan
const destinations = [
  {
    id: 'kuta',
    name: 'Pantai Kuta',
    location: 'Badung, Bali',
    description: 'Pantai ikonik peraih ketenaran global, surga bagi para peselancar dan pencari kehangatan matahari terbenam.',
    fullDescription: 'Pantai Kuta adalah salah satu destinasi wisata paling terkenal di Bali. Terletak di sebelah selatan kota Denpasar, pantai ini menawarkan pasir putih melengkung yang membentang luas sepanjang beberapa kilometer, deburan ombak yang memukau bagi peselancar pemula maupun profesional, serta panorama matahari terbenam emas yang melegenda.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop',
    rating: 4.5,
    features: ['Selancar Ombak', 'Matahari Terbenam Emas', 'Kafe Pesisir', 'Pusat Belanja Kuliner'],
    coords: [-8.7224, 115.1691],
    price: 'Gratis (Hanya Parkir)',
    bestTime: 'Sore Hari (17:00 WITA)'
  },
  {
    id: 'ubud',
    name: 'Ubud',
    location: 'Gianyar, Bali',
    description: 'Urat nadi budaya Bali, dikelilingi oleh terasering sawah purba dan hutan hijau yang menenangkan jiwa.',
    fullDescription: 'Ubud merupakan jantung budaya, seni, dan spiritual Pulau Dewata. Dikelilingi oleh hutan hujan tropis yang asri, jurang-jurang mistis, serta terasering sawah ikonik Tegalalang. Ubud mengundang siapa saja yang mendambakan kedamaian batin, retret kesehatan jasmani, yoga, serta pendalaman seni tradisional lukis dan ukir Bali.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    features: ['Seni Tari & Lukis', 'Sawah Tegalalang', 'Sanctuary Monkey Forest', 'Retret Yoga & Spa'],
    coords: [-8.5069, 115.2625],
    price: 'Bervariasi per atraksi',
    bestTime: 'Pagi Hari (08:00 WITA)'
  },
  {
    id: 'tanah-lot',
    name: 'Pura Tanah Lot',
    location: 'Tabanan, Bali',
    description: 'Kuil kuno yang berdiri angkuh di atas tebing karang di tengah deburan ombak lautan lepas.',
    fullDescription: 'Pura Tanah Lot adalah monumen keagamaan yang sangat suci dan ikonik. Keajaiban pura laut ini bertumpu pada posisinya yang bertengger kokoh di atas bongkahan batu karang raksasa lepas pantai. Saat pasang naik, pura ini seakan terapung magis di tengah deburan ombak Samudra Hindia yang dahsyat.',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2000&auto=format&fit=crop',
    rating: 4.7,
    features: ['Arsitektur Pura Air', 'Gua Ular Suci', 'Mata Air Tawar Suci', 'Pasar Seni Oleh-oleh'],
    coords: [-8.6212, 115.0868],
    price: 'IDR 60.000 (Dewasa)',
    bestTime: 'Menjelang Senja (17:30 WITA)'
  },
  {
    id: 'uluwatu',
    name: 'Pura Uluwatu',
    location: 'Badung, Bali',
    description: 'Pura luhur di tepi tebing curam yang menyuguhkan teater Tari Kecak berlatar kemegahan senja.',
    fullDescription: 'Berada tepat di puncak tebing kapur vertikal setinggi 70 meter di atas permukaan laut, Pura Luhur Uluwatu menyajikan salah satu panorama samudra paling dramatis di dunia. Pura kuno penjaga pulau ini terkenal dengan kawanan kera sakral penghuninya serta pementasan legendaris drama Tari Kecak di amfiteater tebing terbuka berlatar cakrawala matahari terbenam.',
    image: 'https://images.unsplash.com/photo-1534063223594-5264b971a804?q=80&w=2000&auto=format&fit=crop',
    rating: 4.9,
    features: ['Tari Kecak Kolosal', 'Tebing Samudra Hindia', 'Sunset Amphitheatre', 'Hutan Lindung Kera'],
    coords: [-8.8291, 115.0849],
    price: 'IDR 50.000 (Pura) + IDR 150.000 (Kecak)',
    bestTime: 'Sore Hari (16:30 WITA)'
  },
  {
    id: 'nusa-penida',
    name: 'Nusa Penida',
    location: 'Klungkung, Bali',
    description: 'Pulau eksotis dengan formasi tebing purba, ceruk pantai tersembunyi, dan surga bawah laut tak tersentuh.',
    fullDescription: 'Nusa Penida adalah permata eksotis di seberang selat Bali. Pulau ini menawarkan lanskap alam yang liar dan dramatis, tersohor oleh lekukan tebing Kelingking Beach yang menyerupai dinosaurus purba, kolam alami Angel\'s Billabong, hingga keindahan bawah air Teluk Manta tempat penyelam bisa berenang berdampingan dengan Pari Manta raksasa.',
    image: 'https://images.unsplash.com/photo-1574486580970-e179e8c807fb?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    features: ['Pantai Kelingking', 'Broken Beach & Billabong', 'Snorkeling Pari Manta', 'Tebing Instagramable'],
    coords: [-8.7278, 115.5444],
    price: 'IDR 25.000 (Retribusi Pulau)',
    bestTime: 'Sepanjang Hari'
  },
  {
    id: 'bedugul',
    name: 'Pura Ulun Danu Bedugul',
    location: 'Tabanan, Bali',
    description: 'Pura terapung ikonik di tepi Danau Beratan yang berselimut kabut pegunungan dingin yang magis.',
    fullDescription: 'Terletak di dataran tinggi pegunungan Bedugul yang sejuk, Pura Ulun Danu Beratan berdiri anggun di tepi danau kawah purba yang tenang. Pura luhur ini dibangun sejak abad ke-17 untuk memuja Tridharma dan Dewi Danu, sang penguasa air. Kabut tebal yang kerap bergulir turun dari puncak bukit mengelilingi pura terapung ini menciptakan suasana mistis nan tenang.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    features: ['Danau Kawah Beratan', 'Kabut Pegunungan Sejuk', 'Kebun Raya Eka Karya', 'Pasar Buah Tradisional'],
    coords: [-8.2750, 115.1645],
    price: 'IDR 40.000 (Lokal)',
    bestTime: 'Pagi Hari (08:00 WITA)'
  },
  {
    id: 'batur',
    name: 'Gunung Batur Kintamani',
    location: 'Bangli, Bali',
    description: 'Kaldera aktif spektakuler dengan panorama danau kawah membentang berlatar fajar matahari terbit.',
    fullDescription: 'Gunung Batur menawarkan salah satu pemandangan fajar paling spektakuler di Asia Tenggara. Sebagai gunung berapi aktif yang sakral, pendakian dini hari menuju puncaknya setinggi 1.717 mdpl akan dihadiahi pemandangan magis "samudera awan" yang memukau serta pancaran fajar pertama yang memantul di permukaan Danau Batur.',
    image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=2000&auto=format&fit=crop',
    rating: 4.9,
    features: ['Trekking Matahari Terbit', 'Kaldera Vulkanik Raksasa', 'Pemandian Air Panas Alami', 'Restoran View Danau'],
    coords: [-8.2435, 115.3789],
    price: 'Gratis kawasan (Guide Trekking Berbayar)',
    bestTime: 'Subuh Hari (04:00 WITA)'
  }
];

// State Global Aplikasi
let mapInstance = null;
let userMarker = null;
let destinationMarkers = [];
let userCoords = null; // {lat, lng}
let currentFacingMode = 'environment'; // 'user' atau 'environment' untuk kamera
let videoStream = null;

// 2. Inisialisasi Aplikasi Saat Halaman Dimuat
function initApp() {
  renderList();
  populateJournalDestinations();
  loadJournalEntries();
  
  // Set default active tab style
  updateNavigationUI('daftar');

  // Matikan Loader Screen Secara Mulus setelah 1.2 detik
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('opacity-0');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    }
  }, 1200);

  // Mulai Geolocation secara senyap di background untuk mempercepat peta nanti
  silentGeolocationInit();
}

// 3. Render List Destinasi di Halaman Utama
function renderList() {
  const list = document.getElementById('destinations-list');
  const countBadge = document.getElementById('dest-count');
  
  if (countBadge) {
    countBadge.innerText = destinations.length;
  }

  if (!list) return;

  list.innerHTML = destinations.map((dest, i) => `
    <div onclick="openDetail('${dest.id}')" style="animation-delay: ${0.1 + (i * 0.1)}s" class="animate-item group cursor-pointer flex justify-between items-center bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div class="flex items-center space-x-4 z-10">
        <!-- Thumbnail -->
        <div class="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
          <img src="${dest.image}" class="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500">
        </div>
        <div class="flex flex-col space-y-1">
          <span class="font-medium tracking-wide text-lg md:text-xl group-hover:text-gold transition-colors">${dest.name}</span>
          <div class="flex items-center space-x-2 text-xs text-white/50 font-light">
            <span>${dest.location}</span>
            <span class="w-1 h-1 bg-white/30 rounded-full"></span>
            <span class="text-gold flex items-center space-x-0.5">
              <span>★</span> <span>${dest.rating}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/10 transition-all duration-300 z-10 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white/40 group-hover:text-gold transition-colors"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </div>
  `).join('');
}

// 4. Navigasi Halaman dengan Animasi & Pemeliharaan State
function navigate(pageId) {
  // Matikan semua halaman
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  // Tampilkan halaman target
  const targetPage = document.getElementById('halaman-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update visual link active di header desktop & bottom bar mobile
  updateNavigationUI(pageId);

  // Kasus Khusus: Jika masuk ke halaman PETA, inisialisasi / perbarui ukuran Leaflet Map
  if (pageId === 'peta') {
    initLeafletMap();
    if (mapInstance) {
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 350);
    }
  }

  // Scroll kembali ke atas dengan halus
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Active Menu UI
function updateNavigationUI(pageId) {
  // Desktop
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeDesktopLink = document.querySelector(`.nav-${pageId}`);
  if (activeDesktopLink) {
    activeDesktopLink.classList.add('active');
  }

  // Mobile Bottom Tab Bar
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeMobileTab = document.querySelector(`.tab-${pageId}`);
  if (activeMobileTab) {
    activeMobileTab.classList.add('active');
  }
}

// 5. Tampilkan Detail Destinasi secara Menyeluruh
function openDetail(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;

  // Render teks & gambar detail
  document.getElementById('detail-image').src = dest.image;
  document.getElementById('detail-location').innerText = dest.location;
  document.getElementById('detail-rating').innerText = dest.rating + ' / 5.0';
  document.getElementById('detail-desc').innerText = dest.description;
  document.getElementById('detail-fulldesc').innerText = dest.fullDescription;
  
  // Custom prices & best time
  document.getElementById('detail-price').innerText = dest.price || 'Gratis';
  document.getElementById('detail-besttime').innerText = dest.bestTime || 'Sore Hari';

  // Pisahkan nama untuk tipografi artistik (huruf pertama miring/normal)
  const words = dest.name.split(' ');
  const firstWord = words[0];
  const restWords = words.slice(1).join(' ');
  document.getElementById('detail-name').innerHTML = `${firstWord} ${restWords ? `<span class="not-italic font-bold text-gold">${restWords}</span>` : ''}`;

  // Render Daya Tarik / Fitur Utama
  document.getElementById('detail-features').innerHTML = dest.features.map(f => `
    <li class="flex items-start space-x-3 text-sm font-light text-white/80">
      <div class="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></div>
      <span>${f}</span>
    </li>
  `).join('');

  // Sediakan aksi tombol langsung ke Peta
  const mapBtn = document.getElementById('detail-map-btn');
  mapBtn.onclick = () => {
    navigate('peta');
    if (mapInstance) {
      mapInstance.flyTo(dest.coords, 13, { animate: true, duration: 2 });
    }
  };

  // Sediakan aksi tombol catat kunjungan ke Jurnal
  const journalBtn = document.getElementById('detail-add-journal-btn');
  journalBtn.onclick = () => {
    navigate('jurnal');
    document.getElementById('journal-dest').value = dest.id;
  };

  navigate('detail');
}

// 6. FITUR PERANGKAT: GEOLOCATION & PETA INTERAKTIF (LEAFLET.JS)
function silentGeolocationInit() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      },
      () => {
        // Abaikan error di background, set default ke Denpasar jika gagal
        userCoords = null;
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }
}

// Ambil lokasi terkini dengan konfirmasi UI
function getUserCurrentLocation() {
  const gpsBadge = document.getElementById('gps-badge');
  const gpsLatLabel = document.getElementById('gps-lat');

  if (gpsBadge) {
    gpsBadge.className = "px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-[8px] text-yellow-400 font-bold uppercase";
    gpsBadge.innerText = "Membaca GPS...";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        if (gpsBadge) {
          gpsBadge.className = "px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded text-[8px] text-green-400 font-bold uppercase";
          gpsBadge.innerText = "GPS AKTIF";
        }
        if (gpsLatLabel) {
          gpsLatLabel.innerText = `${userCoords.lat.toFixed(4)}, ${userCoords.lng.toFixed(4)}`;
        }

        // Hitung ulang jarak rekomendasi terdekat
        calculateDistancesAndRender();
        
        // Pindahkan pin pengguna di peta
        updateMapUserMarker();
      },
      (error) => {
        let msg = "Akses lokasi ditolak.";
        if (error.code === error.TIMEOUT) msg = "Waktu GPS habis.";
        
        if (gpsBadge) {
          gpsBadge.className = "px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded text-[8px] text-red-400 font-bold uppercase";
          gpsBadge.innerText = "GPS Offline";
        }
        if (gpsLatLabel) {
          gpsLatLabel.innerText = "Gagal memuat koordinat.";
        }
        
        // Gunakan lokasi default Denpasar/Kuta untuk demonstrasi di pameran
        alert(`Gagal mengakses GPS Anda (${msg}). Anda dapat menggunakan tombol "Simulator" di sebelah kanan bawah untuk menguji perhitungan jarak terdekat!`);
        
        // Default simulator di Kuta
        setSimulatorLocation(-8.4095, 115.1889, "Pusat Bali (Default Demo)");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  } else {
    alert("Perangkat Anda tidak mendukung fitur Geolocation.");
  }
}

// Simulasi lokasi untuk kemudahan pameran
function setSimulatorLocation(lat, lon, label) {
  userCoords = { lat, lng: lon };
  
  const gpsBadge = document.getElementById('gps-badge');
  const gpsLatLabel = document.getElementById('gps-lat');

  if (gpsBadge) {
    gpsBadge.className = "px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded text-[8px] text-blue-400 font-bold uppercase";
    gpsBadge.innerText = "Mode Simulasi";
  }
  if (gpsLatLabel) {
    gpsLatLabel.innerText = `${label} (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
  }

  // Rekalkulasi jarak
  calculateDistancesAndRender();

  // Inisialisasi peta jika belum
  initLeafletMap();

  // Plot dan arahkan peta ke lokasi simulasi pengguna
  updateMapUserMarker();
  if (mapInstance) {
    mapInstance.flyTo([lat, lon], 11, { animate: true, duration: 1.5 });
  }
}

// Rumus Haversine untuk menghitung jarak di permukaan bumi
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius bumi dalam kilometer
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Jarak dalam kilometer
}

// Hitung jarak semua destinasi & render urutan terdekat
function calculateDistancesAndRender() {
  const listContainer = document.getElementById('nearest-list');
  if (!listContainer) return;

  if (!userCoords) {
    listContainer.innerHTML = `
      <div class="text-center py-8 text-white/40 text-xs font-light">
        Dapatkan koordinat GPS Anda atau tekan salah satu tombol simulator di bawah untuk menampilkan rekomendasi terdekat.
      </div>
    `;
    return;
  }

  // Hitung jarak untuk masing-masing destinasi
  const computedList = destinations.map(dest => {
    const dist = calculateDistance(userCoords.lat, userCoords.lng, dest.coords[0], dest.coords[1]);
    return { ...dest, distance: dist };
  });

  // Urutkan berdasarkan jarak terkecil (terdekat)
  computedList.sort((a, b) => a.distance - b.distance);

  // Render ke sidebar rekomendasi terdekat
  listContainer.innerHTML = computedList.map((dest, i) => `
    <div onclick="openDetail('${dest.id}')" class="p-3 bg-white/[0.03] border border-white/5 rounded-xl hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 cursor-pointer flex justify-between items-center group">
      <div class="flex items-center space-x-3 overflow-hidden">
        <div class="w-8 h-8 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
          <img src="${dest.image}" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col truncate">
          <span class="text-xs font-semibold group-hover:text-gold transition-colors truncate">${dest.name}</span>
          <span class="text-[9px] text-white/40">${dest.location}</span>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <span class="text-[10px] text-gold font-bold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full font-mono">
          ${dest.distance.toFixed(1)} km
        </span>
      </div>
    </div>
  `).join('');
}

// Inisialisasi Leaflet Map
function initLeafletMap() {
  // Cegah re-inisialisasi ganda
  if (mapInstance) return;

  const mapDiv = document.getElementById('leaflet-map');
  if (!mapDiv) return;

  // Koordinat pusat Bali (Bedugul/Gianyar area)
  mapInstance = L.map('leaflet-map', {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([-8.45, 115.22], 9);

  // Gunakan tile dark dari CartoDB untuk estetika pameran modern
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
  }).addTo(mapInstance);

  // Plot semua marker destinasi wisata Bali
  plotDestinationMarkers();
}

// Taruh semua pin emas destinasi di peta
function plotDestinationMarkers() {
  if (!mapInstance) return;

  // Bersihkan marker lama jika ada
  destinationMarkers.forEach(m => mapInstance.removeLayer(m));
  destinationMarkers = [];

  destinations.forEach(dest => {
    // Custom Gold Beacon Icon menggunakan divIcon CSS
    const customIcon = L.divIcon({
      html: `
        <div class="relative w-5 h-5 flex items-center justify-center">
          <div class="beacon-ring"></div>
          <div class="w-3.5 h-3.5 bg-gold rounded-full border border-deepdark shadow-md flex items-center justify-center transform rotate-45">
            <div class="w-1.5 h-1.5 bg-deepdark rounded-sm"></div>
          </div>
        </div>
      `,
      className: 'custom-gold-marker',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const marker = L.marker(dest.coords, { icon: customIcon }).addTo(mapInstance);
    
    // Popup interaktif saat marker diklik
    const popupContent = `
      <div class="text-white p-2">
        <h4 class="font-bold text-xs font-serif text-gold">${dest.name}</h4>
        <p class="text-[9px] text-white/50 mb-2">${dest.location}</p>
        <button onclick="openDetail('${dest.id}')" class="px-2.5 py-1 bg-gold text-deepdark text-[8px] tracking-wider uppercase font-bold rounded-md cursor-pointer hover:bg-white transition-colors">
          Buka Detail
        </button>
      </div>
    `;
    
    marker.bindPopup(popupContent);
    destinationMarkers.push(marker);
  });
}

// Perbarui Marker Lokasi Terkini Pengguna
function updateMapUserMarker() {
  if (!mapInstance || !userCoords) return;

  // Hapus marker lama pengguna jika ada
  if (userMarker) {
    mapInstance.removeLayer(userMarker);
  }

  // Icon biru/hijau menyala untuk lokasi pengguna
  const userIcon = L.divIcon({
    html: `
      <div class="relative w-6 h-6 flex items-center justify-center">
        <div class="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-70"></div>
        <div class="w-3 h-3 bg-blue-400 border-2 border-white rounded-full shadow-lg"></div>
      </div>
    `,
    className: 'user-gps-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  userMarker = L.marker([userCoords.lat, userCoords.lng], { icon: userIcon }).addTo(mapInstance);
}


// 7. FITUR PERANGKAT: WEBRTC LIVE CAMERA & UPLOAD FOTO
function openCameraModal() {
  const modal = document.getElementById('camera-modal');
  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  startCameraStream();
}

function startCameraStream() {
  const video = document.getElementById('camera-feed');
  if (!video) return;

  const constraints = {
    video: {
      facingMode: currentFacingMode,
      width: { ideal: 640 },
      height: { ideal: 480 }
    },
    audio: false
  };

  // Matikan stream lama jika sedang berjalan
  stopCameraStream();

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      videoStream = stream;
      video.srcObject = stream;
      
      // Update label kamera
      const label = document.getElementById('camera-facing-label');
      if (label) {
        label.innerText = currentFacingMode === 'user' ? 'Kamera Depan (Selfie)' : 'Kamera Utama (Belakang)';
      }
    })
    .catch(err => {
      console.error("Gagal membuka kamera: ", err);
      alert("Akses kamera ditolak atau tidak didukung pada browser/iframe ini. Harap gunakan tombol 'Pilih File' untuk mengunggah foto dari Galeri!");
      closeCameraModal();
    });
}

function stopCameraStream() {
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
  }
}

function closeCameraModal() {
  const modal = document.getElementById('camera-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  stopCameraStream();
}

function toggleCameraFacing() {
  currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
  startCameraStream();
}

// Ambil Frame Foto (Snapshot) dari Video ke Canvas dan Simpan base64
function captureSnapshot() {
  const video = document.getElementById('camera-feed');
  const canvas = document.getElementById('camera-canvas');
  const photoInput = document.getElementById('journal-photo-data');
  const previewImg = document.getElementById('photo-preview-img');
  const previewContainer = document.getElementById('photo-preview-container');

  if (!video || !canvas || !photoInput || !previewImg || !previewContainer) return;

  const ctx = canvas.getContext('2d');
  
  // Set ukuran kanvas agar sesuai rasio video
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;

  // Jika kamera depan, cerminkan snapshot agar normal
  if (currentFacingMode === 'user') {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }

  // Ambil gambar
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Ambil data URL base64
  const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
  
  // Masukkan data ke input tersembunyi
  photoInput.value = dataUrl;

  // Tampilkan di preview UI form
  previewImg.src = dataUrl;
  previewContainer.classList.remove('hidden');

  // Tutup kamera
  closeCameraModal();
}

// Penanganan upload foto via input file (fallback galeri)
function triggerFileUpload() {
  const fileInput = document.getElementById('journal-file-input');
  if (fileInput) fileInput.click();
}

function handleImageFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Batasi ukuran file (misal maks 3MB) demi efisiensi LocalStorage
  if (file.size > 3 * 1024 * 1024) {
    alert("Ukuran foto terlalu besar (maksimal 3MB). Harap pilih foto lain yang lebih kecil!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    
    document.getElementById('journal-photo-data').value = dataUrl;
    document.getElementById('photo-preview-img').src = dataUrl;
    document.getElementById('photo-preview-container').classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function removeSelectedPhoto() {
  document.getElementById('journal-photo-data').value = "";
  document.getElementById('photo-preview-img').src = "";
  document.getElementById('photo-preview-container').classList.add('hidden');
  document.getElementById('journal-file-input').value = "";
}


// 8. STORAGE PERSISTENCE: JURNAL PERJALANAN (LOCALSTORAGE ENGINE)
function populateJournalDestinations() {
  const select = document.getElementById('journal-dest');
  if (!select) return;

  // Masukkan destinasi ke pilihan dropdown
  select.innerHTML = `
    <option value="" disabled selected>-- Pilih Lokasi Kunjungan --</option>
    ${destinations.map(d => `<option value="${d.id}">${d.name} (${d.location})</option>`).join('')}
  `;
}

// Rating Bintang Visual Selector di Form Jurnal
function setJournalRating(stars) {
  document.getElementById('journal-rating').value = stars;
  
  const starBtns = document.querySelectorAll('#star-selector .star-btn');
  starBtns.forEach((btn, idx) => {
    if (idx < stars) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Dapatkan Jurnal dari LocalStorage
function getStoredJournals() {
  const data = localStorage.getItem('jelajah_bali_journals');
  return data ? JSON.parse(data) : [];
}

// Simpan entri jurnal baru
function saveJournal(event) {
  event.preventDefault();

  const destId = document.getElementById('journal-dest').value;
  const date = document.getElementById('journal-date').value;
  const rating = parseInt(document.getElementById('journal-rating').value) || 5;
  const notes = document.getElementById('journal-notes').value;
  const photo = document.getElementById('journal-photo-data').value;

  if (!destId || !date || !notes) {
    alert("Harap lengkapi semua data jurnal perjalanan Anda!");
    return;
  }

  const newJournal = {
    id: 'journal_' + Date.now(),
    destId: destId,
    date: date,
    rating: rating,
    notes: notes,
    photo: photo // base64 string jika ada, atau kosong jika tidak menggunakan foto
  };

  const currentJournals = getStoredJournals();
  currentJournals.unshift(newJournal); // Masukkan paling atas

  // Simpan kembali ke LocalStorage
  localStorage.setItem('jelajah_bali_journals', JSON.stringify(currentJournals));

  // Reset Form
  document.getElementById('journal-form').reset();
  removeSelectedPhoto();
  setJournalRating(5); // Kembalikan rating ke default 5 bintang

  // Muat ulang daftar jurnal
  loadJournalEntries();

  alert("Jurnal perjalanan Anda berhasil disimpan ke memori lokal!");
}

// Tampilkan riwayat Jurnal Tersimpan
function loadJournalEntries() {
  const journals = getStoredJournals();
  
  const emptyState = document.getElementById('journal-empty-state');
  const journalList = document.getElementById('journal-list');
  const countBadge = document.getElementById('journal-count');

  if (countBadge) {
    countBadge.innerText = `${journals.length} Jurnal Tersimpan`;
  }

  if (journals.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (journalList) {
      journalList.classList.add('hidden');
      journalList.innerHTML = "";
    }
    return;
  }

  // Tampilkan container list
  if (emptyState) emptyState.classList.add('hidden');
  if (journalList) journalList.classList.remove('hidden');

  if (!journalList) return;

  // Render semua kartu jurnal
  journalList.innerHTML = journals.map((entry, idx) => {
    const dest = destinations.find(d => d.id === entry.destId) || {
      name: 'Destinasi Misterius',
      location: 'Bali',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600'
    };

    // Format Tanggal yang Indah (Bahasa Indonesia)
    const formattedDate = formatIndonesianDate(entry.date);

    // Render Bintang Rating
    let starsHtml = "";
    for (let s = 1; s <= 5; s++) {
      starsHtml += s <= entry.rating ? '<span class="text-gold">★</span>' : '<span class="text-white/20">★</span>';
    }

    // Gunakan foto jepretan kamera/unggah galeri jika ada. Jika tidak, pakai gambar default destinasi
    const photoUrl = entry.photo || dest.image;

    return `
      <div style="animation-delay: ${idx * 0.1}s" class="animate-item bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col group relative">
        <!-- Visual Badge "Foto Kamera" jika menggunakan foto buatan sendiri -->
        ${entry.photo ? `
          <span class="absolute top-3 left-3 z-20 px-2 py-0.5 bg-gold text-deepdark text-[8px] font-bold uppercase tracking-widest rounded-md shadow-md">
            📸 Foto Sendiri
          </span>
        ` : ''}

        <!-- Card Cover Photo -->
        <div class="w-full h-40 overflow-hidden relative border-b border-white/5 flex-shrink-0">
          <div class="absolute inset-0 bg-gradient-to-t from-deepdark/90 to-transparent z-10"></div>
          <img src="${photoUrl}" class="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500">
          <div class="absolute bottom-3 left-4 z-20">
            <span class="text-[9px] text-gold font-bold uppercase tracking-widest">${dest.location}</span>
            <h4 class="text-base font-semibold font-serif text-white -mt-0.5">${dest.name}</h4>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-4 flex-grow flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-[10px]">
              <span class="text-white/40">${formattedDate}</span>
              <div class="flex space-x-0.5">${starsHtml}</div>
            </div>
            <p class="text-xs text-white/70 font-light leading-relaxed italic">
              "${entry.notes}"
            </p>
          </div>

          <!-- Card Actions -->
          <div class="flex justify-between items-center pt-3 border-t border-white/5 text-[10px]">
            <button onclick="openDetail('${dest.id}')" class="text-gold hover:text-white transition-colors cursor-pointer font-semibold uppercase tracking-wider">
              Lihat Destinasi &rarr;
            </button>
            <button onclick="deleteJournalEntry('${entry.id}')" class="text-red-500/80 hover:text-red-400 transition-colors cursor-pointer font-semibold uppercase tracking-wider flex items-center space-x-0.5">
              <span>Hapus</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Hapus Catatan Jurnal
function deleteJournalEntry(id) {
  if (!confirm("Apakah Anda yakin ingin menghapus catatan perjalanan ini dari jurnal Anda?")) return;

  const currentJournals = getStoredJournals();
  const updatedJournals = currentJournals.filter(j => j.id !== id);

  localStorage.setItem('jelajah_bali_journals', JSON.stringify(updatedJournals));
  
  // Reload
  loadJournalEntries();
}

// Formatter Tanggal Bahasa Indonesia Sederhana
function formatIndonesianDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const day = date.getDate();
  const monthIdx = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIdx]} ${year}`;
}
