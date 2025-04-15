import styles from './Brends.module.scss';
import ANueNue from './ui/aNueNue';
import Elixir from './ui/elixir';
import Enya from './ui/Enya';
import Godin from './ui/Godin';
import Joyo from './ui/Joyo';
import Kepma from './ui/kepma';
import Kremona from './ui/Kremona';
import Matona from './ui/Maton';
import Sigma from './ui/Sigma';
import Tom from './ui/Tom';

const Brends = () => {
    return (
        <section className={styles.brends}>
            <div className={styles.brends__container}>
                <div className={styles.brends__container__content}>
                    <ANueNue sizes={{width: 109, height: 113}} />
                    <Kepma sizes={{width: 160, height: 106}}  />
                    <Elixir sizes={{width: 189, height: 84}}  />
                    <Joyo sizes={{width: 126, height: 27}}  />
                    <Godin sizes={{width: 191, height: 64}}  />
                    <Kremona sizes={{width: 162, height: 155}}  />
                    <Matona sizes={{width: 180, height: 139}}  />
                    <Tom sizes={{width: 108, height: 61}}  />
                    <Enya sizes={{width: 180, height: 37}}  />
                    <Sigma sizes={{width: 177, height: 140}}  />
                </div>
            </div>
        </section>
    )
}

export default Brends
