import React, { Component } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import './styles/home.css';
// import BG from './styles/BackgroundStyle';


class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='bg'>
                    <h1>HOME</h1>
                </div>

            </React.Fragment>);
    }
}

export default Home;