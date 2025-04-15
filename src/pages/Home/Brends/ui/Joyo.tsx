import Image from "next/image"
import { Brends } from "@/entities/type/brends"

import styles from "./style.module.scss"

interface Props {
  sizes: Brends
}
const Joyo: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image className={styles.joyo} src={'/assets/images/joyo.webp'} alt="Joyo" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Joyo
