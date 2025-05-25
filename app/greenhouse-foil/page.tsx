"use client";

import React from 'react'
import data from '@/data/data.json';
import PageComponent from '@/components/PageComponent';
import Breadcrumb from '@/components/Breadcrumb';

const Foil = () => {
  const foil = data[9];

  return (
    <>
      <Breadcrumb/>
      <div 
        className="w-full flex justify-center items-center flex-col gap-4" 
        style={{backgroundColor: "rgb(245, 245, 245)"}}>

        <PageComponent product={foil} header='Folije za plastenike' index={0}>
          <div>
            <p>
              U ponudi imamo <b>najkvalitetnije folije za plastenike na tržištu</b>, 
              prilagođene različitim uslovima proizvodnje i dužini trajanja.
            </p>
            <p>
              Za višegodišnju upotrebu, nudimo <b>originalne grčke folije brendova Kritis i Daios</b>, 
              poznate po izuzetnoj otpornosti i dugotrajnosti. Ove folije su projektovane za ozbiljnu proizvodnju i 
              imaju <b>prosečan vek trajanja do 8 godina</b>, uz odličnu UV stabilnost, difuziju svetlosti i mehaničku čvrstoću.
            </p>
            <p>
              Pored višegodišnjih, u ponudi imamo i <b>standardne folije za plastenike sa vekom trajanja do 3 godine</b>. 
              Odličan su izbor za proizvođače koji menjaju folije na kraće vremenske periode, 
              a pritom traže dobar kvalitet po pristupačnijoj ceni.
            </p>
            <p>
              Bez obzira na to da li vam je potreban pouzdan materijal za dugoročno pokrivanje ili fleksibilno sezonsko rešenje, 
              kod nas možete pronaći foliju koja odgovara vašim potrebama.
            </p>
          </div>
        </PageComponent>

      </div>
    </>
  )
}

export default Foil