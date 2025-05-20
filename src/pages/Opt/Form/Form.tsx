import styles from './Form.module.scss'

const Form = () => {
    return (
        <section className={styles.form}>
            <div className={styles.form__container}>
                <div className={styles.form__container__content}>
                    <h2>Отправить сообщение</h2>
                    <form className={styles.form__container__content__main}>
                        <div className={styles.form__container__content__main__left}>
                            <input
                                placeholder="Имя..."
                                required
                            />
                            <input
                                placeholder="Email..."
                                required
                            />
                            <input
                                placeholder="Телефон..."
                                required
                            />
                        </div>
                        <div className={styles.form__container__content__main__right}>
                            <textarea
                                name="message"
                                placeholder="Сообщение..."
                                rows={5}
                                required
                            />
                            <div className={styles.form__container__content__main__right__send}>
                                <button>Отправить</button>
                                <span>
                                    Я даю согласие на обработку своих <br /> персональных данных
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form
