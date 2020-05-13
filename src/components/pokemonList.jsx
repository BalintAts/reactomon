import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';
import PokemondDetail from './pokemonDetail';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class PokemonList extends Component {
    state = {
        loading: true,
        currentPage: null,
        pageNumber: 1,
    }

    async componentDidMount(pageNumber) {
        const url = "https://pokeapi.co/api/v2/pokemon?offset=" + (pageNumber * 20) + "&limit=20";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ currentPage: data.results, loading: false });
        console.log(data.results);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    {this.state.loading ? (<h3>Loading...</h3>) :
                        (<React.Fragment>
                            <ul>
                                {this.state.currentPage.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
                            </ul>
                            <div>
                                <button onClick={direction => this.prev()}>Prev</button>
                                <button onClick={direction => this.next()}>Next</button>
                            </div>
                        </React.Fragment>)}
                </div>
            </React.Fragment>);
    }

    next() {
        this.pagination('next');
        this.setState({ pageNumber: this.state.pageNumber + 1 })
    }

    prev() {
        this.pagination('prev');
        this.setState({ pageNumber: this.state.pageNumber - 1 })
    }

    pagination = direction => {
        this.setState({ loading: true })
        this.componentDidMount(this.state.pageNumber);
    }
}

export default PokemonList;




// requesting url: `/name=${pokemon.name}`




// <Router>
                                        //     <Route path="`/name = ${pokemon.name}`" />
                                        //         <li key={pokemon.name}><a href="`/name = ${pokemon.name}`">{pokemon.name}</a>
                                        //         </li>
                                        // </Router>)}