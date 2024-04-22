import React from 'react'
import {Link} from "react-router-dom"
import "./Card.css";


function Card({id, title}) {
  return (
    <div>
      <Link to = {`/Logement/${id}`}>
      
      
      <p>{id}</p>
      <div id='overlay'></div>
      <p>{title}</p>
      </Link>
    </div>
  )
}

export default Card
