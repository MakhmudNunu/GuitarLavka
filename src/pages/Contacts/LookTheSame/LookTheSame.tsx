import ProductsSwiper2 from '@/shared/ProductsSwiper2/ProductsSwiper2'
import styles from './LookTheSame.module.scss'

const products = [
    {
        id: 1,
        title: 'Реставрация',
        price: 15000,
        image: '/assets/images/Services/repair-.webp',
        discount: 10123,
        link: '/more'
    },
    {
        id: 2,
        type: 'Ремонт',
        title: 'Грифа',
        price: 45000,
        image: '/assets/images/Services/learning.webp',
        link: '/more'
    },
    {
        id: 3,
        type: 'Ремонт',
        title: 'Электрики',
        price: 15000,
        image: '/assets/images/Services/set.webp',
        link: '/more'
    },
    {
        id: 4,
        title: 'Покраска',
        price: 45000,
        image: '/assets/images/Services/trade-in.webp',
        link: '/more'
    },
    {
        id: 5,
        title: 'Реставрация',
        price: 15000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 6,
        type: 'Ремонт',
        title: 'Грифа',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 7,
        type: 'Ремонт',
        title: 'Электрики',
        price: 15000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 8,
        title: 'Покраска',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 9,
        title: 'Реставрация',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 10,
        type: 'Ремонт',
        title: 'Грифа',
        price: 15000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 11,
        type: 'Ремонт',
        title: 'Электрики',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 12,
        title: 'Покраска',
        price: 15000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 13,
        title: 'Реставрация',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 14,
        type: 'Ремонт',
        title: 'Грифа',
        price: 15000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 15,
        type: 'Ремонт',
        title: 'Электрики',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 16,
        title: 'Покраска',
        price: 15000,
        image: '/assets/images/card.webp',
        link: '/more'
    },
    {
        id: 17,
        title: 'Реставрация',
        price: 45000,
        image: '/assets/images/card.webp',
        link: '/more'
    }
]

const LookTheSame = () => {
    return (
        <section className={styles.lookTheSame}>
            <div className={styles.lookTheSame__container}>
                <div className={styles.lookTheSame__container__content}>
                    <ProductsSwiper2 lr={-55} products={products} />
                    <div className={styles.rules}>
                        <p> * - цены указаны без учета материалов и комплектующих; </p>
                        <p>** - срочная отстройка инструмента – 3 часа;</p>
                        <p>*** - сроки ремонта указываются мастером в зависимости от конкретного случая;</p>
                        <p>**** - срочный ремонт (покраска, склейка, перепайка) – коэффициент X2.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LookTheSame
