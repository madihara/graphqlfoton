import React from 'react'

import styles from './listitem.module.css'

const ListItem = () => {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Task Title</h2>
      <p className={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </p>

    </div>
  )
}

export default ListItem