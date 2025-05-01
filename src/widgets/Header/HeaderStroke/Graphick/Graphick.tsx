import styles from './Graphick.module.scss'

const Graphick = () => {
    return (
        <div className={styles.graphick}>
            <h5 className={styles.tel}>8 (800) 100 26 80</h5>
            <h5 className={styles.days}>ЕЖЕДНЕВНО</h5>
            <h5 className={styles.hours}>10:00-20:00</h5>
        </div>
    )
}

export default Graphick
