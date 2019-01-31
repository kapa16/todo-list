import React from 'react';
import classes from './Header.module.sass';

const Header = () => {
  return (
    <div className={classes.Header}>
      <h1>Todo List</h1>
      <p>1 more to do, 3 done</p>
    </div>
  )
};

export default Header;