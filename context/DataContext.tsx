"use client";

import { createContext, useContext, ReactNode } from 'react';
import data from "../data/data.json";

type Product = {
    id: number;
    name: string;
    image: string;
    images: string[];
    desc: string;
    url: string;
}

const DataContext = createContext<Product[]>([]);

export const DataProvider = ({children}: {children: ReactNode}) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);