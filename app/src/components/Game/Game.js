import React, { useState } from 'react';

import './game.css';
import Square from '../Square/Square';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);

  const clickHandler = value => {
    const updatedSquares = [...squares];

    updatedSquares[value] = nextPlayer ? 'X' : 'O';
    setSquares(updatedSquares);
    setNextPlayer(!nextPlayer);
  };

  return (
    <div className='game-board'>
      <div className='game-row'>
        <Square value={0} clickHandler={clickHandler} />
        <Square value={1} clickHandler={clickHandler} />
        <Square value={2} clickHandler={clickHandler} />
      </div>

      <div className='game-row'>
        <Square value={3} clickHandler={clickHandler} />
        <Square value={4} clickHandler={clickHandler} />
        <Square value={5} clickHandler={clickHandler} />
      </div>

      <div className='game-row'>
        <Square value={6} clickHandler={clickHandler} />
        <Square value={7} clickHandler={clickHandler} />
        <Square value={8} clickHandler={clickHandler} />
      </div>
    </div>
  );
}
