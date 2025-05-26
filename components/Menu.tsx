"use client"

import React, { useState, useEffect } from 'react';
import { FaTractor } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineFactory } from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { FaPrescriptionBottle } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import styles from "./Menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import Dropdown from './Dropdown';

interface MenuProps {
    onClose: () => void;
}

const Menu = ({onClose}: MenuProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    })

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 500);
    }

    return (
        <div className={`w-full h-screen fixed flex justify-center items-center bg-white z-30 ${styles.menu} ${isVisible ? styles.menuVisible : ""}`}>
            <div className='absolute text-3xl cursor-pointer' 
                style={{top: "20px", right: "20px"}}
                onClick={handleClose}>
                X
            </div>
            <div className='absolute text-3xl cursor-pointer' 
                style={{top: "20px", left: "20px"}}>
                <Image src={"/images/logo.webp"} alt='logo' height={ isMobile ? 60 : 70} width={ isMobile ? 120 : 140} style={{aspectRatio: "16/9"}}/>
            </div>

            <div className='flex flex-col gap-3'>
                <div className={`flex items-center gap-4 ${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white whitespace-nowrap`}>
                    <FaBagShopping/>
                    <Dropdown 
                        name='Proizvodni program' 
                        items={["PE Kese", "PE Vreće", "Crna folija"]}
                        links={["/pe-bags", "/pe-v-bags", "/pe-black-foil"]} 
                        onClose={handleClose}/>
                </div>
                <div className={`flex items-center gap-4 ${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white whitespace-nowrap`}>
                    <FaTractor/>
                    <Dropdown 
                        name='Poljoprivedne mašine' 
                        items={["Traktori", "Traktorske prikolice", "Priključne mašine"]}
                        links={["/tractors", "/tractor-trailers", "/connecting-machines"]}
                        onClose={handleClose}/>
                </div>
                <div className={`${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white`} onClick={handleClose}>
                    <Link href={"/greenhouse-foil"} className='flex items-center gap-4 whitespace-nowrap'>
                        <GiGreenhouse/>
                        Folije za plastenike
                    </Link>
                </div>
                <div className={`${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white`} onClick={handleClose}>
                    <Link href={"/spare-parts"} className='flex items-center gap-4 whitespace-nowrap'>
                        <FaWrench/>
                        Rezervni delovi
                    </Link>
                </div>
                <div className={`${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white`} onClick={handleClose}>
                    <Link href={"/pharmacy"} className='flex items-center gap-4 whitespace-nowrap'>
                        <FaPrescriptionBottle/>
                        Poljoprivredna apoteka
                    </Link>
                </div>
                <div className={`${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white`} onClick={handleClose}>
                    <Link href={"/pelet"} className='flex items-center gap-4 whitespace-nowrap'>
                        <FaFireAlt/>
                        Pelet
                    </Link>
                </div>
                {isMobile ?
                <div className={`${isMobile ? "text-2xl" : "text-4xl"} p-3 shadow-md bg-white`} onClick={handleClose}>
                    <Link href={"/about"} className='flex items-center gap-4 whitespace-nowrap'>
                        <MdOutlineFactory/>
                        O nama
                    </Link>
                </div> : null 
                }
            </div>
            <div className='absolute flex justify-around items-center gap-4 text-xl' style={{bottom: "20px", width: isMobile ? "100%" : "50%"}}>
                <Link
                    onClick={handleClose} 
                    href="/privacy-policy" 
                    style={{color: "gray"}} 
                    className='whitespace-nowrap'>Politika privatnosti</Link>
                { !isMobile ? 
                <Link
                    onClick={handleClose} 
                    href="/about" 
                    style={{color: "gray"}} 
                    className='whitespace-nowrap'>O nama</Link> : null}
                <Link
                    onClick={handleClose} 
                    href="/terms-of-service" 
                    style={{color: "gray"}} 
                    className='whitespace-nowrap'>Uslovi korišćenja</Link>
            </div>
        </div>
    )
}

export default Menu