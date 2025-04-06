import telegramIcon from '../../../../../public/assets/images/telegram.svg'
import Image from 'next/image'

interface TelegramProps {
    size: number
}

const Telegram = ({ size }: TelegramProps) => {
    return (
        <>
            <Image src={telegramIcon} alt="telegram" width={size} height={size} />
        </>
    )
}

export default Telegram