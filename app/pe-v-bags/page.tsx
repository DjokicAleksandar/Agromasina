"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const Vrece = () => {
  const vrece = data[3];
  const vreceZaSmece = data[4];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={vrece} header='PE Vreće' index={0}>
          <div>
            <p>
              Proizvodimo visokokvalitetne <b className='font-bold'>PE vreće</b> koje se koriste u raznim industrijama – od poljoprivrede, 
              preko prehrambene i građevinske industrije, do svakodnevne komercijalne upotrebe. Pored standardnih modela, 
              omogućavamo <b className='font-bold'>izradu vreća po meri</b>, gde se dimenzije, debljina i težina materijala prilagođavaju vašim potrebama.
            </p>
            <br/>
            <p>
              Naše <b className='font-bold'>LDPE vreće</b> izrađuju se od proverenih i izdržljivih materijala, što garantuje 
              <b className='font-bold'>veliku čvrstoću, otpornost i dug vek trajanja</b>, čak i pri zahtevnoj upotrebi.
            </p>
            <br/>
            <p>
              U standardnoj ponudi dostupne su sledeće dimenzije: 
            </p>
            <ul className='pl-4'>
              <li> - 35 x 67 cm</li>
              <li> - 40 x 60 cm</li>
              <li> - 40 x 80 cm</li>
              <li> - 48 x 100 cm</li>
              <li> - 55 x 105 cm (debljine: 0,12 mm, 0,15 mm, 0,24 mm)</li>
            </ul>
            <br/>
            <p>
              Po želji, <b className='font-bold'>na vreće možemo aplicirati i štampu u jednoj ili više boja</b>, 
              čime se postiže dodatna prepoznatljivost i profesionalni izgled ambalaže.
            </p>
          </div>  
        </PageComponent>

        <PageComponent product={vreceZaSmece} header='' index={1} aspectRatio='1/1'>
          <div>
            <p>
              U našoj proizvodnji izrađujemo i <b className='font-bold'>vreće za smeće</b>, namenjene za domaćinstva, ugostiteljstvo, industriju,
              komunalne službe i sve druge korisnike kojima je potrebno pouzdano i praktično rešenje za odlaganje otpada.
            </p>
            <br/>
            <p>
              Vreće su izrađene od <b className='font-bold'>kvalitetnog materijala</b>, otporne su na kidanje i probijanje, 
              i idealne za svakodnevnu upotrebu. Dolaze sa <b className='font-bold'>faltama</b> koje omogućavaju dodatni volumen i veću praktičnost pri upotrebi.
            </p>
            <br/>
            <p>
              Dostupne su u sledećim dimenzijama: 
            </p>
            <ul className='pl-4'>
              <li> - 40 x 60 cm</li>
              <li> - 55 x 105 cm</li>
              <li> - 46 x 110 cm</li>
            </ul>
            <br/>
            <p>
              Bez obzira da li su u pitanju manji ili veći kapaciteti, 
              naše vreće za smeće predstavljaju pouzdano rešenje za uredno, higijensko i efikasno upravljanje otpadom.
            </p>
          </div>
        </PageComponent>
      </div>
    </>
  )
}

export default Vrece