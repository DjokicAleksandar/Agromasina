"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useIsMobile } from '@/hooks/useIsMobile';

//eb0909

const Footer = () => {
    const isMobile = useIsMobile();

    return (
        <div className={`w-full p-4 flex flex-col justify-center items-center gap-2 pt-5 pb-5 mt-4`} style={{backgroundColor: "#0a2b14", color: "white"}}>
            <Image src={"/images/logo.webp"} alt="logo" height={ isMobile ? 100 : 130} width={ isMobile ? 190 : 230 } className={`text-3xl mt-3 p-2`}/>
            <div className={`flex justify-around items-center gap-4 p-3 pt-1 ${isMobile ? "flex-col" : "flex-row"}`}
                style={{width: "70%"}}>
                <Link className="m-2 text-2xl" href="/privacy-policy"> Politika privatnosti </Link>
                <Link className="m-2 text-2xl" href="/contact"> Kontakt </Link>
                <Link className="m-2 text-2xl" href="/terms-of-service"> Uslovi korišćenja </Link>
            </div>
            <p className="text-md" style={{color: "gray"}}>Copyright © 2000 - 2024 Agromašina plus, Sva prava zadržana</p>
            <div className="flex justify-center items-center gap-4 mb-4 p-3">
                <a href="#" style={{width: "33%"}}><FaInstagram className="text-3xl"/></a>
                <a href="#" style={{width: "33%"}}><FaFacebook className="text-3xl"/></a>
                <a href="#" style={{width: "33%"}}><FaWhatsapp className="text-3xl"/></a>
            </div>
        </div>
    )
}

export default Footer