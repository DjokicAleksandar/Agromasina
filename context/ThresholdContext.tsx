"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

type ThresholdContextType = {
    threshold: number;
    setThreshold: (value: number) => void;
}

const ThresholdContext = createContext<ThresholdContextType | undefined>(undefined);

export const ThresholdProvider = ({children}: {children: ReactNode}) => {
    const [threshold, setThreshold] = useState(0);

    return (
        <ThresholdContext.Provider value={{ threshold, setThreshold }}>
            {children}
        </ThresholdContext.Provider>
    )
};

export const useThreshold = () => {
    const context = useContext(ThresholdContext);
    if (!context) throw new Error("Greska");
    return context;
}