import { useRef } from 'react';
import styles from './Search.module.scss';
import SearchIcon from '../search';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SearchProps {
  display?: string;
}

const Search: React.FC<SearchProps> = ({ display }) => {

  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleActivate = () => {
    document.getElementById('search')?.classList.toggle(styles.active);
    document.getElementById('navbar')?.classList.toggle('hide');
  };

  return isHome ?
    (
      <div className={styles.search}>
        <Link href={'/search'}>
          <SearchIcon width={20} height={22} />
        </Link>
        <h4>ПОИСК</h4>
      </div>
    )
    :
    (

      <label
        className={styles.search}
        id="search"
      >
        <SearchIcon width={20} height={22} onClick={handleActivate} />
        <input style={{ display }} placeholder='ПОИСК ...' />
      </label>
    )
};

export default Search;
