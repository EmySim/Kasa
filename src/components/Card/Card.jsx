import React from 'react'
import {Link} from "react-router-dom"


function Card({id, title}) {
  return (
    <div>
      <Link to = {`/Logement/${id}`}>
      <p>{title}</p>
      
      <p>{id}</p>
      </Link>
    </div>
  )
}

export default Card
