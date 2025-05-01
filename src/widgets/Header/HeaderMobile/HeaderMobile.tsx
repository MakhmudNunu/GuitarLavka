import styles from './HeaderMobile.module.scss'

import FavIcon from '../ui/FavCart/ui/Favorite/FavIcon'
import CartIcon from '../ui/FavCart/ui/CartIcon/CartIcon'
import NavBarPopUp from '@/widgets/Header/ui/NavBarPopUp/NavBarPopUp'
import SearchIcon from '../ui/search'
import HomeIcon from '../ui/homeIcon'

let size = 32

const HeaderMobile = () => {
    return (
        <header className={styles.headerM} >
            <div className={styles.headerM__containerM}>
                <div className={styles.headerM__containerM__contentM}>
                    <HomeIcon width={size} height={size} />
                    <SearchIcon width={size} height={size} />
                    <FavIcon width={size} height={size} />
                    <CartIcon width={size} height={size} />
                    <NavBarPopUp />
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile
