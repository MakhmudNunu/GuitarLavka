import styles from './Graphick.module.scss'
import Tel from './ui/tel'

const Graphick = () => {
    return (
        <div className={styles.graphick}>
            <Tel />
            <h5>8 (800) 100 26 80</h5>
            <h5>ЕЖЕДНЕВНО</h5>
            <h5>10:00-20:00</h5>
        </div>
    )
}

export default Graphick
