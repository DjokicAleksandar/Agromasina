"use client"

import React from 'react'
import Card from './Card'
import PageCard from './PageCard';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Product {
    name: string;
    images: string[];
    desc: string;
    url: string;
}

interface CardsProps {
    cards: Product[];
    isHome: boolean;
    from: string;
    aspectRatio? : string; 
}

const Cards = ({cards, isHome, from, aspectRatio = "4/3"}: CardsProps) => {
    const isMobile = useIsMobile();

    return (
        <div className="w-full p-3">
            <div className={`grid relative ${isHome ? `grid-cols-1` : `${isMobile ? "grid-cols-1" : "grid-cols-3"}`} gap-4 justify-items-center`}>
                {cards.map((obj, i: number) => (
                    isHome ? 
                        <Card key={i} name={obj.name} images={obj.images} desc={obj.desc} url={obj.url} index={i}/>
                        :
                        <PageCard key={i} name={obj.name} images={obj.images} desc={obj.desc} 
                            url={obj.url} index={i} from={from} aspectRatio={aspectRatio}/>
                ))}
            </div>
        </div>
    )
}

export default Cards