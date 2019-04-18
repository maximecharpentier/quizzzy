import React, { Component } from 'react';
import data from '../../data/data';
import unsafe1 from '../../assets/imgs/unsafe_1.png';
import unsafe2 from '../../assets/imgs/unsafe_2.png';

class ErrorMessage extends Component {
    render() {
        return (
            // display the error message if any of all apis isn't loaded successfully
            <div className={this.props.isLoaded ? 'error' : 'error hidden'}>
                <h2 className="error__title">{data.error.title}</h2>
                <h3 className="error__message">{data.error.disclaimer}</h3>
                <p className="error__message">{data.error.instructions[0]}</p>
                <img src={unsafe1} className="uns1" alt=""/>
                <p className="error__message">{data.error.instructions[1]}</p>
                <img src={unsafe2} className="uns2" alt=""/>
                <a className="error__button" href="./">{data.error.cta}</a>
            </div>
        )
    }
}

export default ErrorMessage;