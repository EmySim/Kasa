import React, { useState } from "react";
import "./Collapse.css";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";

function Collapse({ title, children }) {
  // Déclaration de l'état isCollapsed avec une valeur par défaut de false
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
      <div className="Collapse">
        <button onClick={toggleCollapse} className="collapseButton">
          {title}
          <img src={isCollapsed ? arrowDown : arrowUp} alt="Chevron"/>
          </button>
        {isCollapsed && <div className="collapseContent">{children}</div>}
        </div>
  );
}

export default Collapse;
