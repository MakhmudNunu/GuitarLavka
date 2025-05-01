'use client'

import FavCart from '../ui/FavCart/FavCart'
import styles from './HeaderMain.module.scss'
import Logo from '../ui/Logo'
import NavBar from '../ui/FavCart/NavBar/NavBar'
import Search from '../ui/Search/Search'
import Link from 'next/link'

function HeaderMain() {

  let topPos = 0


  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__container__content}>
          <div className={styles.header__container__content__main}>
            <Search />
            <Logo topPos={topPos} order={1}  />
            <FavCart />
          </div>
          <div className={styles.header__container__content__nav}>
            <NavBar/>
          </div>
        </div>
      </div>
    </header >
  )
}

export default HeaderMain
