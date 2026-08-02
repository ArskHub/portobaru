import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Magentic from "@/components/ui/magentic";
import { links } from "@/data/data";

/** Stack asli dari CV. Tambah atau kurangi bebas. */
const STACK_TOP = [
  "React.js",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Figma",
];
const STACK_BOTTOM = [
  "Django",
  "Laravel",
  "Flask",
  "Python",
  "PHP",
  "REST API",
  "MySQL",
  "Git",
];

const FADE_EDGES = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
};

function Pill({ label }: { label: string }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-[clamp(14px,_1vw_+_8px,_20px)] font-medium text-colorSecondaryLight">
      {label}
    </span>
  );
}

function PillRow({
  items,
  rowRef,
}: {
  items: string[];
  rowRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className="pointer-events-none -mx-paddingX select-none overflow-hidden py-2"
      style={FADE_EDGES}
    >
      <div ref={rowRef} className="flex w-max gap-4">
        {[...items, ...items, ...items].map((item, i) => (
          <Pill key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  );
}

export function WorkWrapper() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // ScrollTrigger tidak dipakai: halaman ini digerakkan fullPage.js,
    // yang tidak memicu event scroll biasa.
    // Konten digandakan 3x, jadi bergeser -33.333% terasa mulus tanpa jeda.
    const tweens = [
      gsap.to(topRef.current, {
        xPercent: -33.333,
        duration: 22,
        repeat: -1,
        ease: "none",
      }),
      gsap.fromTo(
        bottomRef.current,
        { xPercent: -33.333 },
        { xPercent: 0, duration: 26, repeat: -1, ease: "none" },
      ),
    ];

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <PillRow items={STACK_TOP} rowRef={topRef} />

      <div className="flex max-w-maxWidth flex-col items-center py-[clamp(2.5rem,_7vh,_5rem)] text-center">
        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-colorSecondaryLight">
          <span className="h-1.5 w-1.5 rounded-full bg-colorPrimary" />
          Terbuka untuk peluang baru
        </p>

        <h2 className="mt-7 max-w-4xl text-[clamp(2.2rem,_6vw,_5rem)] font-bold leading-[1.02] tracking-tight text-colorLight">
          Punya ide yang perlu
          <br />
          dibangun<span className="text-colorPrimary">?</span>
        </h2>

        <p className="mt-7 max-w-xl text-[clamp(1rem,_0.6vw_+_0.8rem,_1.2rem)] leading-relaxed text-colorSecondaryLight">
          Saya mengerjakan web dari backend sampai antarmuka — sistem
          informasi, dashboard, atau situs perusahaan. Ceritakan kebutuhanmu,
          saya balas secepatnya.
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <Magentic
            strength={40}
            href={links.contact}
            className="mask rounded-full bg-colorLight px-8 py-4 font-semibold text-colorDark transition-opacity hover:opacity-85"
          >
            <span>Mulai obrolan</span>
          </Magentic>

          <Magentic
            strength={40}
            href={links.work}
            className="mask rounded-full border border-white/25 px-8 py-4 font-semibold text-colorLight transition-colors hover:border-colorLight"
          >
            <span>Lihat proyek</span>
          </Magentic>
        </div>
      </div>

      <PillRow items={STACK_BOTTOM} rowRef={bottomRef} />
    </main>
  );
}