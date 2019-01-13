import React, { Component } from 'react';
import data from './data';

class ErrorMessage extends Component {
    render() {
        return (
            // display the error message if any of all apis isn't loaded successfully
            <div className={this.props.isLoaded ? 'error' : 'error hidden'}>
                <h2 className="error__title">{data.error.title}</h2>
                <p className="error__message">{data.error.content}</p>
                <a className="error__button" href="/">{data.error.cta}</a>
            </div>
        )
    }
}

export default ErrorMessage;