"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from './Breadcrumbs.module.scss'

interface IBread {
    path?: string
}

const Breadcrumbs: React.FC<IBread> = ({path}) => {
    const pathname = usePathname();

    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            {`Home${pathname}`}
        </nav>
    )
}

export default Breadcrumbs