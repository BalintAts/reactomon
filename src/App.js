import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavPage from './components/navPage';
import Home from './components/home';
import TypeList from './components/typeList';
import PokemonList from './components/pokemonList';
import { createBrowserHistory } from 'history'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/home"} component={Home} />
        <Route path={"/pokemonList"} component={PokemonList} />
        <Route path={"/typelist"} component={TypeList} />
      </Switch>
    </Router >
    // < NavPage />
  );
}

export default App;

