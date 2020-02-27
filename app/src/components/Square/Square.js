import React from 'react';

import './square.css';

const Square = ({ value, clickHandler }) => {
  return (
    <div onClick={clickHandler} className='square'>
      {value}
    </div>
  );
};

export default Square;
