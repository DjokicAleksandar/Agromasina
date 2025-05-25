"use client"

import React from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

const WelcomeImage = () => {
    const isMobile = useIsMobile();

    return (
        <div className="w-full relative" style={{marginBottom: "40px"}}>
            <Image
                src={ isMobile ? "/images/home.webp" : "/images/homeCmp.webp"}
                alt="Pocetna slika"
                className="w-full shadow-md"
                width={300}
                height={300}
                priority/>
            {!isMobile ? <p className={`absolute ${isMobile ? "text-2xl" : "text-5xl"}`} 
                style={{bottom: "10%", left: "5%", color: "white"}}> Farming with Future in Mind. </p> : null}
        </div>
    )
}

export default WelcomeImage