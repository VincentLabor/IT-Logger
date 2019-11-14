import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItems = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-model"
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
        <a href="!#" className='secondary-content'>
            <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItems;
