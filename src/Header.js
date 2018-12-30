import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0
        }
    }
    render() {
        return (
            <header className="Header">
                <h1 className="brand">
                    <img className="brand__image" src={globe} alt={this.props.data.header.title} />
                    <p className="brand__title">{this.props.data.header.title}</p>
                </h1>
                <ul className="filter">
                    <li className="filter__item bold">{this.props.data.categories[0].name}</li>
                    <ul className="filter__items">
                        {this.props.data.categories.map(x => <li className="filter__item"
                        onClick={() => {
                            localStorage.setItem('category', x.index)
                            console.log(this.state.category)
                        }}
                        key={x.name} 
                        index={x.index}>{x.name}</li>)}
                    </ul>     
            </header>
        )
    }
}
export default Header;