import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';
import PokemondDetail from './pokemonDetail';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const PokemonList = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState([1, 2, 3, 4, 5]); //placeholderstate... :)
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?offset=" + (pageNumber * 20) + "&limit=20";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCurrentPage(data.results);
                setIsLoading(false);
            })
            .catch(error => console.log(error));

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
        <React.Fragment>
            <Navbar />
            <div>
                {isLoading ? (<h3>Loading...</h3>) :
                    (<React.Fragment>
                        <ul>
                            {currentPage.map(pokemon => <li key={pokemon.name}>
                                <Link to={'/pokemon/' + pokemon.name}>{pokemon.name}</Link>
                            </li>)}
                        </ul>
                        <div>
                            <button onClick={direction => prev()}>Prev</button>
                            <button onClick={direction => next()}>Next</button>
                        </div>
                    </React.Fragment>)}
            </div>
        </React.Fragment>);
    return <h1>safivh</h1>;
}

export default PokemonList;

