import styles from './Widget.module.scss';

interface IWidget {
    objects: {
        iFramePar: {
            width: string;
            height: string;
            src: string;
            title: string;
        }[];
        title: string
        variants: string[]
        description?: string
        link?: string
    }[];
    gap?: number
}

const Widget: React.FC<IWidget> = ({ objects, gap = 80 }) => {
    return (
        <div className={styles.widget}>
            <div
                className={styles.widget__top}
                style={{
                    columnGap: gap
                }}
            >
                <div className={styles.widget__top__video}>
                    {objects.map((obj, objIndex) =>
                        obj.iFramePar.map((frame, frameIndex) => (
                            <iframe
                                key={`${objIndex}-${frameIndex}`}
                                width={frame.width}
                                height={frame.height}
                                src={frame.src}
                                title={frame.title}
                                style={{ border: "none" }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        ))
                    )}
                </div>
                {objects.map((item, index) => {
                    return (
                        <h2 key={index}>{item.title}</h2>
                    )
                })}
                <div className={styles.widget__top__types}>
                    {objects.map((item, index) =>
                        item.variants.map((variant, variantIndex) => (
                            <p key={`${index}-${variantIndex}`}>{variant}</p>
                        ))
                    )}
                </div>

            </div>
            <div className={styles.widget__bottom}>
                {objects.map((item, index) => {
                    return (
                        <p key={index}>{item.description}</p>
                    )
                }
                )}
                {objects.map((item, index) =>
                    item.link ? (
                        <a key={index} href={item.link}>
                            подробнее...
                        </a>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Widget;
