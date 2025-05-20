import { useState, useEffect, useRef } from 'react';
import styles from './Top.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchProducts, toggleViewType } from '@/lib/features/productsSlice';
import { setInStock } from '@/lib/features/filtersSlice';

const Top = () => {

    const dispatch = useAppDispatch()
    const { products, status, error } = useAppSelector((state) => state.products)
    const inStock = useAppSelector((state) => state.filtres.inStock)

    const viewType = useAppSelector(state => state.products.viewType)

    // const [products, setProducts] = useState<IProducts[]>([]);
    // const [isOpenFilter, setIsOpenFilter] = useState(false);
    // const [isChecked, setIsChecked] = useState<boolean>(false);
    const [sortType, setSortType] = useState('По умолчанию ...');
    const [isCount, setIsCount] = useState('12');
    const [isOpenSort, setIsOpenSort] = useState(false);
    const [isOpenCount, setIsOpenCount] = useState(false);
    // const [viewType, setviewType] = useState('Net');

    const sortRef = useRef<HTMLUListElement>(null);
    const countRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsOpenSort(false);
            }
            if (countRef.current && !countRef.current.contains(event.target as Node)) {
                setIsOpenCount(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = inStock === true ? null : true;
        dispatch(setInStock(newValue));
        // setIsChecked(e.target.checked);
    };

    const handleSort = (type: string) => {
        setSortType(type);
        setIsOpenSort(false);

        // const sortedProducts = [...products];
        // if (type === 'По названию') {
        //     sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        // } else if (type === 'По цене') {
        //     sortedProducts.sort((a, b) => a.price - b.price);
        // } else if (type === 'По дате') {
        //     sortedProducts.sort((a, b) =>
        //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        //     );
        // }

        // setProducts(sortedProducts);
    };

    const handleCount = (type: string) => {
        setIsCount(type);
        setIsOpenCount(false);
    };

    const handleViewType = () => {
        dispatch(toggleViewType());
    };


    return (
        <div className={styles.top}>
            <h3>Каталог</h3>
            <h3>Фильтры</h3>
            <h4>{products.length}<span>товаров</span></h4>

            <div className={styles.top__horizontalFilters}>
                <label className={styles.checkLabel}>
                    <span>В наличии</span>
                    <input
                        type="checkbox"
                        onChange={onChangeCheckBox}
                    />
                    <span className={styles.checkSpan}></span>
                </label>

                <div className={styles.top__horizontalFilters__sortBy}>
                    <div
                        className={styles.top__horizontalFilters__sortBy__title}
                        onClick={() => setIsOpenSort(prev => !prev)}
                    >
                        <p>Сортировка<span>{sortType}</span></p>
                    </div>
                    <ul
                        ref={sortRef}
                        className={styles.top__horizontalFilters__sortBy__popUp}
                        style={{ display: isOpenSort ? 'flex' : 'none' }}
                    >
                        <li onClick={() => handleSort('По названию')}>По названию</li>
                        <li onClick={() => handleSort('По цене')}>По цене</li>
                        <li onClick={() => handleSort('По дате')}>По дате</li>
                    </ul>
                </div>

                <div className={styles.top__horizontalFilters__showBy}>
                    <div
                        className={styles.top__horizontalFilters__showBy__title}
                        onClick={() => {
                            if (viewType !== 'List') setIsOpenCount(prev => !prev);
                        }}
                        style={{
                            cursor: viewType === 'List' ? 'default' : 'pointer',
                            opacity: viewType === 'List' ? 0.5 : 1,
                        }}
                    >
                        <p>Показывать по <span>{isCount}</span></p>
                    </div>
                    <ul
                        ref={countRef}
                        className={styles.top__horizontalFilters__showBy__popUp}
                        style={{ display: isOpenCount ? 'flex' : 'none' }}
                    >
                        <li onClick={() => handleCount('4')}>4</li>
                        <li onClick={() => handleCount('8')}>8</li>
                        <li onClick={() => handleCount('12')}>12</li>
                        <li onClick={() => handleCount('16')}>16</li>
                    </ul>
                </div>
                <div className={styles.top__horizontalFilters__viewType}>
                    <div
                        onClick={() => {
                            window.location.reload()
                            handleViewType()
                        }}
                        className={`${styles.top__horizontalFilters__viewType__net} ${viewType === 'Net' ? styles.active : ''}`}
                    >
                        {Array.from({ length: 6 }, (_, i) => (
                            <div key={i} className={styles.top__horizontalFilters__viewType__net__box}></div>
                        ))}
                    </div>

                    <div
                        onClick={() => handleViewType()}
                        className={`${styles.top__horizontalFilters__viewType__list} ${viewType === 'List' ? styles.active : ''}`}
                    >
                        <div className={styles.top__horizontalFilters__viewType__list__box}></div>
                        <div className={styles.top__horizontalFilters__viewType__list__rectangle}></div>
                        <div className={styles.top__horizontalFilters__viewType__list__box}></div>
                        <div className={styles.top__horizontalFilters__viewType__list__rectangle}></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Top;
