import Image from 'next/image';
import { useEffect, useState } from 'react';
import LogoIcon from '../../../../public/assets/images/logo.svg';

interface LogoProps {
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
  topPos?: number;
  leftPos?: number;
  order?: number;
  flex?: number;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ position = 'absolute', leftPos = 50,order = 0, topPos, width = 267, height = 267 }) => {
  const [isTablet, setIsTablet] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(windowWidth <= 768);
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const style: React.CSSProperties = {
    position: isTablet ? 'relative' : position,
    top: topPos ?? undefined,
    left: isTablet ? '60.5px' : `${leftPos}%`,
    transform: 'translateX(-50%)',
    width: isTablet ? 196 : width,
    height: isTablet ? 112 : height,
    order: isTablet ? 1 : order,
    flex: isTablet ? 1 : windowWidth <= 1010 ? 1 : undefined,
  };

  return <Image src={LogoIcon} alt="Logo" style={style} />;
};

export default Logo;
