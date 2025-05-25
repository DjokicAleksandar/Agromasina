"use client"

import React from 'react';
import "../app/styles.css";
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

interface CardProps {
    name: string;
    images: string[];
    desc: string;
    url: string;
    index: number;
}

const Card = ({name, images, desc, url, index}: CardProps) => {
    const isMobile = useIsMobile();
    const descs = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis adipisci" + 
        "deserunt non delectus voluptatibus neque maxime, laboriosam quam libero dolore" + 
        "quas ipsam rerum magnam odio quasi numquam expedita facere. 1",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis adipisci" + 
        "deserunt non delectus voluptatibus neque maxime, laboriosam quam libero dolore" + 
        "quas ipsam rerum magnam odio quasi numquam expedita facere. 2",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veritatis adipisci" + 
        "deserunt non delectus voluptatibus neque maxime, laboriosam quam libero dolore" + 
        "quas ipsam rerum magnam odio quasi numquam expedita facere. 3",
    ]

    return (
        <div 
            className={`relative flex justify-center items-center gap-5 ${isMobile ? "flex-col" : index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`} 
            style={{marginBottom: "40px", width: "90%"}}>

            <div className={`block shadow-xl relative bg-white pb-5`}
                style={{width: "100%"}}>
                <Image 
                    width={ isMobile ? 400 : 800}
                    height={400}
                    alt="Bags" 
                    src={images[0]}
                    className='w-full'
                    style={{height: "auto"}}/>

                <div className="p-4">
                    <p className={`text-4xl pt-3 pb-3`} style={{fontWeight: "200"}}>{name}</p>
                    <p className="pt-2 pb-2 mb-5 text-xl"> 
                        {desc}
                    </p>
                    <Link 
                        href={url} 
                        className='mt-5 flex items-center p-3 border border-red-500 rounded-md text-xl gap-2'
                        style={{width: "min-content"}}>
                        Detaljnije
                        <FaChevronRight className="text-sm"/>
                    </Link>
                </div>
            </div>

            <div className={`block pb-5 text-3xl flex text-center font-light ${isMobile ? "mt-4" : ""}`} style={{width: isMobile ? "100%" : "70%"}}>
                {descs[index]}
            </div>

        </div>
    )
}

export default Card