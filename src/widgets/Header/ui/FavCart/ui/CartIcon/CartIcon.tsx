import Image from "next/image"
import cartIcon from "../../../../../../../public/assets/images/cartIcon.svg"
import { IIconSize } from "@/entities/type/iconSize.types"

const CartIcon: React.FC<IIconSize> = ({width, height}) => {
  return (
    <>
        <Image src={cartIcon} alt="Cart" width={ width !== 0 ? width : 23} height={height !== 0 ? height : 20} style={{cursor: 'pointer'}} />
    </>
  )
}

export default CartIcon
