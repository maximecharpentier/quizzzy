import React, { Component } from 'react';
import data from './data';
import winSVG from './assets/imgs/winner.svg';
import looseSVG from './assets/imgs/looser.svg';
class ResultTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            questions: 1,
            category: 0,
            message: {
                visual: '',
                title: ''
            }
        }
    }
    componentDidMount = () => {
        this.pointsID = setInterval(() => this.getPoints(), 200);
        this.questionID = setInterval(() => this.getPoints(), 200);
        this.categoryID = setInterval(() => this.getPoints(), 200);
    }
    componentWillUnmount= () => {
        clearInterval(this.pointsID);
        clearInterval(this.questionID);
        clearInterval(this.categoryID);
    }
    getPoints = () => {
        return this.setState({
            points: localStorage.getItem('points'),
            questions: localStorage.getItem('questions'),
            category: localStorage.getItem('category'),
            message: {
                visual: this.state.points <= 3 ? looseSVG : winSVG,
                title: this.state.points <= 3 ? data.result.loose : data.result.win
            }
        })
    }

    render = () => {
            return (
                <section className={this.props.style} onClick={this.props.click}>
                    <img src={this.state.message.visual} alt="" className="tile__image--big"/>
                    <h3 className="tile__title">{this.state.message.title}<br/>
                        <span className="bold">0{this.state.points}/10</span>
                    </h3>
                    <p className="tile__info">In the category:<br/>
                        <span className="tile__category--small">{this.props.isLoaded ? this.props.apis[this.state.category].title : data.categories[this.state.category].name}</span>
                    </p>
                    <span className="tile__reminder">{data.result.another}<br></br> Try another quiz here !</span>
                </section>
            )
    }
}
export default ResultTile;