import React, {Component} from 'react';

class QuestionFooter extends Component {
    render() {
        return (
            <footer className="QuestionTile__footer">
                <span className="QuestionTile__footer__tries">x{this.props.reset}</span>
                <button className="QuestionTile__footer__reset">Reset</button>
            </footer>
        )
    }
}

export default QuestionFooter;