import React, { Component } from 'react';

class QuestionHeader extends Component {
    render() {
        return (
            <header className="QuestionTile__header">
                <span className="QuestionTile__header__counter">Question 1</span>
                <span className="QuestionTile__header__points">00/10</span>
            </header>
        )
    }
}

class QuestionFooter extends Component {
    render() {
        return (
            <footer className="QuestionTile__footer">
                <span className="QuestionTile__footer__tries">x1</span>
                <button className="QuestionTile__footer__reset">Reset</button>
            </footer>
        )
    }
}

class Question extends Component {
    render() {
        return (
            <div className="QuestionTile__question">
                <h3 className="QuestionTile__question__title">Excuse me what the fuck</h3>
                <form className="QuestionTile__question__form">
                    <input type="text" className="QuestionTile__question__input" placeholder="duh"/>
                    <button className="QuestionTile__question__submit">OK</button>
                </form>
            </div>
        )
    }
}

class QuestionTile extends Component {
    render() {
        return (
            <section className="QuestionTile">
                <QuestionHeader/>
                <Question/>
                <QuestionFooter/>
            </section>
        )
    }
}

export default QuestionTile;