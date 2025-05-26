"use client";

import React from 'react';
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const Tractors = () => {
  const tractors = data[6];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={tractors} header='Traktori' index={0} aspectRatio='3/2'>
          <div>
            <p>
              <b>Solis traktori</b> poznati su po modernoj tehnologiji, snažnim motorima i jednostavnom rukovanju, 
              što ih čini izuzetno popularnim među poljoprivrednicima koji traže kombinaciju snage i pristupačne cene.
            </p>
            <br/>
            <p>
              Sa druge strane, <b>IMT traktori</b> su deo tradicije domaće poljoprivrede i još uvek su prvi izbor 
              za mnoge zbog svoje otpornosti i jednostavnog održavanja.
            </p>
            <br/>
            <p>
              Kupovinom ovih mašina dobijate pouzdanog partnera u radu, koji vam omogućava efikasnost, 
              dugotrajnost i sigurnost u svakodnevnim poljoprivrednim poslovima.
            </p>
          </div>  
        </PageComponent>
      </div>
    </>
  )
}

export default Tractors