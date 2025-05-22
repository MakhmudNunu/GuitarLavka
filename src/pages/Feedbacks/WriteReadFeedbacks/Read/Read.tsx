'use client'

import { useEffect, useState } from 'react';
import axios from 'axios'

import styles from './Read.module.scss'
import Image from 'next/image';
import { getDaysAgo } from '@/shared/lib/get/getDays';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchFeedbacks } from '@/lib/features/formSlice';
import Star from '@/shared/ui/Star';

const Read = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFeedbacks())
    }, [dispatch])
    const { feedbacks } = useAppSelector((state) => state.forms)

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
                                    <div className={styles.read__items__item__main__header__stars}>
                                        {typeof item.rate === 'number' &&
                                            Array.from({ length: item.rate }, (_, i) => (
                                                <Star key={i} />
                                            ))
                                        }
                                    </div>
                                </div>
                                <p>{item.feedback}</p>
                                <span>{getDaysAgo(item.createdAt)}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Read
