import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a fist and last name." });
    } else {
      console.log(lastName, firstName);
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
            <label htmlFor="firstName" className="active">
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

export default AddLogModal;
