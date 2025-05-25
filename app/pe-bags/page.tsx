"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const Bags = () => {
  const butikKese = data[1];
  const tregerice = data[2];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={butikKese} header='Pe Kese' index={0}>
          <div>
            <p>
              Proizvodimo visokokvalitetne <b>butik kese</b> namenjene za butike i šopove koji žele da ostave 
              poseban utisak na svoje kupce. Idealne su za pakovanje garderobe, obuće, kozmetike, 
              kao i za pakovanje pošiljki i različite korporativne događaje.
            </p>
            <p>
              Naše kese izrađujemo od <b>LDPE ili HDPE materijala</b>, što garantuje izdržljivost, fleksibilnost i lep izgled. 
              Takođe, mogu biti <b>sa štampom po želji</b>, čime vaša ambalaža dobija prepoznatljiv i profesionalan izgled koji 
              dodatno promoviše vaš brend.
            </p>
            <p>
              Butik kese su savršen izbor za sve koji žele da kombinuju kvalitet, funkcionalnost i atraktivan dizajn.
            </p>
          </div>
        </PageComponent>

        <PageComponent product={tregerice} header='' index={1}>
          <div>
            <p>
              Naše kese tregerice izrađene su od <b>biorazgradivog materijala</b>, čime aktivno doprinosimo očuvanju životne sredine. 
              Namenjene su svakodnevnoj upotrebi, a zahvaljujući mogućnosti štampe u dve boje, vaš brend može dobiti dodatnu 
              prepoznatljivost i istaknuti se na tržištu.
            </p>
            <p>
              Standardne gramaže koje koristimo obezbeđuju optimalnu nosivost, 
              ali po želji mogu biti prilagođene potrebama i preferencijama potrošača.
            </p>
            <p>
              Kese dolaze u sedam različitih dimenzija: <br/>
              18x30 cm, 22x40 cm, 22x45 cm, 25x47 cm, 29x52 cm, 30x55 cm i 40x74 cm.
            </p>
            <p>
              Ove kese su idealan izbor za sve koji žele praktično, ekološki prihvatljivo i efektno rešenje za pakovanje.
            </p>
          </div>
        </PageComponent>
      </div>
    </>
  )
}

export default Bags