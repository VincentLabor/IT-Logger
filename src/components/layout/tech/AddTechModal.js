import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {connect} from "react-redux";
import {addTech} from "../../../actions/techActions";
import PropTypes from 'prop-types';


const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a fist and last name." });
    } else {
      addTech({
        firstName,
        lastName
      });
      M.toast({html: "A Technician has been added"});
    }

    setFirstName("");
    setLastName("");
  };

  return (
    <div id="add-tech-modal" className="modal">
      {" "}
      {/* The id refers to a tag href for the button on AddBtn */}
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active"> {/* The labels basically are the text inside of the inputs before someone types */}
              First Name
            </label>{" "}
            {/* In materialize, you add this after your input */}
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>{" "}
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
}

export default connect(null, {addTech})(AddTechModal);
