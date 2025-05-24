'use client';

import { useEffect } from 'react';
import styles from './SearchResultsMain.module.scss';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchResult } from '@/lib/features/searchSlice';

import CatalogPagination from '../Catalog/Products/Swiper/CatalogPagination';

const SearchResultsMain = () => {
    const dispatch = useAppDispatch();
    const { results, query, status } = useAppSelector((state) => state.search);

    useEffect(() => {
        dispatch(fetchResult(query));
    }, [dispatch, query]);

    return (
        <section className={styles.products}>
            <div className='container'>
                <div className={styles.products__container__content}>
                    {status === 'loading' && <p>Загрузка...</p>}
                    {status === 'failed' && <p>Ошибка</p>}
                    {status === 'succeeded' && results.length === 0 && <p>Ничего не найдено по запросу "{query}"</p>}
                    {status === 'succeeded' && results.length > 0 && <CatalogPagination products={results} />}
                </div>
            </div>
        </section>
    );
};

export default SearchResultsMain;
