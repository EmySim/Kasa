import React from 'react'
import "./Details.css";



function Details({ host }) {
  return (
    <div className='detail-container'>
      <h3 className='host'>{host.name}</h3>
      <img src={host.picture} alt="Hôte" className="host-image" />
    </div>
  )
}

export default Details
