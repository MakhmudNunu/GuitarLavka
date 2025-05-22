'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import styles from './MainFavorites.module.scss'
import { useEffect } from 'react'
import { fetchFavorites } from '@/lib/features/favoriteSlice'
import FavoritesCard from './FavoritesCard/FavoritesCard'

const MainFavorites = () => {

    const dispatch = useAppDispatch()
    const { favorites } = useAppSelector((state) => state.favorites)

    useEffect(() => {
        dispatch(fetchFavorites())
    }, [dispatch])

    return (
        <section className={styles.mainFavorites}>
            <div className='container'>
                <div className={styles.mainFavorites__content}>
                    <h3 className={styles.mainFavorites__content__title}>НАИМЕНОВАНИЕ</h3>
                    <div className={styles.mainFavorites__content__items}>
                        <div className={styles.mainFavorites__content__items__item}>
                            {
                                Array.isArray(favorites) && favorites.length > 0 ? (
                                    favorites.map((product, index) => (
                                        <FavoritesCard key={product.id} product={product} />
                                    ))
                                ) : (
                                    <p>Нет избранных товаров</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainFavorites
