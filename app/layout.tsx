import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import { links, profile, socials } from "@/data/data";
import Script from "next/script";

import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const dM_Sans = DM_Sans({ subsets: ["latin-ext"] });
const satoshi = localFont({
  src: "../font/satoshi/Satoshi-Variable.woff2",
  style: "normal",
});

const helvetica = localFont({
  src: "../font/helvetica/HelveticaNowDisplay-Medium.woff2",
  style: "normal",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ardiskaa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ardee.dev — Putu Ardi Sudarmika | Software Engineer",
    template: "%s | Ardee.dev",
  },
  description:
    "Software engineer dan full stack web developer asal Bali. Django, Laravel, React.js, dan Vue.js — dari logika backend sampai antarmuka pengguna.",
  keywords: [
    "Putu Ardi Sudarmika",
    "Software Engineer Bali",
    "Full Stack Web Developer Indonesia",
    "React Developer Indonesia",
    "Next.js",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Putu Ardi Sudarmika", url: "https://github.com/ArskHub" }],
  creator: "Putu Ardi Sudarmika",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Ardee.dev",
    title: "Putu Ardi Sudarmika — Software Engineer",
    description:
      "Software engineer dan full stack web developer asal Bali. Django, Laravel, React.js, dan Vue.js — dari logika backend sampai antarmuka pengguna.",
    images: [
      {
        url: "/img/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ardee.dev — Putu Ardi Sudarmika, Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Putu Ardi Sudarmika — Software Engineer",
    description:
      "Full stack web developer asal Bali. Django, Laravel, React.js, Vue.js.",
    creator: "@ardisdrmkaaa",
    images: ["/img/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.role,
  url: siteUrl,
  image: `${siteUrl}/img/og-image.svg`,
  email: links.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bali",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.university,
  },
  knowsAbout: [
    "Full Stack Web Development",
    "React.js",
    "Vue.js",
    "Django",
    "Laravel",
    "Python",
    "Machine Learning",
  ],
  sameAs: socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <GoogleAnalytics />
      </head>

      <body className={helvetica.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <StoreProvider>{children}</StoreProvider>
      </body>
      {/* CATATAN: ScrambleTextPlugin adalah plugin berbayar GSAP (Club GreenSock)
          yang di sini dimuat dari CDN milik pihak ketiga. Sebaiknya diganti
          dengan lisensi resmi, atau hapus baris ini — efek scramble akan
          dinonaktifkan otomatis tanpa merusak situs. */}
      <Script src="https://cdn.jsdelivr.net/gh/vipulkumar-dev/gsap@2024/ScrambleTextPlugin.min.js" />
    </html>
  );
}
