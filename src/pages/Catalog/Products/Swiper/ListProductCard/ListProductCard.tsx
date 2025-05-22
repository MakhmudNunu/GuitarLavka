import Image from 'next/image';
import styles from './ListProductCard.module.scss';
import { IProducts } from '@/entities/type/products';
import Star from '@/shared/ui/Star';
import FavIcon from '@/widgets/Header/ui/FavCart/ui/Favorite/FavIcon';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addToCart, deleteFromCart, fetchCart } from '@/lib/features/cartSlice';
import { useEffect } from 'react';
import { addToFavorites, deleteFromFavorites, fetchFavorites } from '@/lib/features/favoriteSlice';

interface IProps {
    product: IProducts;
}

const ListProductCard: React.FC<IProps> = ({ product }) => {

    const dispatch = useAppDispatch()

    const { cart } = useAppSelector((state) => state.cart)
    const { favorites } = useAppSelector((state) => state.favorites)

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    const addedToCart = cart.find(item => item.id === product.id)
    const addedToFavorites = favorites.find(item => item.id === product.id)

    const handleAddToCart = () => {
        const productToAdd = { ...product, quantity: 1 };
        dispatch(addToCart(productToAdd));
    }

    const handleDeleteFromCart = () => {
        dispatch(deleteFromCart(product.id))
    }

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(product))
    }

    const handleDeleteFromFavorites = async () => {
        await dispatch(deleteFromFavorites(product.id))
        dispatch(fetchFavorites())
    }

    return (
        <>
            <div className={styles.card}>
                <Link href={`/Catalog/Detail/${product.id}`}>
                    <Image
                        src={product.image}
                        width={256}
                        height={340}
                        alt={`Product card: ${product.title}`}
                    />
                </Link>
                <div className={styles.card__info}>
                    <div className={styles.card__info__top}>
                        <div className={styles.card__info__top__left}>
                            <h3>{product.type}</h3>
                            <h2>{product.title}</h2>
                            {
                                product.discount ? (
                                    <h4>
                                        ₽{(product.price * (1 - product.discount / 100)).toFixed(0)}
                                        <span>₽{product.price}</span>
                                    </h4>
                                ) : (
                                    <h4>₽{product.price}</h4>
                                )
                            }
                            <div className={styles.card__info__top__left__stars}>
                                {
                                    Array.from({ length: Math.round(product.rate) }, (_, index) => {
                                        return <Star key={index} />
                                    })
                                }
                            </div>
                            <div className={styles.card__info__top__left__images}>
                                {
                                    Array.from({ length: 3 }, (_, i) => {
                                        return (
                                            <Image
                                                src={product.image}
                                                width={140}
                                                height={140}
                                                key={i}
                                                alt={`Product image: ${product.title}`}
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'bottom',
                                                    position: 'relative',
                                                    display: 'block'
                                                }}
                                                className={styles.image}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.card__info__top__right}>
                            <button
                                className={styles.card__info__top__right__addToFavorite}
                                onClick={addedToFavorites ? handleDeleteFromFavorites : handleAddToFavorites}
                            >
                                {
                                    addedToFavorites ? (
                                        <Image
                                            src={'/assets/images/favoritesIconFilled.svg'}
                                            width={20}
                                            height={22}
                                            alt='favorite icon'
                                        />
                                    ) : (
                                        <Image
                                            src={'/assets/images/favorite.svg'}
                                            width={20}
                                            height={22}
                                            alt='favorite icon'
                                        />
                                    )
                                }
                            </button>
                            <div className={styles.card__info__top__right__addTo}>
                                {
                                    addedToCart ? (
                                        <div className={styles.card__info__top__right__addTo__addedBox}>
                                            <button
                                                className={styles.card__info__top__right__addTo__addedBox__added}
                                            >
                                                <Link href={'/Catalog/Cart'}>
                                                    ПЕРЕЙТИ В КОРЗИНУ
                                                </Link>
                                            </button>
                                            <button
                                                className={styles.card__info__top__right__addTo__addedBox__delete}
                                                onClick={handleDeleteFromCart}
                                            >
                                                удалить из корзины
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className={styles.card__info__top__right__addTo__cart}
                                            onClick={handleAddToCart}
                                        >
                                            <Image
                                                src={'/assets/images/addToCart.svg'}
                                                alt='Add to Cart'
                                                width={19}
                                                height={20}
                                            />
                                            В КОРЗИНУ
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <h6
                        className={
                            product.stock >= 1 ? styles.card__info__inStock__yes : styles.card__info__inStock__no
                        }
                    >
                        {product.stock >= 1 ? 'в наличии' : 'под заказ'}
                    </h6>
                </div>
            </div>
        </>
    )
}

export default ListProductCard
