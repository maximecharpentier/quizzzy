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
            message: {
                visual: '',
                title: ''
            }
        }
    }
    componentDidMount = () => {
        this.pointsID = setInterval(() => this.getPoints(), 200);
        this.questionID = setInterval(() => this.getPoints(), 200);
    }
    componentWillUnmount= () => {
        clearInterval(this.pointsID);
        clearInterval(this.questionID);
    }
    getPoints = () => {
        return this.setState({
            points: localStorage.getItem('points'),
            questions: localStorage.getItem('questions')
        })
    }
    UNSAFE_componentWillMount = () => {
        this.setState({message: {
            visual: this.state.points <= 5 ? looseSVG : winSVG,
            title: this.state.points <= 5 ? texts.result.loose : texts.result.win
        }})
    }
    render = () => {
            return (
                <section className={this.props.style} onClick={this.props.click}>
                    <img src={this.state.message.visual} alt="" className="tile__image--big"/>
                    <h3 className="tile__title">{this.state.message.title}<br/>
                        <span className="bold">0{this.state.points}/10</span>
                    </h3>
                    <p className="tile__info">In the category:<br/>
                        <span className="tile__category--small">{texts.categories[0].name}</span>
                    </p>
                    <span className="tile__reminder">{texts.result.another}<br></br> Try another quiz here !</span>
                </section>
            )
    }
}
export default ResultTile;