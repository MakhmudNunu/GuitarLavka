import NavBarPopUp from '@/shared/NavBarPopUp/NavBarPopUp'
import styles from './FavCart.module.scss'
import CartIcon from './ui/CartIcon/CartIcon'
import FavIcon from './ui/Favorite/FavIcon'

const FavCart = () => {
  return (
    <div className={styles.favCart}>
      <FavIcon />
      <CartIcon />
      <NavBarPopUp />
    </div>
  )
}

export default FavCart
