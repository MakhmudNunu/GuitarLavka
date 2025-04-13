import { useState, useEffect } from 'react'

import Image from 'next/image'
import LogoIcon from '../../../../../public/assets/images/logo.svg'

interface LogoProps {
  topPos?: number
}

const Logo: React.FC<LogoProps> = ({ topPos }) => {

  const [iconPos, setIconPos] = useState<React.CSSProperties['position']>('absolute');
  const [iconOrder, setIconOrder] = useState(0);
  const [iconLeft, setIconLeft] = useState(50);
  const [iconHeight, setIconHeight] = useState(267);
  const [iconWidth, setIconWidth] = useState(331);
  const [iconFlex, setIconFlex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIconPos(width <= 500 ? 'relative' : 'absolute');
      setIconOrder(width <= 500 ? 1 : 0);
      setIconLeft(width <= 500 ? 60.5 : 50);
      setIconHeight(width <= 500 ? 112 : 267);
      setIconWidth(width <= 500 ? 196 : 267);
      setIconFlex(width <= 500 ? 1 : 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Image src={LogoIcon} alt="Logo" style={{ position: iconPos, top: topPos, left: `${iconLeft}${iconWidth > 196 && iconHeight > 112 ? '%' : 'px'}`, transform: 'translateX(-50%)', width: iconWidth, height: iconHeight, order: iconOrder, flex: iconFlex }} />
    </>
  )
}

export default Logo