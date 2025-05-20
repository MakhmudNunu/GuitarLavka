import Image from "next/image"
import favIcon from "../../../../../../../public/assets/images/favorite.svg"
import { IIconSize } from "@/entities/type/iconSize.types"
import Link from "next/link"

const FavIcon: React.FC<IIconSize> = ({ width, height }) => {
  return (
    <Link href={'/Catalog/Favorites'}>
      <Image src={favIcon} alt="Favorite" width={width !== 0 ? width : 20} height={height !== 0 ? height : 22} style={{ cursor: 'pointer' }} />
    </Link>
  )
}

export default FavIcon
