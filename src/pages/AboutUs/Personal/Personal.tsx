import styles from './Personal.module.scss'
import PersonalCard from './PersonalCard/PersonalCard'

const personals = [
    {
        id: 1,
        name: 'Всевлод',
        description: 'Главный поборник прав и морали, знаком с певицей гречкой. В совершенстве владеет китайским коммерческим, китайским матерным. При необходимости с помощью телефона может организовать встречу с Трампом, Папой Римским и Джоном Леноном.',
        image: '/assets/images/Personal/Vsevlod.webp'
    },
    {
        id: 2,
        name: 'Валерий',
        psevdoName: 'Дядя Валера',
        description: 'Скоростной ремонт помещений за 7 минут: дизайн, разработка и воплощение. Расставляет по местам гитары и людей.',
        image: '/assets/images/Personal/Valeriy.webp'
    },
    {
        id: 3,
        name: 'Алексей Дьяков',
        psevdoName: 'Гитар Гитарыч',
        description: 'Алексей Алексеевич, получил звание Гитар Гитарыч от своих учеников. Обычный человек состоит на 80% из воды, а Алексей из шуток, анекдотов и филологических афоризмов.',
        image: '/assets/images/Personal/Guitarych.webp'
    },
    {
        id: 4,
        name: 'Алексей Андреев',
        description: 'Знаком с Лениным, Александром Македонским, Вещим Олегом ибо имеет диплом учителя истории. Быстро понял, что гитары лучше, чем дети. На данный момент готовит к сдаче свою 74-ю мастеровую гитару.',
        image: '/assets/images/Personal/Andreev.webp'
    },
    {
        id: 5,
        name: 'Макс',
        description: 'Заведует маркетингом. Уже 3-й раз приносит свой телекастер на продажу, но постоянно уносит обратно.',
        image: '/assets/images/Personal/Maks.webp'
    },
    {
        id: 6,
        name: 'Андрей',
        description: 'Поглощает оливки, пьет из амфоры. С помощью дендро-фекальной методики собирает гитару из любых подручных материалов.',
        image: '/assets/images/Personal/Andrey.webp'
    }
]

const Personal = () => {
    return (
        <section className={styles.personal}>
            <div className={styles.personal__container}>
                <div className={styles.personal__container__content}>
                    <h1>Мы</h1>
                    <div className={styles.personal__container__content__cards}>
                        {
                            personals.map((person, index) => (
                                <div key={person.id} className={styles.personal__container__content__cards__card}>
                                    <PersonalCard person={person} />
                                    <h2>{person.name.split(' ')[0]}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Personal
