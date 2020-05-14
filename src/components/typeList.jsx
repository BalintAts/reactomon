import React, { Component } from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class TypeList extends Component {
    state = {
        loading: true,
        types: null,
    }

    async componentDidMount(pageNumber) {
        const url = "https://pokeapi.co/api/v2/type";
        const response = await fetch(url);
        const data = await response.json();;
        this.setState({ types: data.results, loading: false });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    {this.state.loading ? (<h3>Loading...</h3>) :
                        (<React.Fragment>
                            <ul>
                                {this.state.types.map(type => <li key={type.name}>{type.name}</li>)}
                            </ul>
                        </React.Fragment>)}
                </div>
            </React.Fragment>);
    }
}

export default TypeList;