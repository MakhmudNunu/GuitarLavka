"use client"

import { useState, useEffect } from 'react'

import styles from './Top.module.scss'
import LogoWhite from './ui/LogoWhite'
import FooterNavBar from './FooterNavBar/FooterNavBar'

const Top = () => {

    const [iconSize, setIconSize] = useState(386);
    const [iconLeft, setIconLeft] = useState(-15);

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIconSize(width <= 768 ? 230 : 386);
        setIconLeft(width <= 768 ? -10 : -15);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.top}>
            <div className={styles.top__left}>
                <LogoWhite width={iconSize} left={iconLeft} />
                <p>
                    Мы работаем, чтобы сделать онлайн-показ <br />
                    инструмента по всей России, <br />
                    поэтому можем доставить его до вашей двери
                </p>
            </div>
            <FooterNavBar />
        </div>
    )
}

export default Top