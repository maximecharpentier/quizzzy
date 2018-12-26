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
    render() {
        let CategoryName = this.props.data.categories[this.state.category].name;
        let CategoryUrl = SVGs[this.state.category];
        return (
            <section className='CategoryTile'>
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