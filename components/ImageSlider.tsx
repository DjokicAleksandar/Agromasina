"use client";

import React, { useState, useEffect } from 'react';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { useIsMobile } from '@/hooks/useIsMobile';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider = ({images}: ImageSliderProps) => {
    const isMobile = useIsMobile();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
  
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
  
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);
          
            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered]);

    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };
     
    return (
        <div className="relative mx-auto mt-4"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}>
            <div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                className="relative h-[460px] mx-12 group hover:-translate-y-2 duration-300 transition-all">
                <Image
                    src={images[currentIndex]}
                    alt={`Slider Image ${currentIndex + 1}`}
                    fill
                    className="object-cover rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
                    />
            </div>

            <button
                className="absolute top-1/2 transform rounded-xl text-white group"
                onClick={prevSlide}
                style={{transform: "translateY(-50%)", left: isMobile ? "0px" : "-10px"}}>
                <FaCircleChevronLeft className="text-gray-400 text-5xl cursor-pointer" />
            </button>

            <button
                className="absolute top-1/2 transform rounded-xl text-white group"
                onClick={nextSlide}
                style={{transform: "translateY(-50%)", right: isMobile ? "0px" : "-10px"}}>
                <FaCircleChevronRight className="text-gray-400 text-5xl cursor-pointer" />
            </button>

            <div className="flex justify-center gap-3 mt-4">
                {images.map((_, index) => (
                    <div
                    key={index}
                    className={`h-4 w-4 mx-1 rounded-full ${
                        index === currentIndex
                        ? "bg-[#eb0909]"
                        : "bg-gray-300"
                    } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider