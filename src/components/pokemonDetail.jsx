import React, { Component } from 'react'
import Navbar from './navbar';

class PokemonDetail extends Component {
    state = {
        loading: true,
        name: null,
        abilities: null,
        base_experience: null,
    }

    async componentDidMount(pageNumber) {
        const url = "https://pokeapi.co/api/v2/pokemon/1/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            name: data.forms[0].name,
            loading: false,
            abilities: data.abilities,
            base_experience: data.base_experience,
        });
        console.log(data.forms[0].name);
    }


    render() {
        return (
            <React.Fragment>
                <Navbar />
                {this.state.loading ? (<h3>Loading...</h3>) :
                    (<div>
                        <h1>{this.state.name}</h1>
                        <h3>Abilities:</h3>
                        <ul>
                            {this.state.abilities.map(ability => <li key={ability.name}>{ability.ability.name}</li>)}
                        </ul>
                        <h3>Base Experience: {this.state.base_experience}</h3>
                    </div>)}
            </React.Fragment>);
    }
}

export default PokemonDetail;