import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/pokemonList';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';
import NavPage from './components/navPage';

function App() {
  return (
    < NavPage />
  );
}

export default App;




{/*<div className="App"> 
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
      </header>
    </div> */}