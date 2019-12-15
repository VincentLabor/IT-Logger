import React, { useEffect } from "react"; //We are using useEffect because after the dom loads we want to be able to then load the technicians
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "../../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []); //The brackets mean we only want to run this when the component mounts.

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {" "}
        {/*Option here needs to have a key because this is a list */}
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
