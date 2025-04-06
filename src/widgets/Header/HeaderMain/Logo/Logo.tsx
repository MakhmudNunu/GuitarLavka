import Image from 'next/image'
import LogoIcon from '../../../../../public/assets/images/logo.svg'

interface LogoProps {
    topPos: number
}

const Logo: React.FC<LogoProps> = ({topPos}) => {
  return (
    <>
      <Image src={LogoIcon} alt="Logo" style={{position: 'absolute', top: topPos, left: '50%', transform: 'translateX(-50%)'}} />
    </>
  )
}

export default Logo
