'use client'

import ProductsSwiper from '@/shared/ProductsSwiper/ProductsSwiper'
import styles from './LikeIt.module.scss'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/features/productsSlice'

const LikeIt = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const {products} = useAppSelector((state) => state.products)

  return (
    <section className={styles.likeIt}>
        <div className='container'>
            <div className={styles.likeIt__content}>
                <h2 className={styles.likeIt__content__title}>Вам понравится</h2>
                <ProductsSwiper products={products} lr={-35} />
            </div>
        </div>
    </section>
  )
}

export default LikeIt
