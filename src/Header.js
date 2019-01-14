import React, { Component } from 'react';
import globe from './assets/imgs/globe.svg';
import data from './data';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // bool, style and hidden style for the menu
            isHidden: true,
            menuStyle: 'filter filter--active',
            menuHiddenStyle: 'filter',
            // style and hidden style for the menu box
            menuBoxStyle: 'menuBox',
            menuBoxHiddenStyle: 'menuBoxHidden'
        };
    };
    // set category to default before rending
    UNSAFE_componentWillMount = () => localStorage.setItem('category', 0);
    // update category on click
    updateCategory = (i) => localStorage.setItem('category',i);
    // toggle menu in terms of hidden bool
    toggleMenu = () => this.setState({isHidden: this.state.isHidden ? false : true});
    render() {
        return (
            <header className="Header">
                <h1 className="brand" onClick={this.props.click}>
                    <img className="brand__image" src={globe} alt={data.header.title} />
                    <p className="brand__title">{data.header.title}</p>
                </h1>
                <div 
                    // hide the menu of we're located on question or result tile
                    className={!this.props.isMenuHidden ? this.state.menuBoxStyle : this.state.menuBoxHiddenStyle}>
                    <div
                        // toggle the list on click
                        className={this.state.isHidden ? this.state.menuHiddenStyle : this.state.menuStyle}>
                        <button className="filter__button " onClick={this.toggleMenu}>Categories</button>
                        <ul className="filter__items filter__items--active">
                            {this.props.apis.map((x, i) => <li
                                // trigger the category index to update all the app
                                className='filter__item'
                                onClick={() => this.updateCategory(i)}
                                key={x.result.title}
                                index={i}>{x.result.title}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </header>
        );
    };
};
export default Header;