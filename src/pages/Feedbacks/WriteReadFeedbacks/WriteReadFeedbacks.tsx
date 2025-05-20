import Read from './Read/Read'
import Write from './Write/Write'
import styles from './WriteReadFeedbacks.module.scss'

const WriteReadFeedbacks = () => {
    return (
        <section className={styles.writeReadFeedbacks}>
            <div className={styles.writeReadFeedbacks__container}>
                <div className={styles.writeReadFeedbacks__container__content}>
                    <div className={styles.writeReadFeedbacks__container__content__title}>
                        <h2>Отзывы</h2>
                        <h3>Отзывы на Яндекс.Картах - <a href="https://yandex.com/maps/org/gitarnaya_lavka/178093785224/reviews/?ll=50.152156%2C53.202861&mode=search&sll=10.854186%2C49.182076&sspn=92.460938%2C35.306421&tab=reviews&text=guitar%20lavka&z=16">читать все отзывы</a></h3>
                    </div>
                    <div className={styles.writeReadFeedbacks__container__content__main}>
                        <Read />
                        <Write />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WriteReadFeedbacks
