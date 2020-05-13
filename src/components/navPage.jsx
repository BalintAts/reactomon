import React, { Component } from 'react';
import PokemonList from "./pokemonList";

class NavPage extends Component {
    state = {
        home: false,
        pokelist: true,
        typeList: false,

    }

    render() {
        return (
            <React.Fragment>
                <h1>Pökémön</h1>
                <div>
                    <button onClick={e => this.showHome()}>Home</button>
                    <button onClick={e => this.showPokeList()}>Pokemons</button>
                    <button onClick={e => this.showTypeList()}>Types</button>
                </div>
                <div>
                    {this.state.home && <h3>home</h3>}
                    {this.state.pokelist && <PokemonList />}
                    {this.state.typeList && <h3>typeList</h3>}
                </div>
            </React.Fragment>
        );
    }

    showHome() {
        this.setState({ home: true, pokelist: false, typeList: false })
    }

    showPokeList() {
        this.setState({ home: false, pokelist: true, typeList: false })
    }

    showTypeList() {
        this.setState({ home: false, pokelist: false, typeList: true })
    }
}

export default NavPage;