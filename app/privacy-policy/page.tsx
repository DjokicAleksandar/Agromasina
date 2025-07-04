"use client";

import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useThreshold } from "@/context/ThresholdContext";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const PrivacyPolicy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setThreshold } = useThreshold();

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setThreshold(height);
    }
  }, [setThreshold]);

  return (
    <>
      <Breadcrumb />
      <div
        className="w-full flex justify-center items-center flex-col gap-4"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <div className="w-full" ref={ref}>
          <PageHeader header="Politika privatnosti" />
        </div>

        <div className="w-full p-3 m-5 text-xl" style={{ marginTop: "40px" }}>
          <p className="m-5">
            <b>Agromašina Plus Stajkovce</b> poštuje privatnost svojih
            posetilaca i obavezuje se da štiti sve informacije koje se mogu
            prikupiti tokom korišćenja ovog sajta.
          </p>

          <h1 className="ml-5 text-2xl font-bold">1. Prikupljanje podataka </h1>
          <p className="m-5">
            Sajt <b>Agromašina Plus</b> ne prikuplja lične podatke korisnika.
            Korisnicima nije omogućena registracija, ostavljanje komentara niti
            online kupovina.
          </p>

          <h1 className="ml-5 text-2xl font-bold">2. Kolačići - Cookies </h1>
          <p className="m-5">
            Sajt <b>Agromašina Plus</b> ne koristi nikakve kolačiće, ne prati
            korisnike niti prikuplja lične podatke.
          </p>

          <h1 className="ml-5 text-2xl font-bold">
            3. Linkovi ka trećim stranama{" "}
          </h1>
          <p className="m-5">
            Na sajtu se mogu nalaziti linkovi ka drugim sajtovima.{" "}
            <b>Agromašina Plus Stajkoce</b> ne snosi odgovornost za sadržaj i
            politiku privatnosti tih sajtova.
          </p>

          <h1 className="ml-5 text-2xl font-bold">
            4. Izmene politike privatnosti{" "}
          </h1>
          <p className="m-5">
            Zadržavamo pravo da povremeno izmenimo ovu politiku privatnosti. Sve
            izmene biće objavljene na ovoj stranici i stupaju na snagu odmah po
            objavljivanju. Za sva pitanja možete nas kontaktirati putem podataka
            navedenih na stranici{" "}
            <Link href={"/contact"}>
              <b>Kontakt.</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
