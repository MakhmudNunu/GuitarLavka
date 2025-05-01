import Image from "next/image"
import favIcon from "../../../../../../../public/assets/images/favorite.svg"
import { IIconSize } from "@/entities/type/iconSize.types"

const FavIcon: React.FC<IIconSize> = ({width, height}) => {
  return (
    <>
        <Image src={favIcon} alt="Favorite" width={width !== 0 ? width : 20} height={height !== 0 ? height : 22} style={{cursor: 'pointer'}} />
    </>
  )
}

export default FavIcon
