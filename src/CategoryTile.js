import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import moviesSVG from './assets/imgs/movies.svg';

const SVGs = [brandSVG, capitalSVG, moviesSVG];
class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 0}
    }
    onClick = (e) => {
        e.preventDefault();
        console.log('wow !');
        if (this.state.index <=1) this.setState({index: this.state.index + 1});
        else this.setState({index: 0});
        console.log(this.state.index);
    }
    render() {
        let CategoryName = this.props.data.categories[this.state.index].name;
        let CategoryUrl = SVGs[this.state.index];
        return (
            <section className='tile tile--category' onClick={this.onClick}>
                <h2 className="tile__title">{this.props.data.category.title.welcome}&nbsp;<span className="bold">{this.props.data.category.title.name}</span></h2>
                <p className="tile__info">{this.props.data.category.desc}</p>
                <img className="tile__image" src={CategoryUrl} alt=""/>
                <h3 className="tile__category">{CategoryName}</h3>
                <div className="dots">
                    <div className="dots__item"></div>
                    <div className="dots__item"></div>
                    <div className="dots__item"></div>
                </div>
                <p className="tile__instruction">{this.props.data.category.footer}</p>
            </section>
        )
    }
}
export default CategoryTile;