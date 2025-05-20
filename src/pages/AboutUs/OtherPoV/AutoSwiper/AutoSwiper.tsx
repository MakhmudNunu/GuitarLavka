'use client'

import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './AutoSwiper.module.scss'

interface AutoSwiperProps {
    carousel: {
        id: number
        img: string
    }[]
}

const AutoSwiper: React.FC<AutoSwiperProps> = ({ carousel }) => {
    // const swiperRef = useRef<any>(null);

    // const handleSwiper = (swiper: any) => {
    //     swiperRef.current = swiper;
    //     updateNavigationState(swiper);
    //     swiper.on('slideChange', () => updateNavigationState(swiper));
    // };

    return (
        <div className={styles.autoSwiper}>
            <SwiperComponent
                modules={[Pagination, Autoplay]}
                pagination={{
                    el: '.customPagination',
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
                spaceBetween={20}
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className={styles.swiper}
            >
                {carousel.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className={styles.swiper__slide}
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >

                    </SwiperSlide>
                ))}
            </SwiperComponent>
            <div className="customPagination"></div>
        </div>
    )
}

export default AutoSwiper
