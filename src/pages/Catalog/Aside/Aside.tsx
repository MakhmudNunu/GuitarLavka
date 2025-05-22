import { useState } from 'react';
import styles from './Aside.module.scss';
import { useAppDispatch } from '@/lib/hooks';
import { fetchProducts, setCategory } from '@/lib/features/productsSlice';


const Aside = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const dispatch = useAppDispatch();

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const handleCategoryChange = (category: string) => {
        dispatch(setCategory(category));
        dispatch(fetchProducts());
    };

    const items = [
        {
            title: 'Гитары',
            subItems: [
                'Акустические',
                'Электроакустические гитары',
                'Трансакустические гитары',
                'Электрогитары',
                'Классические гитары',
                'Бас-гитары',
            ],
        },
        {
            title: 'Укулеле',
            subItems: ['Тенор', 'Сопрано', 'Концерт'],
        },
        {
            title: 'Аксессуары',
            subItems: [],
        },
        {
            title: 'Струны',
            subItems: [],
        },
    ];

    return (
        <aside className={styles.aside}>
            <ul className={styles.aside__typeList}>
                {items.map((item, index) => (
                    <li key={index} className={styles.aside__typeList__type}>
                        <div
                            className={styles.aside__typeList__type__title}
                            onClick={() => handleToggle(index)}
                        >
                            <span>{item.title}</span>
                            <div
                                className={`${styles.arrow} ${openIndex === index ? styles.arrowOpen : ''}`}
                            ></div>
                        </div>
                        <ul
                            className={styles.aside__typeList__type__dropdown}
                            style={{ display: openIndex === index ? 'block' : 'none' }}
                        >
                            {item.subItems.length > 0 ? (
                                item.subItems.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        onClick={() => handleCategoryChange(subItem)}
                                        className={styles.aside__subItem}
                                    >
                                        {subItem}
                                    </li>
                                ))
                            ) : (
                                <li className={styles.aside__empty}>Пусто</li>
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Aside;
