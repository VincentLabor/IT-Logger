import React, { useState, useEffect } from "react";
import TechItems from "./TechItems";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []); //The empty brackets here means that it will only run once.

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs"); //No need for localhost:5000 here due to the proxy in package.json
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
          techs.map(tech => <TechItems tech={tech} key={tech.id} /> )} 
            {/* */}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
