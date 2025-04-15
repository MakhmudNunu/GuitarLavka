import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}

const ANueNue: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/aNueNue.webp'} alt="ANUE NUE" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default ANueNue
