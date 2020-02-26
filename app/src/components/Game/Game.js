import React, { useState } from 'react';

import './game.css';
import Square from '../Square/Square';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className='game-board'>
      <div className='game-row'>
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>

      <div className='game-row'>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>

      <div className='game-row'>
        <Square value={6} />
        <Square value={7} />
        <Square value={'X'} />
      </div>
    </div>
  );
}
