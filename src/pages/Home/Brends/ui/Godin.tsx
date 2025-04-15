import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Godin: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/godin.webp'} alt="Godin" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Godin
