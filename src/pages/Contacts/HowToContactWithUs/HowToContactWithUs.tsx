import DarkMap from '@/shared/DarkMap/DarkMap'
import styles from './HowToContactWithUs.module.scss'
import ClientMapWrapper from '@/shared/DarkMap/ClientMap'
import Image from 'next/image'
import Instagram from '@/shared/Social/ui/instagram'
import Vk from '@/shared/Social/ui/vk'
import Youtube from '@/shared/Social/ui/youtube'
import Telegram from '@/shared/Social/ui/telegram'
import Viber from '@/shared/Social/ui/viber'
import Whatsapp from '@/shared/Social/ui/whatsapp'

const HowToContactWithUs = () => {
  return (
    <section className={styles.howToContactWithUs}>
      <div className={styles.howToContactWithUs}>
        <div className={styles.howToContactWithUs__container}>
          <div className={styles.howToContactWithUs__container__content}>
            <div className={styles.howToContactWithUs__container__content__top}>
              <h2>Как с нами связаться?</h2>
              <p>Наши мастера очень хотят вам помочь и ответить на все ваши вопросы. <br />
                Если вы не хотите ждать, попробуйте поискать ответ на ваш вопрос в списке ниже. <br /> Спасибо за понимание!</p>
            </div>
            <div className={styles.howToContactWithUs__container__content__bottom}>
              <div className={styles.howToContactWithUs__container__content__bottom__left}>
                <ClientMapWrapper width={419} height={322} />
              </div>
              <div className={styles.howToContactWithUs__container__content__bottom__right}>
                <div className={styles.howToContactWithUs__container__content__bottom__right__item}>
                  <div className={styles.howToContactWithUs__container__content__bottom__right__item__title}>
                    <div>
                      <Image src="/assets/images/tel.svg" alt='phone' width={24} height={24} />
                    </div>
                    <h3>Звонок</h3>
                  </div>
                  <a type='tel' href='tel:8 (800) 100-26-80'>8 (800) 100-26-80</a>
                  <div className={styles.callTypes}>
                    <Telegram size={24} />
                    <Viber size={24} />
                    <Whatsapp size={24} />
                  </div>
                </div>
                <div className={styles.howToContactWithUs__container__content__bottom__right__item}>
                  <div className={styles.howToContactWithUs__container__content__bottom__right__item__title}>
                    <div>
                      <Instagram size={24} />
                    </div>
                    <h3>Инстаграм</h3>
                  </div>
                  <a href="https://www.instagram.com/guitar_lavka">https://www.instagram.com/guitar_lavka</a>
                </div>
                <div className={styles.howToContactWithUs__container__content__bottom__right__item}>
                  <div className={styles.howToContactWithUs__container__content__bottom__right__item__title}>
                    <div>
                      <Image src="/assets/images/point.svg" alt='point' width={24} height={24} />
                    </div>
                    <h3>Адрес</h3>
                  </div>
                  <p>г. Самара <br />
                    Московское ш. 17 <br />
                    ТЦ "Сила Спорта" <br />
                    2 этаж
                  </p>
                </div>
                <div className={styles.howToContactWithUs__container__content__bottom__right__item}>
                  <div className={styles.howToContactWithUs__container__content__bottom__right__item__title}>
                    <div>
                      <Vk size={24} />
                    </div>
                    <h3>ВКонтакте</h3>
                  </div>
                  <a href="vk.com/guitar_lavka">vk.com/guitar_lavka</a>
                </div>
                <div className={styles.howToContactWithUs__container__content__bottom__right__item}>
                  <div className={styles.howToContactWithUs__container__content__bottom__right__item__title}>
                    <div>
                      <Image src="/assets/images/mail.svg" alt='mail' width={24} height={24} />
                    </div>
                    <h3>Почта</h3>
                  </div>
                  <a href="info@guitarlavka.ru">info@guitarlavka.ru</a>
                </div>


                <div className={styles.howToContactWithUs__container__content__bottom__right__item}>
                  <div className={styles.howToContactWithUs__container__content__bottom__right__item__title}>
                    <div>
                      <Youtube size={24} />
                    </div>
                    <h3>Ютуб</h3>
                  </div>
                  <a href="www.youtube.com/channel">www.youtube.com/channel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToContactWithUs
