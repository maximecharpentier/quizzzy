import React, {Component} from 'react';

class Question extends Component {
    render() {
        return (
            <div className="QuestionTile__question">
                <h3 className="QuestionTile__question__title">{this.props.api.clues[1].question}</h3>
                <form className="QuestionTile__question__form" onSubmit={this.props.submitParam}>
                    <input
                    className="QuestionTile__question__input"
                    type="text"
                    value={this.props.theAnswer}
                    onChange={this.props.changeParam}
                    placeholder="duh"/>
                    <button className="QuestionTile__question__submit">OK</button>
                    <img src={this.props.theVisual} alt=""/>
                </form>
            </div>
        )
    }
}

export default Question;