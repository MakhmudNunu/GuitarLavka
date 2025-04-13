import Geo from './Geo/Geo'
import Graphick from './Graphick/Graphick'
import styles from './HeaderStroke.module.scss'
import Social from '../../../shared/Social/Social'

const HeaderStroke = () => {
  let size = 24
  let position: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky' = 'absolute'
  return (
    <div className={styles.headerStroke}>
      <div className={styles.headerStroke__container}>
        <div className={styles.headerStroke__container__content}>
            <Geo />
            <Social size={size} position={position} />
            <Graphick />
        </div>
      </div>
    </div>
  )
}

export default HeaderStroke