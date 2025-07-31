export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  comments: Comment[];
  views: number;
  image?: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  publishDate: string;
  replies?: Comment[];
}

export const dummyArticles: Article[] = [
  {
    id: "1",
    title: "Kebudayaan Sunda: Warisan Leluhur yang Harus Dilestarikan",
    excerpt: "Menyelami kekayaan budaya Sunda yang telah ada selama berabad-abad. Dari tradisi lisan hingga seni pertunjukan, semua memiliki nilai filosofis yang mendalam.",
    content: `
      <h2>Pendahuluan</h2>
      <p>Kebudayaan Sunda merupakan salah satu warisan terbesar yang dimiliki Indonesia, khususnya di wilayah Jawa Barat. Budaya ini tidak hanya mencakup bahasa, tetapi juga mencakup berbagai aspek kehidupan seperti seni, musik, tarian, dan filosofi hidup.</p>
      
      <h3>Nilai-Nilai Filosofis dalam Budaya Sunda</h3>
      <p>Dalam kebudayaan Sunda, terdapat konsep "Silih Asih, Silih Asah, Silih Asuh" yang mengajarkan tentang pentingnya saling mengasihi, saling mendidik, dan saling mengasuh dalam kehidupan bermasyarakat.</p>
      
      <h3>Seni Tradisional Sunda</h3>
      <p>Seni tradisional Sunda sangat beragam, mulai dari angklung yang telah diakui UNESCO, gamelan degung, wayang golek, hingga tarian tradisional seperti tari jaipong dan tari merak.</p>
      
      <p>Pelestarian budaya Sunda menjadi tanggung jawab bersama agar generasi mendatang dapat merasakan kekayaan warisan leluhur ini.</p>
    `,
    author: "Asep Sunandar",
    publishDate: "15 Nov 2024",
    readTime: "5 min read",
    category: "Budaya",
    views: 1240,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    comments: [
      {
        id: "1",
        author: "Dewi Sartika",
        content: "Artikel yang sangat menarik! Saya setuju bahwa budaya Sunda harus terus dilestarikan. Sebagai orang Sunda, saya bangga dengan warisan leluhur kita.",
        publishDate: "16 Nov 2024",
        replies: [
          {
            id: "1-1",
            author: "Asep Sunandar",
            content: "Terima kasih, Dewi! Mari kita bersama-sama melestarikan budaya kita.",
            publishDate: "16 Nov 2024"
          }
        ]
      },
      {
        id: "2",
        author: "Ujang Permana",
        content: "Konsep Silih Asih, Silih Asah, Silih Asuh memang sangat relevan untuk diterapkan di zaman modern ini.",
        publishDate: "17 Nov 2024"
      }
    ]
  },
  {
    id: "2", 
    title: "Kuliner Tradisional Sunda: Dari Nasi Timbel hingga Peuyeum",
    excerpt: "Menjelajahi kekayaan kuliner tradisional Sunda yang sarat dengan cita rasa autentik dan filosofi hidup sederhana namun bermakna.",
    content: `
      <h2>Kuliner sebagai Cerminan Budaya</h2>
      <p>Kuliner Sunda tidak hanya tentang rasa, tetapi juga mencerminkan filosofi hidup masyarakat Sunda yang sederhana, bersahaja, dan dekat dengan alam.</p>
      
      <h3>Nasi Timbel: Simbol Kesederhanaan</h3>
      <p>Nasi timbel yang dibungkus daun pisang melambangkan kesederhanaan hidup masyarakat Sunda. Disajikan dengan lauk-pauk sederhana namun bergizi.</p>
      
      <h3>Peuyeum: Fermentasi Tradisional</h3>
      <p>Peuyeum merupakan contoh kearifan lokal dalam mengolah singkong menjadi makanan yang tahan lama dan memiliki nilai gizi tinggi.</p>
    `,
    author: "Neneng Komariah",
    publishDate: "12 Nov 2024", 
    readTime: "4 min read",
    category: "Kuliner",
    views: 892,
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&h=400&fit=crop",
    comments: [
      {
        id: "3",
        author: "Bambang Sutrisno",
        content: "Saya jadi kangen makanan Sunda nih! Apalagi nasi timbel dengan ikan bakar.",
        publishDate: "13 Nov 2024"
      }
    ]
  },
  {
    id: "3",
    title: "Filosofi Hidup Masyarakat Sunda: Hidup Sederhana dan Harmonis",
    excerpt: "Mengupas tuntas filosofi hidup masyarakat Sunda yang mengutamakan keseimbangan antara kehidupan duniawi dan spiritual.",
    content: `
      <h2>Konsep Tritangtu dalam Hidup Sunda</h2>
      <p>Masyarakat Sunda mengenal konsep Tritangtu yang mengajarkan tentang keseimbangan antara tiga elemen: manusia, alam, dan Sang Pencipta.</p>
      
      <h3>Someah dan Hade</h3>
      <p>Sikap someah (ramah) dan hade (baik) menjadi landasan utama dalam berinteraksi dengan sesama. Ini mencerminkan karakter masyarakat Sunda yang santun dan menghargai orang lain.</p>
    `,
    author: "Tatang Sutarna",
    publishDate: "10 Nov 2024",
    readTime: "6 min read", 
    category: "Filosofi",
    views: 1456,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    comments: []
  },
  {
    id: "4",
    title: "Perkembangan Bahasa Sunda di Era Digital",
    excerpt: "Bagaimana bahasa Sunda beradaptasi dengan perkembangan teknologi dan media sosial di era digital saat ini.",
    content: `
      <h2>Tantangan Bahasa Sunda di Era Digital</h2>
      <p>Di era digital ini, bahasa Sunda menghadapi tantangan untuk tetap relevan dan digunakan oleh generasi muda.</p>
      
      <h3>Inovasi dalam Pembelajaran</h3>
      <p>Berbagai aplikasi dan platform digital kini hadir untuk memudahkan pembelajaran bahasa Sunda, membuat warisan budaya ini lebih accessible bagi generasi digital native.</p>
    `,
    author: "Rina Marlina",
    publishDate: "8 Nov 2024",
    readTime: "3 min read",
    category: "Bahasa", 
    views: 734,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    comments: [
      {
        id: "4",
        author: "Dedi Kusnandar",
        content: "Bagus sekali inisiatif untuk mempertahankan bahasa Sunda di era digital. Saya dukung penuh!",
        publishDate: "9 Nov 2024"
      }
    ]
  }
];

export const categories = [
  "Budaya",
  "Kuliner", 
  "Filosofi",
  "Bahasa",
  "Seni",
  "Sejarah",
  "Modern"
];