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
    },
    {
        id: 2,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 3,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 4,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 5,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 6,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 7,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 8,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 9,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 10,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 11,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 12,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 13,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 14,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 15,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 16,
        type: 'Укулеле',
        title: 'Enya EUC-MAD',
        price: 15000,
        rate: 4.5,
        image: '/assets/images/card.webp',
        feedbacks: 12,
    },
    {
        id: 17,
        type: 'Гитара',
        title: 'Fender Stratocaster',
        price: 45000,
        rate: 4.8,
        image: '/assets/images/card.webp',
        feedbacks: 12,
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
