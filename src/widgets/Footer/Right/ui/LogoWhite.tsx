import Image from 'next/image'
import logo from '../../../../../public/assets/images/logo-white.svg'

interface LogoWhiteProps {
    left?: number
}

const LogoWhite: React.FC<LogoWhiteProps> = ({ left }) => {
  return (
    <>
        <Image src={logo} alt='logo' style={{position: 'relative', left: left || 0}} />
    </>
  )
}

export default LogoWhite
