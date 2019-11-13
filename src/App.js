import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';

const App = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar />
      <div className='container'>
        <Logs />
      </div>
    </Fragment>
  )
}

export default App;
