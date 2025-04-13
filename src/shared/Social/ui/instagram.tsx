import instagramIcon from '../../../../public/assets/images/instagram.svg'
import Image from 'next/image'

interface InstagramProps {
    size: number
}

const Instagram: React.FC<InstagramProps> = ({ size }) => {
    return (
        <>
            <Image width={size} height={size} src={instagramIcon} alt="instagram" />
        </>
    )
}

export default Instagram