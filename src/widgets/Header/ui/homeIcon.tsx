import Image from "next/image"
import icon from '../../../../public/assets/images/home.png'
import Link from "next/link";
interface IHomeIconProps {
    width: number;
    height: number;
}
const HomeIcon: React.FC<IHomeIconProps> = ({ width, height }) => {
    return (
        <Link href={'/'} className="homeIcon">
            <Image width={width} height={height} src={icon} alt="Home tab" />
        </Link>
    )
}

export default HomeIcon
