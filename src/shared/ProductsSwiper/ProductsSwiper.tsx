'use client';

import { useRef, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './ProductsSwiper.module.scss';
import ProductCard from './ProductCard/ProductCard';
import Button from '../ui/ButtonForSwiper/Button';
import Link from 'next/link';

import { IProducts } from '@/entities/type/products';

interface IProps {
  products: IProducts[];
  lr: number
}

const ProductsSwiper: React.FC<IProps> = ({ products, lr }) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    updateNavigationState(swiper);
    swiper.on('slideChange', () => updateNavigationState(swiper));
  };

  const updateNavigationState = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        src="/assets/images/prev.svg"
        alt="prev button"
        isBeginning={isBeginning}
        className="swiperPrevEl"
        left={lr}
        top={50}
      />

      <Button
        src="/assets/images/next.svg"
        alt="next button"
        isEnd={isEnd}
        className="swiperNextEl"
        right={lr}
        top={50}
      />

      <SwiperComponent
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiperNextEl',
          prevEl: '.swiperPrevEl',
        }}
        pagination={{
          el: '.customPagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        onSwiper={handleSwiper}
        spaceBetween={20}
        loop={false}
        slidesPerView={4}
        slidesPerGroup={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        className={styles.swiper}
      >
        {products.slice(0, 16).map((item) => (
          <SwiperSlide
            key={item.id}
            className={styles.swiperSlide}
          >
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <div className="customPagination"></div>
    </div>
  );
};

export default ProductsSwiper;
