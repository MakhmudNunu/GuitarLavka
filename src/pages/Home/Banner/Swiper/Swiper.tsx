'use client';

import styles from './Swiper.module.scss';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface Banner {
  image: string;
  itemType?: string;
  title: string;
  description: string;
  path?: string;
}

const banners: Banner[] = [
  {
    image: '/assets/images/Banners/banner1/banner1_1x.webp',
    title: 'Takamine',
    itemType: 'Гитара',
    description: 'винтажная 12 струнная GJ72CE - 12BSB',
    path: '/',
  },
  {
    image: '/assets/images/Banners/banner2/banner2_1x.webp',
    title: 'Видео звонок в магазин',
    description: 'Эта фунция помогает увидеть и услышать инструмент в реальном времени, что заметно упрощает выбор',
    path: '/',
  },
  {
    image: '/assets/images/Banners/banner3/banner3_1x.webp',
    title: 'Отстройка каждого инструмента',
    description: 'Наши мастера отстраивают каждый инструмент перед отправкой',
    path: '/',
  },
  {
    image: '/assets/images/Banners/banner4/banner4_1x.webp',
    itemType: 'Акустическая гитара ',
    title: 'Kepma G1',
    description: 'Инструмент из премиальной линейки G1',
    path: '/',
  }
];

export default function Swiper() {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [iconSize, setIconSize] = useState({ width: 52, height: 72 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIconSize(width <= 500 ? {...iconSize,width:24, height: 36} : {...iconSize,width:52, height: 72});
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.prevEl} prevEl ${isBeginning ? styles.disabled : ''}`}
        disabled={isBeginning}
      >
        <Image src="/assets/images/prev.svg" alt="arrow left" width={iconSize.width} height={iconSize.height} />
      </button>
      <button
        className={`${styles.nextEl} nextEl ${isEnd ? styles.disabled : ''}`}
        disabled={isEnd}
      >
        <Image src="/assets/images/next.svg" alt="arrow right" width={iconSize.width} height={iconSize.height} />
      </button>

      <SwiperComponent
        modules={[Navigation]}
        navigation={{
          nextEl: '.nextEl',
          prevEl: '.prevEl',
        }}
        onSwiper={handleSwiper}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        className={styles.swiper}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.image}>
              <Image
                src={banner.image}
                alt={banner.title}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.text}>
              <h2>{banner.title}</h2>
              {banner.itemType && <h3>{banner.itemType}</h3>}
              <p>{banner.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}
