import React, { Component } from 'react';
import brandSVG from './assets/imgs/brand.svg';
import capitalSVG from './assets/imgs/capital.svg';
import moviesSVG from './assets/imgs/movies.svg';

const SVGs = [brandSVG, capitalSVG, moviesSVG];
class CategoryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 0,
            hidden: false
        }
    }
    componentDidMount = () => {
        this.categoryID = setInterval(() => this.getPoints(), 200);
    }
    componentWillUnmount= () => {
        // use intervalId from the state to clear the interval
        clearInterval(this.categoryID);
    }
    getPoints = () => {
        // setState method is used to update the state
        return this.setState({
            category: localStorage.getItem('category')
        })
    }
    onClick = () => {
        this.setState({hidden: true})
    }
    render() {
        let CategoryName = this.props.data.categories[this.state.category].name;
        let CategoryUrl = SVGs[this.state.category];
        return (
            <section className={this.state.hidden ? 'tile tile--category hidden' : 'tile tile--category showed'} onClick={this.onClick}>
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