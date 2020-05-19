import React, { Component } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import './styles/home.css';
// import BG from './styles/BackgroundStyle';
import { ThemeProvider } from './themeContext';


class Home extends Component {
    state = {}
    render() {
        return (

            <ThemeProvider>
                <Navbar />
                <div className='bg'>
                    <h1>HOME</h1>
                </div>
            </ThemeProvider>);
    }
}

export default Home;