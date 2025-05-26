"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const Trailers = () => {
  const trailers = data[7];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={trailers} header='Prikolice' index={0} aspectRatio='3/2'>
          <div>
            <p>
              Pored traktora, u ponudi imamo i <b>traktorske prikolice koje kombinuju kvalitet i pristupačnost</b>. 
              Prikolice su dizajnirane da izdrže teške uslove rada, pružajući sigurnost i efikasnost prilikom 
              transporta različitih vrsta tereta i rada u povrtarstvu, ratarstvu ili voćarstvu
            </p>
            <br/>
            <p>
              Kupovinom ovih mašina dobijate pouzdanog partnera u radu,
               koji vam omogućava efikasnost, dugotrajnost i sigurnost u svakodnevnim poljoprivrednim poslovima.
            </p>
          </div>  
        </PageComponent>
      </div>
    </>
  )
}

export default Trailers