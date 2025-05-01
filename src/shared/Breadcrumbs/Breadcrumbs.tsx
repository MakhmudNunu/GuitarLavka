"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from './Breadcrumbs.module.scss'

interface IBread {
    path?: string
}

const Breadcrumbs: React.FC<IBread> = ({path}) => {
    const pathname = usePathname();
    // const pathParts = pathname.split('/').filter(part => part)

    // const crumbs = pathParts.map((part, index) => {
    //     const href = '/' + pathParts.slice(0, index + 1).join('/')
    //     const label = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1))

    //     return (
    //         <span className={styles.crumb} key={href}>
    //             <Link href={href}>{label}</Link>
    //             {index < pathParts.length - 1 && ' > '}
    //         </span>
    //     )
    // })

    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            {/* <Link href="/">{ path !== '' ? `Home/${path}` : 'Home' }</Link>
            {pathParts.length > 0 && " / "}
            {crumbs} */}
            {`Home${pathname}`}
        </nav>
    )
}

export default Breadcrumbs