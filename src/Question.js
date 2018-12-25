import React, {Component} from 'react';

class Question extends Component {
    render() {
        return (
            <div className="QuestionTile__question">
                <h3 className="QuestionTile__question__title">{this.props.api.clues[this.props.question].question}</h3>
                <form className="QuestionTile__question__form" onSubmit={this.props.onSubmit}>
                    <input
                    className="QuestionTile__question__input"
                    type="text"
                    value={this.props.answer}
                    onChange={this.props.onChange}
                    placeholder="duh"/>
                    <button className="QuestionTile__question__submit">OK</button>
                </form>
                <img className={this.props.css} src={this.props.visual} alt=""/>
            </div>
        )
    }
}

export default Question;