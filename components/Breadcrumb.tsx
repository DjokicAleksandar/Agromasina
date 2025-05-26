"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useThreshold } from '@/context/ThresholdContext';

const Breadcrumb = () => {
    const nameMap = {
        "about": "O Nama",
        "agricultural-machines": "Poljoprivredne mašine",
        "connecting-machines": "Priključne mašine",
        "contact": "Kontakt",
        "greenhouse-foil": "Folije Za Plastenike",
        "pe-bags": "Pe Kese",
        "pe-black-foil": "Pe Crna Folija",
        "pe-v-bags": "Pe Vreće",
        "pelet": "Pelet",
        "pharmacy": "Poljoprivredna Apoteka",
        "privacy-policy": "Politika Privatnosti",
        "production-program": "Proizvodni Program",
        "spare-parts": "Rezervni Delovi",
        "terms-of-service": "Pravila Korišćenja",
        "tractor-trailers": "Traktorske Prikolice",
        "tractors": "Traktori"
    }

    type NameMapKey = keyof typeof nameMap;

    const isMobile = useIsMobile();
    const pathname = usePathname();
    const { threshold } = useThreshold();
    const searcParams = useSearchParams();

    const from = searcParams.get("from");
    const crumbs = pathname.split("/").filter(Boolean)

    return (
        <nav className='absolute' style={{marginTop: threshold + 'px'}}>
            <ul className={`flex flex-wrap p-5 ml-5 gap-x-2 ${isMobile ? "text-lg pl-3" : "text-2xl"}`}>
                <li>
                    <Link href="/" className='hover:underline text-[#0a2b14]'>Početna </Link>
                </li>

                {from ? 
                    <li>
                        <span> {">"} </span>
                        <Link href={`/${from}`} className='hover:underline text-[#0a2b14] whitespace-nowrap'> 
                            {nameMap[from as NameMapKey]} 
                        </Link>
                    </li>
                    :
                    null}

                {crumbs.map((crumb, index) => {
                    const href = "/" + crumbs.slice(0, index + 1).join("/");

                    return (
                        <li key={index} className='flex justify-center items-center gap-2'>
                            <span> {">"} </span>
                            {index == crumbs.length - 1 ? 
                                <div className={`capitalize "text-[#424242] whitespace-nowrap"`}>
                                    {nameMap[crumb as NameMapKey] || crumb}
                                </div> 
                                : 
                                <Link href={href} className={`hover:underline capitalize text-[#0a2b14] whitespace-nowrap`}>
                                    {nameMap[crumb as NameMapKey] || crumb}
                                </Link>}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumb