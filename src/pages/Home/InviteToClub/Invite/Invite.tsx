'use client'

import Image from 'next/image';
import styles from './Invite.module.scss'
import { useAppDispatch } from '@/lib/hooks';
import { useState } from 'react';
import { addInvite } from '@/lib/features/formSlice';

const Invite = () => {

    const dispatch = useAppDispatch()
    const [mail, setMail] = useState('')
    const [loading, setLoading] = useState(false);

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mail || !isValidEmail(mail)) {
            alert("Введите корректный email");
            return;
        };

        setLoading(true);
        try {
            await dispatch(addInvite({ mail }));
            setMail("");
        } catch (err) {
            console.error("Ошибка отправки инвайта:", err);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className={styles.invite}>
            <h3>ВСТУПАЙ В КЛУБ </h3>
            <h2>GUITAR LAVKA</h2>
            <h4>Полезные письма об инструментах и мероприятиях</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inviteInput">
                    <input
                        type="text"
                        name="invite"
                        id="inviteInput"
                        placeholder="Ваш email..."
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <button type="submit">
                        <Image src="/assets/images/telegram_for_invite.svg" alt='submit' width={27} height={27} />
                    </button>
                </label>
                <p>Я даю согласие на обработку своих персональных данных</p>
            </form>
        </div>
    );
};

export default Invite;
