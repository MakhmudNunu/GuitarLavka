import { IProducts } from '@/entities/type/products'
import styles from './FavoritesCard.module.scss'
import Image from 'next/image'

interface IFavoriteProduct {
  product: IProducts
}

const FavoritesCard: React.FC<IFavoriteProduct> = ({ product }) => {
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
        <button>
          В КОРЗИНУ
        </button>
      </div>
    </div>
  )
}

export default FavoritesCard
