'use client'

import { useEffect, useState } from 'react';
import axios from 'axios'

import styles from './Read.module.scss'
import Image from 'next/image';
import { getDaysAgo } from '@/shared/lib/get/getDays';

type Feedback = {
    id: number
    name: string
    image?: string
    feedback: string
    createdAd: string
}

const Read = () => {

    const [feedbacks, setFeedbacks] = useState<Feedback[]>([])

    useEffect(() => {
        let response = axios.get('http://localhost:5000/feedbacks')
        response.then((res) => {
            setFeedbacks(res.data)
        })
    }, [])
    return (
        <div className={styles.read}>
            <div className={styles.read__items}>
                {feedbacks.map((item) => {
                    return (
                        <div key={item.id} className={styles.read__items__item}>
                            <Image
                                src={item.image ?? '/assets/images/emptyAvatar.svg'}
                                width={50}
                                height={50}
                                alt="Feedback image"
                                className={styles.image}
                                style={{
                                    backgroundColor: 'white',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '50%',

                                }}
                            />
                            <div className={styles.read__items__item__main}>
                                <div className={styles.read__items__item__main__header}>
                                    <h3>{item.name}</h3>

                                </div>
                                <p>{item.feedback}</p>
                                <span>{getDaysAgo(item.createdAd)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Read
