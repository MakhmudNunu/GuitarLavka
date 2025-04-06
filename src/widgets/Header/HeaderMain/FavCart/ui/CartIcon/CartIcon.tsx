import Image from "next/image"
import cartIcon from "../../../../../../../public/assets/images/cartIcon.svg"

const CartIcon = () => {
  return (
    <>
        <Image src={cartIcon} alt="Cart" width={23} height={20} style={{cursor: 'pointer'}} />
    </>
  )
}

export default CartIcon
