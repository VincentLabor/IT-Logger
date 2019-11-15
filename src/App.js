import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from './components/layout/AddLogModal';
import EditLogModal from './components/layout/EditLogModal';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal/>
        <EditLogModal/>
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
