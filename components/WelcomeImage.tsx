"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useThreshold } from '@/context/ThresholdContext';

const WelcomeImage = () => {
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
        <div className="w-full relative" style={{marginBottom: "40px"}} ref={ref}>
            <Image
                src={ isMobile ? "/images/home5.webp" : "/images/home5.webp"}
                alt="Pocetna slika"
                className="w-full shadow-md"
                width={300}
                height={300}
                priority/>
        </div>
    )
}

export default WelcomeImage