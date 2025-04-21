import Image from 'next/image'
import { useEffect, useState } from 'react'
import LogoIcon from '../../../../../public/assets/images/logo.svg'

interface LogoProps {
  topPos?: number
}

const Logo: React.FC<LogoProps> = ({ topPos }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const style: React.CSSProperties = {
    position: isMobile ? 'relative' : 'absolute',
    top: topPos,
    left: isMobile ? '60.5px' : '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? 196 : 267,
    height: isMobile ? 112 : 267,
    order: isMobile ? 1 : 0,
    flex: isMobile ? 1 : 0,
  }
  

  return (
    <Image
      src={LogoIcon}
      alt="Logo"
      style={style}
      priority
    />
  )
}

export default Logo
