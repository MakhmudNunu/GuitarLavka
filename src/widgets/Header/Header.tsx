"use client";

import { usePathname } from "next/navigation";
import HeaderMain from "@/widgets/Header/HeaderMain/HeaderMain";
import HeaderDefault from "@/widgets/Header/HeaderDefault/HeaderDefault";
import HeaderStroke from "./HeaderStroke/HeaderStroke";

const Header = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        <>
            <HeaderStroke />
            {isHome ? (
                <HeaderMain />
            ) : (
                <HeaderDefault />
            )}
        </>
    )
}

export default Header
