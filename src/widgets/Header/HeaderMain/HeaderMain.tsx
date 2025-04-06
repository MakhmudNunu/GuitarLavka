import FavCart from './FavCart/FavCart'
import styles from './HeaderMain.module.scss'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'
import Search from './Search/Search'

function HeaderMain() {

  let topPos = 0

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__container__content}>
          <div className={styles.header__container__content__main}>
            <Search />
            <Logo topPos={topPos} />
            <FavCart />
          </div>
          <div className={styles.header__container__content__nav}>
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderMain
