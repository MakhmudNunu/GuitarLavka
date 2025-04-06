import styles from './FooterNavBar.module.scss'

const FooterNavBar = () => {
    return (
        <ul className={styles.footer__nav}>
            <li>
                <nav className={styles.footer__nav__item}>
                    <h3>КАТАЛОГ</h3>
                    <ul>
                        <li>Гитары</li>
                        <li>Укулеле</li>
                        <li>Аксессуары</li>
                        <li>Струны</li>
                    </ul>
                </nav>
            </li>
            <li>
                <nav className={styles.footer__nav__item__second}>
                    <h3>СЕРВИС</h3>
                    <ul>
                        <li>Оплата</li>
                        <li>Гарантия</li>
                        <li>Доставка</li>
                    </ul>
                </nav>
            </li>
            <li>
                <nav className={styles.footer__nav__item}>
                    <h3>УСЛУГИ</h3>
                    <ul>
                        <li>Ремонт</li>
                        <li>Онлайн подбор</li>
                        <li>Обучение</li>
                        <li>Комиссионка</li>
                    </ul>
                </nav>
            </li>
        </ul>
    )
}

export default FooterNavBar
