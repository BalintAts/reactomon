import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';
import styled from 'styled-components';
import PokemondDetail from './pokemonDetail';
import Navbar from './navbar';
import LinkStyle from './styles/pokeStyledListLink';
import Button from './styles/styledNextPrevButton';


const PokemonList = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([1, 2, 3, 4, 5]); //placeholderstate... :)
    const [pageNumber, setPageNumber] = useState(0);


    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?offset=" + (pageNumber * 20) + "&limit=20";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setCurrentPage(data.results);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
        return () => console.log('only updating');
    }, [pageNumber]);


    const next = () => {
        pagination('next');
        setPageNumber(pageNumber + 1);
    };

    const prev = () => {
        pagination('prev');
        setPageNumber(pageNumber - 1);
    };

    const pagination = direction => {
        setIsLoading(true);
    };


    return (
        <>
            <Navbar />
            <div>
                {isLoading ? (<h3>Loading...</h3>) :
                    (<>
                        <ul>
                            {currentPage.map(pokemon =>
                                <li key={pokemon.name}>
                                    <LinkStyle to={{ pathname: '/pokemon/' + pokemon.name, query: { url: pokemon.url } }}>{pokemon.name}</LinkStyle>
                                </li>)}
                        </ul>
                        <div>
                            <Button onClick={direction => prev()}>Prev</Button>
                            <Button onClick={direction => next()}>Next</Button>
                        </div>
                    </>)}
            </div>
        </>);
}

export default PokemonList;

