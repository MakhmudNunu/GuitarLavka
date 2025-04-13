import whatsappIcon from '../../../../public/assets/images/whatsapp.svg'
import Image from 'next/image'

interface whatsappProps {
    size: number
}

const Whatsapp = ({ size }: whatsappProps) => {
    return (
        <>
            <Image src={whatsappIcon} alt="whatsapp" width={size} height={size} />
        </>
    )
}

export default Whatsapp