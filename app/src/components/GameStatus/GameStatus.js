import React from 'react';

import './gameStatus.css';

const GameStatus = ({ winner, nextSymbol, draw }) => {
  const winningColor = {
    color: winner === 'X' ? 'orange' : winner === 'O' ? 'yellow' : ''
  };

  return (
    <div className='game-status' style={winningColor}>
      {winner
        ? `${winner} Wins the game!`
        : draw
        ? 'Draw!'
        : `Next Player: ${nextSymbol}`}
    </div>
  );
};

export default GameStatus;
