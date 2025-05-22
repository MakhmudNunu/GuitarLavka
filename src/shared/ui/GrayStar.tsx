interface ISize {
    size?: 12 | number
}

const GrayStar: React.FC<ISize> = ({size = 12}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83306 0L7.19989 4.23663H11.623L8.04463 6.85501L9.41146 11.0916L5.83306 8.47326L2.25466 11.0916L3.62149 6.85501L0.0430822 4.23663H4.46623L5.83306 0Z" fill="#C4C4C4" />
        </svg>
    )
}

export default GrayStar
