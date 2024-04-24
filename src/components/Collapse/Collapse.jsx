import React, { useState } from "react";
import "./Collapse.css";
import arrowCollapse from "../../assets/arrowCollapse.png";

function Collapse({ title, content, width }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse" style={{ width: width }}>
      <div  className="topbar">
      {title}
        <img 
        src={arrowCollapse} 
        alt="Chevron"onClick={toggleCollapse}  
        className={`collapse-icon ${isCollapsed ? "collapsed" : ""}`} 
        />
      </div>
      {isCollapsed && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
