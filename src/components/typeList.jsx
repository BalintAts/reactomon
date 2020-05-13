import React, { Component } from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class TypeList extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h3>Types</h3>
            </React.Fragment>);
    }
}

export default TypeList;