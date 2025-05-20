"use client"

import { useEffect, useState } from 'react'

import styles from './Main.module.scss'
import axios from 'axios'

interface IVideo {
    width: string
    height: string
    src: string
}

const Main = () => {

    const [videos, setVideos] = useState<IVideo[]>([])

    useEffect(() => {
        const response = axios.get('http://localhost:5000/learningVideos')
        response.then((res) => {
            setVideos(res.data)
        })
            .catch((err) => {
                console.error('Ошибка загрузки видео')
            })
    }, [])

    return (
        <section className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__container__content}>
                    <div className={styles.main__container__content__offline}>
                        <h2>Интенсив укулеле</h2>
                        <h4>оффлайн интенсив</h4>
                    </div>
                    <h3 className={styles.main__container__content__title}>
                        Обучающие курсы
                    </h3>
                    <div className={styles.main__container__content__videos}>

                        {
                            videos.map((item, index) => {
                                return (
                                    <iframe
                                        key={index}
                                        width={item.width}
                                        height={item.height}
                                        src={item.src}
                                        title="YouTube video player"
                                        style={{ border: "none" }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                )
                            })
                        }
                    </div>
                    <button className={styles.main__container__content__buttonMore}>
                        <a href="https://www.youtube.com/@GuitarLavka/playlists">
                            Смотреть больше
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Main
