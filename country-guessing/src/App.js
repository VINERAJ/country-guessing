import logo from './logo.svg';
import React, { useState } from 'react';
import Papa from 'papaparse';
import './App.css';

var countries;

function MyButton() {
  function clicked() {
    fetch(
      'https://raw.githubusercontent.com/VINERAJ/country-guessing/refs/heads/main/All%20Countries.csv'
    )
      .then(response => response.text())
      .then(data => {
        countries = Papa.parse(data).data;
        console.log(countries[1][0]);
      });
  }
  return (
    <button onClick={clicked} className="my-button">
      Click to begin!
    </button>
  );
}

function App() {
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
        <MyButton />
      </header>
    </div>
  );
}

export default App;
