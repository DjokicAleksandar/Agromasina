"use client";

import React from "react";
import data from "@/data/data.json";
import PageComponent from "@/components/PageComponent";
import Breadcrumb from "@/components/Breadcrumb";

const ConMachines = () => {
  const connMachines = data[8];

  return (
    <>
      <Breadcrumb />
      <div
        className="w-full flex justify-center items-center flex-col gap-4"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <PageComponent
          product={connMachines}
          header="Priključne mašine"
          index={0}
          aspectRatio="2/1"
        >
          <div>
            <p>
              U ponudi imamo kompletnu paletu priključnih mašina koje su
              neophodne za savremenu poljoprivrednu proizvodnju. To uključuje
              <b>freze, plugove, rasipače mineralnog đubriva</b>, kao i mnoge
              druge mašine koje olakšavaju i unapređuju vaš rad na terenu.
            </p>
            <br />
            <p>
              Pored standardnih modela,koje uvek imamo na stanju, radimo i
              mašine po narudžbini, prilagođene specifičnim potrebama i
              zahtevima naših kupaca. Naš cilj je da obezbedimo opremu koja će
              maksimalno doprineti efikasnosti i kvalitetu vaše proizvodnje.
            </p>
            <br />
            <p>
              Bez obzira na veličinu i tip posla, kod nas možete pronaći sve što
              vam je potrebno za uspešan rad i dobar prinos.
            </p>
          </div>
        </PageComponent>
      </div>
    </>
  );
};

export default ConMachines;
