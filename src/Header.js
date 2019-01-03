import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg';
import texts from './data'

class Header extends Component {
    UNSAFE_componentWillMount = () => {
        localStorage.setItem('category', 0)
        localStorage.setItem('default', true)
        fetch(texts.categories[localStorage.getItem('category')].url)
        .then(api => api.json())
        .then(
            result => {
                localStorage.setItem('result', JSON.stringify(result))
                console.log('default result default')
            },
            error => console.log(error)
        )
    }
    render() {
        return (
            <header className="Header">
                <img src={globe} alt={this.props.data.header.title}/>
                <h1>{this.props.data.header.title}</h1>
                <ul className='filter'>
                    {this.props.apis.map(x => <li 
                        className='filter__item'
                        onClick={() => {
                            localStorage.setItem('category', x.index)
                    
                        }}
                        key={x.title} 
                        index={x}>{x.title}
                    </li>)}
                </ul>
            </header>
        )
    }
}
export default Header;