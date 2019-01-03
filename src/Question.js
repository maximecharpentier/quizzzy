import React, {Component} from 'react';

class Question extends Component {
    render() {
        return (
            <div className="tile__container">
                <h3 className="tile__question">{this.props.api.clues[this.props.question].question}</h3>
                <form className="tile__form" onSubmit={this.props.onSubmit}>
                    <input
                    className="tile__input"
                    type="text"
                    value={this.props.answer}
                    onChange={this.props.onChange}
                    placeholder="Type your response"/>
                    <button className="tile__button">OK</button>
                </form>
                <img className={'tile__result ' + this.props.css} src={this.props.visual} alt=""/>
            </div>
        )
    }
}

export default Question;