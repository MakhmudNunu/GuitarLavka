import { IProducts } from '@/entities/type/products'
import styles from './FavoritesCard.module.scss'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addToCart, fetchCart } from '@/lib/features/cartSlice'
import { deleteFromFavorites, fetchFavorites } from '@/lib/features/favoriteSlice'
import { useEffect } from 'react'

interface IFavoriteProduct {
  product: IProducts
}

const FavoritesCard: React.FC<IFavoriteProduct> = ({ product }) => {

  const dispatch = useAppDispatch()
  const { cart } = useAppSelector((state) => state.cart)
  const addedToCart = cart.find(item => item.id === product.id)

  const handleAddToCart = () => {
    if (!addedToCart) {
      const productToAdd = { ...product, quantity: 1 };
      dispatch(addToCart(productToAdd));
    }
  }

  const handleDeleteFromFavorites = async () => {
    await dispatch(deleteFromFavorites(product.id))
    dispatch(fetchFavorites())
  }

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <Image src={product.image} width={182} height={247} alt='product image' />
        <div className={styles.card__left__info}>
          <h3>{product.type}</h3>
          <h2>{product.title}</h2>
          <ul>
            {
              product.specs.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className={styles.card__right}>
        <h3>{product.price}₽</h3>
        <button
          onClick={handleAddToCart}
          style={{
            background: addedToCart ? 'transparent' : '#ea8305',
            border: addedToCart ? '1px solid white' : 'none'
          }}
        >
          {
            addedToCart ? (
              'ДОБАВЛЕНО'
            ) : (
              'В КОРЗИНУ'
            )
          }
        </button>
        <span onClick={handleDeleteFromFavorites}>
          удалить из избранного
        </span>
      </div>
    </div>
  )
}

export default FavoritesCard
