import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import moviesSVG from './assets/imgs/movies.svg';

const SVGs = [brandSVG, capitalSVG, moviesSVG];
class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {category: 0}
    }
    componentDidMount = () => this.categoryID = setInterval(() => this.getPoints(), 200);
    componentWillUnmount = () => clearInterval(this.categoryID);
    getPoints = () => this.setState({category: localStorage.getItem('category')});
    render() {
        let CategoryName = this.props.data.categories[this.state.category].name;
        let CategoryUrl = SVGs[this.state.category];
        return (
            <section className={this.props.style} onClick={this.props.click}>
                <h2 className="tile__title">{this.props.data.category.title.welcome}&nbsp;<span className="bold">{this.props.data.category.title.name}</span></h2>
                <p className="tile__info">{this.props.data.category.desc}</p>
                <img className="tile__image" src={CategoryUrl} alt=""/>
                <h3 className="tile__category">{CategoryName}</h3>
                <p className="tile__instruction">{this.props.data.category.footer}</p>
            </section>
        )
    }
}
export default CategoryTile;