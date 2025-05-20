'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import styles from './Tabs.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchOneProduct } from '@/lib/features/productsSlice'

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('Description')

    const dispatch = useAppDispatch()
    const { product } = useAppSelector((state) => state.products)

    const location = usePathname()
    let id = location?.split('/').pop()

    useEffect(() => {
        if (id) {
            dispatch(fetchOneProduct(id))
        }
    }, [id, dispatch])

    const handleTab = (tab: string) => {
        setActiveTab(tab)
        console.log(tab)
    }

    return (
        <section className={styles.tabs}>
            <div className='container'>
                <div className={styles.tabs__content}>
                    <ul className={styles.tabs__content__tabsTitles}>
                        <li
                            onClick={() => { handleTab('Description') }}
                            className={`${activeTab === 'Description' ? styles.tabs__content__tabsTitles__activeTab : styles.tabs__content__tabsTitles__tab}`}
                        >
                            ОПИСАНИЕ
                        </li>
                        <li
                            onClick={() => { handleTab('Specs') }}
                            className={`${activeTab === 'Specs' ? styles.tabs__content__tabsTitles__activeTab : styles.tabs__content__tabsTitles__tab}`}
                        >
                            ХАРАКТЕРИСТИКИ
                        </li>
                        <li
                            onClick={() => { handleTab('Waranty') }}
                            className={`${activeTab === 'Waranty' ? styles.tabs__content__tabsTitles__activeTab : styles.tabs__content__tabsTitles__tab}`}
                        >
                            ГАРАНТИЯ
                        </li>
                        <li
                            onClick={() => { handleTab('Delivery&Payment') }}
                            className={`${activeTab === 'Delivery&Payment' ? styles.tabs__content__tabsTitles__activeTab : styles.tabs__content__tabsTitles__tab}`}
                        >
                            ДОСТАВКА И ОПЛАТА
                        </li>
                        <li
                            onClick={() => { handleTab('Return') }}
                            className={`${activeTab === 'Return' ? styles.tabs__content__tabsTitles__activeTab : styles.tabs__content__tabsTitles__tab}`}
                        >
                            ВОЗВРАТ
                        </li>
                    </ul>
                    <div className={styles.tabs__content__tabsContent}>
                        {
                            activeTab === 'Description' ? (
                                <p>{product?.title} - {product?.description}</p>
                            ) :
                                activeTab === 'Specs' ? (
                                    <ul>
                                        {
                                            product?.specs.map((item, index) => {
                                                return (
                                                    <li key={index}>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                ) :
                                    activeTab === 'Waranty' ? (
                                        <p>{product?.warranty}</p>
                                    ) :
                                        activeTab === 'Delivery&Payment' ? (
                                            <div>
                                                <p>{product?.delivery}</p>
                                                <p>{product?.payment}</p>
                                            </div>
                                        ) : (
                                            <p>Возврат возможен в течении 14 дней, с момента получения товара!</p>
                                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs
