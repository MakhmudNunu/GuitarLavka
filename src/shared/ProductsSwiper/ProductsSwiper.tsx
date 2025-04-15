'use client';

import { useRef, useState, useEffect } from 'react';

import Image from 'next/image';

import styles from './ProductsSwiper.module.scss';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCard from './ProductCard/ProductCard'

import { IProducts } from '@/entities/type/products';

interface IProps {
  products: IProducts[];
}

const ProductsSwiper: React.FC<IProps> = ({ products }) => {
  const swiperRef = useRef<any>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [iconSize, setIconSize] = useState({ width: 52, height: 72 });

  const chunkSize = 4;
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    groupedProducts.push(products.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIconSize(width <= 500 ? { width: 24, height: 36 } : { width: 52, height: 72 });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <button
        ref={prevButtonRef}
        className={`${styles.prevEl} ${isBeginning ? styles.disabled : ''}`}
        disabled={isBeginning}
      >
        <Image
          src="/assets/images/prev.svg"
          alt="arrow left"
          width={iconSize.width}
          height={iconSize.height}
        />
      </button>

      <button
        ref={nextButtonRef}
        className={`${styles.nextEl} ${isEnd ? styles.disabled : ''}`}
        disabled={isEnd}
      >
        <Image
          src="/assets/images/next.svg"
          alt="arrow right"
          width={iconSize.width}
          height={iconSize.height}
        />
      </button>

      <SwiperComponent
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
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
        slidesPerView={1}
        loop={false}
        className={styles.swiper}
      >
        {groupedProducts.map((items, index) => (
          <SwiperSlide key={index}>
            <div className={styles.productsGrid}>
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div className="customPagination"></div>
    </div>
  );
};

export default ProductsSwiper;