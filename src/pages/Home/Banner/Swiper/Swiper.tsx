'use client';

import styles from './Swiper.module.scss';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import MoreButton from './ui/MoreButton/MoreButton';
import Button from '@/shared/ui/ButtonForSwiper/Button';

interface Banner {
  image: string;
  itemType?: string;
  title: string;
  description: string;
  path: string;
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
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <div className={styles.wrapper}>


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
        <Button src={'/assets/images/prev.svg'} alt={'prev button'} isBeginning={isBeginning} className={'prevEl'} />

        <Button src={'/assets/images/next.svg'} alt={'next button'} isEnd={isEnd} className={'nextEl'} />

        {banners.map((banner, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.image}>
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
            <div className={styles.text}>
              <h2>{banner.title}</h2>
              {banner.itemType && <h3>{banner.itemType}</h3>}
              <p>{banner.description}</p>
            </div>
            <MoreButton />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}
