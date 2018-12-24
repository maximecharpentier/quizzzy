import React, { Component } from 'react';

class ResultTile extends Component {
    render() {
       return (
            <section className="ResultTile">
                <img src="" alt="" className="ResultTile__visual"/>
                <span className="ResultTile__message">You lost !</span>
                <span className="ResultTile__points">03/10</span>
                <span className="ResultTile__category">In the category: World Capitals</span>
                <span className="ResultTile__cta">Come on! Try anopther Quiz here !</span>
            </section>
       )
    }
}
export default ResultTile;