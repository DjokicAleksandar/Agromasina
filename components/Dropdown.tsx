"use client"

import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";

interface DropdownProps {
    name: string;
    items: string[];
    links: string[];
    onClose: () => void;
}

const Dropdown = ({name, items, links, onClose}: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const isMobile = useIsMobile();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return (
        <div className='py-1 w-full' ref={dropdownRef}> 
            <button
                className='w-full flex items-center justify-between'
                onClick={() => setOpen(prev => !prev)}>
                {name}
                <FaAngleDown className={`${open ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-in-out`}/>
            </button>

            <div
                className={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out 
                    ${open ? "max-h-40 mt-2" : "max-h-0"}`}>
                {items.map((item, index) => (
                    <Link
                        href={links[index]}
                        className={`hover:underline cursor-pointer ${isMobile ? "text-xl" : "text-3xl"}`} 
                        style={{color: "#424242"}} 
                        key={index}
                        onClick={onClose}>
                        - {item}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Dropdown