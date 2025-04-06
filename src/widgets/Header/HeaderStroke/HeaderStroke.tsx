import Geo from './Geo/Geo'
import Graphick from './Graphick/Graphick'
import styles from './HeaderStroke.module.scss'
import Social from '../../../shared/ui/Social/Social'

const HeaderStroke = () => {
  let size = 24
  return (
    <div className={styles.headerStroke}>
      <div className={styles.headerStroke__container}>
        <div className={styles.headerStroke__container__content}>
            <Geo />
            <Social size={size} />
            <Graphick />
        </div>
      </div>
    </div>
  )
}

export default HeaderStroke
