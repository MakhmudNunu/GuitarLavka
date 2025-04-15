import Image from 'next/image';
import styles from './ProductCard.module.scss';
import { IProducts } from '@/entities/type/products';

interface IProps {
    product: IProducts;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <Image className={styles.card__image} src={product.image} alt='Product Card' width={220} height={284.71} />
            <div className={styles.card__info}>
                <div className={styles.card__info__top}>
                    <h3>{product.type}</h3>
                    <h2>{product.title}</h2>
                </div>
                <div className={styles.card__info__bottom}>
                    {
                        product.discount ? (
                            <h4>₽{product.price - product.discount}<span>₽{product.price}</span></h4>
                        ) : (
                            <h4>₽{product.price}</h4>
                        )
                    }
                    <h5>{product.feedbacks} отзывов</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
