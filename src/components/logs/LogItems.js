import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItems = ({ log, deleteLog }) => {

  const onDelete =()=>{
    deleteLog(log.id);
    M.toast({html: "Log Deleted"})
  }

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention === true ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id} </span>last updated by{" "}
          {/*The brackets allow to add a space before the next string*/}
          <span className="black-text"> {log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="!#" onClick = {onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, {deleteLog})(LogItems); //We are passing in null here because we are getting nothing from the state
