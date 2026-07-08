export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  rating: number;
  features: string[];
}

export const destinations: Destination[] = [
  {
    id: 'kuta',
    name: 'Pantai Kuta',
    location: 'Badung, Bali',
    description: 'Pantai ikonik peraih ketenaran global, surga bagi para peselancar dan pencari kehangatan matahari terbenam.',
    fullDescription: 'Pantai Kuta adalah salah satu destinasi wisata paling terkenal di Bali. Terletak di sebelah selatan Denpasar, pantai ini menawarkan pasir putih yang membentang luas, ombak yang memukau bagi peselancar pemula maupun profesional, dan pemandangan matahari terbenam yang mistis. Di sekitar pesisir ini, gemerlap kehidupan malam, deretan butik mewah, serta pilihan kuliner khas pesisir siap memanjakan setiap kedatangan Anda.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop',
    rating: 4.5,
    features: ['Selancar', 'Matahari Terbenam', 'Kafe Pesisir', 'Kehidupan Malam']
  },
  {
    id: 'ubud',
    name: 'Ubud',
    location: 'Gianyar, Bali',
    description: 'Urat nadi budaya Bali, dikelilingi oleh terasering sawah purba dan hutan hijau yang menenangkan jiwa.',
    fullDescription: 'Ubud merupakan jantung budaya dan seni Pulau Dewata. Dikelilingi oleh hutan hujan tropis yang asri dan hamparan terasering sawah ikonik seperti Tegalalang. Ubud mengundang Anda yang mendambakan ketenangan, retret spiritual, serta pendalaman seni tradisional Bali. Selusuri Monkey Forest yang riuh, temukan kedamaian di paviliun yoga, atau singgahi museum seni klasik yang hening.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    features: ['Seni & Tradisi', 'Sawah Terasering', 'Retret Kesehatan', 'Kopi Artisan']
  },
  {
    id: 'tanah-lot',
    name: 'Pura Tanah Lot',
    location: 'Tabanan, Bali',
    description: 'Kuil kuno yang berdiri angkuh di atas tebing karang di tengah deburan ombak lautan lepas.',
    fullDescription: 'Pura Tanah Lot adalah monumen bersejarah dan salah satu pura laut paling suci di Bali. Keajaibannya bermula dari letaknya yang bertengger di atas bongkahan batu karang raksasa di lepas pantai. Saat air pasang pasang naik, pura ini seakan terapung dalam lautan keabadian. Senja di Tanah Lot adalah lukisan alam terbaik yang akan terukir selamanya dalam ingatan.',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2000&auto=format&fit=crop',
    rating: 4.7,
    features: ['Pura Bersejarah', 'Pemandangan Samudra', 'Matahari Terbenam', 'Fotografi Seni']
  },
  {
    id: 'uluwatu',
    name: 'Pura Uluwatu',
    location: 'Badung, Bali',
    description: 'Pura luhur di tepi tebing curam yang menyuguhkan teater Tari Kecak berlatar kemegahan senja.',
    fullDescription: 'Berada di bibir tebing kapur dengan ketinggian 70 meter di atas permukaan laut, Pura Uluwatu menghadap langsung pada luasnya Samudra Hindia. Pura ini menggemakan aura keagungan, terlebih saat paduan suara Tari Kecak memecah keheningan sore menjelang terbenamnya matahari. Kehadiran kera-kera ekor panjang yang dipercaya sebagai penjaga pura menambah sentuhan magis di setiap sudutnya.',
    image: 'https://images.unsplash.com/photo-1534063223594-5264b971a804?q=80&w=2000&auto=format&fit=crop',
    rating: 4.9,
    features: ['Tari Kecak', 'Arsitektur Tebing', 'Samudra Hindia', 'Eksplorasi Budaya']
  },
  {
    id: 'nusa-penida',
    name: 'Nusa Penida',
    location: 'Klungkung, Bali',
    description: 'Pulau eksotis dengan formasi tebing purba, ceruk pantai tersembunyi, dan surga bawah laut tak tersentuh.',
    fullDescription: 'Menyeberanglah sedikit dari daratan utama, dan Anda akan tiba di Nusa Penida—pulau dengan lanskap paling dramatis di perairan Bali. Tersohor oleh lekuk tebing Kelingking Beach yang menyerupai hewan purba koral raksasa, gulungan ombak Angel\'s Billabong, hingga kesempatan langka menyelam berdampingan dengan bentangan sayap Ikan Pari Manta. Destinasi mahakarya alam bagi para pelintas batas.',
    image: 'https://images.unsplash.com/photo-1574486580970-e179e8c807fb?q=80&w=2000&auto=format&fit=crop',
    rating: 4.8,
    features: ['Pandangan Dramatis', 'Manta Ray Dives', 'Pantai Tersembunyi', 'Petualangan Ekstrem']
  }
];
