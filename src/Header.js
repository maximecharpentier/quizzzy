import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <img src="" alt={this.props.data.header.title}/>
                <h1>{this.props.data.header.title}</h1>
                <ul>
                    {this.props.data.categories.map(x => <li key={x.name}>{x.name}</li>)}
                </ul>
            </header>
        )
    }
}
export default Header;