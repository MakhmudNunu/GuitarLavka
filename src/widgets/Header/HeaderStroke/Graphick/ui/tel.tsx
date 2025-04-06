import telIcon from '../../../../../../public/assets/images/tel.svg'
import Image from 'next/image'

const Tel = () => {
  return (
    <>
        <Image
            src={telIcon}
            alt="tel"
            width={20}
            height={20}
        />
    </>
  )
}

export default Tel
