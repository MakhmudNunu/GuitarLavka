import CartCheck from './CartCheck/CartCheck'
import CartItems from './CartItems/CartItems'
import styles from './CartMain.module.scss'

const CartMain = () => {
    return (
        <section className={styles.cart}>
            <div className='container'>
                <div className={styles.cart__content}>
                    <CartItems />
                    <CartCheck />
                </div>
            </div>
        </section>
    )
}

export default CartMain
