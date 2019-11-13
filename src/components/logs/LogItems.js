import React from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment';

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
      </div>
    </li>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItems;
