import React, { Component } from 'react';
import data from './data'

class CategoryTile extends Component {
    constructor(props) {
        super(props);
        // set default category to 0
        this.state = {category: 0}
        // set name and visual to default too
        this.CategoryName = data.categories[this.state.category].name;
        this.CategoryUrl = this.props.SVGs[this.state.category];
    };
    // catch the category every 200ms
    componentDidMount = () => this.categoryID = setInterval(() => this.getCategory(), 200);
    UNSAFE_componentWillMount = () => clearInterval(this.categoryID);
    getCategory = () => this.setState({category: localStorage.getItem('category')});
    // if props or state are update, update the name and visual too
    UNSAFE_componentWillUpdate = () => {
        this.CategoryName = this.props.isLoaded ? this.props.apis[this.state.category].result.title : data.categories[this.state.category].name;
        this.CategoryUrl = this.props.SVGs[this.state.category];
    };
    render() {
        return (
            <section className={this.props.style} onClick={this.props.click}>
                <h2 className="tile__title">{data.category.title.welcome}&nbsp;<span className="bold">{data.category.title.name}</span></h2>
                <p className="tile__info">{data.category.desc}</p>
                <img className="tile__image" src={this.CategoryUrl} alt=""/>
                <h3 className="tile__category">{this.CategoryName}</h3>
            </section>
        )
    }
}
export default CategoryTile;