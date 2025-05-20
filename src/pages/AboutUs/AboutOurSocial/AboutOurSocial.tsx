import Vk from '@/shared/Social/ui/vk'
import styles from './AboutOurSocial.module.scss'
import Youtube from '@/shared/Social/ui/youtube'
import Instagram from '@/shared/Social/ui/instagram'

let iconSize = 19

const AboutOurSocial = () => {
    return (
        <section className={styles.aboutOurSocial}>
            <div className={styles.aboutOurSocial__container}>
                <div className={styles.aboutOurSocial__container__content}>
                    <div className={styles.aboutOurSocial__container__content__left}>
                        <h2>Мы здесь есть</h2>
                        <p>не стоит переживать за актуальность информации, <br /> мы ответственно подходим к этому вопросу</p>
                        <div className={styles.aboutOurSocial__container__content__left__social}>
                            <Vk size={iconSize} />
                            <Youtube size={iconSize} />
                            <Instagram size={iconSize} />
                        </div>
                    </div>
                    <div className={styles.aboutOurSocial__container__content__right}>
                        <div className={styles.aboutOurSocial__container__content__right__section}>
                            <h3>YOUTUBE</h3>
                            <p>мы регулярно выкладываем обзоры на гитары, <br />
                                которые появляются в нашей лавке, приглашаем <br /> крутых музыкантов, веселимся, общаемся <br />
                                и много играем
                            </p>
                        </div>
                        <div className={styles.aboutOurSocial__container__content__right__section}>
                            <h3>ИНСТАГРАМ</h3>
                            <p>говорим, показываем и ракссказываем, <br />
                                как ведуться работы в нашей мастерской. <br />
                                всю актуальную информацию можно найти <br />
                                в нашем акаунте
                            </p>
                        </div>
                        <div className={styles.aboutOurSocial__container__content__right__section}>
                            <h3>VK</h3>
                            <p>если инстаграм вам наскучил или вы решили взять <br /> судьбу в свои руки и уж точно не пропустить <br />
                                ни единой новости, милости просим
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOurSocial
