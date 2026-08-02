# Ardee.dev — Portfolio

Portfolio pribadi Putu Ardi Sudarmika, software engineer dan full stack
web developer asal Bali.
Dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, dan GSAP
untuk animasi scroll dan transisi antar halaman.

Live: https://ardiskaa.vercel.app

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** untuk styling
- **GSAP** untuk animasi
- **Redux Toolkit** untuk state navigasi & menu
- **React Three Fiber** untuk elemen 3D di hero
- **Resend** untuk pengiriman form kontak
- **Zod** + **React Hook Form** untuk validasi form

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env.local   # lalu isi nilainya
npm run dev
```

Buka http://localhost:3000

## Environment variables

Semua kredensial dibaca dari environment, tidak ada yang di-hardcode.
Salin `.env.example` menjadi `.env.local` lalu isi:

| Variable | Wajib | Keterangan |
|---|---|---|
| `RESEND_API_KEY` | ya | API key dari https://resend.com/api-keys. Tanpa ini form kontak tidak mengirim. |
| `CONTACT_EMAIL` | tidak | Email tujuan form kontak. Default ke email pribadi. |
| `NEXT_PUBLIC_GA_ID` | tidak | Google Analytics ID. Kosongkan kalau belum dipakai — script GA tidak akan dirender. |
| `NEXT_PUBLIC_SITE_URL` | tidak | URL produksi, dipakai untuk metadata Open Graph. |

Di Vercel, isi variabel yang sama lewat **Settings → Environment Variables**.

## Struktur

```
app/                 Route: home, work, about, contact
components/          Komponen per section (hero, about, work, contact)
components/ui/       Komponen dasar yang dipakai ulang
data/data.ts         Link sosial & data profil
data/projects.ts     Daftar proyek yang tampil di /work
public/img/projects/ Gambar preview tiap proyek
redux/               State navigasi & menu
```

## Dua halaman proyek

- `/work` — showcase satu proyek satu layar penuh. Isinya `data/projects.ts`.
  Sengaja dibatasi supaya tetap enak di-scroll.
- `/archive` — daftar lengkap semua proyek dari CV. Isinya `data/archive.ts`.
  Proyek yang juga tampil di `/work` ditandai `featured: true`.

## Menambah proyek

Cukup edit array di `data/projects.ts` — halaman `/work` otomatis
menyesuaikan jumlah slide dan indikatornya.

```ts
{
  title: "Nama\nProyek",          // \n untuk pindah baris
  description: "React · Tailwind",
  link: "https://github.com/...", // repo
  demo: "https://...",            // opsional, jadi tombol "Live Demo"
  imageLink: "/img/projects/nama.svg",
}
```

Gambar preview saat ini masih placeholder. Ganti dengan screenshot asli
tiap proyek (rasio 16:10, format `.webp` atau `.avif` supaya ringan).

## Menambah media sosial

Semua link sosial diambil dari satu tempat: array `socials` di `data/data.ts`.
Tambah satu baris, halaman About dan menu navigasi ikut menyesuaikan.
Beri `inFooter: true` kalau mau tampil juga di footer (maksimal 4, ruangnya sempit).

## CV

File CV ada di `public/cv.pdf`. Tombol "Buka CV" dan "Unduh CV" di halaman
About serta menu CV di navigasi mengarah ke sana. Untuk memperbarui, cukup
timpa file itu dengan versi terbaru — tidak ada kode yang perlu diubah.

Isi halaman About (bio, pengalaman, keahlian, penghargaan) diambil dari
`data/data.ts`. Kalau CV diperbarui, sinkronkan juga data di sana supaya
tidak ada informasi yang bertabrakan.

## Kredit

Struktur layout dan sistem animasi diadaptasi dari template portfolio
open source milik [Vipul Kumar](https://vipulkumar.dev), dengan konten,
data, dan sejumlah komponen yang ditulis ulang.
