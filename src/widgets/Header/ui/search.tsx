import Image from "next/image"
import searchIcon from "../../../../public/assets/images/search.svg"

interface SearchIconProps {
  width: number
  height: number
  onClick?: () => void
}

const SearchIcon: React.FC<SearchIconProps> = ({width, height, onClick}) => {
  return (
    <>
        <Image src={searchIcon} alt="Search" width={width} height={height} style={{cursor: 'pointer'}} onClick={onClick} />
    </>
  )
}

export default SearchIcon
