import NavBarPopUp from '@/widgets/Header/ui/NavBarPopUp/NavBarPopUp'
import styles from './FavCart.module.scss'
import CartIcon from './ui/CartIcon/CartIcon'
import FavIcon from './ui/Favorite/FavIcon'

const FavCart = () => {
  return (
    <div className={styles.favCart}>
      <FavIcon width={20} height={22} />
      <CartIcon width={23} height={20} />
      <NavBarPopUp />
    </div>
  )
}

export default FavCart
