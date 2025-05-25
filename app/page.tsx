"use client";

import React, { useEffect, useRef } from 'react'
import { useThreshold } from '@/context/ThresholdContext';
import Cards from '@/components/Cards'
import WelcomeImage from '@/components/WelcomeImage'
import data from '@/data/data.json';

//eb0909

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setThreshold } = useThreshold();
  
  const cards = data.filter(obj => (
      obj.name == "Proizvodni program" || obj.name == "Poljoprivredne mašine" || obj.name == "Poljoprivredna apoteka"
  ))

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setThreshold(height);
    }
  }, [setThreshold]);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4" style={{backgroundColor: "rgb(245, 245, 245)"}}>
      <div className='w-full' ref={ref}>
        <WelcomeImage/>
      </div>
      <Cards cards={cards} isHome={true} from=''/>
    </div>
  )
}

export default Page