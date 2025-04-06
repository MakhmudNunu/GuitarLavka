import FooterNavBar from './FooterNavBar/FooterNavBar'
import styles from './Left.module.scss'
import Screen from './ui/screen'

const Left = () => {
  return (
    <div className={styles.left}>
      <FooterNavBar />
      <Screen />
    </div>
  )
}

export default Left
