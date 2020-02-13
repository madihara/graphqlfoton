import React from 'react'
import searchIcon from '../../images/search (1).svg'

import styles from './searchbar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <img src={searchIcon} className={styles.icon} alt="search magnifying glass" />
      <h5>search...</h5>
    </div>
  )
}

export default SearchBar