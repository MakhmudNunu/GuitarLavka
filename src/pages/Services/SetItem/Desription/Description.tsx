import styles from './Description.module.scss'

const Description = () => {
    return (
        <section className={styles.description}>
            <div className={styles.description__container}>
                <div className={styles.description__container__content}>
                    <div className={styles.description__container__content__left}>
                        <h1>Подбор
                            инструментов</h1>
                        <div>
                            <div></div>
                            <p>
                                это услуга, подразумевающая нашу помощь
                                в выборе инстумента, который будет соответствовать
                                вашим критериям выбора
                            </p>
                        </div>
                    </div>
                    <div className={styles.description__container__content__centralLine}></div>
                    <div className={styles.description__container__content__right}>
                        <div className={styles.description__container__content__right__item}>
                            <h3>Офлайн встреча в нашем магазине</h3>
                            <p>вы можете приехать в наш магазин,
                                где вы сможете пообщаться с нашими мастерами,
                                поиграть на гитарах и постучать в барабаны  </p>
                        </div>
                        <div className={styles.description__container__content__right__item}>
                            <h3>Онлайн чат</h3>
                            <p>вы можете перейти в онлайн чат и задать все волнующие вас вопросы,
                                а нашему специалист на них ответит</p>
                        </div>
                        <div className={styles.description__container__content__right__item}>
                            <h3>Звонок по видео связи</h3>
                            <p>вы можем совершить видео звонок,
                                в котором сможем определиться в том,
                                что вам стоит выбрать</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description
