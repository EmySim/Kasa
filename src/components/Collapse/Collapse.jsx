import React, { useState } from "react";
import "./Collapse.css";
import arrowCollapse from "../../assets/arrowCollapse.png";

function Collapse({ title, content, }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (

    <div className="collapse">

      <div className="topbar">
        {title}
        <img
          src={arrowCollapse}
          alt="fleche"
          onClick={toggleCollapse}
          className={`collapse-icon ${isCollapsed ? "collapsed" : ""}`}
        />
      </div>

      {isCollapsed && (
        <div className={`collapse-content ${isCollapsed ? "" : "hidden"}`}>
       
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            content 
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse; 


