import React from 'react';

export default function restartGame(setSquares) {
  setSquares(Array(9).fill(null));
}
