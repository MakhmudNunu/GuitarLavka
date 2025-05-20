'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import ProductsSwiper from '@/shared/ProductsSwiper/ProductsSwiper'
import styles from './YoullLikeIt.module.scss'

const products = [
  {
    id: 1,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    discount: 10123,
    link: '/more',
    stock: 5
  },
  {
    id: 2,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 3,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 4,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 5,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 6,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 7,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 8,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 9,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 10,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 11,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 12,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 13,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 14,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 15,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 16,
    type: 'Укулеле',
    title: 'Enya EUC-MAD',
    price: 15000,
    rate: 4.5,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  },
  {
    id: 17,
    type: 'Гитара',
    title: 'Fender Stratocaster',
    price: 45000,
    rate: 4.8,
    image: '/assets/images/card.webp',
    feedbacks: 12,
    link: '/more',
    stock: 5
  }
]

const YoullLikeIt = () => {

  return (
    <section className={styles.youllLikeIt}>
      <div className={styles.youllLikeIt__container}>
        <div className={styles.youllLikeIt__container__content}>
          <h2 className={styles.youllLikeIt__container__content__title}>Вам понравится</h2>
          <ProductsSwiper products={products} lr={-60} />
        </div>
      </div>
    </section>
  )
}

export default YoullLikeIt
