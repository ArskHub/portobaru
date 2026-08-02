"use client";

import React from "react";
import Link from "next/link";
import "../work.css";
import "../header.css";
import { Header } from "@/components/header";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Footer } from "@/components/contactSection/footer";
import { archive } from "@/data/archive";
import { links } from "@/data/data";

const total = archive.reduce((n, group) => n + group.items.length, 0);

export default function ArchivePage() {
  return (
    <>
      <HeaderNavigation />
      <Header color="Light" />

      <main className="darkGradient min-h-screen w-full px-paddingX pb-40 pt-[20vh] text-colorLight">
        <div className="mx-auto w-full max-w-maxWidth">
          <p className="text-xs uppercase tracking-[0.25em] text-colorSecondaryLight">
            Arsip · {total} proyek
          </p>

          <h1 className="mt-5 text-[clamp(2.4rem,_6vw,_5.5rem)] font-bold leading-[0.98] tracking-tight">
            Semua proyek
          </h1>

          <p className="mt-6 max-w-2xl leading-relaxed text-colorSecondaryLight">
            Daftar lengkap dari kuliah, magang, dan pekerjaan lepas. Yang
            bertanda titik kuning juga tampil di{" "}
            <Link
              href={links.work}
              className="text-colorLight underline underline-offset-4 hover:text-colorPrimary"
            >
              halaman Work
            </Link>{" "}
            dengan tampilan penuh.
          </p>

          {archive.map((group) => (
            <section key={group.label} className="mt-20">
              <h2 className="flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-colorSecondaryLight">
                {group.label}
                <span className="text-colorSecondaryDark">
                  {group.items.length}
                </span>
              </h2>

              <ul className="mt-8 border-t border-colorSecondaryDark">
                {group.items.map((item) => {
                  const Row = (
                    <>
                      <div className="flex items-start gap-3">
                        {item.featured && (
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-colorPrimary"
                            aria-hidden="true"
                          />
                        )}
                        <div className={item.featured ? "" : "pl-[1.125rem]"}>
                          <h3 className="text-[clamp(1.1rem,_0.8vw_+_0.8rem,_1.5rem)] font-semibold">
                            {item.name}
                            {item.href && (
                              <span
                                className="ml-2 inline-block text-colorPrimary opacity-0 transition-opacity group-hover:opacity-100"
                                aria-hidden="true"
                              >
                                ↗
                              </span>
                            )}
                          </h3>
                          <p className="mt-2 max-w-2xl leading-relaxed text-colorSecondaryLight">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                      <p className="shrink-0 pl-[1.125rem] text-sm text-colorSecondaryLight md:max-w-[16rem] md:pl-0 md:text-right">
                        {item.stack}
                      </p>
                    </>
                  );

                  return (
                    <li
                      key={item.name}
                      className="border-b border-colorSecondaryDark"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col gap-4 py-7 transition-colors hover:text-colorPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-colorPrimary md:flex-row md:items-start md:justify-between md:gap-10"
                        >
                          {Row}
                        </a>
                      ) : (
                        <div className="group flex flex-col gap-4 py-7 md:flex-row md:items-start md:justify-between md:gap-10">
                          {Row}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <div className="mt-20 flex flex-wrap gap-4">
            <Link
              href={links.work}
              className="rounded-full bg-colorLight px-7 py-3.5 font-medium text-colorDark transition-opacity hover:opacity-80"
            >
              Lihat proyek pilihan
            </Link>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-colorSecondaryDark px-7 py-3.5 font-medium transition-colors hover:border-colorLight"
            >
              Buka GitHub
            </a>
          </div>
          <Footer className="relative bottom-auto mt-28 border-t border-colorSecondaryDark px-0 pt-10 mix-blend-normal" />
        </div>
      </main>
    </>
  );
}
