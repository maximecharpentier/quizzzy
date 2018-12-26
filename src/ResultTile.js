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
                <section className="ResultTile">
                    <img src={this.result().visual} alt="" className="ResultTile__visual"/>
                    <h3 className="ResultTile__message">{this.result().title}</h3>
                    <span className="ResultTile__points">0{this.state.points}/10</span>
                    <span className="ResultTile__category">In the category: {texts.categories[0].name}</span>
                    <span className="ResultTile__cta">{texts.result.another}<br></br> Try anopther Quiz here !</span>
                </section>
            )
        }
        else return <p>result</p>
    }
}
export default ResultTile;