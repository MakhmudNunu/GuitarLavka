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
                    <Link href={'/'}>Услуги</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/'}>О нас</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/'}>Доставка</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/'}>Отзывы</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/'}>Обучение</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/'}>Контакты</Link>
                </li>
                <li className={style.navbar__list__item}>
                    <Link href={'/'}>Опт</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
