import React, { Component } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h3>Home</h3>
                <img src="https://images.nintendolife.com/news/2014/10/itll_be_possible_to_catch_all_719_pokemon_using_omega_ruby_and_alpha_sapphire_with_x_and_y/attachment/0/original.jpg" alt="this is an image"></img>
            </React.Fragment>);
    }
}

export default Home;