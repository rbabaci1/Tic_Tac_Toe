import React from 'react';

export default function RestartGame({ setSquares, setNextPlayer }) {
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
}
