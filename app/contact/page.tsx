"use client";

import React, { useRef, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import PageHeader from "@/components/PageHeader";
import { useThreshold } from "@/context/ThresholdContext";

const Contact = () => {
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
          <PageHeader header="Kontakt" />
        </div>

        <div className="w-full p-3 m-5 text-xl" style={{ marginTop: "30px" }}>
          <p className="m-5 mt-3 text-4xl">
            <b> Pronadjite nas </b>
          </p>

          <p className="ml-5"> Stajkovce 4, Vlasotince </p>
          <p className="ml-5"> 064/642-45-45, 064/642-45-44 </p>
          <p className="ml-5">
            Radno vreme: Ponedeljak - Nedelja: 08:00 - 20:00
          </p>

          <ul className="m-5 flex flex-col gap-2">
            <li
              style={{ display: "flex", alignItems: "center" }}
              className="gap-3"
            >
              <b>Email:</b> agromasinaplus@gmail.com
            </li>
            <li
              style={{ display: "flex", alignItems: "center" }}
              className="gap-3"
            >
              <b> Instagram:</b>
              <a href="https://www.instagram.com/agromasinaplus/">
                agromasinaplus
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              window.open(
                "https://www.google.com/maps/search/?api=1&query=AGROMAŠina+plus,+Stajkovce",
                "_blank"
              );
            }}
            className={`m-5 flex items-center p-3 border border-red-500 rounded-md text-xl gap-2`}
          >
            Prikaži na mapi
          </button>
          <p className="m-5">
            <b>Hvala što ste posetili naš sajt. Radujemo se vašem javljanju!</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
