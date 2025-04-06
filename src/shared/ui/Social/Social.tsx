import styles from './Social.module.scss'
import Instagram from './ui/instagram'
import Telegram from './ui/telegram'
import Viber from './ui/viber'
import Vk from './ui/vk'
import Whatsapp from './ui/whatsapp'
import Youtube from './ui/youtube'

interface SocialProps {
  size: number
  display?: string
  left?: number
}

const Social: React.FC<SocialProps> = ({ size, display, left }) => {
  return (
    <div className={styles.social} style={{ display: display, marginLeft: left }}>
      <Whatsapp size={size} />
      <Telegram size={size} />
      <Vk size={size} />
      <Viber size={size} />
      <Youtube size={size} />
      <Instagram size={size} />
    </div>
  )
}

export default Social
