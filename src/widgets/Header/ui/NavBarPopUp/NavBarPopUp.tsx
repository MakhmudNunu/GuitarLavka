"use client"

import { useState, useEffect } from 'react'

import styles from './NavBarPopUp.module.scss'
import Geo from '@/widgets/Header/HeaderStroke/Geo/Geo'
import Logo from '@/widgets/Header/ui/Logo'
import Breadcrumbs from '../../../../shared/Breadcrumbs/Breadcrumbs'
import Link from 'next/link'

const NavBarPopUp = () => {

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isActive]);

  const handleActivate = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.navBarPopUp}>
      <div onClick={handleActivate} className={`${styles.burger} ${isActive ? styles.active : ''}`}>

      </div>

      <nav className={`${styles.menu} ${isActive ? styles.active : ''}`}>
        <Geo />
        <Logo />
        <Breadcrumbs path='Menu' />
        <ul onClick={handleActivate} className={styles.menu__list}>
          <li><Link href={'/Catalog'}>Каталог</Link></li>
          <li><Link href="/services">Услуги</Link></li>
          <li><Link href="/contacts">Контакты</Link></li>
          <li><Link href={'/Opt'}>Опт</Link></li>
        </ul>
      </nav>
    </div>

  )
}

export default NavBarPopUp
