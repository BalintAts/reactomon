import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LinkStyle from './styles/pokeStyledListLink';

const Navbar = props => {
    return (
        <div>
            <LinkStyle to="/home">Home</LinkStyle>
            <LinkStyle to="/pokemonList">Pokemons</LinkStyle>
            <LinkStyle to="/typeList">Types</LinkStyle>
            <LinkStyle to="/debugPokemon">DebugPokemon</LinkStyle>
        </div>
    );
}


export default Navbar;