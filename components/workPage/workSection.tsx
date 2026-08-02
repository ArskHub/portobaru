import React from "react";
import Magentic from "@/components/ui/magentic";
import { Header } from "@/components/header";
import { Bulge } from "../bulge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { links } from "@/data/data";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 14 14"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="none" strokeWidth="2" fill="none" fillRule="evenodd">
      <g
        transform="translate(-1019.000000, -279.000000)"
        stroke="currentColor"
        strokeWidth="2"
      >
        <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
          <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
          <line x1="12" y1="0" x2="0" y2="12"></line>
        </g>
      </g>
    </g>
  </svg>
);

export function WorkSection({
  index,
  item,
  color,
  length,
}: {
  index: number;
  item: Project;
  color: "Dark" | "Light";
  length: number;
}) {
  const possibleTailwindClasses = [
    "text-colorDark",
    "text-colorLight",
    "bg-colorDark",
    "bg-colorLight",
    "bg-colorSecondaryDark",
    "bg-colorSecondaryLight",
  ];

  const titleLines = item.title.split("\n");
  const pageNumber = String(index + 1).padStart(2, "0");

  // Repo privat tidak punya link publik: arahkan ke email supaya
  // pengunjung tetap punya jalan untuk menindaklanjuti.
  const requestAccessHref = `${links.emailHref}?subject=${encodeURIComponent(
    `Permintaan akses repositori ${titleLines.join(" ")}`,
  )}`;
  const primaryHref = item.demo ?? item.link ?? requestAccessHref;
  const primaryLabel = item.demo
    ? "Live Demo"
    : item.link
      ? "View Code"
      : "Minta Akses";
  const hasBothLinks = Boolean(item.demo && item.link);

  return (
    <div
      className={`section s${index} ${
        color == "Dark" ? "lightGradient" : "darkGradient"
      }
      text-color${color} `}
      key={item.link}
    >
      <Header color={color}></Header>
      <Bulge type={color} />

      <div className="fullpage__slide">
        <a
          className={`image image--works image--works${
            index + 1
          } anime rounded-3xl `}
          target="_blank"
          rel="noopener noreferrer"
          href={primaryHref}
          aria-label={`Buka proyek ${titleLines.join(" ")}`}
          style={{
            background: `url(${item.imageLink}) center center / contain no-repeat`,
          }}
        >
          <div className="image__over">
            <div className="image__cover">1</div>
            <div className="image__cover">2</div>
          </div>
          <div className="page-num anime ">
            <div className="mask absolute left-0 top-0 -z-10 h-full w-full rounded-2xl bg-colorSecondaryDark"></div>
            <p className="p-8 text-colorLight ">{pageNumber}</p>
          </div>
        </a>

        <div className="title ml-paddingX">
          <h2 className="title__text js-letter anime mask font-bold tracking-tight">
            {titleLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
            <br />
          </h2>
          <div className="js-letter anime borderv">
            <span className={`bg-colorSecondary${color}`}></span>
            <span className={`bg-colorSecondary${color}`}></span>
          </div>
          <p className="title__lead js-letter anime ">{item.description}</p>

          {item.isPrivate && (
            <p className="js-letter anime mt-3 inline-block rounded-full border border-current px-4 py-1.5 text-[0.5em] uppercase tracking-[0.2em] opacity-70">
              Repositori privat
            </p>
          )}

          <div className="btn-wrap js-letter anime flex flex-wrap items-center gap-4">
            <Magentic
              strength={50}
              className={`btn text-color${
                color === "Dark" ? "Light" : "Dark"
              } bg-color${color} mask`}
              href={primaryHref}
              target="_blank"
            >
              <p className="shapka">
                {primaryLabel}
                <ArrowIcon className="ml-4 inline w-[0.8em] -rotate-[75deg] text-inherit" />
              </p>
            </Magentic>

            {hasBothLinks && (
              <Magentic
                strength={50}
                className={`btn text-color${color} mask border-2 border-current bg-transparent`}
                href={item.link}
                target="_blank"
              >
                <p className="shapka">
                  Source
                  <ArrowIcon className="ml-4 inline w-[0.8em] -rotate-[75deg] text-inherit" />
                </p>
              </Magentic>
            )}
          </div>
        </div>
      </div>

      <div className="anime absolute bottom-10 flex w-full items-end justify-center gap-6">
        {Array(length)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                `h-4 w-1 bg-colorSecondary${color} rounded-full`,
                ` ${i === index ? `h-10 bg-color${color}` : ""}`,
              )}
            ></div>
          ))}
      </div>
    </div>
  );
}
