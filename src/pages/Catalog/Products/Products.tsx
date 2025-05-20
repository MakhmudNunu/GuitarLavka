'use client'

import { useEffect } from 'react'

import Swiper from './Swiper/CatalogPagination'

import styles from './Products.module.scss'
import Top from '../Top/Top'
import Aside from '../Aside/Aside'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchProducts } from '@/lib/features/productsSlice'



const Products = () => {

    const dispatch = useAppDispatch()
    const { products, status, error } = useAppSelector((state) => state.products)
    const inStock = useAppSelector((state) => state.filtres.inStock)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch, inStock])

    return (
        <section className={styles.products}>
            <div className={styles.products__container}>
                <div className={styles.products__container__content}>
                    <div className={styles.products__container__content__top}>
                        <Top />
                    </div>
                    <div className={styles.products__container__content__main}>
                        <Aside />
                        {
                            status === 'loading' ? <p>Загрузка...</p> :
                                status === 'failed' ? <p>{error}</p> :
                                    <Swiper products={products} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
