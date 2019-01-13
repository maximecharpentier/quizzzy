import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import animalsSVG from './assets/imgs/cat.svg';
import data from './data'

class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            apis: this.props.apis,
            isLoaded: this.props.isLoaded,
            SVGs: [brandSVG, capitalSVG, animalsSVG]
        }
        this.CategoryName = data.categories[this.state.category].name;
        this.CategoryUrl = this.state.SVGs[this.state.category];
    }
    componentDidMount = () => this.categoryID = setInterval(() => this.getCategory(), 200);
    UNSAFE_componentWillMount = () => clearInterval(this.categoryID);
    UNSAFE_componentWillUpdate = () => {
        this.CategoryName = this.props.isLoaded ? this.props.apis[this.props.apis[this.state.category].count].result.title : data.categories[this.state.category].name;
        this.CategoryUrl = this.state.SVGs[this.state.category];
    }
    getCategory = () => this.setState({category: localStorage.getItem('category')});
    render() {
        return (
            <section className={this.props.style} onClick={this.props.click}>
                <h2 className="tile__title">{data.category.title.welcome}&nbsp;<span className="bold">{data.category.title.name}</span></h2>
                <p className="tile__info">{data.category.desc}</p>
                <img className="tile__image" src={this.CategoryUrl} alt=""/>
                <h3 className="tile__category">{this.CategoryName}</h3>
                <p className="tile__instruction">{data.category.footer}</p>
            </section>
        )
    }
}
export default CategoryTile;