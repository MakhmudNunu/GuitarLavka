import Image from "next/image"
import searchIcon from "../../../../../../public/assets/images/search.svg"

const SearchIcon = () => {
  return (
    <>
        <Image src={searchIcon} alt="Search" width={20} height={22} style={{cursor: 'pointer'}} />
    </>
  )
}

export default SearchIcon
