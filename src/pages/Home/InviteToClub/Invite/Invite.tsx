import Image from 'next/image';
import styles from './Invite.module.scss'

const Invite = () => {
    return (
        <div className={styles.invite}>
            <h3>ВСТУПАЙ В КЛУБ </h3>
            <h2>GUITAR LAVKA</h2>
            <h4>Полезные письма об инструментах и мероприятиях</h4>
            <form>
                <label htmlFor="inviteInput">
                    <input
                        type="text"
                        name="invite"
                        id="inviteInput"
                        placeholder="Ваш email..."
                    />
                    <button type="submit"><Image src="/assets/images/telegram_for_invite.svg" alt='submit' width={27} height={27} /></button>
                </label>
                <p>Я даю согласие на обработку своих персональных данных</p>
            </form>
        </div>
    );
};

export default Invite;
