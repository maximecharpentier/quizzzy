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
                <img src={globe} alt={this.props.data.header.title}/>
                <h1>{this.props.data.header.title}</h1>
                <ul>
                    {this.props.data.categories.map(x => <li 
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