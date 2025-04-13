import vkIcon from '../../../../public/assets/images/vk.svg'
import Image from 'next/image'

interface vkProps {
    size: number
}

const Vk = ({ size }: vkProps) => {
    return (
        <>
            <Image src={vkIcon} alt="vk" width={size} height={size} />
        </>
    )
}

export default Vk