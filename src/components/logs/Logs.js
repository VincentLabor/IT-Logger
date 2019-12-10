import React, { useState, useEffect } from "react";
import LogItems from "./LogItems";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux"; //This is needed to connect components to redux. See the export below.
import PropTypes from 'prop-types';
import {getLogs} from '../../actions/logActions'


const Logs = ({ log: { logs, loading }, getLogs }) => {//We destructured from the logstate. This is the entire state

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []); //The empty brackets here means that it will only run once.



  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show</p>
      ) : (
        logs.map(log => <LogItems log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  log: state.log //log = anyname. state.log pertains to the root reducer in index.js
  //could also do
  //loading: state.log.loading
});

export default connect(mapStateToProps, {getLogs})(Logs); //When you are using connect, you need to add it here as seen and place the
// name of the component into parenthesees
//We also add an object of any actions that we are going to run
//If you add the object/action here, it becomes a prop that needs to be destructured above.
