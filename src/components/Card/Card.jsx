import React from 'react'
import {Link} from "react-router-dom"
import "./Card.css";


function Card({id, title}) {
  return (
    <div className='Card'>
      <Link to = {`/Logement/${id}`}>
       {/* <p>{id}</p> */}
       <p className='title'>{title}</p>
      <div id='overlay'></div>
      </Link>
    </div>
  )
}

export default Card
