import React from 'react';

import './gameStatus.css';

export default function GameStatus({ winner, nextSymbol, draw }) {
  return (
    <div className='game-status'>
      {winner
        ? `${winner} Wins the game!`
        : draw
        ? 'Draw!'
        : `Next Player: ${nextSymbol}`}
    </div>
  );
}
