export type Project = {
  /** Judul proyek. Pakai \n untuk memaksa pindah baris. */
  title: string;
  /** Satu baris singkat: stack atau jenis proyek. */
  description: string;
  /** Link repo. Kosongkan kalau repo-nya private — tombol Source tidak muncul. */
  link?: string;
  /** Link demo langsung. Wajib diisi kalau `link` kosong. */
  demo?: string;
  /** Tandai true kalau repo tidak publik. Menampilkan badge "Repositori privat". */
  isPrivate?: boolean;
  /** Screenshot proyek. Ganti dengan tangkapan layar asli di /public/img/projects/ */
  imageLink: string;
};

/**
 * Semua proyek di bawah ini diambil dari github.com/ArskHub.
 * Untuk menambah/mengurangi, cukup edit array ini — halaman /work
 * otomatis menyesuaikan jumlah slide dan indikatornya.
 *
 * Minimal salah satu dari `link` atau `demo` harus diisi.
 */
export const projects: Project[] = [
  {
    title: "Sari\nKidung",
    description:
      "Skripsi · Ontologi OWL, Decision Tree (CART), chatbot LLM, Flask",
    demo: "https://ardiska.pythonanywhere.com/",
    isPrivate: true,
    imageLink: "/img/projects/sarikidung.svg",
  },
  {
    title: "Purchase\nRequests",
    description: "Internal tool pemesanan stok · React, Vite, Tailwind",
    link: "https://github.com/ArskHub/Purchase-Requests",
    imageLink: "/img/projects/purchase-requests.svg",
  },
  {
    title: "Office\nRoute",
    description: "Navigasi & rute kantor · Django, Python, PostgreSQL",
    link: "https://github.com/ArskHub/officerouteweb",
    imageLink: "/img/projects/officeroute.svg",
  },
  {
    title: "SIKAP",
    description: "Sistem kepegawaian & administrasi · Laravel",
    link: "https://github.com/ArskHub/sikap-web",
    imageLink: "/img/projects/sikap-web.svg",
  },
  {
    title: "SIMRATEK",
    description: "Manajemen ruangan untuk event kampus · JavaScript",
    link: "https://github.com/ArskHub/Sistem-Informasi-SIMRATEK",
    imageLink: "/img/projects/simratek.svg",
  },
  {
    title: "GObat",
    description: "Diagnosa 41 penyakit · Random Forest + chatbot LLM",
    link: "https://github.com/ArskHub/medicine-recommendation-system-v2",
    imageLink: "/img/projects/medicine-recommender.svg",
  },
  {
    title: "Sariaji\nLogam",
    description: "Company profile klien · Next.js",
    link: "https://github.com/ArskHub/SariajiLogam",
    demo: "https://sariaji-logam.vercel.app",
    imageLink: "/img/projects/sariaji-logam.svg",
  },
  {
    title: "Emotion\nClassifier",
    description: "Klasifikasi emosi data Twitter · NLP, Python",
    link: "https://github.com/ArskHub/Text-Classification-for-Emotion-Classification-in-Twitter-Data",
    imageLink: "/img/projects/emotion-classifier.svg",
  },
  {
    title: "Vending\nMachine FSA",
    description: "Simulasi Finite State Machine · Python",
    link: "https://github.com/ArskHub/Sistem-Simulasi-Vending-Machine-Menggunakan-Finite-State-Machine-FSA-",
    imageLink: "/img/projects/vending-machine.svg",
  },
];
