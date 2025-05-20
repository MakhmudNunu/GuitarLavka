import styles from './WeAre.module.scss'

const WeAre = () => {
    return (
        <section className={styles.weAre}>
            <div className={styles.weAre__container}>
                <div className={styles.weAre__container__content}>
                    <h1>Мы - официальный дистрибьютор <br /> компании Kepma в России!</h1>
                    <p>если вы владелец музыкального магазина, советуем вам обратить внимание на эти <br /> гитары. Также у нас можно заказать другие музыкальные инструменты и аксессуары. <br />
                        Ну и конечно специальные условия у нас действуют для музыкальных школ, <br /> репетиционных баз, музыкантов, блоггеров и т.д. <br />
                        Вы можете оставить свои контакты тут, мы с вами свяжемся:)</p>
                </div>
            </div>
        </section>
    )
}

export default WeAre
