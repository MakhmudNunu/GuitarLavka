'use client'

import ProductsSwiper from '@/shared/ProductsSwiper/ProductsSwiper';
import styles from './Populars.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import { fetchProducts } from '@/lib/features/productsSlice';


const Populars = () => {

    const dispatch = useAppDispatch()
    const { products } = useAppSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <section className={styles.populars}>
            <div className={styles.populars__container}>
                <div className={styles.populars__container__content}>
                    <h2 className={styles.title}>Популярные товары</h2>
                    <ProductsSwiper lr={-15} products={products} />
                </div>
            </div>
        </section>
    )
}

export default Populars
