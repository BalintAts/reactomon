import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PokeStyledListLink from './styles/pokeStyledListLink';

const Navbar = props => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/pokemonList">Pokemons</Link>
            <Link to="/typeList">Types</Link>
            <Link to="/debugPokemon">DebugPokemon</Link>
        </div>
    );
}


export default Navbar;