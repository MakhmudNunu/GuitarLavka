import styles from './Search.module.scss'
import SearchIcon from './ui/search'

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <h4>ПОИСК</h4>
    </div>
  )
}

export default Search
