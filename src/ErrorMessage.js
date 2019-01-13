import React, { Component } from 'react';

class ErrorMessage extends Component {
    render() {
        return (
            <div className={this.props.isLoaded ? 'error' : 'error hidden'}>
                <p className="error__title">Oops !</p>
                <p className="error__message">It appears that resources couldn't be loaded properly, please :</p>
                <a className="error__button" href="/">Try again</a>
            </div>
        )
    }
}

export default ErrorMessage;