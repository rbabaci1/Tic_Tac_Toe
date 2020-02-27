import React, { useState } from 'react';

import './game.css';
import getWinner from '../helpers/getWinner';
import RestartGame from '../helpers/restartGame';
import isBoardFull from '../helpers/isBoardFull';

import Square from '../Square/Square';
import GameStatus from '../GameStatus/GameStatus';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);

  const nextSymbol = nextPlayer ? 'X' : 'O';
  const winner = getWinner(squares);
  const draw = isBoardFull(squares);

  const renderSquare = index => (
    <Square
      value={squares[index]}
      clickHandler={event => {
        if (!squares[index] && !winner) {
          const newSquares = [...squares];

          nextSymbol === 'X'
            ? (event.target.style = 'color: orange')
            : (event.target.style = 'color: yellow');

          newSquares[index] = nextSymbol;
          setSquares(newSquares);
          setNextPlayer(!nextPlayer);
        }
      }}
    />
  );

  return (
    <div className='game-wrapper'>
      <div className='game-board'>
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <GameStatus winner={winner} nextSymbol={nextSymbol} draw={draw} />

      <RestartGame
        setNextPlayer={setNextPlayer}
        setSquares={setSquares}
        squares={squares}
      />
    </div>
  );
};

export default Game;
