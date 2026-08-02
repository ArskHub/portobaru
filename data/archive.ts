export type ArchiveItem = {
  name: string;
  /** Stack utama, dipisah koma. */
  stack: string;
  /** Satu kalimat tentang apa yang dikerjakan. */
  summary: string;
  /** Repo atau demo. Kosongkan kalau belum ada link publik. */
  href?: string;
  /** Tandai proyek yang juga tampil di halaman /work. */
  featured?: boolean;
};

export type ArchiveGroup = {
  label: string;
  items: ArchiveItem[];
};

/**
 * Daftar lengkap proyek dari CV.
 * Halaman /work hanya menampilkan yang terkuat; halaman /archive
 * menampilkan semuanya. Isi `href` kalau repo sudah dipublikasikan.
 */
export const archive: ArchiveGroup[] = [
  {
    label: "Sistem Informasi & Aplikasi Web",
    items: [
      {
        name: "SariKidung",
        stack: "Flask, Python, OWL, Owlready2, SQLite, Bootstrap",
        summary:
          "Sistem manajemen pengetahuan Kidung Bali berbasis ontologi, dengan mesin rekomendasi berbasis aturan, Decision Tree (CART), dan chatbot SariBot.",
        href: "https://ardiska.pythonanywhere.com/",
        featured: true,
      },
      {
        name: "Purchase Requests",
        stack: "React, Vite, Tailwind CSS",
        summary:
          "Internal tool pemesanan stok untuk outlet cabang, dengan validasi keranjang dan alur persetujuan.",
        href: "https://github.com/ArskHub/Purchase-Requests",
        featured: true,
      },
      {
        name: "Website Office Route",
        stack: "Django, Python, JavaScript",
        summary:
          "Sistem navigasi kantor dengan peta interaktif, panduan rute, dan pencarian lokasi antar ruang dan departemen.",
        href: "https://github.com/ArskHub/officerouteweb",
        featured: true,
      },
      {
        name: "SIKAP",
        stack: "Laravel, PHP, MySQL",
        summary:
          "Sistem informasi kepegawaian dan administrasi: data pegawai, manajemen dokumen, dan alur administratif.",
        href: "https://github.com/ArskHub/sikap-web",
        featured: true,
      },
      {
        name: "SIMRATEK",
        stack: "JavaScript, PHP, MySQL",
        summary:
          "Sistem manajemen ruangan dan tempat untuk event kampus, dari pengajuan sampai penjadwalan.",
        href: "https://github.com/ArskHub/Sistem-Informasi-SIMRATEK",
        featured: true,
      },
      {
        name: "Sariaji Logam",
        stack: "Next.js, Tailwind CSS",
        summary: "Company profile untuk klien, dikerjakan sebagai pekerjaan lepas.",
        href: "https://sariaji-logam.vercel.app",
        featured: true,
      },
      {
        name: "Peduli Hijau",
        stack: "JavaScript, HTML, CSS",
        summary:
          "Website kampanye lingkungan untuk mendorong kesadaran dan inisiatif hijau.",
      },
      {
        name: "Website HIMAIF",
        stack: "HTML, CSS, JavaScript",
        summary:
          "Website Himpunan Mahasiswa Informatika untuk kegiatan dan komunikasi organisasi.",
      },
      {
        name: "Quiz Website",
        stack: "HTML, CSS, JavaScript",
        summary: "Website kuis interaktif dengan penilaian langsung.",
      },
    ],
  },
  {
    label: "Data & Machine Learning",
    items: [
      {
        name: "GObat",
        stack: "Python, Random Forest, LLM",
        summary:
          "Web app diagnosa 41 jenis penyakit dengan rekomendasi pengobatan, dipadukan chatbot konsultasi berbasis LLM.",
        href: "https://github.com/ArskHub/medicine-recommendation-system-v2",
        featured: true,
      },
      {
        name: "Emotion Classification — Twitter",
        stack: "Python, NLP, Jupyter",
        summary:
          "Klasifikasi teks untuk mengkategorikan emosi pada data Twitter.",
        href: "https://github.com/ArskHub/Text-Classification-for-Emotion-Classification-in-Twitter-Data",
        featured: true,
      },
      {
        name: "Sistem Rekomendasi Ruangan",
        stack: "Python, Content-Based Filtering, Face Recognition",
        summary:
          "Rekomendasi ruangan menggunakan content-based filtering yang dipadukan dengan pengenalan wajah.",
      },
      {
        name: "Rekomendasi Genre Musik",
        stack: "Python, Content-Based Filtering",
        summary: "Sistem rekomendasi genre musik berbasis konten.",
      },
    ],
  },
  {
    label: "Algoritma & Struktur Data",
    items: [
      {
        name: "Vending Machine Simulation",
        stack: "Python, Finite State Machine",
        summary:
          "Simulasi operasi vending machine menggunakan pendekatan Finite State Machine.",
        href: "https://github.com/ArskHub/Sistem-Simulasi-Vending-Machine-Menggunakan-Finite-State-Machine-FSA-",
        featured: true,
      },
      {
        name: "CYK Parsing",
        stack: "Python, Context-Free Grammar",
        summary:
          "Implementasi algoritma CYK untuk analisis sintaksis dengan Context-Free Grammar.",
        href: "https://github.com/ArskHub/CYK-Parsing",
      },
      {
        name: "Algorithm Design & Analysis",
        stack: "Java",
        summary:
          "Program analisis dan perancangan algoritma dengan berbagai teknik optimasi.",
        href: "https://github.com/ArskHub/Coding_DAA",
      },
      {
        name: "Floyd-Warshall Shortest Path",
        stack: "Struktur Data",
        summary:
          "Penerapan algoritma Floyd-Warshall untuk mencari lintasan terpendek pada graf.",
      },
      {
        name: "Stack Programming",
        stack: "Multi-bahasa",
        summary:
          "Implementasi struktur data stack di beberapa bahasa pemrograman.",
      },
    ],
  },
  {
    label: "Lainnya",
    items: [
      {
        name: "OOPPBO E-commerce",
        stack: "Java, OOP",
        summary:
          "Aplikasi e-commerce yang dibangun dengan konsep pemrograman berorientasi objek.",
      },
      {
        name: "Email Sender Program",
        stack: "Python",
        summary: "Program otomatisasi pengiriman email.",
      },
      {
        name: "Portfolio Website (versi awal)",
        stack: "HTML, Bootstrap, JavaScript",
        summary: "Website portofolio pribadi versi pertama.",
        href: "https://github.com/ArskHub/Portfolio-ARDI",
      },
    ],
  },
];
