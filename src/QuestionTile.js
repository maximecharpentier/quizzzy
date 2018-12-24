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
                <h3 className="QuestionTile__question__title">{this.props.api.clues[6].question}</h3>
                <form className="QuestionTile__question__form">
                    <input type="text" className="QuestionTile__question__input" placeholder="duh"/>
                    <button className="QuestionTile__question__submit">OK</button>
                </form>
            </div>
        )
    }
}

class QuestionTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            result: {}
        }
    }
    componentDidMount = () => {
        fetch('http://jservice.io/api/category?id=78')
        .then(api => api.json())
        .then(
        (result) => {
            this.setState({
                isLoaded: true,
                result: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }
    render() {
        const { error, isLoaded, result } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <section className="QuestionTile">
                <QuestionHeader api={result}/>
                <Question api={result}/>
                <QuestionFooter api={result}/>
            </section>
        )
    }
}}


export default QuestionTile;