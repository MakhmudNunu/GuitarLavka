'use client'

import ProductsSwiper from '@/shared/ProductsSwiper/ProductsSwiper'
import styles from './TheyAlsoBuyThis.module.scss'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useEffect } from 'react'
import { fetchProducts } from '@/lib/features/productsSlice'

const TheyAlsoBuyThis = () => {

    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <section className={styles.alsoBuy}>
            <div className='container'>
                <div className={styles.alsoBuy__content}>
                    <h2 className={styles.alsoBuy__content__title}>Вместе с этим покупают</h2>
                    <ProductsSwiper products={products} lr={-35} />
                </div>
            </div>
        </section>
    )
}

export default TheyAlsoBuyThis
