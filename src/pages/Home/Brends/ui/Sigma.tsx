import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Sigma: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/sigma.webp'} alt="Sigma" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Sigma
