import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { ThemeProvider } from './themeContext';


const PokemonDetail = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState(null);
    const [abilities, setAbilities] = useState(null);
    const [experience, setExperience] = useState(null);
    const [id, setId] = useState(null);

    console.log('pokemonprops', props);


    useEffect(() => {    //executed AFTER rendering
        // const url = "https://pokeapi.co/api/v2/pokemon/1/";   //this will be a prop?
        const url = `https://pokeapi.co/api/v2/pokemon/${props.match.params.pokeId}`;
        fetch(url)
            .then(response =>
                response.json()
            )
            .then(data => {
                // console.log(data);

                setName(data.forms[0].name);
                setAbilities(data.abilities);
                setExperience(data.base_experience);
                setIsLoading(false);
                setId(data.id);

            })
            .catch(error => console.log(error));
    }, [props.match.params.pokeId]);  //use effect is called alse when [] changes



    return (
        <ThemeProvider>
            <Navbar />
            {isLoading ? (<h3>Loading...</h3>) :
                (<div>
                    <h1>{name}</h1>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="this is an image"></img>
                    {/* <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="this is an image"></img> */}
                    <h3>Abilities:</h3>
                    <ul>
                        {abilities.map(ability => <li key={ability.ability.name}>{ability.ability.name}</li>)}
                    </ul>
                    <h3>Base Experience: {experience}</h3>
                </div>)}
        </ThemeProvider>);

}

//componentDidMount is a lifecycle methos




export default PokemonDetail;