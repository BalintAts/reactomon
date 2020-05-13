import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import axios from 'axios';


const PokemonDetail = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState(null);
    const [abilities, setAbilities] = useState(null);
    const [experience, setExperience] = useState(null);

    useEffect(() => {    //executed AFTER rendering
        const url = "https://pokeapi.co/api/v2/pokemon/1/";   //this will be a prop?
        // const url2 = {`https://pokeapi.co/api/v2/pokemon/${pokemonId}`};
        fetch(url)
            .then(response =>
                response.json()
            )
            .then(data => {
                console.log(data);
                setName(data.forms[0].name);
                setAbilities(data.abilities);
                setExperience(data.base_experience);
                setIsLoading(false);

            })
            .catch(error => console.log(error));
    }, []);  //use effect is called alse when [] changes



    return (
        <React.Fragment>
            <Navbar />
            {isLoading ? (<h3>Loading...</h3>) :
                (<div>
                    <h1>{name}</h1>
                    <h3>Abilities:</h3>
                    <ul>
                        {abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}
                    </ul>
                    <h3>Base Experience: {experience}</h3>
                </div>)}
        </React.Fragment>);

}

//componentDidMount is a lifecycle methos




export default PokemonDetail;