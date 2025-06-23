"use client";

import React, { useRef, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useThreshold } from '@/context/ThresholdContext';

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

          <div className='w-full p-3 m-5 text-xl' style={{marginTop: "30px"}}>
            <p className="m-5">
              <b>Dobrodošli na našu kontakt stranicu!</b>
            </p>
            <p className="m-5">
              Ukoliko imate bilo kakva pitanja, predloge, komentare ili želite da poručite neki od naših proizvoda/usluga – 
              ovde ste na pravom mestu.
            </p>
              
            <p className='m-5'>
              Bez obzira da li vam je potrebna dodatna informacija o tome što nudimo, imate tehničko pitanje, 
              želite da saznate više o ceni, rokovima ili želite da naručite – slobodno nas kontaktirajte. 
              <b> Tu smo da odgovorimo jasno, brzo i konkretno.</b>
            </p>

            <ul className='m-5 flex flex-col gap-4'>
              <li style={{display: "flex", alignItems: "center"}} className='gap-3'>
                <FaRegEnvelope className='text-3xl text-[#0a2b14]'/>
                <b> Email: </b> agromasinaplus@gmail.com
              </li>
              <li style={{display: "flex", alignItems: "center"}} className='gap-3'>
                <FaPhoneAlt className='text-2xl text-[#0a2b14]'/>
                <b> Telefon: </b> 0612345678
              </li>
              <li style={{display: "flex", alignItems: "center"}} className='gap-3'>
                <FaInstagram className='text-3xl text-[#0a2b14]'/>
                <b> Instagram: </b> @agromasinaplus
              </li>
            </ul>
            <p className='m-5'>
              Trudimo se da odgovorimo u roku od 24 časa, najkasnije u roku od 48h, u zavisnosti od obima upita.
            </p>
            <p className='m-5'>
              Ne ustručavajte se da nas kontaktirate – svako pitanje je dobrodošlo, a svaka saradnja za nas je dragocena.
            </p>
            <p className='m-5'>
              <b>Hvala što ste posetili naš sajt. Radujemo se vašem javljanju!</b>
            </p>

          </div>
        </div>
    </>
  )
}

export default Contact