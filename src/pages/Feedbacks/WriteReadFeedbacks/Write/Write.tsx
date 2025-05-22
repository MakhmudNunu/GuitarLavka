'use client'

import styles from './Write.module.scss'
import { useState } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { addFeedback } from '@/lib/features/formSlice'
import Star from '@/shared/ui/Star'
import GrayStar from '@/shared/ui/GrayStar'

const Write = () => {
    const dispatch = useAppDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [rate, setRate] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !email || !text || !isValidEmail(email) || rate === null) {
            alert("Пожалуйста, заполните все поля и укажите корректный email.")
            return
        }

        setLoading(true)
        try {
            await dispatch(addFeedback({
                name,
                feedback: text,
                rate,
                createdAt: new Date().toISOString()
            }))
        } catch (err) {
            console.error("Ошибка отправки отзыва:", err)
        } finally {
            setLoading(false)
            setEmail('')
            setName('')
            setRate(null)
            setText('')
        }
    }

    return (
        <div className={styles.write}>
            <h3>Добавить отзыв</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Ваше имя...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='E-mail...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className={styles.textarea}
                    placeholder='Отзыв...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className={styles.rate}>
                    <h4>Оценка</h4>
                    <div className={styles.rate__buttons}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                type="button"
                                onClick={() => setRate(num)}
                            >
                                {
                                    rate !== null &&
                                        rate < num ? (
                                        <GrayStar size={18} />
                                    ) : (

                                        <Star size={19} />
                                    )
                                }
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.send}>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Отправка...' : 'Отправить'}
                    </button>
                    <span>
                        Я даю согласие на обработку своих <br /> персональных данных
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Write
