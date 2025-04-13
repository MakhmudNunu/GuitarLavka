import viberIcon from '../../../../public/assets/images/viber.svg'
import Image from 'next/image'

interface viberProps {
    size: number
}

const Viber = ({ size }: viberProps) => {
    return (
        <>
            <Image src={viberIcon} alt="viber" width={size} height={size} />
        </>
    )
}

export default Viber