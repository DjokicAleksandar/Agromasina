"use client";

import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useThreshold } from "@/context/ThresholdContext";
import React, { useRef, useEffect } from "react";

const TermsOfService = () => {
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
            Dobrodošli na zvanični sajt preduzeća{" "}
            <b>Agromašina Plus Stajkovce.</b> Korišćenjem ovog sajta, pristajete
            na sledeće uslove korišćenja:
          </p>

          <h1 className="ml-5 text-2xl font-bold">1. Sadržaj sajta </h1>
          <p className="m-5">
            Sadržaj na ovom sajtu je informativnog karaktera i odnosi se na
            delatnosti firme, kao što su prodaja rezervnih delova,
            poljoprivredne opreme, montaža plastenika i drugo.
          </p>

          <h1 className="ml-5 text-2xl font-bold">2. Intelektualna svojina </h1>
          <p className="m-5">
            Sav tekstualni, grafički i multimedijalni sadržaj na sajtu je
            vlasništvo <b>Agromašina Plus Stajkovce</b>, osim ako nije drugačije
            naznačeno. Zabranjeno je neovlašćeno korišćenje, kopiranje i
            distribucija bez prethodne saglasnosti.
          </p>

          <h1 className="ml-5 text-2xl font-bold">
            3. Odricanje od odgovornosti
          </h1>
          <p className="m-5">
            Trudimo se da sve informacije na sajtu budu tačne i ažurirane, ali
            ne garantujemo potpunu tačnost. Ne odgovaramo za eventualnu štetu
            nastalu korišćenjem informacija sa sajta.
          </p>

          <h1 className="ml-5 text-2xl font-bold">4. Izmene uslova</h1>
          <p className="m-5">
            <b>Agromašina Plus Stajkovce</b> zadržava pravo da u bilo kom
            trenutku izmeni ove uslove korišćenja. Korisnici su dužni da se
            informišu o eventualnim izmenama.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
