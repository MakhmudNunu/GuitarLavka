'use client'

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import styles from './PlacingAnOrder.module.scss'
import { useEffect, useRef, useState } from 'react'
import { fetchCart } from '@/lib/features/cartSlice'
import Image from 'next/image'
import { addOrder } from '@/lib/features/formSlice'
import Link from 'next/link'

const expressTypes = [
    {
        type: 'СДЭК',
        deadlines: 3,
        price: 300
    },
    {
        type: 'BOXBERRY',
        deadlines: 3,
        price: 250
    },
    {
        type: 'ПОЧТА РОССИИ',
        deadlines: 3,
        price: 250
    }
]

const paymentTypes = [
    {
        type: 'online',
        title: 'Онлайн',
        subTitle: 'Картами Visa'
    },
    {
        type: 'afterGet',
        title: 'При получении',
        subTitle: 'Наличными, картой'
    },
    {
        type: 'eMoney',
        title: `Электронными деньгами`,
        subTitle: 'Наличными, картой'
    },
    {
        type: 'installmentPlan',
        title: 'В рассрочку',
        subTitle: 'Наличными, картой'
    }
]

const PlacingAnOrder = () => {

    const dispatch = useAppDispatch()
    const { cart, finallyPrice, finallyCount } = useAppSelector((state) => state.cart)
    const { ordersStatus } = useAppSelector((state) => state.forms)
    const [promoAvailability, setPromoAvailability] = useState(false)
    const [orderType, setOrderType] = useState('pickup')
    const [paymentType, setPaymentType] = useState('online')
    const [expressType, setExpressType] = useState('СДЭК')
    const [promoCode, setPromoCode] = useState('')
    const [discount, setDiscount] = useState(0)
    const [name, setName] = useState('');
    const [mail, setmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const targetRef = useRef<HTMLDivElement>(null);




    const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromoAvailability(!promoAvailability)
    };

    const handleSetOrderType = (type: string) => {
        setOrderType(type)
    }

    const handleSetPaymentType = (type: string) => {
        setPaymentType(type)
    }

    const handleSetExpressType = (type: string) => {
        setExpressType(type)
    }

    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClick = () => {
        scrollToRef(targetRef as React.RefObject<HTMLElement>);
    };

    const handleAddOrder = () => {
        // Проверяем обязательные поля
        if (!name.trim() || !mail.trim() || !phone.trim()) {
            alert('Пожалуйста, заполните все обязательные поля: Имя, Email и Телефон.');
            return;
        }

        // Можно добавить валидацию email и телефона (по желанию)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(mail)) {
            alert('Пожалуйста, введите корректный email.');
            return;
        }

        const phoneRegex = /^\+?\d{10,15}$/; // простой пример проверки телефона
        if (!phoneRegex.test(phone)) {
            alert('Пожалуйста, введите корректный номер телефона.');
            return;
        }

        const deliveryPrice = orderType === 'express'
            ? (expressTypes.find(e => e.type === expressType)?.price ?? 0)
            : 0;

        const totalBeforeDiscount = finallyPrice + deliveryPrice;
        const totalPrice = Math.round(totalBeforeDiscount * (1 - discount / 100));

        const order: IPlacingAnOrder = {
            name,
            mail,
            phone,
            comment,
            promoCode,
            paymentType,
            orderType,
            expressType: orderType === 'express' ? expressType : undefined,
            deliveryPrice,
            orderedProducts: cart.map(item => ({ productId: item.id })),
            totalPrice,
            createdAt: new Date().toISOString(),
        };

        window.scrollTo({ top: 0, behavior: 'smooth' });

        dispatch(addOrder(order));
    };


    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    return (
        <div ref={targetRef} className={styles.placingAnOrder}>
            <div className={styles.placingAnOrder__container}>
                {
                    ordersStatus === 'idle' ? (
                        <>
                            <h1 className={styles.placingAnOrder__container__title}>Оформление заказа</h1>
                            <div className={styles.placingAnOrder__container__content}>
                                <div className={styles.placingAnOrder__container__main}>
                                    <div className={styles.placingAnOrder__container__main__sections}>
                                        <section className={styles.orderType}>
                                            <div className={styles.orderType__content}>
                                                <div className={styles.orderType__content__title}>
                                                    <span>
                                                        1.
                                                    </span>
                                                    <h2>
                                                        Где и как вы хотите получить заказ?
                                                    </h2>
                                                </div>
                                                <div className={styles.orderType__content__choises}>
                                                    <div
                                                        className={styles.orderType__content__choises__box}
                                                        onClick={() => handleSetOrderType('pickup')}
                                                        style={{
                                                            borderColor: orderType === 'pickup' ? '#EA8305' : '#c4c4c4'
                                                        }}
                                                    >
                                                        <Image src={'/assets/images/pickup.svg'} width={30} height={30} alt='pickup icon' />
                                                        <div>
                                                            <h3>
                                                                Самовывоз <br />
                                                                из гитарной лавки
                                                            </h3>
                                                            <h4>
                                                                Сегодня, бесплатно
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={styles.orderType__content__choises__box}
                                                        onClick={() => handleSetOrderType('express')}
                                                        style={{
                                                            borderColor: orderType === 'express' ? '#EA8305' : '#c4c4c4'
                                                        }}
                                                    >
                                                        <Image src={'/assets/images/express.svg'} width={33} height={30} alt='express icon' />
                                                        <div>
                                                            <h3>
                                                                Доставка
                                                            </h3>
                                                            <h4>
                                                                Сегодня от 387 ₽
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    orderType === 'express' ? (
                                                        <div className={styles.orderType__content__express}>
                                                            {
                                                                expressTypes.map((item, index) => {
                                                                    return (
                                                                        <div
                                                                            key={index}
                                                                            className={styles.orderType__content__express__item}
                                                                            onClick={() => handleSetExpressType(item.type)}

                                                                        >
                                                                            <div
                                                                                className={styles.orderType__content__express__item__checkBox}
                                                                                style={{
                                                                                    border: expressType === item.type ? 'none' : '2px solid #c4c4c4',
                                                                                    backgroundColor: expressType === item.type ? '#EA8305' : 'transparent'
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className={styles.orderType__content__express__item__checkBox__dot}
                                                                                    style={{
                                                                                        display: expressType === item.type ? 'block' : 'none'
                                                                                    }}
                                                                                >

                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <h3>
                                                                                    {
                                                                                        item.type
                                                                                    }
                                                                                </h3>
                                                                                <h4>
                                                                                    Доставка от {item.deadlines} дней, от {item.price} ₽
                                                                                </h4>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    ) : (
                                                        <div className={styles.orderType__content__pickup}>
                                                            <div className={styles.orderType__content__pickup__left}>
                                                                <h2>
                                                                    г. Самара, Московское ш. 17 <br />
                                                                    ТЦ "Сила Спорта" 2 этаж
                                                                </h2>
                                                                <div>
                                                                    <Image src={'/assets/images/metro.svg'} width={40} height={40} alt='metro icon' />
                                                                    <p>
                                                                        Московская
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <Image src={'/assets/images/watches.svg'} width={40} height={40} alt='metro icon' />
                                                                    <p>
                                                                        Часы работы: <br />
                                                                        10:00-22:00
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <Image src={'/assets/images/info.svg'} width={40} height={40} alt='metro icon' />
                                                                    <p>
                                                                        Можно забрать через 15  <br />  минут или в течении 14 дней
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <Image src={'/assets/images/infoGreen.svg'} width={40} height={40} alt='metro icon' />
                                                                    <p>
                                                                        После оформления пункт <br /> выдачи изменить будет нельзя
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className={styles.orderType__content__pickup__right}>
                                                                <Image src={'/assets/images/miniMap.webp'} width={150} height={150} alt='map image' />
                                                                <a href="https://yandex.com/maps/-/CHCFIIY7">Показать на карте</a>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </section>
                                        <section className={styles.paymentType}>
                                            <div className={styles.paymentType__content}>
                                                <div className={styles.paymentType__content__title}>
                                                    <span>2.</span>
                                                    <h2>Как вам будет удобнее оплатить?</h2>
                                                </div>
                                                <div className={styles.paymentType__content__items}>
                                                    {
                                                        paymentTypes.map((item, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className={styles.paymentType__content__items__item}
                                                                    onClick={() => handleSetPaymentType(item.type)}
                                                                    style={{
                                                                        borderColor: item.type === paymentType ? '#EA8305' : '#c4c4c4',
                                                                    }}
                                                                >
                                                                    <h3>{item.title}</h3>
                                                                    <h4>{item.subTitle}</h4>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </section>
                                        <section className={styles.orderForm}>
                                            <div className={styles.orderForm__content}>
                                                <div className={styles.orderForm__content__title}>
                                                    <span>
                                                        3.
                                                    </span>
                                                    <h2>
                                                        Укажите данные получателя заказа
                                                    </h2>
                                                </div>
                                                <form>
                                                    <div>
                                                        <label>
                                                            <input type="text" placeholder='Имя, Фамилия' value={name} onChange={(e) => setName(e.target.value)} />

                                                        </label>
                                                        <label>
                                                            <input type="text" placeholder='mail...' value={mail} onChange={(e) => setmail(e.target.value)} />
                                                        </label>
                                                    </div>
                                                    <label>
                                                        <input type="text" placeholder='Телефон...' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                    </label>
                                                    <label>
                                                        <textarea name="" id="" placeholder='Комментарий к заказу...' value={comment} onChange={(e) => setComment(e.target.value)} />
                                                    </label>
                                                </form>
                                            </div>
                                        </section>
                                        <section className={styles.discountAvailability}>

                                            <div className={styles.discountAvailability__content}>
                                                <div className={styles.discountAvailability__content__title}>
                                                    <span>
                                                        4.
                                                    </span>
                                                    <h2>
                                                        Скидки к заказу
                                                    </h2>
                                                </div>
                                                <div className={styles.discountAvailability__content__promo}>
                                                    <label className={styles.checkLabel}>
                                                        <input
                                                            type="checkbox"
                                                            onChange={onChangeCheckBox}
                                                        />
                                                        <span className={styles.checkSpan}></span>
                                                        {
                                                            promoAvailability ? (
                                                                <input
                                                                    type="text"
                                                                    placeholder="Промокод"
                                                                    className={styles.promoAreaActive}
                                                                    value={promoCode}
                                                                    onChange={(e) => setPromoCode(e.target.value)}
                                                                    onBlur={() => {

                                                                        const lowerPromo = promoCode.trim().toLowerCase();
                                                                        if (lowerPromo === 'guitar10') {
                                                                            setDiscount(10);
                                                                        } else if (lowerPromo === 'sale20') {
                                                                            setDiscount(20);
                                                                        } else {
                                                                            setDiscount(0);
                                                                        }
                                                                    }}
                                                                />

                                                            ) : (

                                                                <span className={styles.promoArea}>Промокод</span>
                                                            )
                                                        }
                                                    </label>
                                                </div>
                                            </div>
                                        </section>
                                        <section className={styles.finallyCheck}>
                                            <div className={styles.finallyCheck__content}>
                                                <div>
                                                    <h3>
                                                        Товары
                                                    </h3>
                                                    <h4>
                                                        {finallyPrice} ₽
                                                    </h4>
                                                </div>
                                                <div>
                                                    <h3>
                                                        {
                                                            orderType === 'express'
                                                                ? expressType
                                                                : 'Забрать в магазине'
                                                        }
                                                    </h3>
                                                    <h4>
                                                        {
                                                            orderType === 'express'
                                                                ? `${expressTypes.find(e => e.type === expressType)?.price ?? 0} ₽`
                                                                : 'Бесплатно'
                                                        }
                                                    </h4>
                                                </div>
                                                {
                                                    discount > 0 && (
                                                        <div>
                                                            <h3>
                                                                Скидка по промокоду
                                                            </h3>
                                                            <h4>
                                                                {discount}%
                                                            </h4>
                                                        </div>
                                                    )
                                                }

                                                <div>
                                                    <h3>
                                                        Итого к оплате
                                                    </h3>
                                                    <h4>
                                                        {
                                                            (() => {
                                                                const deliveryPrice = orderType === 'express'
                                                                    ? (expressTypes.find(e => e.type === expressType)?.price ?? 0)
                                                                    : 0;

                                                                const totalBeforeDiscount = finallyPrice + deliveryPrice;
                                                                const discounted = totalBeforeDiscount * (1 - discount / 100);

                                                                return Math.round(discounted);
                                                            })()
                                                        } ₽
                                                    </h4>
                                                </div>

                                            </div>
                                        </section>
                                        <button
                                            className={styles.placingAnOrder__container__main__button}
                                            onClick={handleAddOrder}
                                        >
                                            Оформить заказ
                                        </button>

                                        <p className={styles.placingAnOrder__container__main__confirm}>Я даю согласие на обработку своих персональных данных</p>
                                    </div>
                                </div>
                                <div className={styles.placingAnOrder__container__content__cartCheck}>
                                    <div className={styles.placingAnOrder__container__content__cartCheck__box}>
                                        <p>в заказе {finallyCount} товаров на сумму {finallyPrice} ₽ </p>
                                        <div className={styles.placingAnOrder__container__content__cartCheck__box__items}>
                                            {
                                                cart.map((item, index) => {
                                                    return (
                                                        <div key={index} className={styles.placingAnOrder__container__content__cartCheck__box__items__item}>
                                                            <h3>{item.type} {item.title}</h3>
                                                            <h4>{item.quantity} шт. x {item.price} ₽</h4>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className={styles.placingAnOrder__container__orderReply}>
                            <h2>
                                {
                                    ordersStatus === 'loading' ? (
                                        'Ожидание оформления...'
                                    ) :
                                        ordersStatus === 'succeeded' ? (
                                            'Благодарим за заказ!'
                                        ) :
                                            ordersStatus === 'failed' ? (
                                                'Ошибка при оформлении!'
                                            ) : null
                                }
                            </h2>
                            {
                                ordersStatus === 'loading' ? (
                                    <p>
                                        Оформляем ваш заказ! Пожалуйста, ожидайте!
                                    </p>
                                ) :
                                    ordersStatus === 'succeeded' ? (
                                        <p>
                                            Оформление прошло успешно! Начинаем собирать! <br /> Наш специалист скоро с вами свяжется!
                                        </p>
                                    ) :
                                        ordersStatus === 'failed' ? (
                                            <p>
                                                Заказ не оформлен! Попробуйте ещё раз позднее <br /> или обратитесь в поддержку!
                                            </p>
                                        ) : null
                            }

                            <Link href={'/Catalog'}>
                                <h3>вернуться к каталогу</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PlacingAnOrder
