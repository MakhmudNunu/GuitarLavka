import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Kepma: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/kepma.webp'} alt="kepma" width={sizes.width} height={sizes.height} />
    </>
  )
}

export default Kepma
