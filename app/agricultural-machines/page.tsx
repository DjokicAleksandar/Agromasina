"use client";

import React, { useRef, useEffect } from 'react';
import data from '@/data/data.json';
import Breadcrumb from '@/components/Breadcrumb';
import PageHeader from '@/components/PageHeader';
import Cards from '@/components/Cards';
import { useThreshold } from '@/context/ThresholdContext';

const AgrMachines = () => {
  const cards = data.filter(obj => (
    obj.id == 7 || obj.id == 8 || obj.id == 9 
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

        <div className='w-full' style={{marginBottom: "40px"}} ref={ref}>
          <PageHeader header='Poljoprivredne Mašine'/>
        </div>

        <Cards cards={cards} isHome={false} from="agricultural-machines"/>

      </div>
    </>
  )
}

export default AgrMachines