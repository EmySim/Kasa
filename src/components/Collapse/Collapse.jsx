import React, { useState } from "react";
import "./Collapse.css";
import arrowDown from "../../assets/arrowDown.png";
import arrowUp from "../../assets/arrowUp.png";

function Collapse({ title, content }) {
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
        {isCollapsed && <div className="collapseContent">{content}</div>}
        </div>
  );
}

export default Collapse;