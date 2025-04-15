import Link from 'next/link';
import styles from './MoreButton.module.scss';

const MoreButton = () => {
  return (
    <>
      <button className={styles.moreButton}>
        <Link href="/more">
          подробнее
        </Link>
      </button>
    </>
  )
}

export default MoreButton
