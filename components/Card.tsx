"use client";

import React from "react";
import "../app/styles.css";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import FadeIn from "./FadeIn";

interface CardProps {
  name: string;
  images: string[];
  desc: string;
  url: string;
  index: number;
}

const Card = ({ name, images, desc, url, index }: CardProps) => {
  const isMobile = useIsMobile();
  const descs = [
    <p
      className={`flex flex-col pb-5 font-light whitespace-pre-line ${
        isMobile ? "mt-4 text-2xl/8 " : "text-3xl/10 "
      }`}
      key={0}
    >
      <strong className="font-bold">
        Proizvodnja različitih vrsta plastične ambalaže, prilagođene potrebama
        tržišta.
      </strong>{" "}
      <br />
      U našem asortimanu nalaze se kese tregerice, butik kese sa i bez štampe,
      PE vreće, vreće za smeće i crna folija.
      <br />
      Svi proizvodi izrađeni su od kvalitetnih materijala i dostupni su u više
      dimenzija i boja.
      <br /> <br />
      Mogućnost štampe logotipa ili promotivne poruke na kesama.
    </p>,
    <p
      className={`flex flex-col pb-5 font-light whitespace-pre-line ${
        isMobile ? "mt-4 text-2xl/8 " : "text-3xl/10 "
      }`}
      key={1}
    >
      <strong className="font-bold">
        Sve vrste poljoprivrednih mašina na jednom mestu!
      </strong>{" "}
      <br />
      Traktori, traktorske prikolice i kompletan asortiman priključnih mašina,
      neophodnih za savremenu poljoprivrednu proizvodnju.
    </p>,
    <p
      className={`flex flex-col pb-5 font-light whitespace-pre-line ${
        isMobile ? "mt-4 text-2xl/8 " : "text-3xl/10 "
      }`}
      key={2}
    >
      Širok asortiman herbicida, mineralnih đubriva i svega što je potrebno za
      zaštitu i ishranu bilja tokom cele sezone.
      <br />
      Snabdevamo poljoprivredne proizvođače različitih profila i veličina, uz
      stalnu dostupnost najtraženijih preparata
    </p>,
  ];

  return (
    <div
      className={`relative flex justify-center items-center gap-5 ${
        isMobile ? "flex-col" : index % 2 == 0 ? "flex-row" : "flex-row-reverse"
      }`}
      style={{ marginBottom: "40px", width: "90%" }}
    >
      <div
        className={`block shadow-xl relative bg-white pb-5`}
        style={{ width: "100%" }}
      >
        <FadeIn duration={100}>
          <Image
            width={isMobile ? 400 : 800}
            height={400}
            alt="Bags"
            src={images[0]}
            className="w-full"
            style={{ height: "auto" }}
          />
        </FadeIn>

        <FadeIn duration={100}>
          <div className="p-4">
            <p
              className={` ${isMobile ? "text-4xl" : "text-5xl"} pt-3 pb-3`}
              style={{ fontWeight: "200" }}
            >
              {name}
            </p>
            <p
              className={`pt-2 pb-2 mb-5 ${isMobile ? "text-xl" : "text-2xl"}`}
            >
              {desc}
            </p>
            <Link
              href={url}
              className={`mt-5 flex items-center p-3 border border-red-500 rounded-md ${
                isMobile ? "text-xl" : "text-2xl"
              } gap-2`}
              style={{ width: "min-content" }}
            >
              Detaljnije
              <FaChevronRight className="text-sm" />
            </Link>
          </div>
        </FadeIn>
      </div>

      <div style={{ width: isMobile ? "100%" : "80%" }}>
        <FadeIn>
          <div>{descs[index]}</div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Card;
