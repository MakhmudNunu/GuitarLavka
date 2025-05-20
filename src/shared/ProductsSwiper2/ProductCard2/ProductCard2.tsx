import Image from 'next/image';
import styles from './ProductCard2.module.scss';
import { IProducts } from '@/entities/type/products';

interface IProps {
    product: IProducts;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <Image className={styles.card__image} src={product.image} alt='Product Card' width={220} height={284.71} />
            <div className={styles.card__info}>
                <h3>{product.type}</h3>
                <h2>{product.title}</h2>
                <h4>₽ {product.price}</h4>
            </div>
        </div>
    )
}

export default ProductCard
