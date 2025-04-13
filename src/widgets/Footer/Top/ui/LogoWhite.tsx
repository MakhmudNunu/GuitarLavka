"use client"

import {useState, useEffect} from 'react'

import Image from 'next/image'
import logo from '../../../../../public/assets/images/logo-white.svg'

interface LogoWhiteProps {
    left?: number
    width?: number
}

const LogoWhite: React.FC<LogoWhiteProps> = ({ left, width }) => {
  return (
    <>
        <Image width={width} src={logo} alt='logo' style={{position: 'relative', left: left || 0}} />
    </>
  )
}

export default LogoWhite
