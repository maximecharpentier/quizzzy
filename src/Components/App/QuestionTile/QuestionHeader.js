import React, { Component } from 'react';

class QuestionHeader extends Component {
    render() {
        return (
            <header className="tile__header">
                <span className="tile__counter">Question {this.props.question}</span>
                <span className="tile__points">0{this.props.points}/10</span>
            </header>
        );
    };
};
export default QuestionHeader;