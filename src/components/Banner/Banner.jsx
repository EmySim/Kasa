import React from 'react'
import './Banner.css'

function Banner({ backgroundImage, showText }) {
  return (
    <div className='banner' style={{ backgroundImage: `url(${backgroundImage})` }}>
        {showText && <label>Chez vous, partout et ailleurs</label>}
    </div>
  )
}

export default Banner
