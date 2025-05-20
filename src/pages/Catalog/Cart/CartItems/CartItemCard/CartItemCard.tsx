import Image from 'next/image'
import styles from './CartItemCard.module.scss'
import { ICartProduct, IProducts } from '@/entities/type/products'
import { useAppDispatch } from '@/lib/hooks'
import { countUpdate, deleteFromCart } from '@/lib/features/cartSlice'

interface CartProductProps {
    product: ICartProduct
}

const CartItemCard: React.FC<CartProductProps> = ({ product }) => {

    const dispatch = useAppDispatch()

    const handleCountPlus = () => {
        dispatch(countUpdate({ id: product.id, quantity: product.quantity + 1 }))
    }

    const handleCountMinus = () => {
        if (product.quantity > 1) {
            dispatch(countUpdate({ id: product.id, quantity: product.quantity - 1 }))
        } else {
            dispatch(deleteFromCart(product.id))
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__left}>
                <Image src={product.image} width={182} height={247} alt='Product image' />
                <div className={styles.card__left__info}>
                    <div className={styles.card__left__info__title}>
                        {
                            product.type ? (
                                <h4>{product.type}</h4>
                            ) : (
                                null
                            )
                        }
                        <h3>
                            {product.title}
                        </h3>
                    </div>
                    <div className={styles.card__left__info__specs}>
                        {
                            product.specs.map((item, index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.card__center}>
                <button onClick={handleCountMinus}>
                    <Image src={'/assets/images/minus.svg'} width={20} height={20} alt='minus' />
                </button>
                <h3>{product.quantity}</h3>
                <button onClick={handleCountPlus}>
                    <Image src={'/assets/images/plus.svg'} width={20} height={20} alt='plus' />
                </button>
            </div>
            {
                product.discount ? (
                    <h4 className={styles.card__right}>
                        ₽{(product.price * (1 - product.discount / 100)).toFixed(0)}
                        <span>₽{product.price}</span>
                    </h4>
                ) : (
                    <h4 className={styles.card__right}>₽{product.price}</h4>
                )
            }
        </div>
    )
}

export default CartItemCard
