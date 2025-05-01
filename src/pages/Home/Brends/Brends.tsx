"use client"

import { useState, useEffect } from 'react';

import styles from './Brends.module.scss';
import ANueNue from './ui/aNueNue';
import Elixir from './ui/elixir';
import Enya from './ui/Enya';
import Godin from './ui/Godin';
import Joyo from './ui/Joyo';
import Kepma from './ui/kepma';
import Kremona from './ui/Kremona';
import Matona from './ui/Maton';
import Sigma from './ui/Sigma';
import Tom from './ui/Tom';

const Brends = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const style = {
        width: isMobile ? 0.5 : 1,
        height: isMobile ? 0.5 : 1,
    }
    return (
        <section className={styles.brends}>
            <div className={styles.brends__container}>
                <div className={styles.brends__container__content}>
                    <ANueNue sizes={{ width: 109 * style.width, height: 113 * style.height }} />
                    <Kepma sizes={{ width: 160 * style.width, height: 106 * style.height }} />
                    <Elixir sizes={{ width: 189 * style.width, height: 84 * style.height }} />
                    <Joyo sizes={{ width: 126 * style.width, height: 27 * style.height }} />
                    <Godin sizes={{ width: 191 * style.width, height: 64 * style.height }} />
                    <Kremona sizes={{ width: 162 * style.width, height: 155 * style.height }} />
                    <Matona sizes={{ width: 180 * style.width, height: 139 * style.height }} />
                    <Tom sizes={{ width: 108 * style.width, height: 61 * style.height }} />
                    <Enya sizes={{ width: 180 * style.width, height: 37 * style.height }} />
                    <Sigma sizes={{ width: 177 * style.width, height: 140 * style.height }} />
                </div>
            </div>
        </section>
    )
}

export default Brends
