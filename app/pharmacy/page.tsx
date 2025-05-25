"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const Pharmacy = () => {
  const fungicidi = data[15];
  const herbicidi = data[16];
  const insekticidi = data[17];
  const vdjubrivo = data[18];

  return (
    <>
    <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={fungicidi} header='Poljoprivredna apoteka' index={0}>
          <div>
            <p>
              <b>Fungicidi su hemijska ili biološka sredstva koja se koriste za suzbijanje i sprečavanje gljivičnih oboljenja kod biljaka.</b> 
              Njihova primena pomaže u zaštiti useva, očuvanju prinosa i produženju zdravog životnog ciklusa biljaka.
            </p>
          </div>
        </PageComponent>
        <PageComponent product={herbicidi} header='Poljoprivredna apoteka' index={1}>
          <div>
            <p>
              <b>Herbicidi su sredstva koja se koriste za uništavanje i suzbijanje korova u poljoprivredi.</b> 
                Primenom herbicida omogućava se nesmetan rast useva, jer korovi više ne preuzimaju vodu, hranljive materije i svetlost.
            </p>
          </div>
        </PageComponent>
        <PageComponent product={insekticidi} header='Poljoprivredna apoteka' index={2}>
          <div>
            <p>
              <b>Insekticidi su sredstva namenjena suzbijanju i uništavanju štetnih insekata koji napadaju biljke. </b>
                Njihova primena štiti useve od oštećenja, smanjuje gubitke i doprinosi zdravijem i kvalitetnijem prinosu.
            </p>
          </div>
        </PageComponent>
        <PageComponent product={vdjubrivo} header='Poljoprivredna apoteka' index={3}>
          <div>
            <p>
              <b>Veštačko đubrivo je mineralno đubrivo proizvedeno industrijskim putem, 
                koje obezbeđuje biljkama neophodne hranljive materije kao što su azot, fosfor i kalijum.</b> 
                Njegova upotreba poboljšava plodnost zemljišta i povećava prinos useva.
            </p>
          </div>
        </PageComponent>
      </div>
    </>
  )
}

export default Pharmacy