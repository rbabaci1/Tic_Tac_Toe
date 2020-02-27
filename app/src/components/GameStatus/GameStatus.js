import React from 'react';

import './gameStatus.css';

export default function GameStatus({ winner, nextSymbol }) {
  return (
    <div className='game-status'>
      {winner ? `${winner} Wins!` : `Next Player: ${nextSymbol}`}
    </div>
  );
}
