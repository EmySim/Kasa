import './Tag.css';

import React from 'react'

function Tag(props) {
    const { label } = props;

  return (
    <span>
      {label}
    </span>
  );
}

export default Tag
