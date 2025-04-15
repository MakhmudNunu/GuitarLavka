import Invite from './Invite/Invite'
import styles from './InviteToClub.module.scss'

let background = '/assets/images/Banners/banner3/banner3_1x.webp'

const InviteToClub = () => {
    return (
        <section className={styles.inviteToClub}>
            <div className={styles.inviteToClub__container}>
                <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={styles.inviteToClub__container__content}>
                    <Invite />
                </div>
            </div>
        </section>
    )
}

export default InviteToClub
