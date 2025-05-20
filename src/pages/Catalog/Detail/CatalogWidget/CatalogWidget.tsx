import Widget from '@/widgets/Widget/Widget'
import styles from './CatalogWidget.module.scss'

const Objects = [
    {
        iFramePar: [
            {
                width: '560',
                height: '315',
                src: 'https://www.youtube.com/embed/jb0j709FkiY?si=ac0KyzyLgq6wWlps',
                title: 'YouTube video player'
            }
        ],
        title: 'БЕРЕЖНО УПАКОВЫВАЕМ КАЖДЫЙ ИНСТУМЕНТ',
        variants: [
            'Термопакет',
            'Чехол',
            '3 слоя пузырчатой бумаги',
            'Картонная коробка',
            'Страхуем груз',
            'Бережная доставка'
        ]
    }
]

const CatalogWidget = () => {
  return (
    <section className={styles.catalogWidget}>
      <div className='container'>
        <div className={styles.catalogWidget__content}>
          <Widget objects={Objects} />
        </div>
      </div>
    </section>
  )
}

export default CatalogWidget
