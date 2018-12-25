import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import moviesSVG from './assets/imgs/movies.svg';

const SVGs = [brandSVG, capitalSVG, moviesSVG];
class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {bite: 0}
    }
    onClick = (e) => {
        e.preventDefault();
        console.log('wow !');
        if (this.state.bite <=1) this.setState({bite: this.state.bite + 1});
        else this.setState({bite: 0});
        console.log(this.state.bite);
    }
    render() {
        let CategoryName = this.props.data.categories[this.state.bite].name;
        let CategoryUrl = SVGs[this.state.bite];
        return (
            <section className='CategoryTile' onClick={this.onClick}>
                <h2>{this.props.data.category.title}</h2>
                <p>{this.props.data.category.desc}</p>
                <img src={CategoryUrl} alt=""/>
                <h3>{CategoryName}</h3>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <p>{this.props.data.category.footer}</p>
            </section>
        )
    }
}
export default CategoryTile;