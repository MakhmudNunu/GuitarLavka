import Image from 'next/image';
import { useEffect, useState } from 'react';
import LogoIcon from '../../../../public/assets/images/logo.svg';
import { usePathname, useRouter } from 'next/navigation';

interface LogoProps {
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
  topPos?: number;
  leftPos?: number;
  order?: number;
  flex?: number;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ position = 'absolute', leftPos = 50, order = 0, topPos, width = 267, height = 267 }) => {
  const [isTablet, setIsTablet] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();
  const handleRoute = () => {
    router.push('/')
  }

  const pathname = usePathname();
  const isHome = pathname === "/";


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width <= 768);
      setWindowWidth(width);
    };


    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const style: React.CSSProperties = {
    position: isTablet ? 'relative' : position,
    top: topPos ?? undefined,

    left: windowWidth < 1010
      ? (isHome ? '15%' : '45%')
      : `${leftPos}%`,

    transform: 'translateX(-50%)',
    width: isTablet ? 196 : width,
    height: isTablet ? 112 : height,
    order: isTablet ? 1 : order,
    flex: isTablet ? 1 : windowWidth ? 1 : undefined,
    objectFit: !isHome ? 'cover' : undefined,
    cursor: 'pointer',
  };

  return <Image
    src={LogoIcon}
    alt="Logo"
    style={style}
    onClick={() => handleRoute()}
  />;
};

export default Logo;
