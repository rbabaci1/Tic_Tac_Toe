import React, { useState } from 'react';

import './game.css';
import Square from '../Square/Square';
import getWinner from '../helpers/getWinner';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);
  const nextSymbol = nextPlayer ? 'X' : 'O';

  const renderSquare = index => (
    <Square
      value={squares[index]}
      clickHandler={() => {
        if (squares[index] === null) {
          const newSquares = [...squares];

          newSquares[index] = nextSymbol;
          setSquares(newSquares);
          setNextPlayer(!nextPlayer);
        }
      }}
    />
  );

  return (
    <div className='game-board'>
      <div className='game-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className='game-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className='game-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
