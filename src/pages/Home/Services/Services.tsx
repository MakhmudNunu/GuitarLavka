import Link from 'next/link'
import styles from './Services.module.scss'

interface IServices {
    id: number
    title: string
    description: string
    image: string
    path: string
}

const services: IServices[] = [
    {
        id: 1,
        title: 'Обучение',
        description: 'This is a description of service 1.',
        image: '/assets/images/learning.webp',
        path: '/services/learning',
    },
    {
        id: 2,
        title: 'Подбор',
        description: 'В нашей гитарной мастерской мы оказываем полный спектр услуг по ремонту и обслуживанию музыкальных инструментов, в том числе и изготовление на заказ. ',
        image: '/assets/images/set.webp',
        path: '/services/set',
    },
    {
        id: 3,
        title: 'Ремонт',
        description: 'This is a description of service 1.',
        image: '/assets/images/repair.webp',
        path: '/services/repair',

    },
    {
        id: 4,
        title: 'Трейд-ин',
        description: 'This is a description of service 1.',
        image: 'https://picsum.photos/200/300',
        path: '/services/trade',
    }
]

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.services__container}>
                <div className={styles.services__container__content}>
                    <h2 className={styles.title}>Услуги</h2>
                    <div className={styles.services__container__content__main}>
                        {services.map(item => {
                            return (
                                <div
                                    className={styles.services__container__content__main__item}
                                    key={item.id}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className={styles.services__container__content__main__item__info}>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <Link className={styles.services__container__content__main__item__info__button} href={item.path}>Показать ещё</Link>
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

export default Services
