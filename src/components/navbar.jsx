import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <button><a href="/home">Home</a></button>
                <button><a href="/pokemonList">Pokemons</a></button>
                <button><a href="/typeList">Types</a></button>

                {/* <button>Home<Link to="/home"></Link></button>
                <button><Link to="/pokemonList"></Link>Pokemons</button>
                <button><Link to="/typeList"></Link>Types</button> */}
            </div>
        );
    }
}

export default Navbar;