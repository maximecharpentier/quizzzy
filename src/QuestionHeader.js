import React, { Component } from 'react';

class QuestionHeader extends Component {
    render() {
        return (
            <header className="QuestionTile__header">
                <span className="QuestionTile__header__counter">Question 1</span>
                <span className="QuestionTile__header__points">0{this.props.points}/10</span>
            </header>
        )
    }
}

export default QuestionHeader; 