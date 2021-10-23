import './App.css';
import React from 'react';
import { Score } from './features/counter/score/Score.js';
import { Board } from './features/counter/board/Board.js';
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from './features/counter/board/boardSlice.js';

const App = () => {
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(setBoard());
  };

  const tryAgainHandler = () => {
    dispatch(resetCards())
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;