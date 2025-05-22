'use client'

import { useAppDispatch } from '@/lib/hooks'
import styles from './Form.module.scss'
import { useState } from 'react'
import { addApplication } from '@/lib/features/formSlice'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !email || !phone || !message) {
            alert('Пожалуйста, заполните все поля.')
            return
        }

        setLoading(true)
        try {
            await dispatch(addApplication({
                name,
                email,
                phone,
                message,
                createdAt: new Date().toISOString()
            }))
            alert('Сообщение отправлено!')
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
        } catch (err) {
            console.error("Ошибка отправки:", err)
            alert('Произошла ошибка при отправке.')
        } finally {
            setLoading(false)
        }
    }


    return (
        <section className={styles.form}>
            <div className={styles.form__container}>
                <div className={styles.form__container__content}>
                    <h2>Отправить сообщение</h2>
                    <form className={styles.form__container__content__main} onSubmit={handleSubmit}>
                        <div className={styles.form__container__content__main__left}>
                            <input
                                placeholder="Имя..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                placeholder="Email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                placeholder="Телефон..."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.form__container__content__main__right}>
                            <textarea
                                name="message"
                                placeholder="Сообщение..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={5}
                                required
                            />
                            <div className={styles.form__container__content__main__right__send}>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Отправка...' : 'Отправить'}
                                </button>
                                <span>
                                    Я даю согласие на обработку своих <br /> персональных данных
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form
