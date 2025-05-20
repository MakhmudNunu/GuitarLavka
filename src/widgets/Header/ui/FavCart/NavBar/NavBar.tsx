import style from './NavBar.module.scss'
import Link from 'next/link'

interface NavBarProps {
    padding?: string
    flex?: number
}

const NavBar: React.FC<NavBarProps> = ({ padding, flex }) => {
    return (
        <nav
            className={style.navbar}
            style={{ padding, flex }}
            id='navbar'
        >
            <ul className={style.navbar__list}>
                <li className={style.navbar__list__item}>
                    <Link href={'/Catalog'}>Каталог</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/Services'}>Услуги</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/AboutUs'}>О нас</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/Delivery'}>Доставка</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/Feedbacks'}>Отзывы</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/Learning'}>Обучение</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/Contacts'}>Контакты</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/Opt'}>Опт</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
