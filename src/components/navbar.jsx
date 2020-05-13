import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/pokemonList">Pokemons</Link>
                <Link to="/typeList">Types</Link>
                <Link to="/debugPokemon">DebugPokemon</Link>
            </div>
        );
    }
}

export default Navbar;