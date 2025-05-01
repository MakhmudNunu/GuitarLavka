import styles from './HeaderDefault.module.scss'
import Logo from '../ui/Logo'
import Search from '../ui/Search/Search'
import FavCart from '../ui/FavCart/FavCart'
import NavBar from '../ui/FavCart/NavBar/NavBar'

function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__container__content}>
          <Logo position={'relative'} leftPos={9} width={167} height={154} />
          <NavBar flex={1} padding={'0 7% 0 0'} />
          <Search />
          <FavCart />
        </div>
      </div>
    </header>
  )
}

export default Header
