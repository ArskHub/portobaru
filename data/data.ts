export const links = {
  home: "/",
  about: "/about",
  work: "/work",
  archive: "/archive",
  contact: "/contact",
  email: "ardisudarmika94@gmail.com",
  emailHref: "mailto:ardisudarmika94@gmail.com",
  /** Taruh file CV di public/cv.pdf — link ini 404 kalau file belum ada. */
  cv: "/cv.pdf",
  github: "https://github.com/ArskHub",
  linkedin: "https://www.linkedin.com/in/putu-ardi-sudarmika/",
  twitter: "https://x.com/ardisdrmkaaa",
  instagram: "https://www.instagram.com/ardiiweee/",
  youtube: "https://www.youtube.com/@ardiskachannel",
};

export type Social = {
  name: string;
  href: string;
  /** Tampilkan juga di footer? Footer sempit, cukup 4 item. */
  inFooter?: boolean;
};

/**
 * Satu sumber untuk semua link sosial.
 * Mau tambah? Cukup tambahkan satu baris di sini —
 * halaman About dan menu navigasi ikut menyesuaikan otomatis.
 */
export const socials: Social[] = [
  { name: "Email", href: links.emailHref, inFooter: true },
  { name: "LinkedIn", href: links.linkedin, inFooter: true },
  { name: "GitHub", href: links.github, inFooter: true },
  { name: "Instagram", href: links.instagram, inFooter: true },
  { name: "Twitter", href: links.twitter, inFooter: true },
  { name: "YouTube", href: links.youtube, inFooter: true },
];
export const profile = {
  name: "Putu Ardi Sudarmika",
  shortName: "Ardee",
  /** Judul utama. Diselaraskan dengan CV. */
  role: "Software Engineer",
  secondaryRole: "Full Stack Web Developer",
  location: "Bali, Indonesia",
  university: "Udayana University",
  degree: "Bachelor of Computer Science",
  graduationYear: "2026",
  gpa: "3.88 / 4.00",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  detail: string;
};

export const experiences: Experience[] = [
  {
    role: "Founder & Web Developer",
    org: "ardee.dev — Freelance, Bali",
    period: "Sekarang",
    detail:
      "Membangun website dan solusi UI/UX untuk klien, dari branding dan logo sampai implementasi front-end.",
  },
  {
    role: "Junior Data Scientist — Internship",
    org: "PT Vinix Seven Aurum, Yogyakarta (Remote)",
    period: "Feb 2025 – Jun 2025",
    detail:
      "Pembersihan dan prapemrosesan data, pengembangan model prediktif dengan Python, serta visualisasi untuk tim lintas fungsi.",
  },
  {
    role: "Web Developer — Academic Internship",
    org: "FMIPA, Udayana University, Bali",
    period: "Mar 2024 – Agu 2024",
    detail:
      "Membangun sistem manajemen kepegawaian berbasis Laravel: data pegawai, manajemen dokumen, dan alur administrasi.",
  },
  {
    role: "Platform & Web Developer — Internship",
    org: "PT Maleo Edukasi Teknologi, Tangsel (Remote)",
    period: "Sep 2022 – Des 2022",
    detail:
      "Sistem navigasi kantor berbasis Django dengan peta interaktif, panduan rute, dan pencarian lokasi antar ruang.",
  },
];

export const awards: string[] = [
  "Best Performance Award — STACK, Student Innovation Centre (2023)",
  "Finalist — National Data Science Tournament (2024)",
  "Juara 3 — PKM-KC, Program Kreativitas Mahasiswa (2024)",
  "Golden Ticket Award — MSIB Batch 7, PT Maleo Edukasi Teknologi (2024)",
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Vue.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Django", "Laravel", "Flask", "REST API", "Python", "PHP"],
  },
  { label: "Database", items: ["MySQL", "SQLite"] },
  {
    label: "Data & ML",
    items: ["Data cleaning", "Predictive modeling", "Visualisasi data"],
  },
  { label: "Design", items: ["Figma", "Photoshop", "Canva"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Trello"] },
];
