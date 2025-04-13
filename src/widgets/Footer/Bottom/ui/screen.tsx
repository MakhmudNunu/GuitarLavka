import Image from "next/image"
import screenMob from "../../../../../public/assets/images/mob_screen/mob_screen/mob_screen_1x.webp"

import styles from './screen.module.scss'

const Screen = () => {
  return (
    <div className={styles.screen}>
        <Image src={screenMob} alt="screen" style={{position: 'relative', left: -24.61}} />
    </div>
  )
}

export default Screen
