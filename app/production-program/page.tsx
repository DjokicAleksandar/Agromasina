"use client";

import React, { useRef, useEffect } from 'react'
import data from '@/data/data.json';
import PageHeader from '@/components/PageHeader';
import Cards from '@/components/Cards';
import { useThreshold } from '@/context/ThresholdContext';
import Breadcrumb from '@/components/Breadcrumb';

const ProdProgram = () => {
  const cards = data.filter(obj => (
      obj.id == 1 || obj.id == 4 || obj.id == 6 
  ))

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
        
        <div className='w-full' style={{marginBottom: "30px"}} ref={ref}>
          <PageHeader header='Proizvodni Program'/>
        </div>
        <Cards cards={cards} isHome={false} from="production-program"/>

      </div>
    </>
  )
}

export default ProdProgram