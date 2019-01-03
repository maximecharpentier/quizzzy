import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import moviesSVG from './assets/imgs/movies.svg';

// localStorage.setItem('result', JSON.stringify({result: 'result'}))
const SVGs = [brandSVG, capitalSVG, moviesSVG];
class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            apis: this.props.apis,
            loaded: this.props.loaded
        }
    }
    componentDidMount = () => {
        this.categoryID = setInterval(() => this.getCategory(), 200);
        console.log(this.state.loaded)
        console.log(this.state.apis)
        if (this.props.loaded) {
            console.log(this.props.apis)
        }
    };
    componentWillUnmount = () => clearInterval(this.categoryID);
    getCategory = () => {
        this.setState({category: localStorage.getItem('category')})
    };
    render() {
        let CategoryName = this.props.loaded ? this.props.apis[this.state.category].title : this.props.data.categories[this.state.category].name;
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