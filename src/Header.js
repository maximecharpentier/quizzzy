import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg';
import data from './data';

class Header extends Component {
    UNSAFE_componentWillMount = () => localStorage.setItem('category', 0);
    updateCategory = (i) => localStorage.setItem('category',i)
    render() {
        return (
            <header className="Header">
                <h1 className="brand">
                    <img className="brand__image" src={globe} alt={data.header.title} />
                    <p className="brand__title">{data.header.title}</p>
                </h1>
                <ul className='filter'>
                    {this.props.apis.map((x, i) => <li
                        className='filter__item'
                        onClick={() => this.updateCategory(i)}
                        key={x.result.title}
                        index={i}>{x.result.title}
                    </li>)}
                </ul>
            </header>
        )
    }
}
export default Header;