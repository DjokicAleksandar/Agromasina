"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const CrnaFolija = () => {
  const crnaFolija = data[5];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>
      
        <PageComponent product={crnaFolija} header='PE Crna Folija' index={0}>
          <div>
            <p>
              U okviru sopstvene proizvodnje, razvili smo i plasirali naš brend <b>AGM Agrofol</b> – crnu foliju namenjenu za
              upotrebu u poljoprivredi. Reč je o kvalitetnoj foliji koja se koristi za <b>malčiranje zemljišta</b>, 
              odnosno prekrivanje površine oko biljaka radi očuvanja vlage, smanjenja rasta korova i poboljšanja 
              mikroklimatskih uslova u zoni korena.
            </p>
            <p>
              Folija doprinosi bržem razvoju biljaka, smanjuje potrebu za hemijskim sredstvima i štiti zemljište od erozije i isušivanja. 
              Najčešće se koristi u proizvodnji povrća, jagoda, cveća i drugih kultura koje zahtevaju stabilne i kontrolisane uslove za rast.
            </p>
            <p>
              <b>AGM Agrofol</b> proizvodimo u sledećim širinama:
            </p>
            <ul className='pl-4'>
              <li> - 50cm</li>
              <li> - 60cm</li>
              <li> - 80cm</li>
              <li> - 1m</li>
              <li> - 1.20m</li>
              <li> - 1.50m</li>
            </ul>
            <p>
              Folija je izrađena od kvalitetnog materijala, otporna je na UV zračenje i prilagođena radu na otvorenom, 
              u različitim vremenskim uslovima. Dolazi u rolni, spremna za lako i brzo postavljanje, ručno ili mehanički.
            </p>
          </div>
        </PageComponent>

      </div>
    </>
  )
}

export default CrnaFolija