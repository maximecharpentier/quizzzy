import React, { Component } from 'react';
import texts from './data';
import winSVG from './assets/imgs/winner.svg';
import looseSVG from './assets/imgs/looser.svg';
class ResultTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            questions: 1,
        }
    }
    componentDidMount = () => {
        this.pointsID = setInterval(() => this.getPoints(), 1000);
        this.questionID = setInterval(() => this.getPoints(), 1000);
    }
    componentWillUnmount= () => {
        // use intervalId from the state to clear the interval
        clearInterval(this.pointsID);
        clearInterval(this.questionID);
    }
    getPoints = () => {
        // setState method is used to update the state
        return this.setState({
            points: localStorage.getItem('points'),
            questions: localStorage.getItem('questions')
        })
    }
    result = () => {
        const result = {
            visual: '',
            title: ''
        }
        if (this.state.points <= 4) {
            result.visual = looseSVG
            result.title = texts.result.loose;
        }
        else {
            result.visual = winSVG
            result.title = texts.result.win;
        }
        return result;
    }
    render = () => {
        if (this.state.questions >= 3) {
            return (
                <section className="tile tile--result">
                    <img src={this.result().visual} alt="" className="tile__image--big"/>
                    <h3 className="tile__title">{this.result().title}<br/>
                        <span className="bold">0{this.state.points}/10</span>
                    </h3>
                    <p className="tile__info">In the category:<br/>
                        <span className="tile__category--small">{texts.categories[0].name}</span>
                    </p>
                    <span className="tile__reminder">{texts.result.another}<br></br> Try anopther Quiz here !</span>
                </section>
            )
        }
        else return <p className="hidden">result</p>
    }
}
export default ResultTile;