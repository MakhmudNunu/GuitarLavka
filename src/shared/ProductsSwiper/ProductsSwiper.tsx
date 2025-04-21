'use client';

import { useRef, useState, useEffect, useMemo } from 'react';

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
  const [chunkSize, setChunkSize] = useState(4);

  const groupedProducts = useMemo(() => {
    const result = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      result.push(products.slice(i, i + chunkSize));
    }
    return result;
  }, [products, chunkSize]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIconSize(width <= 768 ? { width: 24, height: 36 } : { width: 52, height: 72 });
      if (width <= 500) {
        setChunkSize(1);
      } else if (width <= 768) {
        setChunkSize(2);
      } else if (width <= 1050) {
        setChunkSize(3);
      } else {
        setChunkSize(4);
      }
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
        {groupedProducts.slice(0, 16).map((items, index) => (
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
