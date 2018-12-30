import React, {Component} from 'react';

class QuestionFooter extends Component {
    render() {
        return (
            <footer className="tile__footer">
                <span className="tile__attempts">x{this.props.reset}</span>
                <button className="tile__button tile__button--footer" onClick={this.props.resetScore}>Reset</button>
            </footer>
        )
    }
}

export default QuestionFooter;