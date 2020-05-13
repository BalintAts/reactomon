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
            </React.Fragment>);
    }
}

export default Home;