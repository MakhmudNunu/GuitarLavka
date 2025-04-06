import youtubeIcon from '../../../../../public/assets/images/youtube.svg'
import Image from 'next/image'

interface youtubeProps {
    size: number
}

const Youtube = ({ size }: youtubeProps) => {
    return (
        <>
            <Image src={youtubeIcon} alt="youtube" width={size} height={size} />
        </>
    )
}

export default Youtube