import { ISocialIconProps } from '@/entities/type/socialIcon.types'
import viberIcon from '../../../../public/assets/images/viber.svg'
import Image from 'next/image'
import { relative } from 'path'

const Viber = ({ size, position = 'relative', left, top }: ISocialIconProps) => {
    return (
        <>
            <Image
                src={viberIcon}
                alt="viber"
                width={size}
                height={size}
                style={{
                    position: position,
                    left: left,
                    top
                }} 
            />
        </>
    )
}

export default Viber