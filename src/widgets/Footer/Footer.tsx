import styles from './Footer.module.scss'
import Left from './Left/Left'
import Right from './Right/Right'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`${styles.footer__container} container`}>
            <div className={styles.footer__container__content}>
                <Right />
                <Left />
            </div>
        </div>
    </footer>
  )
}

export default Footer
