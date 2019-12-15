import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux"; //This ensures you will be using proptypes
import { addLog } from "../../actions/logActions";
import PropTypes from "prop-types";
import TechSelectOptions from '../layout/tech/TechSelectOptions';

const AddLogModal = ({addLog}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech." });
    } else {
      const newLog = {
        attention,
        message,
        tech,
        date: new Date()
      };

      addLog(newLog);
      M.toast({ html: `Log added by ${tech}` });
    }

    setTech("");
    setAttention(false);
    setMessage("");
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      {" "}
      {/* The id refers to a tag href for the button on AddBtn */}
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>{" "}
            {/* In materialize, you add this after your input */}
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions/>
              {/* <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option> */}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                {" "}
                {/*Leaving htmlFor will break the checkbox*/}
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)} //If its true when they check it, we want it to be false
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default connect(null, { addLog })(AddLogModal); //Since we are not bringing in state, we just put null instead of the maptostate
