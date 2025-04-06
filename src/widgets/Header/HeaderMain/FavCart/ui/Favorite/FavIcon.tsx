import Image from "next/image"
import favIcon from "../../../../../../../public/assets/images/favorite.svg"

const FavIcon = () => {
  return (
    <>
        <Image src={favIcon} alt="Favorite" width={20} height={22} style={{cursor: 'pointer'}} />
    </>
  )
}

export default FavIcon
