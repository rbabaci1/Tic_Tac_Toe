import React from 'react';

const RestartGame = ({ setSquares, setNextPlayer }) => {
  return (
    <div className='restart-btn'>
      <button
        onClick={() => {
          setSquares(Array(9).fill(null));
          setNextPlayer(true);
        }}
      >
        Play again!
      </button>
    </div>
  );
};

export default RestartGame;
