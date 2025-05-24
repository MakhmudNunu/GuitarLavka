'use client'

import Image from 'next/image'
import styles from './OneClick.module.scss'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addOneClickOrder } from '@/lib/features/formSlice'

interface IOneClickOrderProps {
    orderType: string
    productName: string
    productType: string
    productId: number
    onClose?: () => void
}

const OneClick: React.FC<IOneClickOrderProps> = ({ orderType, productName, productType, productId, onClose }) => {
    const dispatch = useAppDispatch()
    const { oneClickOrdersStatus } = useAppSelector((state) => state.forms)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleOneClickOrder = () => {
        if (!name.trim() || !phone.trim()) {
            alert('Пожалуйста, заполните имя и телефон')
            return
        }

        const order = {
            productId,
            orderType,
            name,
            phone,
            createdAt: new Date().toISOString()
        }
        dispatch(addOneClickOrder(order))
        setName('')
        setPhone('')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handleOneClickOrder()
    }

    return (
        <>
            {
                oneClickOrdersStatus === 'idle' ? (
                    <div className={styles.oneClick}>
                        <button className={styles.close} onClick={onClose}><Image src={'/assets/images/closePopUp.svg'} width={16} height={16} alt='close' /></button>
                        {orderType === 'installment' ? (
                            <h2>РАССРОЧКА</h2>
                        ) : (
                            <>
                                <h2>КУПИТЬ В 1 КЛИК</h2>
                                <p>Заказать {productType} {productName} в 1 клик</p>
                            </>
                        )}
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={styles.inputName}
                                />
                            </label> <br />
                            <div>
                                <label>
                                    <input
                                        type="tel"
                                        placeholder="Телефон"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className={styles.inputPhone}
                                    />
                                </label>
                                <button type="submit">
                                    <Image src="/assets/images/telegram.svg" width={27} height={27} alt="one click order icon" />
                                </button>
                            </div>
                        </form>
                        <h3>Я даю согласие на обработку своих персональных данных</h3>
                    </div>
                ) : oneClickOrdersStatus === 'loading' ? (
                    <div className={styles.oneClick}>
                        <button className={styles.close} onClick={onClose}><Image src={'/assets/images/closePopUp.svg'} width={16} height={16} alt='close' /></button>
                        <h2>Отправка...</h2>
                        <p>Пожалуйста, подождите</p>
                    </div>
                ) : oneClickOrdersStatus === 'succeeded' ? (
                    <div className={styles.oneClick}>
                        <button className={styles.close} onClick={onClose}><Image src={'/assets/images/closePopUp.svg'} width={16} height={16} alt='close' /></button>
                        <h2>Спасибо!</h2>
                        <p>Ваш заказ принят</p>
                    </div>
                ) : oneClickOrdersStatus === 'failed' ? (
                    <div className={styles.oneClick}>
                        <button className={styles.close} onClick={onClose}><Image src={'/assets/images/closePopUp.svg'} width={16} height={16} alt='close' /></button>
                        <h2>Ошибка</h2>
                        <p>Попробуйте ещё раз</p>
                    </div>
                ) : null

            }
        </>
    )
}

export default OneClick
