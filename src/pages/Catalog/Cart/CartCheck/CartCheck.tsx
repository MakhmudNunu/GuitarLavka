"use client"

import Image from 'next/image'
import styles from './CartCheck.module.scss'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useEffect } from 'react'
import { fetchCart } from '@/lib/features/cartSlice'
import Link from 'next/link'

const CartCheck = () => {

    const { finallyPrice, finallyCount } = useAppSelector((state) => state.cart)

    return (
        <div className={styles.check}>
            <div className={styles.check__box}>
                <h3>Итого</h3>
                <div>
                    <h4>Общее <br /> количество:</h4>
                    <h5>{finallyCount} шт.</h5>
                </div>
                <div>
                    <h4>Общая <br /> стоимость:</h4>
                    <h5>{finallyPrice} ₽</h5>
                </div>
            </div>
            <label><input type="text" placeholder='Укажите промо-код' /></label>
            {
                finallyCount >= 1 ? (
                    <Link href={'/PlacingAnOrder'} >
                        <button style={{
                            cursor: 'pointer'
                        }}>
                            Перейти к оформлению
                        </button>
                    </Link>
                ) : (
                    'Корзина пуста'
                )
            }
            <Link href={'/Catalog'}>
                <div className={styles.check__reload}>
                    <Image src={'/assets/images/reload.svg'} width={25} height={25} alt='reload' />
                    <h3>Продолжить покупки</h3>
                </div>
            </Link>
        </div>
    )
}

export default CartCheck
