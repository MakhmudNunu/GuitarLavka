"use client"

import { useState, useEffect } from 'react'

import Bottom from './Bottom/Bottom'
import styles from './Footer.module.scss'
import Top from './Top/Top'

const Footer = () => {

  return (
    <footer className={styles.footer}>
        <div className={`${styles.footer__container} container`}>
            <div className={styles.footer__container__content}>
                <Top />
                <Bottom />
            </div>
        </div>
    </footer>
  )
}

export default Footer
