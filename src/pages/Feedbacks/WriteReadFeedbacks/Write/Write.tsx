import styles from './Write.module.scss'

const Write = () => {
    return (
        <div className={styles.write}>
            <h3>Добавить отзыв</h3>
            <form>
                <input
                    type="text"
                    placeholder='Ваше имя...'
                />
                <input
                    type="text"
                    placeholder='E-mail...'
                />
                <textarea
                    name="feedback"
                    id=""
                    className={styles.textarea}
                    placeholder='Отзыв...'
                >

                </textarea>
                <div className={styles.rate}>
                    <h4>Оценка</h4>
                </div>
                <div className={styles.send}>
                    <button>ОТправить</button>
                    <span>
                        Я даю согласие на обработку своих <br /> персональных данных
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Write
