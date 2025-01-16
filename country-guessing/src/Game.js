import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  function goHome() {
    navigate('/');
  }
  return (
    <button onClick={goHome} className="my-button">
      Click here to go back
    </button>
  );
}

function Game() {
  return (
    <div>
      <React.Fragment>
        <h1>Game</h1>
        <BackButton />
      </React.Fragment>
    </div>
  );
}

export default Game;
