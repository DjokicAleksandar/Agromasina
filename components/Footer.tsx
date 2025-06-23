"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { useIsMobile } from '@/hooks/useIsMobile';

//eb0909

const Footer = () => {
    const isMobile = useIsMobile();

    return (
        <div className={`w-full p-4 flex flex-col justify-center items-center gap-2 pt-5 pb-5`} style={{backgroundColor: "#0a2b14", color: "white"}}>
            <Image src={"/images/logo.webp"} alt="logo" height={ isMobile ? 100 : 130} width={ isMobile ? 190 : 230 } className={`text-3xl mt-3 p-2`}/>
            <div className={`flex justify-around items-center gap-4 p-3 pt-1 ${isMobile ? "flex-col" : "flex-row"}`}
                style={{width: "70%"}}>
                <Link className="m-2 text-2xl whitespace-nowrap" href="/privacy-policy"> Politika privatnosti </Link>
                <Link className="m-2 text-2xl whitespace-nowrap" href="/contact"> Kontakt </Link>
                <Link className="m-2 text-2xl whitespace-nowrap" href="/terms-of-service"> Uslovi korišćenja </Link>
            </div>
            <p className="text-md text-center" style={{color: "gray"}}>Copyright © Agromašina plus, Sva prava zadržana</p>
            <div className="flex justify-center items-center gap-4 mb-4 p-4">
                <a href="https://www.instagram.com/agromasinaplus/" style={{width: "33%"}}><FaInstagram className="text-4xl"/></a>
                <a href="https://www.facebook.com/agromasinaplus" style={{width: "33%"}}><FaFacebook className="text-4xl"/></a>
                <a href="mailto:agromasinaplus@gmail.com" style={{width: "33%"}}><FaRegEnvelope className="text-4xl"/></a>
            </div>
        </div>
    )
}

export default Footer