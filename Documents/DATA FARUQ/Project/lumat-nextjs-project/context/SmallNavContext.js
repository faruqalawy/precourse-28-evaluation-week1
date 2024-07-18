'use client';

import { createContext, useState } from "react";

const SmallNavContext = createContext();

const SmallNavProvider = ({ children }) => {
    const [isSmallNavOpen, setIsSmallNavOpen] = useState(false);

    const toggleSmallNav = () => {
        setIsSmallNavOpen(prevState => !prevState);
    }

    return (
        <SmallNavContext.Provider value={{ isSmallNavOpen, setIsSmallNavOpen, toggleSmallNav }}>
            {children}
        </SmallNavContext.Provider>
    )
}

export { SmallNavContext, SmallNavProvider }