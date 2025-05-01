"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderMain from "@/widgets/Header/HeaderMain/HeaderMain";
import HeaderDefault from "@/widgets/Header/HeaderDefault/HeaderDefault";
import HeaderStroke from "./HeaderStroke/HeaderStroke";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <>
            <HeaderStroke />
            <HeaderMobile />
            {isHome ? (
                <HeaderMain />
            ) : (
                <HeaderDefault />
            )}
        </>
    )
}

export default Header
