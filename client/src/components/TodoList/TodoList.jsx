import React from 'react';
import ListItem from '../TodoItem/ListItem'
import SearchBar from '../../components/search bar/SearchBar'
import MenuBtn from '../../components/Menu/MenuBtn'

import styles from './todolist.module.css'

const TodoList = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Hello, Madison</h1>
        <h3>Check your tasks</h3>
      </div>
      <MenuBtn />
      <SearchBar />
      <ListItem /><ListItem /><ListItem /><ListItem /><ListItem />
    </div>
  )
}

export default TodoList

