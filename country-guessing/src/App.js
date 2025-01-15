import logo from './logo.svg';
import React, { useState } from 'react';
import {
  BrowserRouter,
  useNavigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Papa from 'papaparse';
import './App.css';
import Game from './Game.js';

var countries;

// function MyButton() {
//   const navigate = useNavigate();
//   function Clicked() {
//     navigate.navigate("Game");
//     // fetch(
//     //   'https://raw.githubusercontent.com/VINERAJ/country-guessing/refs/heads/main/All%20Countries.csv'
//     // )
//     //   .then(response => response.text())
//     //   .then(data => {
//     //     countries = Papa.parse(data).data;
//     //     console.log(countries[1][0]);
//     //   });
//   }
//   return (
//     <button onClick={Clicked} className="my-button">
//       Click to begin!
//     </button>
//   );
// }

function HandleClick() {
  const navigate = useNavigate();
  function Clicked() {
    navigate('/game');
  }
  return (
    <button onClick={Clicked} className="my-button">
      Click to begin!
    </button>
  );
}

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HandleClick />
        <Routes>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
