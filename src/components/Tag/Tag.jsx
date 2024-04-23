import './Tag.css';
import React from 'react'

function Tag(props) {
    const { label } = props;

  return (
    <span className='tag'>
      {label}
    </span>
  );
}

export default Tag
