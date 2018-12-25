import React, { Component } from 'react';
import texts from './data';
// import winSVG from './assets/imgs/winner.svg';
import looseSVG from './assets/imgs/looser.svg';
class ResultTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0
        }
    }
    componentDidMount = () => {
        return this.pointsID = setInterval(() => this.timer(), 1000);
    }
    componentWillUnmount= () => {
        // use intervalId from the state to clear the interval
        clearInterval(this.pointsID);
    }
    timer = () => {
        // setState method is used to update the state
        return this.setState({points: localStorage.getItem('points')})
    }
    render = () => {
       return (
            <section className="ResultTile">
                <img src={looseSVG} alt="" className="ResultTile__visual"/>
                <span className="ResultTile__message">{texts.result.loose}</span>
                <span className="ResultTile__points">0{this.state.points}/10</span>
                <span className="ResultTile__category">In the category: {texts.categories[0].name}</span>
                <span className="ResultTile__cta">{texts.result.another}<br></br> Try anopther Quiz here !</span>
            </section>
       )
    }
}
export default ResultTile;