import { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import styles from './CatalogPagination.module.scss';
import { IProducts } from '@/entities/type/products';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import ListProductCard from './ListProductCard/ListProductCard';


const CatalogPagination: React.FC<{ products: IProducts[] }> = ({ products }) => {

  const dispatch = useAppDispatch()
  const { viewType } = useAppSelector((state) => state.products)
  const itemsPerPage = viewType === 'List' ? 3 : 12;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIdx, startIdx + itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, dispatch]);

  return (
    <div className={styles.catalog}>
      {
        viewType === 'Net' ? (
          <div className={styles.grid}>
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.list}>
            {currentProducts.map((product) => (
              <ListProductCard key={product.id} product={product} />
            ))}
          </div>
        )
      }

      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={styles.buttonFirst}
        >
          <p>Первая</p>
          <div className={styles.arrowLeft}></div>
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <span
            key={i}
            className={currentPage === i + 1 ? styles.active : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={styles.buttonLast}
        >
          <div className={styles.arrowRight}></div>
          <p>Последняя</p>
        </button>
      </div>
    </div>
  );
};

export default CatalogPagination;
