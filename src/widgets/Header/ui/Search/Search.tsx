'use client';

import { useRef, useEffect } from 'react';
import styles from './Search.module.scss';
import SearchIcon from '../search';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { fetchResult, setQuery } from '@/lib/features/searchSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state: RootState) => state.search.query);

  const pathname = usePathname();
  const isHome = pathname === '/';

  const searchRef = useRef<HTMLLabelElement>(null);
  const router = useRouter();

  const handleActivate = () => {
    if (searchRef.current?.classList.contains(styles.active) && query.trim()) {
      router.push('/SearchResults');
    } else {
      searchRef.current?.classList.toggle(styles.active);
      document.getElementById('navbar')?.classList.toggle('hide');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setQuery(value));
    dispatch(fetchResult(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      router.push('/SearchResults');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        searchRef.current.classList.remove(styles.active);
        document.getElementById('navbar')?.classList.remove('hide');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isHome) {
    return (
      <div className={styles.search}>
        <Link href="/Catalog">
          <SearchIcon width={20} height={22} />
        </Link>
        <h4>ПОИСК</h4>
      </div>
    );
  }

  return (
    <label ref={searchRef} className={styles.search} id="search">
      <SearchIcon width={20} height={22} onClick={handleActivate} />
      <input
        placeholder="ПОИСК ..."
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
};

export default Search;
