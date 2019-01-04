import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg';

class Header extends Component {
    UNSAFE_componentWillMount = () => localStorage.setItem('category', 0);
    updateCategory = (i) => localStorage.setItem('category',i)
    render() {
        return (
            <header className="Header">
                <img src={globe} alt={this.props.data.header.title}/>
                <h1>{this.props.data.header.title}</h1>
                <ul className='filter'>
                    {this.props.apis.map((x, i) => <li 
                        className='filter__item'
                        onClick={() => this.updateCategory(i)}
                        key={x.title} 
                        index={i}>{x.title}
                    </li>)}
                </ul>
            </header>
        )
    }
}
export default Header;