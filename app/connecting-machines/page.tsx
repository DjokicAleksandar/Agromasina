"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const ConMachines = () => {
  const connMachines = data[8];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={connMachines} header='Priključne mašine' index={0} aspectRatio='2/1'>
          <div>
            <p>
              Prodajemo visokokvalitetne <b>priključne mašine</b> namenjene za teške uslove rada, dostupne po pristupačnoj ceni 
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
      </div>
    </>
  )
}

export default ConMachines