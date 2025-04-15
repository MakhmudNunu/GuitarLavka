import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Maton: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/maton.webp'} alt="Maton" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Maton
