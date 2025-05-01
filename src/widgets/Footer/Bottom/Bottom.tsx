"use client"

import { useState, useEffect } from 'react';

import Social from '@/shared/Social/Social'
import styles from './Bottom.module.scss'
import Payments from './ui/payments/Payments'
import Screen from './ui/screen'

const Bottom = () => {

    const [iconSize, setIconSize] = useState(19);
    const [display, setDisplay] = useState<'flex' | 'block' | 'inline-block' | 'grid'>('flex');
    const [position, setPosition] = useState<'absolute' | 'relative' | 'fixed' | 'static' | 'sticky'>('relative');

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIconSize(width <= 768 ? 25 : 19);
        setDisplay(width <= 768 ? 'flex' : 'flex');
        setPosition(width <= 768 ? 'absolute' : 'relative');
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.bottom}>
            <div className={styles.bottom__left}>
                <div className={styles.bottom__left__center}>
                    <div className={styles.bottom__left__center__number}>
                        <h4>Остались вопросы?</h4>
                        <h3>8 (800) 100-26-80</h3>
                    </div>
                    <div className={styles.bottom__left__center__mail}>
                        <h4>ЕЖЕДНЕВНО 10:00 - 20:00</h4>
                        <h3>info@guitarlavka.ru</h3>
                    </div>
                </div>
                <Social display={display} position={position} size={iconSize} />
                <div className={styles.bottom__left__center__payments}>
                    <h4>Способы оплаты</h4>
                    <Payments />
                </div>
                <div className={styles.bottom__left__bottom}>
                    <h5>© 2021 GuitarLavka - музыкальный магазин <br />
                        Политика конфиденциальности
                    </h5>
                </div>
            </div>
            <Screen />
        </div>
    )
}

export default Bottom
