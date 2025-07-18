"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useThreshold } from "@/context/ThresholdContext";

const WelcomeImage = () => {
  const isMobile = useIsMobile();
  const images = [
    "/images/hero1.webp",
    "/images/hero2.webp",
    "/images/hero3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { setThreshold } = useThreshold();

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      setThreshold(height);
    }
  }, [setThreshold]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <div
      className="w-full h-[200px] md:h-[500px] lg:h-[500px] relative"
      style={{ marginBottom: "40px" }}
      ref={ref}
    >
      <Image
        src={isMobile ? images[currentIndex] : images[currentIndex]}
        alt="Pocetna slika"
        className="object-cover shadow-md"
        fill
        priority
      />
    </div>
  );
};

export default WelcomeImage;
