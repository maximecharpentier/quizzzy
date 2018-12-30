import React, { Component } from 'react';
import globeSVG from './assets/imgs/globe.svg';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1 className="brand">
                    <img className="brand__image" src={globeSVG} alt={this.props.data.header.title} />
                    <p className="brand__title">{this.props.data.header.title}</p>
                </h1>
                <ul className="filter">
                    <li className="filter__item bold">{this.props.data.categories[0].name}</li>
                    <ul className="filter__items">
                        {this.props.data.categories.map(x => <li className="filter__item" key={x.name}>{x.name}</li>)}
                    </ul>
                </ul>
            </header>
        )
    }
}
export default Header;