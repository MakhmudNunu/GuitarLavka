import Image from 'next/image';
import styles from './ProductCard.module.scss';
import { IProducts } from '@/entities/type/products';
import Star from '@/shared/ui/Star';
import Link from 'next/link';

interface IProps {
    product: IProducts;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    return (
        <div className={styles.card}>
            <Link href={`/Catalog/Detail/${product.id}`}>
                <Image
                    className={styles.card__image}
                    src={product.image}
                    alt='Product Card'
                    width={220} height={284.71}
                />
            </Link>
            <div className={styles.card__info}>
                <div className={styles.card__info__top}>
                    <h3>{product.type}</h3>
                    <h2>{product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}</h2>
                </div>
                <div className={styles.card__info__bottom}>
                    {/* <h5>
                        {[...Array(Math.round(product.rate))].map((_, index) => {
                            return (
                                <Star key={index} />
                            )
                        })}
                    </h5> */}
                    {
                        product.discount ? (
                            <h4>
                                ₽{(product.price * (1 - product.discount / 100)).toFixed(0)}
                                <span>₽{product.price}</span>
                            </h4>
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
