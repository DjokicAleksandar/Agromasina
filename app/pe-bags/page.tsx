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

        <PageComponent product={butikKese} header='Pe Kese' index={0} aspectRatio='1/1'>
          <div>
            <p>
              Proizvodimo visokokvalitetne <b className='font-bold'>butik kese</b> namenjene za butike i šopove koji žele da ostave 
              poseban utisak na svoje kupce. Idealne su za pakovanje garderobe, obuće, kozmetike, 
              kao i za pakovanje pošiljki i različite korporativne događaje.
            </p>
            <br/>
            <p>
              Naše kese izrađujemo od <b className='font-bold'>LDPE ili HDPE materijala</b>, što garantuje izdržljivost, fleksibilnost i lep izgled. 
              Takođe, mogu biti <b className='font-bold'>sa štampom po želji</b>, čime vaša ambalaža dobija prepoznatljiv i profesionalan izgled koji 
              dodatno promoviše vaš brend.
            </p>
            <br/>
            <p>
              Butik kese su savršen izbor za sve koji žele da kombinuju kvalitet, funkcionalnost i atraktivan dizajn.
            </p>
          </div>
        </PageComponent>

        <PageComponent product={tregerice} header='' index={1}>
          <div>
            <p>
              Naše kese tregerice izrađene su od <b className='font-bold'>biorazgradivog materijala</b>, čime aktivno doprinosimo očuvanju životne sredine. 
              Namenjene su svakodnevnoj upotrebi, a zahvaljujući mogućnosti štampe u dve boje, vaš brend može dobiti dodatnu 
              prepoznatljivost i istaknuti se na tržištu.
            </p>
            <br/>
            <p>
              Standardne gramaže koje koristimo obezbeđuju optimalnu nosivost, 
              ali po želji mogu biti prilagođene potrebama i preferencijama potrošača.
            </p>
            <br/>
            <p> Kese dolaze u sedam različitih dimenzija: </p>
            <br/> 
            <ul className='pl-4'>
              <li> - 18 x 30 cm</li>
              <li> - 22 x 40 cm</li>
              <li> - 22 x 45 cm</li>
              <li> - 25 x 47 cm</li>
              <li> - 29 x 52 cm</li>
              <li> - 30 x 55 cm</li>
              <li> - 40 x 74 cm</li>
            </ul>
            <br/>
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