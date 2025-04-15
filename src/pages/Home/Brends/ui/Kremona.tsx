import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Kremona: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/kremona.webp'} alt="Kremona" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Kremona
