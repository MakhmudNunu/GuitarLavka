import Image from 'next/image';
import styles from './Categories.module.scss';
import Link from 'next/link';

let categories = [
    {
        id: 1,
        name: 'Гитары',
        icon: '/assets/images/guitars.webp',
        path: '/guitars'
    },
    {
        id: 2,
        name: 'Укулеле',
        icon: '/assets/images/ukulele.webp',
        path: '/ukuleles'
    },
    {
        id: 3,
        name: 'Аксессуары',
        icon: '/assets/images/accessories.webp',
        path: '/accessories'
    },
    {
        id: 4,
        name: 'Струны',
        icon: '/assets/images/strings.webp',
        path: '/strings'
    },
]

const Categories = () => {

    return (
        <section className={styles.categories}>
            <div className={`${styles.categories__container} container`}>
                <div className={styles.categories__container__content}>
                    {categories.map((item) => {
                        return (
                            <Link key={item.id} href={item.path}>
                                <div key={item.id} style={{ backgroundImage: `url(${item.icon})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={styles.categories__container__content__item}>
                                    <div className={styles.categories__container__content__item__up}>
                                        <Image className={styles.mediator} src='/assets/images/mediator.webp' alt='mediator' width={164.82} height={145.81} />
                                        <h2>{item.name}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Categories
