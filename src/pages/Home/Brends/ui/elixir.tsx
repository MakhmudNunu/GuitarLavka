import Image from "next/image"
import { Brends } from "@/entities/type/brends"

interface Props {
  sizes: Brends
}
const Elixir: React.FC<Props> = ({ sizes }) => {
  return (
    <>
      <Image src={'/assets/images/elixir.webp'} alt="Elixir" width={sizes.width} height={sizes.height}  />
    </>
  )
}

export default Elixir
