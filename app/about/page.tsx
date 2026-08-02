"use client";

import React from "react";
import Link from "next/link";
import "../work.css";
import "../header.css";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Footer } from "@/components/contactSection/footer";
import {
  awards,
  experiences,
  links,
  profile,
  skillGroups,
  socials,
} from "@/data/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-colorSecondaryLight">
      <span className="h-px w-8 bg-colorPrimary" aria-hidden="true" />
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeaderNavigation />
      <Header color="Light" />

      <main className="darkGradient min-h-screen w-full px-paddingX pb-40 pt-[20vh] text-colorLight">
        <div className="mx-auto w-full max-w-maxWidth">
          {/* ---------- Intro ---------- */}
          <p className="text-xs uppercase tracking-[0.25em] text-colorSecondaryLight">
            {profile.location}
          </p>

          <h1 className="mt-5 text-[clamp(2.4rem,_6vw,_5.5rem)] font-bold leading-[0.98] tracking-tight">
            {profile.name}
          </h1>

          <p className="mt-4 text-[clamp(1.1rem,_1.4vw_+_0.6rem,_1.9rem)] text-colorPrimary">
            {profile.role} <span className="text-colorSecondaryLight">/</span>{" "}
            {profile.secondaryRole}
          </p>

          <p className="mt-8 max-w-3xl text-[clamp(1rem,_0.6vw_+_0.8rem,_1.35rem)] leading-relaxed text-colorSecondaryLight">
            Lulusan Ilmu Komputer {profile.university} dengan pengalaman di
            seluruh lapisan pengembangan web — dari logika backend dan desain
            basis data menggunakan Django, Laravel, dan Flask, sampai antarmuka
            yang responsif dengan JavaScript, React.js, dan Vue.js.
          </p>

          <p className="mt-5 max-w-3xl text-[clamp(1rem,_0.6vw_+_0.8rem,_1.35rem)] leading-relaxed text-colorSecondaryLight">
            Untuk skripsi, saya membangun SariKidung — sistem manajemen
            pengetahuan berbasis ontologi untuk Kidung Bali, yang
            menggabungkan mesin rekomendasi berbasis aturan, model Decision
            Tree (CART), dan chatbot. Di luar kampus, saya mengerjakan sistem
            navigasi kantor dan sistem kepegawaian lewat magang dan pekerjaan
            lepas.
          </p>

          {/* ---------- Fakta singkat ---------- */}
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-y border-colorSecondaryDark py-10 md:grid-cols-4">
            {[
              { k: "Lulus", v: profile.graduationYear },
              { k: "IPK", v: profile.gpa },
              { k: "Kampus", v: profile.university },
              { k: "Basis", v: profile.location },
            ].map(({ k, v }) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-[0.2em] text-colorSecondaryLight">
                  {k}
                </dt>
                <dd className="mt-2 text-[clamp(1.1rem,_1vw_+_0.6rem,_1.6rem)] font-medium">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          {/* ---------- Pengalaman ---------- */}
          <section className="mt-24">
            <SectionLabel>Pengalaman</SectionLabel>

            <ol className="mt-10 border-l border-colorSecondaryDark">
              {experiences.map((exp) => (
                <li key={exp.role + exp.period} className="relative pb-12 pl-8">
                  <span
                    className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-colorPrimary"
                    aria-hidden="true"
                  />
                  <p className="text-xs uppercase tracking-[0.2em] text-colorSecondaryLight">
                    {exp.period}
                  </p>
                  <h3 className="mt-2 text-[clamp(1.15rem,_1vw_+_0.7rem,_1.7rem)] font-semibold">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-colorSecondaryLight">{exp.org}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-colorSecondaryLight">
                    {exp.detail}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- Keahlian ---------- */}
          <section className="mt-16">
            <SectionLabel>Keahlian</SectionLabel>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    {group.label}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-colorSecondaryDark px-3.5 py-1.5 text-sm text-colorSecondaryLight"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- Penghargaan ---------- */}
          <section className="mt-24">
            <SectionLabel>Penghargaan</SectionLabel>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-colorSecondaryDark sm:grid-cols-2">
              {awards.map((award) => (
                <li
                  key={award}
                  className="bg-[#052f42] p-6 leading-relaxed text-colorSecondaryLight"
                >
                  {award}
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Kontak ---------- */}
          <section className="mt-24">
            <SectionLabel>Kontak</SectionLabel>

            <ul className="mt-10 flex flex-wrap gap-3">
              {socials.map((social) => {
                const isExternal = social.href.startsWith("http");
                return (
                  <li key={social.name}>
                    <a
                      className="inline-block rounded-full border border-colorSecondaryDark px-5 py-2.5 transition-colors hover:border-colorPrimary hover:text-colorPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorPrimary"
                      href={social.href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ---------- Aksi ---------- */}
          <div className="mt-20 flex flex-wrap gap-4">
            <Link
              href={links.work}
              className="rounded-full bg-colorLight px-7 py-3.5 font-medium text-colorDark transition-opacity hover:opacity-80"
            >
              Lihat proyek
            </Link>
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-colorPrimary px-7 py-3.5 font-medium text-colorDark transition-opacity hover:opacity-80"
            >
              Buka CV
            </a>
            <a
              href={links.cv}
              download
              className="rounded-full border border-colorSecondaryDark px-7 py-3.5 font-medium transition-colors hover:border-colorLight"
            >
              Unduh CV
            </a>
            <Link
              href={links.contact}
              className="rounded-full border border-colorSecondaryDark px-7 py-3.5 font-medium transition-colors hover:border-colorLight"
            >
              Hubungi saya
            </Link>
          </div>
          <Footer className="relative bottom-auto mt-28 border-t border-colorSecondaryDark px-0 pt-10 mix-blend-normal" />
        </div>
      </main>
    </>
  );
}
