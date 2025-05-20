import styles from './PersonalCard.module.scss'

interface PersonalCardProps {
    person: {
        name: string;
        psevdoName?: string;
        description: string;
        image: string;
    }
}

const PersonalCard: React.FC<PersonalCardProps> = ({ person }) => {
    return (
        <div
            className={styles.personalCard}
            style={{
                backgroundImage: `url(${person.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <h3>{person.name}</h3>
            {person.psevdoName && <h3>{person.psevdoName}</h3>}
            <p>{person.description}</p>
        </div>
    )
}

export default PersonalCard
