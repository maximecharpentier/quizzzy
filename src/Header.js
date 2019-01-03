import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg';

class Header extends Component {
    UNSAFE_componentWillMount = () => {
        localStorage.setItem('category', 0)
        localStorage.setItem('default', true)
        console.log('default result default')
    }
    render() {
        return (
            <header className="Header">
                <img src={globe} alt={this.props.data.header.title}/>
                <h1>{this.props.data.header.title}</h1>
                <ul className='filter'>
                    {this.props.apis.map((x, i) => <li 
                        className='filter__item'
                        onClick={() => {
                            localStorage.setItem('category',i);
                            console.log(this.props.apis[localStorage.getItem('category')])
                        }}
                        key={x.title} 
                        index={i}>{x.title}
                    </li>)}
                </ul>
            </header>
        )
    }
}
export default Header;