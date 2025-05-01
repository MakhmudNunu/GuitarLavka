import ProductsSwiper from '@/shared/ProductsSwiper/ProductsSwiper';
import styles from './Populars.module.scss';

const products = [
    {
        id: 1,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        discount: 10123,
        link: '/more'
    },
    {
        id: 2,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 3,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 4,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 5,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 6,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 7,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 8,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 9,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 10,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 11,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 12,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 13,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 14,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 15,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 16,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    },
    {
        id: 17,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
        link: '/more'
    }
]

const Populars = () => {
    return (
        <section className={styles.populars}>
            <div className={styles.populars__container}>
                <div className={styles.populars__container__content}>
                    <h2 className={styles.title}>Популярные товары</h2>
                    <ProductsSwiper products={products} />
                </div>
            </div>
        </section>
    )
}

export default Populars
