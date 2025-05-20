import AutoSwiper from './AutoSwiper/AutoSwiper'
import styles from './OtherPoV.module.scss'

const carousel = [
    {
        id: 1,
        img: '/assets/images/carousel/pov1.webp'
    },
    {
        id: 2,
        img: '/assets/images/carousel/pov2.webp'
    },
    {
        id: 3,
        img: '/assets/images/carousel/pov3.webp'
    },
    {
        id: 4,
        img: '/assets/images/carousel/pov1.webp'
    },
    {
        id: 5,
        img: '/assets/images/carousel/pov2.webp'
    },
    {
        id: 6,
        img: '/assets/images/carousel/pov3.webp'
    },
    {
        id: 7,
        img: '/assets/images/carousel/pov1.webp'
    },
    {
        id: 8,
        img: '/assets/images/carousel/pov2.webp'
    },
    {
        id: 9,
        img: '/assets/images/carousel/pov3.webp'
    },
    {
        id: 10,
        img: '/assets/images/carousel/pov1.webp'
    },
    {
        id: 11,
        img: '/assets/images/carousel/pov2.webp'
    },
    {
        id: 12,
        img: '/assets/images/carousel/pov3.webp'
    },
]

const OtherPoV = () => {
    return (
        <section className={styles.otherPoV}>
            <div className={styles.otherPoV__container}>
                <div className={styles.otherPoV__container__content}>
                    <h2>Как мы выглядим со стороны</h2>
                    <AutoSwiper carousel={carousel} />
                </div>
            </div>
        </section>
    )
}

export default OtherPoV
