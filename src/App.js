import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavPage from './components/navPage';
import Home from './components/home';
import TypeList from './components/typeList';
import PokemonList from './components/pokemonList';
import { createBrowserHistory } from 'history'
import PokemonDetail from './components/pokemonDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/home"} exact component={Home} />
        <Route path={"/pokemonList"} exact component={PokemonList} />
        <Route path={"/typeList"} exact component={TypeList} />
        <Route path={"/debugPokemon"} exact component={PokemonDetail} />
        <Route path={"/pokemon/:pokeId"} component={PokemonDetail} />
      </Switch>
    </Router >
    // < NavPage />
  );
}

export default App;

