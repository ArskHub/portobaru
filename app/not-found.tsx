import Link from "next/link";
import { links } from "@/data/data";

export const metadata = {
  title: "Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <main className="darkGradient flex min-h-screen w-full flex-col items-center justify-center px-paddingX text-center text-colorLight">
      <p className="text-sm uppercase tracking-[0.2em] text-colorSecondaryLight">
        Error 404
      </p>

      <h1 className="mt-4 text-[clamp(3rem,_10vw,_8rem)] font-bold leading-none tracking-tight">
        Nyasar<span className="text-colorPrimary">.</span>
      </h1>

      <p className="mt-6 max-w-md text-lg text-colorSecondaryLight">
        Halaman yang kamu cari tidak ada. Mungkin salah ketik, atau halamannya
        sudah dipindahkan.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href={links.home}
          className="rounded-full bg-colorLight px-7 py-3 font-medium text-colorDark transition-opacity hover:opacity-80"
        >
          Kembali ke Home
        </Link>
        <Link
          href={links.work}
          className="rounded-full border border-colorSecondaryDark px-7 py-3 font-medium transition-colors hover:border-colorLight"
        >
          Lihat Proyek
        </Link>
      </div>
    </main>
  );
}
