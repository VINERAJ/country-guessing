import React, { useState, useEffect } from 'react';
import data from './All Countries.csv';
import Papa from 'papaparse';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';

var countries;
var answer;

function Clue() {
  const [clue, setClue] = useState('waiting for clue');
  const [text, setText] = useState('');
  const location = useLocation();
  const mode = location.state.mode;
  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }
  fetch(
    'https://raw.githubusercontent.com/VINERAJ/country-guessing/refs/heads/main/All%20Countries.csv'
  )
    .then(response => response.text())
    .then(data => {
      countries = Papa.parse(data).data;
    });
  function getClue() {
    if (countries === undefined) {
      return;
    }
    var country = countries[1 + Math.floor(Math.random() * 194)];
    answer = country[0];
    switch (mode) {
      case 'demonym':
        setClue(country[6]);
        break;
      case 'capital':
        setClue(country[3]);
        break;
      case 'leader':
        setClue(country[62]);
        break;
      default:
        setClue('Errrrrm');
        break;
    }
  }
  useEffect(() => {
    getClue();
  }, []);
  const handleInputChange = event => {
    setText(event.target.value);
    var guess = event.target.value;
    if (guess === answer) {
      setClue('You got it!');
      timeout(1000).then(() => {
        getClue();
      });
    }
  };
  return (
    <div>
      <h1>{clue}</h1>
      <input type="text" text={text} onChange={handleInputChange} />
    </div>
  );
}

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
        <Clue />
        <BackButton />
      </React.Fragment>
    </div>
  );
}

export default Game;
