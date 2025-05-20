import styles from './ExpressTypes.module.scss'

const types = [
    {
        id: 1,
        title: 'Самовывоз',
        terms: 'Мы работаем ежедневно с 10:00 до 20:00',
        price: 'Бесплатно',
        description: 'Забрать в магазине по адресу ТЦ Вертикаль, Московское шоссе 17',
    },
    {
        id: 2,
        title: 'Boxberry',
        terms: 'от 3 дней',
        price: 'от 250 руб',
        description: 'Доставка до пункта выдачи BOXBERRY',
    },
    {
        id: 3,
        title: 'Сдэк',
        terms: 'от 3 дней',
        price: 'от 300 руб',
        description: 'Доставка пункта выдачи или указанного до адреса с возможностью оплаты при получении.',
    },
    {
        id: 4,
        title: 'Почта России',
        terms: 'от 3 дней',
        price: 'от 200 руб',
        description: 'Обыкновенная посылка. Наземная доставка по России с низким тарифом по весу',
    },
]

const ExpressTypes = () => {
    return (
        <section className={styles.expressTypes}>
            <div className={styles.expressTypes__container}>
                <div className={styles.expressTypes__container__content}>
                    <h1>Доставка</h1>
                    <div className={styles.expressTypes__container__content__types}>
                        {types.map((item, index) => {
                            return (
                                <div key={item.id} className={styles.expressTypes__container__content__types__item}>
                                    <h2>{item.title}</h2>
                                    <div className={styles.expressTypes__container__content__types__item__content}>
                                        <div>
                                            <h3>Срок</h3>
                                            <p>{item.terms}</p>
                                        </div>
                                        <div>
                                            <h3>Стоимость</h3>
                                            <p>{item.price}</p>
                                        </div>
                                        <div>
                                            <h3>Описание</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpressTypes
