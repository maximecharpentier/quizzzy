import React, { Component } from 'react';
import texts from './data';
// import winSVG from './assets/imgs/winner.svg';
import looseSVG from './assets/imgs/looser.svg';

class ResultTile extends Component {
    render() {
       return (
            <section className="ResultTile">
                <img src={looseSVG} alt="" className="ResultTile__visual"/>
                <span className="ResultTile__message">{texts.result.loose}</span>
                <span className="ResultTile__points">03/10</span>
                <span className="ResultTile__category">In the category: {texts.categories[0].name}</span>
                <span className="ResultTile__cta">{texts.result.another}<br></br> Try anopther Quiz here !</span>
            </section>
       )
    }
}
export default ResultTile;