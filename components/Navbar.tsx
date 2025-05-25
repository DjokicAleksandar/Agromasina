"use client";

import React from 'react';
import Image from 'next/image';
import { useIsMobile } from "@/hooks/useIsMobile";
import { useState, useEffect } from 'react';
import { IoMdContacts } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Menu from './Menu';
import { useThreshold } from '@/context/ThresholdContext';
import Link from 'next/link';

const Navbar = () => {
    const isMobile = useIsMobile();
    const { threshold } = useThreshold();
    const [isVisible, setIsVisible] = useState(true);
    const [isDown, setIsDown] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        let lastScrollY = window.scrollY;
        
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            lastScrollY = currentScrollY;
        }
        
        window.addEventListener("scroll", controlNavbar);
        
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [])
    
    useEffect(() => {
        const handleScroll = () => {
            console.log(threshold - 50)
            if (window.scrollY > (threshold)) {
                setIsDown(true);
            } else {
                setIsDown(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold])

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <>
            <nav className={`fixed transition-all duration-300 z-20 ${isVisible ? "translate-y-0" : "-translate-y-full"} 
                flex w-full justify-between absolute ${isMobile ? "p-3 pt-2 pb-2" : "p-5 pt-4 pb-4"} ${isDown ? "shadow-md bg-white" : "bg-transparent"}`}>
                <Image src={ !isMobile ? (isDown ? "/images/logo.webp" : "/images/logoAgroWhite.webp") : "/images/logo.webp"} alt="Logo" height={ isMobile ? 70 : 80} width={ isMobile ? 125 : 140 } className={`flex justify-center items-center`}/>

                <span className="flex justify-around items-center gap-3 text-lg">
                    <Link href={"/contact"}>
                        <IoMdContacts className={`${isMobile ? "text-3xl" : "text-5xl"} ${ !isMobile ? (isDown ? "text-black" : "text-white") : ""} cursor-pointer flex justify-center items-center`}/>
                    </Link>
                    <IoMdMenu className={`${isMobile ? "text-3xl" : "text-5xl"} ${ !isMobile ? (isDown ? "text-black" : "text-white") : ""} cursor-pointer flex justify-center items-center`}
                        onClick={toggleMenu}/>
                </span>
            </nav>
        
            {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)}/>}
        </>
    )
}

export default Navbar