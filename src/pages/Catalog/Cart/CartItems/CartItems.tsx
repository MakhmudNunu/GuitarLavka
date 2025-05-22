"use client"

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import styles from './CartItems.module.scss'
import CartItemCard from './CartItemCard/CartItemCard'
import { fetchCart } from '@/lib/features/cartSlice'
import { useEffect } from 'react'
import { ICartProduct } from '@/entities/type/products'

const CartItems = () => {

    const dispatch = useAppDispatch()

    const { cart, status } = useAppSelector((state) => state.cart)

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    return (
        <div className={styles.cartItems}>
            <div className={styles.cartItems__titles}>
                <h3>НАИМЕНОВАНИЕ</h3>
                <h3>КОЛ-ВО</h3>
                <h3>ЦЕНА</h3>
            </div>
            <div className={styles.cartItems__items}>
                {
                    status === 'loading' ? <h2>Загрузка корзины</h2> :
                        status === 'error' ? <h2>Ошибка загрузки корзины</h2> :
                            cart.map((item: ICartProduct, index: number) => {
                                return (
                                    <CartItemCard product={item} key={index} />
                                )
                            })
                }
            </div>
        </div>
    )
}

export default CartItems
