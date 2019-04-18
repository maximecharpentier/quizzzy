import React, { Component } from 'react';
import data from '../../data/data';
import winSVG from '../../assets/imgs/winner.svg';
import looseSVG from '../../assets/imgs/looser.svg';
class ResultTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // set points and category to 0
            points: 0,
            category: 0,
            // set message title and visual to default
            message: {
                visual: '',
                title: ''
            }
        }
    }
    // catch points and category every 200ms
    componentDidMount = () => {
        this.pointsID = setInterval(() => this.getPoints(), 200);
        this.categoryID = setInterval(() => this.getPoints(), 200);
    };
    componentWillUnmount = () => {
        clearInterval(this.pointsID);
        clearInterval(this.categoryID);
    };
    getPoints = () => this.setState({
        // update the points and category
        points: localStorage.getItem('points'),
        category: localStorage.getItem('category'),
        // set a different message if you win or loose
        message: {
            visual: this.state.points <= 4 ? looseSVG : winSVG,
            title: this.state.points <= 4 ? data.result.loose : data.result.win
        }
    });

    render = () => {
        return (
            <section className={this.props.style} onClick={this.props.click}>
                <img src={this.state.message.visual} alt="" className="tile__image--big"/>
                <h3 className="tile__title">{this.state.message.title}<br/>
                    <span className="bold">0{this.state.points}/10</span>
                </h3>
                <p className="tile__info">In the category:<br/>
                    <span className="tile__category--small">{this.props.isLoaded ? this.props.apis[this.state.category].result.title : data.categories[this.state.category].name}</span>
                </p>
                <span className="tile__reminder">{data.result.another}<br></br>Click to try another quiz !</span>
            </section>
        )
    }
}
export default ResultTile;