import React, { useState, useEffect } from "react";
import TechItems from "./TechItems";
import { connect } from "react-redux";
import { getTechs } from "../../../actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  //techs and loading are part of the state

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []); //The empty brackets here means that it will only run once.

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItems tech={tech} key={tech.id} />)} {/* This is make sure that techs is not null or not loading before proceeding*/}
          {/* */}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired, //This grabs the whole state so there is no need to grab different parts of the state.
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech //tech = anyname. state.tech pertains to the root reducer in index.js
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
