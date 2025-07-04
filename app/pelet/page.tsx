"use client";

import React from "react";
import data from "@/data/data.json";
import Breadcrumb from "@/components/Breadcrumb";
import PageComponent from "@/components/PageComponent";

const Pelet = () => {
  const product = data[11];

  return (
    <>
      <Breadcrumb />
      <div
        className="w-full flex justify-center items-center flex-col gap-4"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <PageComponent
          product={product}
          header="Montaža plastenika"
          aspectRatio="4/3"
          index={0}
        >
          <div>
            <p>
              Kupovinom plastenika kod nas, dobijate uslugu{" "}
              <b className="font-bold">ključ u ruke. </b>
              To znači da mi obezbeđujemo sav neophodan materijal i vršimo
              kompletnu montažu plastenika na vašoj lokaciji, bilo gde u Srbiji.
            </p>
            <br />
            <p>
              Naš tim stručnjaka dolazi, montira i postavlja plastenik prema
              najvišim standardima, tako da vi dobijate funkcionalan i
              kvalitetan objekat spreman za rad, bez dodatnih briga i
              komplikacija.
            </p>
            <br />
            <p>
              Od konstrukcije, preko folije i svih potrebnih elemenata, sve je u
              našoj nadležnosti. Vi samo treba da nas obavestite gde želite
              montažu, a mi ćemo sve organizovati i realizovati.
            </p>
            <br />
            <p>
              Ovo je idealno rešenje za sve koji žele da uštede vreme i izbegnu
              stres prilikom postavljanja plastenika, a žele sigurnost i
              garanciju kvaliteta.
            </p>
          </div>
        </PageComponent>
      </div>
    </>
  );
};

export default Pelet;
