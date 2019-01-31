import React from 'react';
import classes from './App.module.sass';
import Header from '../Header/Header';
import Search from '../Search/Search';
import StatusFilter from '../StatusFilter/StatusFilter';


const App = () => {
  return (
    <div className={classes.App}>
      <Header/>
      <div>
        <Search/>
        <StatusFilter/>
      </div>
    </div>
  )
};

export default App;