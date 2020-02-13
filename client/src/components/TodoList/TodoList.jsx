import React from 'react';
import ListItem from '../TodoItem/ListItem'
import SearchBar from '../../components/search bar/SearchBar'

import styles from './todolist.module.css'

const TodoList = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello, Madison</h1>
        <h3>Check your tasks</h3>
      </div>
      <SearchBar />
      <ListItem /><ListItem /><ListItem /><ListItem /><ListItem />
    </div>
  )
}

export default TodoList

