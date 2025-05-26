"use client";

import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import { useThreshold } from '@/context/ThresholdContext';
import React, { useRef, useEffect } from 'react';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setThreshold } = useThreshold();
    
  useEffect(() => {
  if (ref.current) {
      const height = ref.current.offsetHeight;
      setThreshold(height);
  }
  }, [setThreshold]);

  return (
    <>
      <Breadcrumb/>
        <div 
          className="w-full flex justify-center items-center flex-col gap-4" 
          style={{backgroundColor: "rgb(245, 245, 245)"}}>

          <div className='w-full' ref={ref}>
            <PageHeader header='Kontakt'/>
          </div>

          <div className='w-full p-5 m-5 text-xl'>
            <p className="ml-5">
              <b>Agromašina Plus</b> je porodična firma sa dugom tradicijom, osnovana davne 1994. godine. 
              Naša priča počela je kao prodavnica rezervnih delova za poljoprivredne mašine, 
              iz potrebe da poljoprivrednicima u regionu obezbedimo kvalitetne i dostupne komponente za svakodnevni rad. 
              Kroz godine posvećenog rada, razvijali smo se i širili delatnost, 
              prateći potrebe tržišta i osluškujući zahteve savremenog poljoprivrednika.
            </p>
            <br/>
            <p className="ml-5">
              Danas <b>Agromašina Plus</b> posluje kao moderna i višeslojna kompanija koja objedinjuje više oblasti delovanja, 
              uz stalno ulaganje u razvoj i kvalitet.
            </p>
            <br/>
            <p className="ml-5">
              Naše glavne delatnosti obuhvataju:
            </p>
            <br/>
            <ul className='ml-5 flex flex-col gap-4 pl-4'>
              <li >
                <b> - Prodavnicu rezervnih delova za poljoprivredne mašine, </b> 
                sa bogatim asortimanom delova za različite tipove mehanizacije i opreme.
              </li>
              <li>
                <b> - Proizvodnju plastičnih kesa, vreća i folija</b> – segment kojim se posebno ponosimo. 
                Naša proizvodnja omogućava brzu isporuku, fleksibilnost u dimenzijama i vrstama materijala, 
                kao i visok kvalitet koji zadovoljava potrebe kako poljoprivrede, tako i drugih industrija.
              </li>
              <li>
                <b> - Poljoprivrednu apoteku</b>, gde naši stručni zaposleni pružaju savetodavne usluge i pomažu u izboru sredstava za zaštitu bilja, 
                semenske robe, đubriva i drugih proizvoda koji čine osnov svake uspešne poljoprivredne proizvodnje.
              </li>
              <li>
                <b> - Prodaju poljoprivredne mehanizacije</b> – traktora, prikolica i dodatne opreme potrebne za sve faze rada u polju i na farmi. 
                Zastupamo renomirane proizvođače i nudimo tehničku podršku prilikom izbora i korišćenja opreme.
              </li>
            </ul>
            <br/>
            <p className="ml-5">
              Više od 30 godina uspešno poslujemo zahvaljujući jasno postavljenim vrednostima – <b>kvalitet, odgovornost, 
              inovacija i posvećenost kupcu</b>. Ponosni smo što smo postali oslonac mnogim gazdinstvima, preduzetnicima i firmama širom Srbije.
            </p>
            <br/>
            <p className="ml-5">
              Dobrodošli u <b>Agromašinu Plus</b> – mesto gde se tradicija i savremenost susreću, 
              a svaki kupac dobija rešenje prilagođeno njegovim potrebama.
            </p>
          </div>
        </div>
    </>
  )
}

export default Contact