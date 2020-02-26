import React from 'react';

import './game.css';
import Square from '../Square/Square';

export default function Game() {
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
