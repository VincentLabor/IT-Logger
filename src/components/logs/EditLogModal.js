import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TechSelectOptions from "../layout/tech/TechSelectOptions";

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech." });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech
      }

      updateLog(updLog);
      M.toast({html: `The log was updated by ${tech}`});
    }

    setTech("");
    setAttention(false);
    setMessage("");
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object //this is not required
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

const mapStateToProps = state => ({
  //This is sending the whole log state but the current version
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
