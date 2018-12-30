import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg'


class Header extends Component {
    render() {
        localStorage.setItem('category', 0)
        return (
            <header className="Header">
                <img src={globe} alt={this.props.data.header.title}/>
                <h1>{this.props.data.header.title}</h1>
                <ul className='filter'>
                    {this.props.data.categories.map(x => <li 
                        className='filter__item'
                        onClick={() => localStorage.setItem('category', x.index)}
                        key={x.name} 
                        index={x.index}>{x.name}
                    </li>)}
                </ul>
            </header>
        )
    }
}
export default Header;