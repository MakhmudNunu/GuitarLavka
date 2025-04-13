import styles from './Social.module.scss'
import Instagram from './ui/instagram'
import Telegram from './ui/telegram'
import Viber from './ui/viber'
import Vk from './ui/vk'
import Whatsapp from './ui/whatsapp'
import Youtube from './ui/youtube'

interface SocialProps {
  size: number
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky' | undefined
  display?: 'flex' | 'block' | 'inline-block' | 'grid' | undefined
}

const Social: React.FC<SocialProps> = ({ size, position, display }) => {
  return (
    <div className={styles.social} style={{ position: position, display: display }}>
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