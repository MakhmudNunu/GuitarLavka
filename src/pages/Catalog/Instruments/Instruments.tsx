import Widget from '@/widgets/Widget/Widget';
import styles from './Instruments.module.scss';

const Objects = [
    {
        iFramePar: [
            {
                width: '568',
                height: '307',
                src: 'https://www.youtube.com/embed/WGFgV7lvcv4?si=4gRKyv4MyKs0712I',
                title: 'YouTube video player'
            }
        ],
        title: 'У НАС ШИРОКИЙ ВЫБОР ИНСТРУМЕНТОВ',
        variants: [
            'Акустические',
            'Трансакустические',
            'Электроакустические',
            'Классичессические',
            'Тревел-гитары',
            'Электрогитары'
        ],
        description: 'Хорошая акустическая гитара – верный путь к правильному восприятию нот, а значит, она способна ускорить процесс обучения игры на музыкальном инструменте. Компания Guitar Lavka предлагает купить акустическую гитару с доставкой от ведущих производителей – Cort, Enya и Sigma Guitars. Каждая гитара акустическая, цена на которую меньше 5000 рублей (дешевые модели), часто искажают качество звука при игре, что затрудняет обучение, однако это не означает, что невозможно найти недорогую гитару в интернет- магазине Guitar Lavka. В акаталоге имеется базовая «акустика» (бюджетные модели) стоимостью до 10000 рублей. Такие модели лишены дополнительного лоска, но самое главное – они не искажают звук и способны правильно научить слушать ритм, ноты и такты при обучении.',
        link: '/'
    }
]

const Instruments = () => {
    return (
        <section className={styles.Instruments}>
            <div className={`${styles.Instruments__container} container`}>
                <div className={styles.Instruments__container__content}>
                    <Widget objects={Objects} />
                </div>
            </div>
        </section>
    );
};

export default Instruments;
