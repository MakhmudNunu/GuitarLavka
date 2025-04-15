import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Enya: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/enya.webp'} alt="Enya" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Enya
