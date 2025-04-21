'use client';

import Categories from '../Categories/Categories'
import styles from './Banner.module.scss'
import Swiper from './Swiper/Swiper'


export default function Banner() {
  return (
    <section className={styles.banner}>
        <Swiper />
        <Categories />
    </section>
  )
}
