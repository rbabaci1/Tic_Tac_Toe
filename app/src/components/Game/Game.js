import React, { useState } from 'react';

import './game.css';
import Square from '../Square/Square';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className='game-board'>
      <div className='game-row'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='game-row'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='game-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
