import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import moviesSVG from './assets/imgs/movies.svg';

class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            apis: this.props.apis,
            isLoaded: this.props.isLoaded,
            SVGs: [brandSVG, capitalSVG, moviesSVG]
        }

        this.CategoryName = this.props.data.categories[this.state.category].name;
        this.CategoryUrl = this.state.SVGs[this.state.category];
    }
    componentDidMount = () => this.categoryID = setInterval(() => this.getCategory(), 200);
    UNSAFE_componentWillMount = () => clearInterval(this.categoryID);
    UNSAFE_componentWillUpdate = () => {
        this.CategoryName = this.props.isLoaded ? this.props.apis[this.state.category].title : this.props.data.categories[this.state.category].name;
        this.CategoryUrl = this.state.SVGs[this.state.category];
    }
    getCategory = () => this.setState({category: localStorage.getItem('category')});
    render() {
        return (
            <section className={this.props.style} onClick={this.props.hideCategory}>
                <h2 className="tile__title">{this.props.data.category.title.welcome}&nbsp;<span className="bold">{this.props.data.category.title.name}</span></h2>
                <p className="tile__info">{this.props.data.category.desc}</p>
                <img className="tile__image" src={this.CategoryUrl} alt=""/>
                <h3 className="tile__category">{this.CategoryName}</h3>
                <p className="tile__instruction">{this.props.data.category.footer}</p>
            </section>
        )
    }
}
export default CategoryTile;