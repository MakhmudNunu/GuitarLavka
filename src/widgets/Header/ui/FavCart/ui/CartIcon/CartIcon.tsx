import Image from "next/image"
import cartIcon from "../../../../../../../public/assets/images/cartIcon.svg"
import { IIconSize } from "@/entities/type/iconSize.types"
import Link from "next/link"

const CartIcon: React.FC<IIconSize> = ({width, height}) => {
  return (
    <Link href={'/Catalog/Cart'}>
        <Image src={cartIcon} alt="Cart" width={ width !== 0 ? width : 23} height={height !== 0 ? height : 20} style={{cursor: 'pointer'}} />
    </Link>
  )
}

export default CartIcon
