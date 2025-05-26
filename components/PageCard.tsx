"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';
import { FaChevronRight } from 'react-icons/fa';

interface CardProps {
    name: string;
    images: string[];
    desc: string;
    url: string;
    index: number;
    from: string;
    aspectRatio? : string;
}

const PageCard = ({name, images, desc, url, from, aspectRatio = "4/3"}: CardProps) => {
    const isMobile = useIsMobile();

    return (
        <div 
            className={`relative flex justify-center  gap-5`} 
            style={{marginBottom: "40px", width: "90%"}}>

            <div className={`block shadow-xl relative bg-white pb-5`}
                style={{width:"100%"}}>
                <Image 
                    width={ isMobile ? 400 : 800}
                    height={400}
                    alt="Bags" 
                    src={images[0]}
                    className='w-full'
                    style={{height: "auto", aspectRatio: aspectRatio}}/>

                <div className="p-4">
                    <p className={`text-4xl pt-3 pb-3`} style={{fontWeight: "200"}}>{name}</p>
                    <p className="pt-2 pb-2 text-xl" style={{marginBottom: "50px"}}> 
                        {desc}
                    </p>
                    <Link 
                        href={{pathname: `${url}`, query: { from: from }}} 
                        className='absolute flex items-center p-3 border border-red-500 rounded-md text-xl gap-2'
                        style={{width: "min-content", bottom: "20px", left: "20px"}}>
                        Detaljnije
                        <FaChevronRight className="text-sm"/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default PageCard