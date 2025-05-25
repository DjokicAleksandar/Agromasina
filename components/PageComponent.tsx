"use client";

import React, { useRef, useEffect } from 'react'
import PageHeader from './PageHeader'
import ImageSlider from './ImageSlider'
import { useIsMobile } from '@/hooks/useIsMobile';
import { useThreshold } from '@/context/ThresholdContext';

interface Product {
    name: string;
    images: string[];
}

interface PageProps {
    product: Product;
    header: string;
    children: React.ReactNode;
    index: number
}

const PageComponent = ({product, header, children, index}: PageProps) => {
    const isMobile = useIsMobile();
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
            {index == 0 && <div className='w-full' ref={ref}>
                <PageHeader header={header}/>
            </div>}
            
            
            <div className={`flex justify-center items-center flex-col mb-5 mt-5 p-3`} style={{width: "95%"}}>

                <div className="text-4xl flex justify-center items-center mt-5 mb-5 font-bold w-full">
                    {product.name}
                </div>

                <div className={`relative flex justify-center items-center gap-5 ${isMobile ? "flex-col" : index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`} >

                    <div style={{width: isMobile ? "100%" : "60%"}}>
                        <ImageSlider images={product.images}/>
                    </div>

                    <div 
                        className={` ${isMobile ? "text-xl" : "text-2xl"} flex font-light mt-5 mb-5`}
                        style={{width: isMobile ? "90%" : "40%"}}>
                        {children}
                    </div>

                </div>

            </div>
        </>
    )
}

export default PageComponent