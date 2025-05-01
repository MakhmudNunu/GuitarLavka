import Link from 'next/link';
import styles from './MoreButton.module.scss';

const MoreButton = () => {
  return (
      <Link className={styles.container} href="/more">
        <button className={styles.moreButton}>
          подробнее
        </button>
      </Link>
  )
}

export default MoreButton
