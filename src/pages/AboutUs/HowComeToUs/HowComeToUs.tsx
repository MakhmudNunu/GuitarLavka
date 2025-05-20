import styles from './HowComeToUs.module.scss'

const HowComeToUs = () => {
    return (
        <section className={styles.howComeToUs}>
            <div className={styles.howComeToUs__container}>
                <div className={styles.howComeToUs__container__content}>
                    <h2>Как до нас добраться?</h2>
                    <div className={styles.howComeToUs__container__content__main}>
                        <div className={styles.howComeToUs__container__content__main__left}>
                            <div className={styles.howComeToUs__container__content__main__left__top}>
                                <h3>Адрес</h3>
                                <p>г. Самара <br />
                                    Московское ш. 17 <br />
                                    ТЦ "Сила Спорта" <br />
                                    2 этаж
                                </p>
                            </div>
                            <div className={styles.howComeToUs__container__content__main__left__bottom}>
                                <h3>Остановка метро</h3>
                                <p>Московская</p>
                            </div>
                        </div>
                        <div className={styles.howComeToUs__container__content__main__center}>
                            <h3>На общественном транспорте</h3>
                            <p>Выходите на остановке "Метро Московская", <br />
                                идете по Московскому шоссе 200 метров прямо <br />
                                (в сторону рынка Караван), переходите дорогу по <br /> подземному переходу, и оказываетесь прямо <br /> перед  ТЦ "Сила спорта", <br />
                                поднимаетесь на второй этаж, <br />
                                идете до конца коридора и первая секция <br /> направо (ориентир лифты и бар кинотеатра)  <br />
                                Вы - на месте!</p>
                        </div>
                        <div className={styles.howComeToUs__container__content__main__right}>
                            <h3>На автомобиле</h3>
                            <p>Если Вы едете из города, <br />
                                то поворачиваете на парковку ТЦ "Вертикаль" <br /> (ориентир статуя коня), <br /> 
                                паркуетесь, и оказываетесь прямо перед  <br />
                                ТЦ "Вертикаль", поднимаетесь на второй этаж, <br /> идете до конца коридора и первая секция <br /> налево (ориентир бар кинотеатра) <br />
                                Вы - на месте!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowComeToUs
