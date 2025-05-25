"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const SpareParts = () => {
  const spareParts = data[10];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}> 

        <PageComponent product={spareParts} header='Rezervni delovi' index={0}>
          <div>
            <p>
              Kod nas možete pronaći sve <b>vrste rezervnih</b> delova za poljoprivredne mašine i opremu. 
              Bilo da vam trebaju delovi za traktore, priključne mašine ili druge uređaje, obezbeđujemo kvalitetne, 
              originalne i proverene komponente koje garantuju dugotrajnost i pouzdan rad.
            </p>
            <br/>
            <p>
              Naša ponuda obuhvata širok asortiman delova koji se lako ugrađuju i kompatibilni su sa najpoznatijim brendovima na tržištu. 
              Brza dostupnost i stručna podrška omogućavaju vam da bez odlaganja vratite svoju opremu u punu funkciju.
            </p>
          </div>
        </PageComponent>

      </div>
    </>
  )
}

export default SpareParts