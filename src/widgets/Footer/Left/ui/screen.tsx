import Image from "next/image"
import screenMob from "../../../../../public/assets/images/mob_screen/mob_screen/mob_screen_1x.webp"

const Screen = () => {
  return (
    <>
        <Image src={screenMob} alt="screen" style={{position: 'relative', left: -24.61}} />
    </>
  )
}

export default Screen
