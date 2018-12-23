import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <img src="" alt={this.props.data.title}/>
                <h1>{this.props.data.title}</h1>
                <ul>
                    {this.props.data.categories.map(x => <li key={x}>{x}</li>)}
                </ul>
            </header>
        )
    }
}
export default Header;