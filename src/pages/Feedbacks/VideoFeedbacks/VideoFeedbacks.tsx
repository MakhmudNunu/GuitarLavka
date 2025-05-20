import styles from './VideoFeedbacks.module.scss'

const Objects = [
    {
        width: '330',
        height: '228',
        src: 'https://www.youtube.com/embed/GQI3zNr12Sw?list=PLMBqricNSSh4JnYHeiFrRURjAUkxPp0i6',
        title: 'YouTube video player'
    },
    {
        width: '330',
        height: '228',
        src: 'https://www.youtube.com/embed/vuXeOqCeECI?list=PLMBqricNSSh4JnYHeiFrRURjAUkxPp0i6',
        title: 'YouTube video player'
    },
    {
        width: '330',
        height: '228',
        src: 'https://www.youtube.com/embed/jCcXjGD-Cpc?list=PLMBqricNSSh4JnYHeiFrRURjAUkxPp0i6',
        title: 'YouTube video player'
    }
]



const VideoFeedbacks = () => {
    return (
        <section className={styles.videoFeedbacks}>
            <div className={styles.videoFeedbacks__container}>
                <div className={styles.videoFeedbacks__container__content}>
                    <h2>Видео отзывы</h2>
                    <div className={styles.videoFeedbacks__container__content__videos}>
                        {
                            Objects.map((item, index) => {
                                return (
                                    <iframe
                                        key={index}
                                        width={item.width}
                                        height={item.height}
                                        src={item.src}
                                        title={item.title}
                                        style={{ border: "none" }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoFeedbacks
