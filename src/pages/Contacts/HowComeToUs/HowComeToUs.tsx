import Image from 'next/image'
import styles from './HowComeToUs.module.scss'

const items = [
  {
    image: '/assets/images/carousel/pov1.webp'
  },
  {
    image: '/assets/images/carousel/pov2.webp'
  },
  {
    image: '/assets/images/carousel/pov3.webp'
  },
  {
    image: '/assets/images/carousel/pov1.webp'
  }
]

const HowComeToUs = () => {
  return (
    <section className={styles.howComeToUs}>
      <div className={styles.howComeToUs__container}>
        <div className={styles.howComeToUs__container__content}>
          <div className={styles.howComeToUs__container__content__left}>
            <div className={styles.top}>
              <h2>Как до нас добраться?</h2>
              <div className={styles.metro}>
                <Image src={'/assets/images/metro.svg'} alt='metro icon' width={40} height={40} />
                <h3>Московская</h3>
              </div>
              <p>Автобус: 1, 37, 67 <br />
                Троллейбус: 12, 17, 20 <br />
                Маршрутное такси: 46, 126с, 126ю, 410а
              </p>
            </div>
            <div className={styles.center}>
              <h3>На общественном транспорте</h3>
              <p>
                выходите на остановке "Метро Московская", 
                идете по Московскому шоссе 200 метров прямо 
                (в сторону рынка Караван), переходите дорогу 
                по подземному переходу, и оказываетесь прямо 
                перед ТЦ "Сила спорта",поднимаетесь на второй этаж, 
                идете до конца коридора и первая секция направо 
                (ориентир лифты и бар кинотеатра) <br />
                Вы - на месте!
              </p>
            </div>
            <div className={styles.bottom}>
              <h3>На автомобиле</h3>
              <p>
                если Вы едете из города, то поворачиваете на парковку ТЦ  "Вертикаль" (ориентир статуя коня), паркуетесь, 
                и оказываетесь прямо перед ТЦ "Вертикаль", 
                поднимаетесь на второй этаж, идете до конца коридора 
                и первая секция налево 
                (ориентир бар кинотеатра) <br />
                Вы - на месте!
              </p>
            </div>
          </div>
          <div className={styles.howComeToUs__container__content__right}>
            <div className={styles.howComeToUs__container__content__right__items}>
              {items.map((item, index) => {
                return (
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    className={styles.howComeToUs__container__content__right__items__item}
                    key={index}
                  >

                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowComeToUs
