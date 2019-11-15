import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from './components/layout/AddLogModal';
import EditLogModal from './components/layout/EditLogModal';
import AddTechModal from './components/layout/tech/AddTechModal';
import TechListModal from './components/layout/tech/TechListModal';

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
        <AddTechModal/>
        <EditLogModal/>
        <TechListModal/> 
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
