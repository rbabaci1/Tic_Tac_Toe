import React from 'react';

import './square.css';

export default function Square({ value, clickHandler }) {
  return (
    <div onClick={clickHandler} className='square'>
      {value}
    </div>
  );
}
