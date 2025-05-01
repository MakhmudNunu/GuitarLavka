import Image from 'next/image';
import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
  isBeginning?: boolean;
  isEnd?: boolean;
  className: string;
  src: string;
  alt: string;
  left?: number;
  right?: number;
  top?: number;
}

const Button: React.FC<ButtonProps> = ({ isBeginning, isEnd, className, src, alt, left, right, top }) => {
  return (
    <button
      className={`${styles[className]} ${className} ${isBeginning || isEnd ? styles.disabled : ''}`}
      disabled={isBeginning || isEnd}
      style={{
        left: left ? `${left}px` : undefined,
        right: right ? `${right}px` : undefined,
        top: top ? `${top}%` : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={52}
        height={72}
      />
    </button>
  );
};

export default Button;
