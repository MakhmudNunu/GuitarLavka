import Social from '@/shared/ui/Social/Social'
import styles from './Right.module.scss'
import LogoWhite from './ui/LogoWhite'
import mastercard from '../../../../public/assets/images/mastercard.svg'
import Payments from './ui/payments/Payments'

const Right = () => {
  return (
    <div className={styles.right}>
      <div className={styles.right__top}>
        <LogoWhite left={-15} />
        <p>
          Мы работаем м сделать онлайн-показ <br />
          инструмента по всей России, <br />
          поэтому можеи доставить его до вашей двери
        </p>
      </div>
      <div className={styles.right__center}>
        <div className={styles.right__center__number}>
          <h4>Остались вопросы?</h4>
          <h3>8 (800) 100-26-80</h3>
        </div>
        <div className={styles.right__center__mail}>
          <h4>ЕЖЕДНЕВНО 10:00 - 20:00</h4>
          <h3>info@guitarlavka.ru</h3>
        </div>
      </div>
      <Social display={'flex'} size={19} left={0} />
      <div className={styles.right__center__payments}>
        <h4>Способы оплаты</h4>
        <Payments />
      </div>
      <div className={styles.right__bottom}>
        <h5>© 2021 GuitarLavka - музыкальный магазин <br />
          Политика конфиденциальности
        </h5>
      </div>
    </div>
  )
}

export default Right
